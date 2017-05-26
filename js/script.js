$(document).ready(function(){
    $(".searchButton").click(function(){
        var articleSearch = $("#search").val();
        url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + articleSearch + "&format=json&callback=?";
       // make request to wikipedia - JSONP
        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
        }).done(function(data){
            $("#result").html(`<h2>${data[1][1]}</h2><br>${data[2][1]}<br><small><a href="${data[3][1]}">${data[3][1]}</a></small>`);
            // use the .each() function to show all the results
        });
    });
});


