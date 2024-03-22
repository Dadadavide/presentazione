function sum( a, b ){
    return ( a + b )
}

let navbarTitle = document.querySelector('h1')
let navbar = document.querySelector('nav')

function handleScroll() {
    let scrollDistance = window.scrollY
    if(scrollDistance > 120){
        console.log('DISTANCE: ', window.scrollY)
        navbar.classList.add('bg-beige')
        navbarTitle.classList.add('text-scroll')
    } else if (scrollDistance <= 120){
        navbar.classList.remove('bg-beige')
        navbarTitle.classList.remove('text-scroll')
    }
}

window.addEventListener('scroll', handleScroll)
