document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de script: animação de scroll suave ao clicar em um link de navegação
    const links = document.querySelectorAll('nav ul li a');
    
    for (const link of links) {
    link.addEventListener('click', smoothScroll);
    }
    
    function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
    });
    }
    });