// *?still the popup window display the data that was display in the console window
// *?how to get the zoom level from query
require([
  "esri/rest/query",

  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/Legend",
  "esri/widgets/Expand",
  "esri/widgets/FeatureTable/Grid/Grid",
], function (query, Map, MapView, FeatureLayer, Legend, Expand, Grid) {
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
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/1",
    id: "Associations",
    visible: true,
    renderer: AssociationsRenderer,
    outFields: ["*"],

    // content: "The Association Performance is {Performance}.",
    // },
  });
  var featureLayer2 = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/10",
    visible: false,
  });
  var landsLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/11",
    visible: false,
  });
  var YemenLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/8",
    id: "Yemen",
    opacity: 0.6,
  });

  const map = new Map({
    layers: [YemenLayer],
  });

  map.add(featureLayer);
  map.add(featureLayer2);
  map.add(landsLayer);

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
  let highlight,
    grid,
    Union,
    Directorate,
    phones = [],
    Member_Association,
    production_capacity,
    Quantity_Production;

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
        // console.log(objectId);
        return featureLayer
          .queryRelatedFeatures({
            outFields: ["*"],
            relationshipId: featureLayer.relationships[1].id,
            objectIds: objectId,
          })
          .then((results) => {
            // console.log(results);
            phones = [];
            results[objectId].features.forEach((element) => {
              // console.log(element.attributes["Phone"]);
              phones.push(element.attributes["Phone"]);
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
                  // console.log(element.attributes["Union_Name"]);
                  Union = element.attributes["Union_Name"];
                });
              });
          })
          .then(function () {
            return featureLayer
              .queryRelatedFeatures({
                outFields: ["*"],
                relationshipId: featureLayer.relationships[2].id,
                objectIds: objectId,
              })
              .then((results) => {
                results[objectId].features.forEach((element) => {
                  // console.log(element.attributes["Directorate_Name_Arabic"]);
                  Directorate = element.attributes["Directorate_Name_Arabic"];
                });
              });
          })
          .then(function () {
            return featureLayer
              .queryRelatedFeatures({
                outFields: ["*"],
                relationshipId: featureLayer.relationships[2].id,
                objectIds: objectId,
              })
              .then((results) => {
                results[objectId].features.forEach((element) => {
                  // console.log(element.attributes["OBJECTID_1"]);
                });
                // console.log(
                //   results[objectId].features[0].attributes["OBJECTID_1"]
                // );
                return results[objectId].features[0].attributes["OBJECTID_1"];
              })
              .then(function (oid) {
                // console.log(GovernmentID);
                // console.log(oid);
                // console.log(featureLayer2);
                return featureLayer2
                  .queryRelatedFeatures({
                    outFields: ["*"],
                    relationshipId: featureLayer2.relationships[9].id,
                    objectIds: oid,
                  })
                  .then((results) => {
                    // console.log(results[oid]);
                    results[oid].features.forEach((element) => {
                      // console.log(element.attributes["Government_Name_Arabic"]);
                      government = element.attributes["Government_Name_Arabic"];
                    });
                  });
              });
          })
          .then(function () {
            console.log(objectId);
            return featureLayer
              .queryRelatedFeatures({
                outFields: ["*"],
                relationshipId: featureLayer.relationships[2].id,
                objectIds: objectId,
              })
              .then((results) => {
                return results[objectId].features[0].attributes["OBJECTID_1"];
              })
              .then(function (oid) {
                console.log(oid);
                return featureLayer2
                  .queryRelatedFeatures({
                    outFields: ["*"],
                    relationshipId: featureLayer2.relationships[7].id,
                    objectIds: oid,
                  })
                  .then((results) => {
                    console.log(results);
                    if (results[oid]) {
                      length = results[oid].features.length;

                      // results[oid].features.forEach((element) => {
                      let objectIds =
                        results[oid].features[0].attributes["OBJECTID"];
                      landsLayer
                        .queryRelatedFeatures({
                          outFields: ["*"],
                          relationshipId: landsLayer.relationships[0].id,
                          objectIds: objectIds,
                        })
                        .then((results) => {
                          if (results[objectIds]) {
                            results[objectIds].features.forEach((element) => {
                              Quantity_Production =
                                element.attributes[
                                  "Quantity_Production_Actual"
                                ];
                              console.log(
                                element.attributes["Quantity_Production_Actual"]
                              );
                            });
                          }
                          return query
                            .executeQueryJSON(
                              "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/30",
                              {
                                outFields: ["*"],

                                // autocasts as new Query()
                                where: "OBJECTID  = " + objectIds,
                              }
                            )
                            .then((oid) => {
                              console.log(oid);
                              //   console.log(
                              //   oid.features[0].attributes[
                              //     "Product_Vegetarian_Name"
                              //   ]
                              // );
                              // console.log(oid.features[0].attributes["Type"]); //2
                              // Product =
                              //   oid.features[0].attributes[
                              //     "Product_Vegetarian_Name"
                              //   ];
                            });
                        });
                      // });
                    }
                  });
              });
          })
          .then(() => {
            return featureLayer
              .queryRelatedFeatures({
                outFields: ["*"],
                relationshipId: featureLayer.relationships[0].id,
                objectIds: objectId,
              })
              .then((results) => {
                console.log(results[objectId].features.length);
                Member_Association = results[objectId].features.length;
              });
          });
      })
      .then(() => {
        featureLayer.popupTemplate = {
          title: "{Association_Name}",
          content: [
            {
              // Pass in the fields to display
              type: "fields",
              fieldInfos: [
                { label: "اسم الجمعية", fieldName: "Association_Name" },
                {
                  label: "المسؤول",
                  fieldName: "Administrator",
                },
                {
                  label: "الكود",
                  fieldName: "Code",
                },
                {
                  label: "التصريح",
                  fieldName: "Declaration",
                },
                {
                  label: "الأداء",
                  fieldName: "Performance",
                },
              ],
            },
            {
              // Pass in the fields to display
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style="margin-top:-24px; "><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>الطاقة الإنتاجية</tbody></table></div>' +
                  '<div class="esri-feature-fields"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr><th class="esri-feature-fields__field-header">الطاقة الإنتاجية</th><td class="esri-feature-fields__field-data"> ' +
                  Member_Association +
                  "</td></tr></tbody></table></div>"
                );
              },
            },
            {
              // Pass in the fields to display
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr><th class="esri-feature-fields__field-header">عدد الأعضاء</th><td class="esri-feature-fields__field-data"> ' +
                  Member_Association +
                  "</td></tr></tbody></table></div>"
                );
              },
            },
            {
              // Pass in the fields to display
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr style="background-color:rgba(76,76,76,.02);"><th class="esri-feature-fields__field-header">التلفون</th><td class="esri-feature-fields__field-data"> ' +
                  phones.toString() +
                  "</td></tr></tbody></table></div>"
                );
              },
            },
            {
              // Pass in the fields to display
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr><th class="esri-feature-fields__field-header">المديرية</th><td class="esri-feature-fields__field-data"> ' +
                  Directorate +
                  "</td></tr></tbody></table></div>"
                );
              },
            },
            {
              // Pass in the fields to display
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr style="background-color:rgba(76,76,76,.02);"><th class="esri-feature-fields__field-header">الإتحاد</th><td class="esri-feature-fields__field-data"> ' +
                  Union +
                  "</td></tr></tbody></table></div>"
                );
              },
            },
            {
              // Pass in the fields to display
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr><th class="esri-feature-fields__field-header">المحافظة</th><td class="esri-feature-fields__field-data"> ' +
                  government +
                  "</td></tr></tbody></table></div>"
                );
              },
            },
          ], // "The lands type number is {Type_LandID}.", // Display text in pop-up
        };
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
