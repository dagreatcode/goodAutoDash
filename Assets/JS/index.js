$(document).ready(function () {
  console.log("The document is ready!");
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
  $.ajax(settings).done(function (response) {
    // console.log(response);
    console.log(response.code);
    console.log(response.cause);
    console.log(response.definition);
 
  });
});

// $.ajax({
//     url: "https://car-code.p.rapidapi.com/obd2/P0001",
//     method: "GET",
// }).then(function(response){
//     console.log(response);
// }).fail(function(err){
//     console.log("Something went wrong with the api call");
//     console.log(err);
// });
