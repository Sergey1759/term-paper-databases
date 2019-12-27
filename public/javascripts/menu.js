let menu = document.getElementById('menu');
let menu_active = document.getElementById('menu_active');
let exit = document.getElementById('exit');
menu.addEventListener( "click" , () => {
        menu_active.style.display = "block";
        menu.style.display = 'none';
});
exit.addEventListener( "click" , () => {
    menu_active.classList.add('animation_out');
    setTimeout(()=>{
    menu_active.style.display = "none";
    menu.style.display = 'block';
    menu_active.classList.remove('animation_out');
    },900)
});