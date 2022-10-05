let portrait = window.matchMedia("(orientation: portrait)")

portrait.addEventListener("change", function() { 
    if (portrait.matches){ 
        function alertUser() { 
            alert("This website is best viewed in Landscape mode");
        }
        setTimeout(alertUser, 50)
    }
})
