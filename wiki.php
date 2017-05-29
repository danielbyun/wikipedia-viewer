<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Wikipedia Viewer</title>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href="css/wiki.css" rel="stylesheet">
</head>
<body>
<div class="wrapper">
    <div class="nav-wrapper">
        <nav class="flex-nav">
            <a href="#" class="toggleNav">☰</a>
            <ul class="toggle">
                <li class="logo">
                    <a href="https://www.wikipedia.org/wiki/Special:Random" target="_blank"><i class="fa fa-wikipedia-w fa-lg" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="http://byunsta.co" target="_blank"> Heyo db hea </a>
                </li>
                <li class="social">
                    <a href="http://github.com/danielbyun" target="a_blank"><i class="fa fa-github fa-lg"></i></a>
                </li>
            </ul>
        </nav>
    </div>
    <section>
        <div class="searchContainer">
            <h1>Search Wikipedia Article</h1>
            <p class="lead">Enter a phrase to search through the wikipedia.</p>
            <input type="text" id="search" class="form-control" placeholder="Search Wikipedia Here">
            <button class="searchButton"type="submit">Search!</button>
        </div>
        <br>
        <div id="result">

        </div>
    </section>
</div>
    <script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
    <script src="js/wiki.js"></script>
</body>
</html>