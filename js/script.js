function genMagnet(){
    const trackers = [
        "&tr=udp://tracker.cyberia.is:6969/announce", 
        "&tr=udp://tracker.port443.xyz:6969/announce",
        "&tr=http://tracker3.itzmx.com:6961/announce",
        "&tr=udp://tracker.moeking.me:6969/announce", 
        "&tr=http://vps02.net.orel.ru:80/announce", 
        "&tr=http://tracker.openzim.org:80/announce", 
        "&tr=udp://tracker.skynetcloud.tk:6969/announce",
        "&tr=https://1.tracker.eu.org:443/announce", 
        "&tr=https://3.tracker.eu.org:443/announce",
        "&tr=http://re-tracker.uz:80/announce", 
        "&tr=https://tracker.parrotsec.org:443/announce", 
        "&tr=udp://explodie.org:6969/announce", 
        "&tr=udp://tracker.filemail.com:6969/announce",
        "&tr=udp://tracker.nyaa.uk:6969/announce", 
        "&tr=udp://retracker.netbynet.ru:2710/announce", 
        "&tr=http://tracker.gbitt.info:80/announce", 
        "&tr=http://tracker2.dler.org:80/announce"
    ]
    let hash = document.getElementById("hash").value;
    let name = document.getElementById("name").value;
    if(hash == "" || name == ""){document.getElementById("error").style.visibility = "visible";}
    if(hash != "" || name != ""){
        document.getElementById("error").style.visibility = "hidden";
        m = "magnet:?xt=urn:btih:" + hash + "&dn=" + name;
        document.getElementById("magnet").innerHTML = m;
        if(document.getElementById("trackers").checked == true){
            m = "magnet:?xt=urn:btih:" + hash + "&dn=" + name + trackers.join('');
            document.getElementById("magnet").innerHTML = m;
        }
        document.getElementById("link").style.visibility = "visible";
        document.getElementById("showdiv").style.visibility = "visible";
        document.getElementById("alink").href = m;
    }
}

function showtext(){
    if(document.getElementById("showtext").checked == true){
        document.getElementById("magnet").style.visibility = "visible"
    }
    if(document.getElementById("showtext").checked == false){
        document.getElementById("magnet").style.visibility = "hidden"
    }
}