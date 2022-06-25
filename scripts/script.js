
        const menuHamburguer = document.getElementById('menuHamburguer')
        const menu = document.getElementById('menu')

        menuHamburguer.addEventListener('click', () => {
            if(menu.style.display == 'grid'){
                menu.style.display = 'none'
                menuHamburguer.style.backgroundImage = 'url(/assets/menuHamburguer.png)'
            } else{
                menu.style.display = 'grid'
                menuHamburguer.style.backgroundImage = 'url(/assets/closeIcon.png)'
            }


        })
