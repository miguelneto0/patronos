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

    var plis = document.getElementsByClassName('pcomidas')

    var spreco = document.getElementsByClassName('preco')

    for(let i=3;i<plis.length;i++){
        plis[i].innerHTML = " "
    }

    for(let i=3;i<spreco.length;i++){
        spreco[i].innerHTML = " "
        spreco[i].style.display = "none"
    }

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

function trad(){
    var esq = document.getElementById('card')
    var h1 = document.getElementById('title')
    h1.innerHTML = "TRADICIONAIS"
    //esq.removeChild('article')
    var art =document.getElementsByTagName('article')[0]
    esq.removeChild(art)
    var ul = document.createElement('ul')
    ul.setAttribute("class","comida")
    var lis = document.createElement('li')
    var h2s = document.createElement('h2')
    var ps = document.createElement('p')
    var spans = document.createElement('span')
    esq.appendChild(ul)
    var ul_comida = document.getElementsByClassName('comida')[0]
    console.log(ul_comida)
    ul_comida.innerHTML = `<li class="comidas"><h2>CLÁSSICO 1</h2><p class="pcomidas">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro similique repudiandae voluptate mollitia ea.</p><span class="preco">R$ 10,00</span></li><br><li class="comidas"><h2>CLÁSSICO 2</h2><p class="pcomidas">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro similique repudiandae voluptate mollitia ea fugit cumque rerum pariatur quaerat molestiae voluptates, commodi tempora dolore cupiditate. Earum nostrum architecto ipsa sit.</p><span class="preco">R$ 13,00</span></li><br><li class="comidas"><h2>DUPLO</h2><p class="pcomidas">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro similique repudiandae voluptate mollitia ea fugit .</p><span class="preco">R$ 14,00</span></li><br><li class="comidas"><h2>CLÁSSICO FRANGO</h2><p class="pcomidas">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro similique repudiandae voluptate mollitia ea fugit cumque rerum pariatur quaerat molestiae voluptates, commodi tempora dolore.</p><span class="preco">R$ 13,00</span></li><br><li class="comidas"><h2>3 QUEIJOS</h2><p class="pcomidas">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro similique repudiandae voluptate mollitia ea fugit cumque rerum pariatur quaerat molestiae voluptates, commodi tempora.</p><span class="preco">R$ 17,00</span></li><br><li class="comidas"><h2>PATRONOS</h2><p class="pcomidas">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro similique repudiandae voluptate mollitia ea fugit cumque rerum pariatur quaerat molestiae voluptates, commodi tempora dolore cupiditate. Earum nostrum architecto ipsa sit.</p><span class="preco">R$ 20,00</span></li>`
}

function acompan(){
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