
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

        function validarDominio() {
            var emailInput = document.getElementById("form-email").value;
            var aparicao = emailInput.substring(emailInput.indexOf("@") + 1, emailInput.length)
            if(aparicao != "pokecore.com.br") {
                alert("O domínio precisa ser pokecore.com.br");
            }
        }
