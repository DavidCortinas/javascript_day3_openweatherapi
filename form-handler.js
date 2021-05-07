$('#output').hide()

function print(message) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = message;
  }

function buildList(arr) {
var listHTML = "<ul>";
    for(var i=0;i<arr.length;i++) {
    listHTML += "<li>" + arr[i] + "</li>";
    }
listHTML += "</ul>";
return listHTML;
}

$('.temp').on('click', function(e){
    e.preventDefault();
});

$('#midForm').on('submit', function(e){
    var city = $("#city").val().toLowerCase();
    var state = $("#state").val().toLowerCase();
    var country = $("#country").val().toLowerCase();
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=30d66dc81194d98d47af61ff65c4eae7`;
    e.preventDefault();
    $(this).hide()
    $.getJSON(url).then(function(data) {
        var res = [data.main.temp, data.main.temp_max, data.main.temp_min,
        data.main.feels_like, data.main.humidity];

        

        print(`<h1>${city}<h1>` + 
        buildList(res))

        $("#output").show()
    });
})


