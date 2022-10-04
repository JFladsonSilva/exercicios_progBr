function loaded (){
    let t = document.getElementById('titulo')
    t.addEventListener('click', mudarText)
}   

function mudarText() {
    this.innerHTML = 'novo texto'
}