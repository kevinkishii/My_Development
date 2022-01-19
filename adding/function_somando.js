function somar() {
    var n1 = document.getElementById(`n1`)
    var n2 = document.querySelector(`input#n2`)
    var res = window.document.getElementById(`res`)
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)
    var soma = n1 + n2
    res.innerHTML = `o resultado do cálculo é ${soma}`
}