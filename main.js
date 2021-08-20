const harmburger = document.querySelector('.harmburger')
let menuOpen = false;
let nav = document.querySelectorAll('.list-nav')


harmburger.addEventListener('click',() => {
    if(!menuOpen){
        harmburger.classList.add('open');
        menuOpen = true;
        nav.forEach((navs) => {
            navs.classList.toggle('Nav')
        })
    }
    else{
        harmburger.classList.remove('open');
        menuOpen = false;
        nav.forEach((navs) => {
          navs.classList.remove("Nav");
        });
        
    }
})