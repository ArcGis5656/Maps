require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/Legend",
  "esri/widgets/Expand",
  "esri/widgets/FeatureTable/Grid/Grid",
], function (Map, MapView, FeatureLayer, Legend, Expand, Grid) {
  // var AssociationsRenderer = {
  //   type: "unique-value", // autocasts as new UniqueValueRenderer()
  //   field: "Performance",
  //   defaultSymbol: { type: "simple-marker" }, // autocasts as new SimpleFillSymbol()
  //   uniqueValueInfos: [
  //     {
  //       // All features with value of "North" will be blue
  //       value: "0",
  //       symbol: {
  //         type: "simple-marker", // autocasts as new SimpleFillSymbol()
  //         color: "blue",
  //         size: 9,
  //       },
  //     },
  //     {
  //       // All features with value of "East" will be green
  //       value: "1",
  //       symbol: {
  //         type: "simple-marker", // autocasts as new SimpleFillSymbol()
  //         color: "green",
  //         size: 10,
  //       },
  //     },
  //     {
  //       // All features with value of "South" will be red
  //       value: "3",
  //       symbol: {
  //         type: "simple-marker", // autocasts as new SimpleFillSymbol()
  //         color: "red",
  //       },
  //     },
  //     {
  //       // All features with value of "West" will be yellow
  //       value: "2",
  //       symbol: {
  //         type: "simple-marker", // autocasts as new SimpleFillSymbol()
  //         color: "yellow",
  //         size: 11,
  //       },
  //     },
  //   ],
  // };
  var featureLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDBs/MapServer/1",
    id: "Associations",
    visible: true,
    renderer: {
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
    },
    outFields: ["Association_Name", "Performance"],

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

  view.on("click", function (event) {
    // console.log("event: "+event);
    clearMap();
    queryFeatures(event);
  });
  // //////////////////////////////////////////////////////////////////////////////////////////
  // const relationshipIds = [];
  // const objectIds = [];
  // featureLayer.when(function () {
  //   console.log("layer relationships", featureLayer.relationships.length);
  //   console.log("layer fields", featureLayer.fields.length);
  //   featureLayer.fields.forEach(function (field) {
  //     console.log("field name:", field.name);
  //     console.log("field type:", field.type);
  //   });
  //   featureLayer.relationships.forEach(function (relationship) {
  //     console.log("relationship id:", relationship.id);
  //     console.log("relationship cardinality:", relationship.cardinality);
  //     console.log("relationship key field:", relationship.keyField);
  //     console.log("relationship name:", relationship.name);
  //     relationshipIds.push(relationship.id);
  //     console.log("relationship relatedTableId:", relationship.relatedTableId);
  //   });
  // });
  /////////////////////////////////////////////////////////////////////////////////////////
  // relationship query parameter
  // const query = {
  //   outFields: ["*"],
  //   relationshipId: relationshipIds,
  //   objectIds: objectIds,
  // };

  // query related features for given objectIds
  // featureLayer
  //   .queryRelatedFeatures(query)
  //   .then(function (result) {
  //     objectIds.forEach(function (objectId) {
  //       // print out the attributes of related features if the result
  //       // is returned for the specified objectId
  //       if (result[objectId]) {
  //         console.group("relationship for feature:", objectId);
  //         result[objectId].features.forEach(function (feature) {
  //           console.log("attributes", JSON.stringify(feature.attributes));
  //         });
  //         console.groupEnd();
  //       }
  //     });
  //   })
  //   .catch(function (error) {
  //     console.log("error from queryRelatedFeatures", error);
  //   });
  ///////////////////////////////////////////////////////////////////////////////////////////////
  function queryFeatures(screenPoint) {
    // console.log("screenPoint: "+screenPoint.value);
    const point = view.toMap(screenPoint);
    //  console.log("point: "+point.value);

    // Query the for the feature ids where the user clicked
    featureLayer
      .queryObjectIds({
        geometry: point,
        spatialRelationship: "intersects",
        returnGeometry: false,
        outFields: ["*"],
      })

      .then(function (objectIds) {
        console.log("point: " + objectIds.length);
        if (!objectIds.length) {
          return;
        }
        // Highlight the area returned from the first query
        view.whenLayerView(featureLayer).then(function (layerView) {
          if (highlight) {
            highlight.remove();
          }
          highlight = layerView.highlight(objectIds);
        });

        // Query the for the related features for the features ids found
        return featureLayer.queryRelatedFeatures({
          outFields: ["NAME", "SUM_POPULATION"],
          relationshipId: relationshipIds,
          objectIds: objectIds,
        });
      })

      .then(function (relatedFeatureSetByObjectId) {
        if (!relatedFeatureSetByObjectId) {
          return;
        }
        // Create a grid with the data
        Object.keys(relatedFeatureSetByObjectId).forEach(function (objectId) {
          // get the attributes of the FeatureSet
          const relatedFeatureSet = relatedFeatureSetByObjectId[objectId];
          const rows = relatedFeatureSet.features.map(function (feature) {
            return feature.attributes;
          });

          if (!rows.length) {
            return;
          }

          // create a new div for the grid of related features
          // append to queryResults div inside of the gridDiv
          const gridDiv = document.createElement("div");
          const results = document.getElementById("queryResults");
          results.appendChild(gridDiv);

          // destroy current grid if exists
          if (grid) {
            grid.destroy();
          }
          // create new grid to hold the results of the query
          grid = new Grid(
            {
              columns: Object.keys(rows[0]).map(function (fieldName) {
                return {
                  label: fieldName,
                  field: fieldName,
                  sortable: true,
                };
              }),
            },
            gridDiv
          );

          // add the data to the grid
          grid.renderArray(rows);
        });
        clearbutton.style.display = "inline";
      })
      .catch(function (error) {
        console.error(error);
      });
  }

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
