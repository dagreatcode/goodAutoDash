$(document).ready(function () {
  console.log("The document is ready!");

  var searchTerm;

  function apiCall(){
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://car-code.p.rapidapi.com/obd2/P0001",
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
  
      $("#code-display").text(response.code);
      $("#cause-display").text(response.cause);
      $("#definition-display").text(response.definition);
    });
  }

  $("#search-form").on("submit", function(event){
    event.preventDefault();
    searchTerm = $("#specificSizeInputName").val();
    if (searchTerm){
      apiCall();
    }else{
      alert("I am still Working on this... Vincent.")
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