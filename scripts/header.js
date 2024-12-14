const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = '<header>\
<a href="./homepage.html">\
    <img src="./images/HDLogo.png" alt="Logo">\
</a>\
<nav id="navbar-container">\
    <button type="button" class="nav-btn" onclick="window.location.href=\'homepage.html\';">Forside</button>\
    <button type="button" class="nav-btn" onclick="window.location.href=\'about.html\';">Om oss</button>\
    <button type="button" class="nav-btn" onclick="window.location.href=\'treatments.html\';">Behandlinger</button>\
    <button type="button" class="nav-btn" onclick="window.location.href=\'prices.html\';">Priser</button>\
    <button type="button" class="nav-btn" onclick="window.location.href=\'booking.html\';">Timebestilling</button>\
    <button type="button" class="nav-btn" onclick="window.location.href=\'contactus.html\';">Kontakt oss</button>\
</nav>\
</header>'
document.getElementById("header").appendChild(headerTemplate.content);
