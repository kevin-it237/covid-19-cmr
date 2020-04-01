
import axios from 'axios';

// This function create a cookie with the duration of 1 year: exdays = 365
export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
 
// Check if cookie exist and create It if It doesnt
export function checkCookie(cname, cvalue, exdays) {
    var user = getCookie(cname);
    if (user !== "") {
        return cvalue;
    } else {
        setCookie(cname, cvalue, exdays);
        return null;
    }
}

// Get the user IP/ADDRESS
export function getIpAdress(cb, error) {
    axios.get('https://json.geoiplookup.io')
    .then(response => {
        const data = response.data;
        const location =  {
            ip: data.ip,
            country: data.country_name,
            city: data.city,
            region: data.region,
            continent: data.continent_name,
            lat: data.latitude,
            long: data.longitude,
            isp: data.isp,
            asnOrg: data.asn_org
        } 
        cb(location)
    })
    .catch(err => error())
}