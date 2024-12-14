const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = '<footer> \
\
<img src="./images/logo.png" alt="logo" id="foot-logo">\
\
<div class="pic-container">\
    <div class="foot-box">\
        <a href="mailto:heidi@example.com">\<img src="./images/Mail.png" alt="E-post" id="mail-img">\</a>\
        <span class="foot-text">Mail: heidi@example.com</span>\
    </div>\
    \
    <div class="foot-box">\
        <a href="tel:+4773911313">\<img src="./images/phone.png" alt="Phone" id="phone-img">\</a>\
        <span class="foot-text">Tlf: 73911313</span>\
    </div>\
    \
    <div class="foot-box">\
        <a href="https://www.google.com/maps/place/Anders+Estenstads+veg+14,+7046+Trondheim/@63.4249382,10.4426154,17z/data=!3m1!4b1!4m6!3m5!1s0x466d31adee8fa88d:0x377e787f232b2c59!8m2!3d63.4249382!4d10.4426154!16s%2Fg%2F11c5flnxpc?entry=ttu7046" target="_blank">\
            <img src="./images/destination.png" alt="Destination" id="dest-img">\
        </a>\
        <span class="foot-text">Anders Estenstads veg 14</span>\
    </div>\
    \
    <div class="foot-box">\
        <a href="./booking.html">\<img src="./images/booking.png" alt="Destination" id="book-img">\</a>\
        <span class="foot-text">Timebestilling</span>\
    </div>\
</div>\
</footer>'

document.getElementById("footer").appendChild(footerTemplate.content); //legger til footer template i footer id'en 
                                                                       //vi har koblet footer js, kaller på den i bodien, og legger til denne html teksten
    
