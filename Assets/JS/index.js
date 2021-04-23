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
  var brandN = $("#brand-name");
  var cacheD = $("#cache-time");
  var conditionD = $("#condition-display");
  var dataD = $("#data-display");
  var modelD = $("#model-name");
  var msgD = $("#msg-display");
  var regionD = $("#region-name");
  var submitBtn = $("#submit-button");
  // var allD = $("all-data");

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
        "x-rapidapi-key": config.key,
        "x-rapidapi-host": config.host,
      },
    };
    $.ajax(settings).then(function (response) {
      console.log(response);
      // for(var i = 0; i < response.length; i++){
      //     console.log(response[i]);
      // };
      codeD.text(response.code);
      for (var i = 0; i < response.cause.length; i++) {
        console.log(response.cause)
        causeD.text(response.cause);
      }
      // causeD.text(response.cause);
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
        "x-rapidapi-key": config.key,
        "x-rapidapi-host": config2.host,
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      // // console.log(response.brandName);
      console.log(response.data);
      // // console.log(response);
      brandN.text(response.brandName);
      // bodyD.text(response.data.EngineModel);
      // engineD.text(response.EngineModel);
      cacheD.text(response.cacheTimeLimit);
      conditionD.text(response.condition);
      modelD.text(response.modelName);
      msgD.text(response.msg);
      regionD.text(response.regionName);
      dataD.text(response.data.BodyClass);
      dataD.append(" -AirBagLocCurtain: " + response.data.AirBagLocCurtain + "/");
      dataD.append(" -AirBagLocFront: " + response.data.AirBagLocFront + "/");
      dataD.append(" -AirBagLocSide: "+response.data.AirBagLocSide + "/");
      dataD.append(" -BodyClass: "+response.data.BodyClass + "/");
      dataD.append(" -DisplacementCC: "+response.data.DisplacementCC + "/");
      dataD.append(" -DisplacementCI: "+response.data.DisplacementCI + "/");
      dataD.append(" -Doors: "+response.data.Doors + "/");
      dataD.append(" -DriveType: "+response.data.DriveType + "/");
      dataD.append(" -EngineConfiguration: "+response.data.EngineConfiguration + "/");
      dataD.append(" -EngineCylinders: "+response.data.EngineCylinders + "/");
      dataD.append(" -EngineHP: "+response.data.EngineHP + "/");
      dataD.append(" -EngineKW: "+response.data.EngineKW + "/");
      dataD.append(" -EngineModel: "+response.data.EngineModel + "/");
      dataD.append(" -FuelTypePrimary: "+response.data.FuelTypePrimary + "/");
      dataD.append(" -GVWR: "+response.data.GVWR + "/");
      dataD.append(" -Make: "+response.data.Make + "/");
      dataD.append(" -MakeID: "+response.data.MakeID + "/");
      dataD.append(" -Manufacturer: "+response.data.Manufacturer + "/");
      dataD.append(" -ManufacturerId: "+response.data.ManufacturerId + "/");
      dataD.append(" -Model: "+response.data.Model + "/");
      dataD.append(" -ModelID: "+response.data.ModelID + "/");
      dataD.append(" -ModelYear: "+response.data.ModelYear + "/");
      dataD.append(" -OtherRestraintSystemInfo: "+response.data.OtherRestraintSystemInfo + "/");
      dataD.append(" -PlantCity: "+response.data.PlantCity + "/");
      dataD.append(" -PlantCountry: "+response.data.PlantCountry + "/");
      dataD.append(" -PlantState: "+response.data.PlantState + "/");
      dataD.append(" -Series: "+response.data.Series + "/");
      dataD.append(" -TransmissionStyle: "+response.data.TransmissionStyle + "/");
      dataD.append(" -SeatBeltsAll: "+response.data.SeatBeltsAll + "/");
      dataD.append(" -VIN: "+response.data.VIN + "/");
      dataD.append(" -ValveTrainDesign: "+response.data.ValveTrainDesign + "/");
      dataD.append(" -VehicleType: "+response.data.VehicleType + "/");
      dataD.append(" -TPMS: "+response.data.TPMS + "/");
      dataD.append(" -Manufacturer: "+response.data.RecallInfo[0].Manufacturer + "/");
      dataD.append(" -NHTSACampaignNumber: "+response.data.RecallInfo[0].NHTSACampaignNumber + "/");
      dataD.append(" -ReportReceivedDate: "+response.data.RecallInfo[0].ReportReceivedDate + "/");
      dataD.append(" -Summary: "+response.data.RecallInfo[0].Summary + "/");
      dataD.append(" -Conequence: "+response.data.RecallInfo[0].Conequence + "/");
      dataD.append(" -Remedy: "+response.data.RecallInfo[0].Remedy + "/");
      dataD.append(" -Notes: "+response.data.RecallInfo[0].Notes + "/");
      dataD.append(" -ModelYear:"+response.data.RecallInfo[0].ModelYear + "/");
      dataD.append(" -Make:"+response.data.RecallInfo[0].Make + "/");
      dataD.append(" -Model: "+response.data.RecallInfo[0].Model + "/");
      // allD.text(response.data);
      submitBtn.attr("d-isabled", false);
    });
  }

  function apiAutoInfo() {
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://car-stockpile.p.rapidapi.com/models?make=" + carModelName,
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
        "x-rapidapi-host": "car-stockpile.p.rapidapi.com"
      },
    };
    $.ajax(settings).done(function (response) {
      console.log(response);
      brandN.text(response.make);
      cacheT.text(response.models);
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

  $("#lookup-form3").on("submit", function (event) {
    event.preventDefault();
    lookupBtn.attr("disabled", true);
    lookupTerm = inputC3.val();
    carModelName = inputC3.val();
    if (lookupTerm) {
      apiAutoInfo();
    } else {
      alert("You Must Type something.");
    }
  });

  //   function displayResultsToPage(array){
  //     $("#display").append(array);
  //   }
});
