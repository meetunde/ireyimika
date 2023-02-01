let btn = document.querySelector('.btn')

function getBgrc (){
    let body = document.body.style
    let myColors = ['purple','green','yellow','pink', 'black', 'orange']
    let random = Math.ceil(Math.random()* myColors.length)
    body.backgroundColor = myColors[random]
}
// btn.addEventListener('click', getBgrc)
setInterval(getBgrc,5000)