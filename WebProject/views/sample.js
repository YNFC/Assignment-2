/*
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/app.css' />
    <link rel="stylesheet" href="/bootstrap/dist/css/bootstrap.min.css" > 
    <link rel="stylesheet" href="/@fortawesome/fontawesome-free/css/all.min.css" >
    <script src="jquery/dist/jquery.min.js"></script>
    <script src="/bootstrap/dist/js/css/bootstrap.min.css"></script>

  </head>
  <body>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">INFR3120</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <% if (title == "Home") {%>
        <a class="nav-link active" aria-current="page" href="/home" ><i class="fa-solid fa-lg fa-house"></i> Home</a>
        <% } else { %>
          <a class="nav-link" aria-current="page" href="/home" ><i class="fa-solid fa-lg fa-house"></i> Home</a>
        <%} %>
      </li>
      <li class="nav-item">
        <% if (title == "About") {%>
        <a class="nav-link active" aria-current="page" href="/about"><i class="fa-solid fa-lg fa-circle-info"></i> About</a>
        <% } else { %>
          <a class="nav-link" aria-current="page" href="/about"><i class="fa-solid fa-lg fa-circle-info"></i> About</a>
        <%} %>
      </li>
      <li class="nav-item">
        <% if (title == "Projects") {%>
        <a class="nav-link active" aria-current="page" href="/projects" ><i class="fa-solid fa-lg fa-bars-progress"></i> Projects</a>
        <% } else { %>
          <a class="nav-link" aria-current="page" href="/projects" ><i class="fa-solid fa-lg fa-bars-progress"></i> Projects</a>
        <%} %>
      </li>
      <li class="nav-item">
        <% if (title == "Contact") {%>
        <a class="nav-link active" aria-current="page" href="/contact" ><i class="fa-solid fa-lg fa-phone"></i> Contact</a>
        <% } else { %>
          <a class="nav-link" aria-current="page" href="/contact" ><i class="fa-solid fa-lg fa-phone"></i> Contact</a>
        <%} %>
      </li>
  </div>
</nav>


  <main class="container mt-4">
    <% if (title == 'Home') { %>
        <h1>Welcome to my site</h1>
        <p>I have done many projects in many different areas in life.</p>
        <p>I hope you like this website and enjoy your time.</p>
        <p>Thank you for checking out my Website.</p>
        <%
    } else if (title == 'About') { %>
        <h1>About me</h1>
        <p>Name: Ghayas Sher</p>
        <p>Age: 21 Years Old</p>
        <p>University: Ontario Tech University</p>
        <p>Program: Networking and IT security</p>
        <p>Hobbies: Soccer, Gym, Reading, Road Trips</p>
        <%
    } else if (title == 'Projects') { %>
        <h1>Here I will list some projects I have done.</h1>
        <p>Projects:</p>
        <p>1. Electric Go Kart </p>
        <p>2. Hydraulic Arm </p>
        <p>3. Personal Website </p>
        <%
    } else if (title == 'Contact') { %>
        <h1>Contact</h1>
        <p> Email / form / whatever they asked for. </p>
        <%    
    } %> 
</main>



<footer>
      <nav class="navbar fixed-bottom navbar-dark bg-dark">
        <h6 class="navbar-text">&copy; Copyright 2025. All rights reserved. </h6>
      </nav>
    </footer>
    <script src="/Script/app.js"></script>
  </body>
</html>








sadddddddddddddddddddd

<%- include('./partials/header.ejs') %>
<%- include('./partials/main_nav.ejs') %>
<%- include('./partials/content.ejs') %>
<%- include('./partials/footer.ejs') %>




*/

