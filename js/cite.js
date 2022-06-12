document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('.header__nav-logo--before')
    let menu = document.querySelector('.header__nav-menu')
    btn.addEventListener('click', () => {
        menu.classList.toggle('show')
        btn.classList.toggle('rotate')
    })
    let activeCard = 0;
    let cards = document.querySelectorAll('.card')
    let prev = document.querySelector('.swipe-left')
    prev.addEventListener('click', () => {
        if (activeCard != 0)
            activeCard--
        else
            activeCard = cards.length - 1
        cards.forEach((element, index) => {
            element.classList.remove('active')
            if (index === activeCard)
                element.classList.add('active')
        })
    })
    let next = document.querySelector('.swipe-right')
            next.addEventListener('click', () => {
                if (activeCard != cards.length-1) 
                activeCard++
                else 
                    activeCard = 0
                cards.forEach((element, index) => {
                    element.classList.remove('active')
                    if (index === activeCard)
                        element.classList.add('active')
                })
            })
    
})
