require(["esri/rest/query"], function (query) {
  // url to the layer of interest to query
  let queryUrl =
    "https://192.168.56.56:6443/arcgis/rest/services/MapsDBs/MapServer/9";
  let queryAttribute = "Government_Name_Arabic";
  query
    .executeQueryJSON(queryUrl, {
      // autocasts as new Query()
      where: "1 = 1",
    })
    .then(
      function (count) {
        /*****************************************************************
         *! another way
        // for (let index = 0; index < count.features.length; index++) {
        //   console.log(
        //     eval("count.features[" + index + "].attributes." + queryAttribute)
        //   );
        // }
        *****************************************************************/
        count.features.forEach((element) => {
          console.log(element.attributes[queryAttribute]);
        });
      },
      function (error) {
        console.log(error); // will print error in console if unsupported layers are used
      }
    );
});
