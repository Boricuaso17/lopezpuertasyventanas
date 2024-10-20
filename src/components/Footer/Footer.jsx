import React from "react"

export const Footer = () => {
    return (<div id="footer">
        <div id="contact">
            <div>
                <p id="telephone" class="open-sans"></p> <i class="bi bi-telephone-fill"></i> &nbsp; (787) 888-3302  &nbsp; (787) 594-8194
            </div>
            <div id="socialDiv"> 
                <a type="button" href="https://www.facebook.com/IMLDISTRIBUTOR">
                    <i class="bi bi-facebook social" color="white"></i></a></div>
        </div>

        <iframe id="map" src="https://www.google.com/maps?q=18.377966,-65.865464&z=15&output=embed" style="border:0;"
            allowfullscreen="" loading="lazy">
        </iframe>
    </div>)
}