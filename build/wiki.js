$(document).ready(function(){
    $(document).bind("keypress", function(e){
        if (e.keyCode === 13){
            $(".searchButton").trigger("click");
        }
    });
    $(".searchButton").click(function(){
        var articleSearch = $("#search").val();
        url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + articleSearch + "&format=json&callback=?";
        // make request to wikipedia - JSON
        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
        }).done(function(data){
            // empty the section when new search is executed
            $("#result").html("");

            // iterate through the results using the for loop
            for (var i = 0; i < data[1].length; i++) {
                $("#result").append(`<h2><a href="${data[3][i]}" target="_blank">${data[1][i]}</a></h2><p>${data[2][i]}</p><br>`);
            }

            // empty the search word in the bar
            $("#search").val("");
        })
            .fail(function(xhr){
                console.log("error", xhr);
            });
    });
});


