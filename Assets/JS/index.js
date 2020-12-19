$(document).ready(function () {
  console.log("The document is ready!");

  var searchTerm;
  var submitTerm;
  var lookupTerm;

  var codeD = $("#code-display");
  var causeD = $("#cause-display");
  var definitionD = $("#definition-display");
  var searchBtn = $("#search-button");
  var inputC = $("#input-control");
  var submitBtn = $("#submit-button");
  var inputC2 = $("#input-control2");
  var brandD = $("#brand-display");
  var dataD = $("#data-display");
  var recallD = $("#recall-display");
  // var odbCode = "P0001";

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
      console.log(response);
      // // console.log(response.brandName);
      // // console.log(response.data);
      // // console.log(response);

      brandD.text(response.brandName);
      dataD.text(response.data.BodyClass);
      recallD.text(response.data.EngineModel);
    });
  }

  function apiAutoInfo() {
    const settings = {
      async: true,
      crossDomain: true,
      url:
        "https://cis-automotive.p.rapidapi.com/getInactiveModels?brandName=Ford",
      method: "GET",
      headers: {
        "x-rapidapi-key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
        "x-rapidapi-host": "cis-automotive.p.rapidapi.com",
      },
    };
    $.ajax(settings).done(function (response) {
      console.log(response);
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
    lookupTerm = inputC2.val();
    vinPin = inputC3.val();
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
