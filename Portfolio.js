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




  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      mybutton.classList.add('active')
    } else {
      // mybutton.style.display = "none";
      mybutton.classList.remove('active')

    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }








let input = document.getElementsByTagName("input"); 

console.log(input[0]);

  

  const scriptURL = 'https://script.google.com/macros/s/AKfycbySpdd8fBCJSa_JR0yu1cn6FdlJKBj01N5zN_0V7IEbsbVfv98Y62qBdVpKyIm1wjjpTg/exec';

  const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon...")
                
                // input[0].value = ""
                
                )
                .catch(error => console.error('Error!', error.message))
            })