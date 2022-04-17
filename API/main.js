require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/Legend",
  "esri/widgets/Expand",
], function (Map, MapView, FeatureLayer, Legend, Expand) {
  /*****************************************************************
   *! Set a basic symbol on a layer to visualize all features the same way.
   *****************************************************************/
  var AssociationsRenderer = {
    type: "unique-value", // autocasts as new UniqueValueRenderer()
    field: "Performance",
    defaultSymbol: { type: "simple-marker" }, // autocasts as new SimpleFillSymbol()
    uniqueValueInfos: [
      {
        // All features with value of "متميز" will be blue
        value: "0",
        symbol: {
          type: "simple-marker", // autocasts as new SimpleFillSymbol()
          color: "blue",
          size: 9,
        },
      },
      {
        // All features with value of "جيد" will be green
        value: "1",
        symbol: {
          type: "simple-marker", // autocasts as new SimpleFillSymbol()
          color: "green",
          size: 10,
        },
      },
      {
        // All features with value of "متعثر" will be red
        value: "3",
        symbol: {
          type: "simple-marker", // autocasts as new SimpleFillSymbol()
          color: "red",
        },
      },
      {
        // All features with value of "ضعيف" will be yellow
        value: "2",
        symbol: {
          type: "simple-marker", // autocasts as new SimpleFillSymbol()
          color: "yellow",
          size: 11,
        },
      },
    ],
  };

  /*****************************************************************
   *! Create FeatureLayers instances.
   *****************************************************************/
  //data needs to be public to access them without authorization
  var featureLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/Map/MapServer/5",
    /*****************************************************************
     *! Set properties on a feature layer
     * Additional properties can be set on a feature layer to change how it draws and behaves.
     * Set the definitionExpression to only draw some feature by the condiction,
     * a renderer to draw the features, and
     * a popupTemplate to show the fields in the pop-up.
     *****************************************************************/
    /*****************************************************************
     *  definition expression
     * *** ADD ***
     * is useful when the dataset is large and you
     *  don't want to bring all features to the client for analysis
     *****************************************************************/
    // definitionExpression: "AssociationID = 1",

    // This property can be used to uniquely identify the layer
    id: "Associations",
    visible: false,
    renderer: AssociationsRenderer,

    // popup
    // *********************************************************
    //*** ADD ***//

    outFields: ["Association_Name", "Performance"],

    //*** ADD ***//
    popupTemplate: {
      // Enable a popup
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
      ],
    },
  });
  var YemenLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/Map/MapServer/10",
    id: "Yemen",
    opacity: 0.6,
  });
  var GovernmentLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/Map/MapServer/9",
    id: "Governments",
    visible: false,
    outFields: ["Government_Name_English", "GovernmentID"],
    popupTemplate: {
      title: "{GovernmentID}", // Show attribute value
      content: "The Government name is {Government_Name_English}.", // Display text in pop-up
    },
  });
  var LandsLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/Map/MapServer/7",
    id: "Lands",
    visible: false,
    outFields: ["Type_LandID", "LandID "],
    popupTemplate: {
      title: "{LandID }",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "LandID",
              label: "LandID",
            },
            {
              fieldName: "relationships/8/Directorate_Name_Arabic",
              label: "Directorate",
            },
          ],
        },
      ],
    },
  });

  /*****************************************************************
   *! Layers may be added to the map in the map's constructor
   *****************************************************************/
  const map = new Map({
    layers: [YemenLayer],
  });

  /*****************************************************************
   *! Or they may be added to the map using map.add()
   *****************************************************************/
  map.add(GovernmentLayer); // adds the layer to the map
  map.add(featureLayer); // adds the layer to the map
  map.add(LandsLayer); // adds the layer to the map

  /*****************************************************************/

  var view = new MapView({
    container: "viewDiv", // References the ID of a DOM element
    map: map, // References a Map instance
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

  /*****************************************************************
   * The map handles the layers' data while the view and layer views
   * take care of renderering the layers
   *****************************************************************/
  view.on("layerview-create", (event) => {
    if (event.layer.id === "Yemen") {
      // Explore the properties of the population layer's layer view here
      console.log("LayerView for Yemen created!", event.layerView);
    }
    if (event.layer.id === "Governments") {
      console.log("LayerView for Governments created!", event.layerView);
    }
    if (event.layer.id === "Associations") {
      console.log("LayerView for Associations created!", event.layerView);
    }
    if (event.layer.id === "Lands") {
      console.log("LayerView for lands created!", event.layerView);
    }
  });

  /*****************************************************************
   * Layers are promises that resolve when loaded, or when all their
   * properties may be accessed. Once the population layer has loaded,
   * the view will animate to it's initial extent.
   *****************************************************************/
  view.when(() => {
    YemenLayer.when(() => {
      view.goTo(YemenLayer.fullExtent).catch((YemenError) => {
        console.error(YemenError);
      });
    });
  });
  view.when(() => {
    GovernmentLayer.when(() => {
      view.goTo(GovernmentLayer.fullExtent).catch((errorGovernment) => {
        console.error(errorGovernment);
      });
    });
  });
  view.when(() => {
    featureLayer.when(() => {
      view.goTo(featureLayer.fullExtent).catch((errorFeature) => {
        console.error(errorFeature);
      });
    });
  });
  view.when(() => {
    LandsLayer.when(() => {
      view.goTo(LandsLayer.fullExtent).catch((errorLand) => {
        console.error(errorLand);
      });
    });
  });

  /*****************************************************************
   * The visible property on the layer can be used to toggle the
   * layer's visibility in the view. When the visibility is turned off
   * the layer is still part of the map, which means you can access
   * its properties and perform analysis even though it isn't visible.
   *******************************************************************/
  const AssociationsLayerToggle = document.getElementById("AssociationsLayer");
  const GovernmentsLayerToggle = document.getElementById("GovernmentsLayer");
  const LandsLayerToggle = document.getElementById("LandsLayer");

  GovernmentsLayerToggle.addEventListener("change", () => {
    GovernmentLayer.visible = GovernmentsLayerToggle.checked;
  });
  AssociationsLayerToggle.addEventListener("change", () => {
    featureLayer.visible = AssociationsLayerToggle.checked;
  });
  LandsLayerToggle.addEventListener("change", () => {
    LandsLayer.visible = LandsLayerToggle.checked;
  });
});
