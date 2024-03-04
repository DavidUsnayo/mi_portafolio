let dev = document.querySelector('.dev')
let desing = document.querySelector('.desing')

setInterval(() => {
    console.log('fin')
    dev.classList.remove('uno')
    desing.classList.add('uno')
},6000)
setInterval(() => {
    console.log('fin')
    dev.classList.add('uno')
    desing.classList.remove('uno')
}, 12000)

let one = document.querySelectorAll('.one')
let dos = document.querySelectorAll('.dos')

one.forEach((o,i) => {
    o.addEventListener('click',function(){
        dos[0].style.display='none'
        dos[1].style.display='none'
        dos[i].style.display='block'
        one[0].style.borderBottom='4px solid rgba(255, 255, 255, 0)'
        one[0].style.color='var(--letras)'
        one[1].style.borderBottom='4px solid rgba(255, 255, 255, 0)'
        one[1].style.color='var(--letras)'
        one[i].style.color='var(--primary)'
        o.style.borderBottom='4px solid var(--primary)'
    })
})

let cruz = document.querySelector('.sobreMenu img')
let sobreMenu = document.querySelector('.sobreMenu')
sobreMenu.addEventListener('click',function(){
    sobreMenu.classList.toggle('envolver')
    if(sobreMenu.classList.contains('envolver')){
        cruz.src = './assets/icons8-x-100 (1).png'
    }else{
        cruz.src = './assets/menu.png'
    }
})