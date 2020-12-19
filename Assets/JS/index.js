$(document).ready(function () {
  console.log("The document is ready!");

  var searchTerm;
  var submitTerm;
  var lookupTerm;

  var inputC = $("#input-control");
  var codeD = $("#code-display");
  var causeD = $("#cause-display");
  var definitionD = $("#definition-display");
  var searchBtn = $("#search-button");
  
 
  var inputC2 = $("#input-control2");
  var brandD = $("#brand-display");
  // var bodyD = $("#body-class");
  // var engineD = $("#engine-model");
  var cacheD = $("#cache-time");
  var conditionD = $("#condition-display");
  var dataD = $("#data-display");
  var modelD = $("#model-name");
  var msgD = $("#msg-display");
  var regionD = $("#region-name");
  var submitBtn = $("#submit-button");

  var inputC3 = $("#input-control3");
  var brandN = $("#brand-name");
  var modelN = $("#model-name");
  var regionN = $("#region-name");
  var conditionN = $("#condition-name");
  var cacheT = $("#cache-time");
  var dataI = $("#data-info");
  var lookupBtn = $("#lookup-button");

  

  function apiCall() {
    console.log("api Call");
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://car-code.p.rapidapi.com/obd2/" + odbCode,
      method: "GET",
      headers: {
        "x-rapidapi-key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
        "x-rapidapi-host": "car-code.p.rapidapi.com",
      },
    };
    $.ajax(settings).then(function (response) {
      // console.log(response);
      // for(var i = 0; i < response.length; i++){
      //     console.log(response[i]);
      // };
      console.log(response.code);
      console.log(response.cause);
      console.log(response.definition);

      codeD.text(response.code);
      causeD.text(response.cause);
      definitionD.text(response.definition);
      searchBtn.attr("disabled", false);

      // $("#code-display").text(response.code);
      // $("#cause-display").text(response.cause);
      // $("#definition-display").text(response.definition);
      // $("#search-button").attr("disabled", false);
    });
  }

  function apiVin() {
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://cis-vin-decoder.p.rapidapi.com/vinDecode?vin=" + vinPin,
      method: "GET",
      headers: {
        "x-rapidapi-key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
        "x-rapidapi-host": "cis-vin-decoder.p.rapidapi.com",
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response.data.AirBagLocCurtain);
      // // console.log(response.brandName);
      // // console.log(response.data);
      // // console.log(response);
      brandD.text(response.brandName);
      // bodyD.text(response.data.EngineModel);
      // engineD.text(response.EngineModel);
      cacheD.text(response.cacheTimeLimit);
      conditionD.text(response.condition);
      dataD.text(response.data.BodyClass);
      modelD.text(response.modelName);
      msgD.text(response.msg);
      regionD.text(response.regionName); 
      dataD.append(response.data.AirBagLocCurtain + "/");
      dataD.append(response.data.DriveType + "/");
      dataD.append(response.data.FuelTypePrimary + "/");
      dataD.append(response.data.Manufacturer + "/");
      dataD.append(response.data.ModelYear + "/");
      dataD.append(response.data.PlantCity + "/");
      dataD.append(response.data.PlantCountry + "/");
      dataD.append(response.data.Series + "/");
      dataD.append(response.data.TransmissionStyle + "/");
      dataD.append(response.data.SeatBeltsAll + "/");
      dataD.append(response.data.VIN + "/");
      dataD.append(response.data.ValveTrainDesign + "/");
      dataD.append(response.data.VehicleType + "/");
      dataD.append(response.data.TPMS + "/");
      submitBtn.attr("disabled", false);
    });
  }

  function apiAutoInfo() {
    const settings = {
      async: true,
      crossDomain: true,
      url:
        "https://cis-automotive.p.rapidapi.com/getInactiveModels?brandName=" + carModelName,
      method: "GET",
      headers: {
        "x-rapidapi-key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
        "x-rapidapi-host": "cis-automotive.p.rapidapi.com",
      },
    };
    $.ajax(settings).done(function (response) {
      console.log(response);
      brandN.text(response.brandName);
      cacheT.text(response.cacheTimeLimit);
      conditionN.text(response.condition);
      modelN.text(response.modelName);
      regionD.text(response.regionName);
      // for (var i = 0; i < response.length; i++){
      //     console.log(response[i]);
      // };
      dataI.text(response.data[0].modelName + "/");
      dataI.append(response.data[1].modelName + "/");
      dataI.append(response.data[2].modelName + "/");
      dataI.append(response.data[3].modelName + "/");
      dataI.append(response.data[4].modelName + "/");
      dataI.append(response.data[5].modelName + "/");
      dataI.append(response.data[6].modelName + "/");
      dataI.append(response.data[7].modelName + "/");
      dataI.append(response.data[8].modelName + "/");
      dataI.append(response.data[9].modelName + "/");
      dataI.append(response.data[10].modelName + "/");
      dataI.append(response.data[11].modelName + "/");
      dataI.append(response.data[12].modelName + "/");
      dataI.append(response.data[13].modelName + "/");
      dataI.append(response.data[14].modelName + "/");
      dataI.append(response.data[15].modelName + "/");
      dataI.append(response.data[16].modelName + "/");
      dataI.append(response.data[17].modelName + "/");
      dataI.append(response.data[18].modelName + "/");
      dataI.append(response.data[19].modelName + "/");
      dataI.append(response.data[20].modelName + "/");
      dataI.append(response.data[21].modelName + "/");
      dataI.append(response.data[22].modelName + "/");
      dataI.append(response.data[23].modelName + "/");
      dataI.append(response.data[24].modelName + "/");
      dataI.append(response.data[25].modelName + "/");
      dataI.append(response.data[26].modelName + "/");
      dataI.append(response.data[27].modelName + "/");
      dataI.append(response.data[28].modelName + "/");
      dataI.append(response.data[29].modelName + "/");
      dataI.append(response.data[30].modelName + "/");
      
      lookupBtn.attr("disabled", false);
    });
  }

  $("#search-form").on("submit", function (event) {
    event.preventDefault();
    searchBtn.attr("disabled", true);
    searchTerm = inputC.val();
    odbCode = inputC.val();
    if (searchTerm) {
      apiCall();
    } else {
      alert("I am still Working on this... Vincent.");
    }
  });

  $("#submit-form").on("submit", function (event) {
    event.preventDefault();
    submitBtn.attr("disabled", true);
    submitTerm = inputC2.val();
    vinPin = inputC2.val();
    if (submitTerm) {
      apiVin();
    } else {
      alert("You Must Type something.");
    }
  });

  $("#lookup-form3").on("submit", function(event){
    event.preventDefault();
    lookupBtn.attr("disabled", true);
    lookupTerm = inputC3.val();
    carModelName = inputC3.val();
    if (lookupTerm){
      apiAutoInfo();
    }else{
      alert("You Must Type something.")
    }
  });

  //   function displayResultsToPage(array){
  //     $("#display").append(array);
  //   }
});

//////////////////////////////////////////////////////////////////
// $.ajax({                                                     //
//     url: "https://car-code.p.rapidapi.com/obd2/P0001",       //
//     method: "GET",                                           //
// }).then(function(response){                                  //
//     console.log(response);                                   //
// }).fail(function(err){                                       //
//     console.log("Something went wrong with the api call");   //
//     console.log(err);                                        //
// });                                                          //
//////////////////////////////////////////////////////////////////
