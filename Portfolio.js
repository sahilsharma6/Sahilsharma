let ham = document.querySelector('.hamMenu')
let close = document.querySelector('.close')
let menu = document.querySelector('.menu')
let navbar = document.querySelector('.navbar')

function hamMenu(){
    // alert(9)
    close.classList.toggle('c')
    menu.classList.toggle('m')
    navbar.classList.toggle('active')
    
  }

  

  const scriptURL = 'https://script.google.com/macros/s/AKfycbySpdd8fBCJSa_JR0yu1cn6FdlJKBj01N5zN_0V7IEbsbVfv98Y62qBdVpKyIm1wjjpTg/exec';

  const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })