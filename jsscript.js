document.addEventListener('DOMContentLoaded', function() {
    const menuTrigger = document.querySelector('.menu-trigger');
    const menu = document.querySelector('.menu1');

    menuTrigger.addEventListener('mouseover', function() {
        menu.style.transform = 'translateX(0)'; // Exibe o menu
    });

    menuTrigger.addEventListener('mouseout', function() {
        menu.style.transform = 'translateX(-100%)'; 
    });

    menu.addEventListener('mouseover', function() {
        menu.style.transform = 'translateX(0)'; 
    });

    menu.addEventListener('mouseout', function() {
        menu.style.transform = 'translateX(-100%)'; // Esconde o menu
    });

    const tituloElements = document.querySelectorAll('.Titulo, .Titulo2, .Titulo3, .Titulo4, .Titulo5');
    const descricaoElements = document.querySelectorAll('.desc, .Explic, .Explic2, .content2, .Info, .InfoHabilidades, .InfoLocomocao');

    tituloElements.forEach(function(titulo) {
        titulo.classList.add('fadeIn');
    });

    descricaoElements.forEach(function(descricao) {
        descricao.classList.add('fadeIn');
    });

    const arrowDown = document.querySelector('.arrow-down');

    arrowDown.addEventListener('click', function(event) {
        event.preventDefault();
        const secao2 = document.querySelector('#Secao2');
        secao2.classList.remove('ocultar');
        secao2.scrollIntoView({ behavior: 'smooth' });
    });

    let counter = 1;
    setInterval(() => {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 5000);
});
window.onload = function() {

    var radios = document.querySelectorAll('input[type="radio"]');
    
    
    function changeSlide() {
      
        var nextSlide = document.querySelector('input[type="radio"]:checked + input[type="radio"]');
        
        
        if (!nextSlide) {
            nextSlide = document.querySelector('input[type="radio"]:first-of-type');
        }
        
        
        nextSlide.checked = true;
    }
    
    
    setInterval(changeSlide, 3000); 
};

