require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/Legend",
  "esri/widgets/Expand",
  "esri/config",
], function (Map, MapView, FeatureLayer, Legend, Expand, esriConfig) {
  // esriConfig.fontsUrl = "/fonts";
  /*****************************************************************
   *! Set a basic symbol on a layer to visualize all features the same way.
   *****************************************************************/
  function Lable($field) {
    return {
      // autocasts as new Lable()
      symbol: {
        type: "text", // autocasts as new TextSymbol()
        color: "black",
        haloColor: "white",
        haloSize: 1,
        font: {
          // autocast as new Font()
          // family: "Ubuntu Mono",
          size: 14,
          weight: "bold",
        },
      },
      labelExpressionInfo: {
        expression: $field,
      },
      maxScale: 0,
      minScale: 25000000,
    };
  }

  const administrativeCenterRenderer = {
    type: "unique-value", // autocasts as new UniqueValueRenderer()
    field: "Performance",
    defaultSymbol: { type: "simple-marker" }, // autocasts as new SimpleFillSymbol()
    uniqueValueInfos: [
      {
        // All features with value of "متميز" will be blue
        value: "0",
        symbol: {
          type: "simple-marker", // autocasts as new SimpleFillSymbol()
          color: "green",
          size: 9,
        },
      },
      {
        // All features with value of "جيد" will be green
        value: "1",
        symbol: {
          type: "simple-marker", // autocasts as new SimpleFillSymbol()
          color: "yellow",
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
          color: "orange",
          size: 11,
        },
      },
    ],
  };
  const Associationscontent = [
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
        {
          label: "التلفون",
          fieldName: "relationships/4/Phone", // The field whose values you want to format
          format: {
            digitSeparator: true, // Uses a comma separator in numbers >999
          },
        },
        {
          label: "الاتحاد",
          fieldName: "relationships/1/Union_Name",
        },
        {
          label: "عدد الأعضاء",
          fieldName: "relationships/3/Member_Association",
        },
        {
          label: "المديرية",
          fieldName: "relationships/5/Directorate_Name_Arabic",
        },
        {
          label: "المحافظة",
          fieldName: "relationships/10/relationships/9/Government_Name_Arabic",
        },
        {
          label: "الطاقة الإنتاجية",
          fieldName: "relationships/1",
        },
      ],
    },
  ];
  const Unionscontent = [
    {
      // Pass in the fields to display
      type: "fields",
      fieldInfos: [
        {
          label: "اسم الاتحاد",
          fieldName: "Union_Name",
        },
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
        {
          label: "الطاقة الإنتاجية",
          fieldName: "relationships/1",
        },
        {
          label: "التلفون",
          fieldName: "relationships/0/Phone",
          format: {
            digitSeparator: true,
          },
        },
        {
          label: "المحافظة",
          fieldName: "relationships/2/relationships/9/Government_Name_Arabic",
        },
      ],
    },
  ];

  const LandsRenderer = {
    type: "unique-value", // autocasts as new UniqueValueRenderer()
    field: "Type_Land",
    uniqueValueInfos: [
      {
        // All features with value of "صالحة للزراعة ومستزرعة" will be green
        value: "0",
        symbol: {
          type: "simple-fill",
          color: "green",
        },
      },
      {
        // All features with value of "صالحة للزراعة وغير مستزرعة" will be blue
        value: "1",
        symbol: {
          type: "simple-fill",
          color: [19, 235, 0],
        },
      },
      {
        // All features with value of "غير صالحة للزراعة" will be yellow
        value: "2",
        symbol: {
          type: "simple-fill",
          color: "yellow",
        },
      },
    ],
  };
  const Landscontent = [
    {
      // Pass in the fields to display
      type: "fields",
      fieldInfos: [
        {
          fieldName: "relationships/32/Owner_Name",
          label: "Owner",
        },
        {
          fieldName: "Type_Land",
          label: "Land's Type",
        },
        {
          fieldName: "Area",
          label: "Land's Area",
        },
        {
          fieldName: "relationships/30/Directorate_Name_Arabic",
          label: "Directorate",
        },
      ],
    },
  ];
  const AnimalsRenderer = {
    type: "unique-value", // autocasts as new UniqueValueRenderer()
    field: "Quantity_Production",
    defaultSymbol: { type: "simple-marker" }, // autocasts as new SimpleFillSymbol()
    visualVariables: [
      {
        type: "color",
        field: "Quantity_Production",
        normalizationField: "Count",
        legendOptions: {
          title: "% كمية الإنتاج",
        },
        stops: [
          {
            value: 0,
            color: "yellow",
            label: "=0%",
          },
          {
            value: 0.99,
            color: [19, 235, 0],
            label: "<= 99% & >0%",
          },
          {
            value: 1,
            color: "green",
            label: "=100%",
          },
        ],
      },
      {
        type: "size",
        field: "Quantity_Production",
        normalizationField: "Capacity",
        stops: [
          {
            value: 0,
            size: 18,
            label: "=0%",
          },
          {
            value: 0.99,
            size: 12,
            label: "<= 99% & >0%",
          },
          {
            value: 1,
            size: 8,
            label: "=100%",
          },
        ],
      },
    ],
  };
  const Animalscontent = [
    {
      // Pass in the fields to display
      type: "fields",
      fieldInfos: [
        {
          fieldName: "relationships/26/Owner_Name",
          label: "Owner",
        },
        {
          fieldName: "Type",
          label: "Animal's Type",
        },
        {
          fieldName: "Count",
          label: "Animal's Count",
        },
        {
          fieldName: "Quantity_Production",
          label: "Animal's Quantity Production ",
        },
        {
          fieldName: "relationships/28/Directorate_Name_Arabic",
          label: "Directorate",
        },
      ],
    },
  ];

  const serviceCenterRenderer = {
    type: "unique-value", // autocasts as new UniqueValueRenderer()
    field: "Energy_Used",
    defaultSymbol: { type: "simple-marker" }, // autocasts as new SimpleFillSymbol()
    visualVariables: [
      {
        type: "color",
        field: "Energy_Used",
        normalizationField: "Capacity",
        legendOptions: {
          title: "% الطاقة الشاغرة",
        },
        stops: [
          {
            value: 0,
            color: "yellow",
            label: "=0%",
          },
          {
            value: 0.99,
            color: "orange",
            label: "<= 99% & >0%",
          },
          {
            value: 1,
            color: "red",
            label: "=100%",
          },
        ],
      },
      {
        type: "size",
        field: "Energy_Used",
        normalizationField: "Capacity",
        stops: [
          {
            value: 0,
            size: 18,
            label: "=0%",
          },
          {
            value: 0.99,
            size: 12,
            label: "<= 99% & >0%",
          },
          {
            value: 1,
            size: 8,
            label: "=100%",
          },
        ],
      },
    ],
  };
  const Repositoriescontent = [
    {
      // content: "Repository's Vacant Energy {Energy_Used / Capacity}",
      // Pass in the fields to display

      type: "fields",
      fieldInfos: [
        {
          label: "اسم المستودع",
          fieldName: "Repositories_Name",
        },
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
          label: "السعر (م3/ساعة)",
          fieldName: "Price",
          format: {
            digitSeparator: true,
          },
        },
        {
          label: "الطاقة الاستيعابية",
          fieldName: "Capacity",
          format: {
            digitSeparator: true,
          },
        },
        {
          label: "الطاقة المستخدمة",
          fieldName: "Energy_Used",
          format: {
            digitSeparator: true,
          },
        },
        {
          label: "الطاقة الشاغرة",
          fieldName: "expression/Vacant Energy",
          format: {
            digitSeparator: true,
          },
        },
        {
          label: "التلفون",
          fieldName: "relationships/8/Phone",
          format: {
            digitSeparator: true,
          },
        },
        {
          label: "المنتج",
          fieldName: "relationships/1/relationships/29/Government_Name_Arabic",
        },
        {
          label: "المديرية",
          fieldName: "relationships/10/Directorate_Name_Arabic",
        },
        {
          label: "المحافظة",
          fieldName: "relationships/2/relationships/9/Government_Name_Arabic",
        },
      ],
    },
  ];
  const Fridgescontent = [
    {
      // content: "Repository's Vacant Energy {Energy_Used / Capacity}",
      // Pass in the fields to display

      type: "fields",
      fieldInfos: [
        {
          label: "اسم الثلاجة",
          fieldName: "Fridge_Name",
        },
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
          label: "السعر (م3/ساعة)",
          fieldName: "Price",
          format: {
            digitSeparator: true,
          },
        },
        {
          label: "الطاقة الاستيعابية",
          fieldName: "Capacity",
          format: {
            digitSeparator: true,
          },
        },
        {
          label: "الطاقة المستخدمة",
          fieldName: "Energy_Used",
          format: {
            digitSeparator: true,
          },
        },
        {
          label: "الطاقة الشاغرة",
          fieldName: "expression/Vacant Energy",
          format: {
            digitSeparator: true,
          },
        },
        {
          label: "التلفون",
          fieldName: "relationships/12/Phone",
          format: {
            digitSeparator: true,
          },
        },
        {
          label: "المنتج",
          fieldName: "relationships/1/relationships/29/Government_Name_Arabic",
        },
        {
          label: "المديرية",
          fieldName: "relationships/14/Directorate_Name_Arabic",
        },
        {
          label: "المحافظة",
          fieldName: "relationships/1/relationships/29/Government_Name_Arabic",
        },
      ],
    },
  ];

  /*****************************************************************
   *! Create FeatureLayers instances.
   *****************************************************************/
  //data needs to be public to access them without authorization
  var YemenLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/8",
    id: "Yemen",
    opacity: 0.9,
    popupTemplate: {
      title: "اليمن", // Show attribute value
    },
  });
  var GovernmentLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/9",
    id: "Governments",
    visible: false,
    labelingInfo: [Lable("$feature.Government_Name_Arabic")],
    outFields: ["Government_Name_Arabic", "GovernmentID"],
    popupTemplate: {
      title: "{GovernmentID}", // Show attribute value
      content: "اسم المحافظة {Government_Name_Arabic}", // Display text in pop-up
    },
  });
  var DirectorateLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/10",
    id: "Directorates",
    visible: false,
    labelingInfo: [Lable("$feature.Directorate_Name_Arabic")],
    outFields: ["Directorate_Name_Arabic", "DirectorateID"],
    popupTemplate: {
      title: "{DirectorateID}", // Show attribute value
      content: "اسم المديرية {Directorate_Name_Arabic}", // Display text in pop-up
    },
  });
  var AssociationLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/1",
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
    renderer: administrativeCenterRenderer,
    labelingInfo: [Lable("$feature.Association_Name")],

    // popup
    // *********************************************************
    //*** ADD ***//

    outFields: ["Association_Name"],

    //*** ADD ***//
    popupTemplate: {
      // Enable a popup
      title: "{Association_Name}",
      content: Associationscontent,
    },
  });
  var UnionLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/0",
    id: "Unions",
    visible: true,
    renderer: administrativeCenterRenderer,
    labelingInfo: [Lable("$feature.Union_Name")],
    outFields: ["Union_Name"],
    popupTemplate: {
      title: "{Union_Name}",
      content: Unionscontent,
    },
  });
  var LandsLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/11",
    id: "Lands",
    visible: false,
    renderer: LandsRenderer,
    labelingInfo: [Lable("$feature.LandID")],
    outFields: ["LandID"],
    popupTemplate: {
      title: "{LandID}",
      content: Landscontent,
    },
  });
  var AnimalsLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/7",
    id: "Animals",
    visible: false,
    renderer: AnimalsRenderer,
    labelingInfo: [Lable("$feature.AnimalID")],
    outFields: ["AnimalID"],
    popupTemplate: {
      title: "{AnimalID}",
      content: Animalscontent,
    },
  });
  var RepositoryLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/2",
    id: "Repository",
    visible: false,
    renderer: serviceCenterRenderer,
    labelingInfo: [Lable("$feature.Repositories_Name")],

    outFields: ["Repositories_Name", "Energy_Used", "Capacity"],
    popupTemplate: {
      title: "{Repositories_Name}",
      expressionInfos: [
        {
          name: "Vacant Energy",
          title: "الطاقة الشاغرة",
          expression: "$feature.Capacity - $feature.Energy_Used",
        },
      ],
      content: Repositoriescontent,
    },
  });
  var FridgesLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/3",
    id: "Fridges",
    visible: false,
    renderer: serviceCenterRenderer,
    labelingInfo: [Lable("$feature.Fridge_Name")],

    outFields: ["Fridge_Name", "Energy_Used", "Capacity"],
    popupTemplate: {
      title: "{Fridge_Name}",
      expressionInfos: [
        {
          name: "Vacant Energy",
          title: "الطاقة الشاغرة",
          expression: "$feature.Capacity - $feature.Energy_Used",
        },
      ],
      content: Fridgescontent,
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
  map.add(DirectorateLayer); // adds the layer to the map
  map.add(UnionLayer); // adds the layer to the map
  map.add(AssociationLayer); // adds the layer to the map
  map.add(LandsLayer); // adds the layer to the map
  map.add(AnimalsLayer); // adds the layer to the map
  map.add(RepositoryLayer); // adds the layer to the map
  map.add(FridgesLayer); // adds the layer to the map

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
  // view.when(() => {
  //   GovernmentLayer.when(() => {
  //     view.goTo(GovernmentLayer.fullExtent).catch((errorGovernment) => {
  //       console.error(errorGovernment);
  //     });
  //   });
  // });
  // view.when(() => {
  //   AssociationLayer.when(() => {
  //     view.goTo(AssociationLayer.fullExtent).catch((errorFeature) => {
  //       console.error(errorFeature);
  //     });
  //   });
  // });
  // view.when(() => {
  //   LandsLayer.when(() => {
  //     view.goTo(LandsLayer.fullExtent).catch((errorLand) => {
  //       console.error(errorLand);
  //     });
  //   });
  // });

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
    AssociationLayer.visible = AssociationsLayerToggle.checked;
  });
  LandsLayerToggle.addEventListener("change", () => {
    LandsLayer.visible = LandsLayerToggle.checked;
  });

  /*****************************************************************
   * ! Resources
   * https://developers.arcgis.com/javascript/latest/sample-code/intro-layers/
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-labelClass.html
   *******************************************************************/
});
