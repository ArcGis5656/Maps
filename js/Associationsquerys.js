// *?still the popup window display the data that was display in the console window
// *?how to get the zoom level from query
require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/Legend",
  "esri/widgets/Expand",
  "esri/widgets/FeatureTable/Grid/Grid",
], function (Map, MapView, FeatureLayer, Legend, Expand, Grid) {
  var AssociationsRenderer = {
    type: "unique-value", // autocasts as new UniqueValueRenderer()
    field: "Performance",
    defaultSymbol: { type: "simple-marker" }, // autocasts as new SimpleFillSymbol()
    uniqueValueInfos: [
      {
        // All features with value of "North" will be blue
        value: "0",
        symbol: {
          type: "simple-marker", // autocasts as new SimpleFillSymbol()
          color: "blue",
          size: 9,
        },
      },
      {
        // All features with value of "East" will be green
        value: "1",
        symbol: {
          type: "simple-marker", // autocasts as new SimpleFillSymbol()
          color: "green",
          size: 10,
        },
      },
      {
        // All features with value of "South" will be red
        value: "3",
        symbol: {
          type: "simple-marker", // autocasts as new SimpleFillSymbol()
          color: "red",
        },
      },
      {
        // All features with value of "West" will be yellow
        value: "2",
        symbol: {
          type: "simple-marker", // autocasts as new SimpleFillSymbol()
          color: "yellow",
          size: 11,
        },
      },
    ],
  };
  var featureLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDBs/MapServer/1",
    id: "Associations",
    visible: true,
    renderer: AssociationsRenderer,
    outFields: ["*"],

    popupTemplate: {
      title: "{Association_Name}",
      content: [
        {
          // Pass in the fields to display
          type: "fields",
          fieldInfos: [
            {
              fieldName: "Association_Name",
              label: "Association Name",
            },
            {
              fieldName: "relationships/16/Phone",
              label: "Phone",
            },
            {
              fieldName: "relationships/8/Directorate_Name_English",
              label: "Directorate",
            },
            {
              fieldName: "relationships/6/Union_Name",
              label: "Union",
            },
          ],
        },
      ], // "The lands type number is {Type_LandID}.", // Display text in pop-up
    },
    // content: "The Association Performance is {Performance}.",
    // },
  });
  var YemenLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDBs/MapServer/8",
    id: "Yemen",
    opacity: 0.6,
  });

  const map = new Map({
    layers: [YemenLayer],
  });

  map.add(featureLayer);

  var view = new MapView({
    container: "viewDiv",
    map: map,
  });

  const legend = new Legend({ view: view });
  // Expand widget to expand and contract the legend widget
  const legendExpand = new Expand({
    expandTooltip: "Show Legend",
    expanded: false,
    view: view,
    content: legend,
  });

  // Add widgets to the view
  view.ui.add(document.getElementById("gridDiv"), "bottom-left");
  view.ui.add(legendExpand, "top-right");

  // Initialize variables
  let highlight, grid;

  // call clearMap method when clear is clicked
  const clearbutton = document.getElementById("clearButton");
  clearbutton.addEventListener("click", clearMap);

  featureLayer.load().then(function () {
    return (g = new Grid());
  });

  view.on("click", (event) => {
    // only include graphics from hurricanesLayer in the hitTest
    const opts = {
      include: featureLayer,
    };

    view
      .hitTest(event, opts)
      .then((response) => {
        // check if a feature is returned from the hurricanesLayer
        if (response.results.length) {
          const graphic = response.results[0].graphic;
          // do something with the graphic
          return graphic.attributes["OBJECTID"];
        }
      })
      .then((objectId) => {
        console.log(objectId);
        return featureLayer
          .queryRelatedFeatures({
            outFields: ["*"],
            relationshipId: featureLayer.relationships[1].id,
            objectIds: objectId,
          })
          .then((results) => {
            console.log(results);
            results[objectId].features.forEach((element) => {
              console.log(element);
            });
            })
          .then(function () {
             return featureLayer
              .queryRelatedFeatures({
                outFields: ["*"],
                relationshipId: featureLayer.relationships[3].id,
                objectIds: objectId,
              })
              .then((results) => {
                results[objectId].features.forEach((element) => {
                  console.log(element.attributes["Union_Name"]);
                });
              });
          }).then(function () {
            return featureLayer
             .queryRelatedFeatures({
               outFields: ["*"],
               relationshipId: featureLayer.relationships[2].id,
               objectIds: objectId,
             })
             .then((results) => {
              results[objectId].features.forEach((element) => {
                 console.log(element.attributes["Directorate_Name_Arabic"]);
               });
             });
         });
      });
  });

  function clearMap() {
    if (highlight) {
      highlight.remove();
    }
    if (grid) {
      grid.destroy();
    }
    clearbutton.style.display = "none";
  }
});
