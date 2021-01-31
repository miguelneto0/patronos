function smash(){
    var h1 = document.getElementById('title')
    h1.innerHTML = "SMASH BURGERS"

    var h2 = document.getElementsByTagName('h2')
    for(let i=0;i<h2.length;i++){
        h2[0].innerHTML = "SMASH CLASSIC"
        h2[1].innerHTML = "CAMPEÃO"
        h2[2].innerHTML = "SMASH CREAM"
        h2[3].innerHTML = "SMASH CHEDDAR"
        h2[4].innerHTML = "SMASH CREMOSO"
        h2[5].innerHTML = "SMASH HOT"
    }
}

function steak(){
    var h1 = document.getElementById('title')
    h1.innerHTML = "CHEESE STEAKS"

    var h2 = document.getElementsByTagName('h2')
    for(let i=0;i<h2.length;i++){
        h2[0].innerHTML = "STEAK CALABRESA"
        h2[1].innerHTML = "STEAK FRANGO"
        h2[2].innerHTML = "STEAK PATINHO"
        h2[3].innerHTML = " "
        h2[4].innerHTML = " "
        h2[5].innerHTML = " "
    }
}

