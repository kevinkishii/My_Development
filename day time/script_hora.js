function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var txt = window.document.querySelector('div#hora')
    var bom = window.document.getElementById('boa')
    var titulo = document.getElementById('titulo')
    txt.innerHTML = `agora são ${hora} horas`
    if (hora>0 && hora<12) {
        bom.innerHTML = 'Bom dia'
        document.body.style.background = 'yellow'
        titulo.style.color = 'blue'
    } else if (hora>=12 && hora < 18){
        bom.innerHTML = 'Boa tarde'
        document.body.style.background = 'green'
    } else {
        bom.innerHTML = 'Boa noite'
        document.body.style.background = 'gray'
        titulo.style.color = 'black'
    }
}