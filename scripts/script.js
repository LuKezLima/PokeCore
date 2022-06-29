
        const menuHamburguer = document.getElementById('menuHamburguer')
        const menu = document.getElementById('menu')

        menuHamburguer.addEventListener('click', () => {
           
            if(menu.style.display == 'grid'){
                menu.style.display = 'none'
                menuHamburguer.src = './assets/menuHamburguer.png'
            } else{
                menu.style.display = 'grid'
                menuHamburguer.src = './assets/closeIcon.png'
                menuHamburguer.style.width = '35px'
            }


        })
