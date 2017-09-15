function $(selector){
    return document.querySelector(selector)
}
function $$(selector){
    return document.querySelectorAll(selector)
}

$('header .user').onclick = function(){
    $('.modal').style.display = 'block'
}
$('.close').onclick = function(){
    $('.modal').style.display = 'none'
}
$('.modal').addEventListener('click',function(e){
    if(e.target.classList.contains('switch-login')){
        $('.modal').classList.remove('register')
        $('.modal').classList.add('login')
    }
    if(e.target.classList.contains('switch-register')){
        $('.modal').classList.remove('login')
        $('.modal').classList.add('register')
    }
},false)