
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos necessários
    const navLinks = document.querySelectorAll('.nav-links li');
    const sections = document.querySelectorAll('section');
    


    // Função para mostrar a seção selecionada
    function showSection(sectionId) {
        // Esconde todas as seções
        sections.forEach(section => {
            section.classList.remove('active');
        });
        


        // Remove a classe active de todos os itens de navegação
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        // Mostra a seção selecionada
        document.getElementById(sectionId).classList.add('active');
        // Ativa o item de navegação correspondente
        document.querySelector(`.nav-${sectionId.split('-')[0]}`).classList.add('active');
        // Atualiza o indicador (opcional)
        updateIndicator(sectionId);
    }
    


    // Função para atualizar o indicador de posição
    function updateIndicator(sectionId) {
        const indicator = document.querySelector('.nav-indicator');
        const activeLink = document.querySelector(`.nav-${sectionId.split('-')[0]}`);
        
        if (activeLink) {
            const linkRect = activeLink.getBoundingClientRect();
            const navRect = document.querySelector('.nav-links').getBoundingClientRect();
            
            indicator.style.left = `${linkRect.left - navRect.left + linkRect.width/4}px`;
            indicator.style.width = `${linkRect.width/2}px`;
        }
    }
    


    // Adiciona event listeners para cada item de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.classList.contains('nav-home') ? 'home-area' :
                             this.classList.contains('nav-love') ? 'love-area' :
                             'star-area';
            showSection(sectionId);
        });
    }); 
    // Inicializa o indicador na posição inicial
    updateIndicator('home-area');
});