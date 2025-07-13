document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================================================
    // PARTE 1: LÓGICA PARA GERAR OS PROJETOS DINAMICAMENTE
    // =========================================================================
    
    const projects = [
        {
            image: './projeto_1.jpeg', // URL da imagem
            title: 'Dashboard Desafio Frontend Mentor',
            description: 'Projeto desenvolvido a partir de um desafio do Frontend Mentor para praticar responsividade, organização de componentes e boas práticas de CSS e layout moderno.',
            tags: ['HTML5', 'CSS3', 'JavaScript',],
            liveUrl: 'https://leostarkbr.github.io/Desafio-Frontend-Mentor/', // Link para o projeto online (use '#' se não tiver)
            repoUrl: 'https://github.com/LeoStarkBR/Desafio-Frontend-Mentor' // Link para o GitHub
        },
        {
            image: 'https://images.ctfassets.net/23aumh6u8s0i/6uBzrqHNLlSAoER6HtgDN0/accd8f871b1de37f472b94da4346afa2/python-hero',
            title: 'Automação de Saneamento de Base (RPA)',
            description: 'Script que utiliza PyAutoGUI para extrair dados de sistemas legados e gerar relatórios, economizando horas de trabalho manual - Código Privado.',
            tags: ['Python', 'RPA', 'PyAutoGUI'],
            liveUrl: '', // Deixe em branco se não houver link
            repoUrl: 'https://github.com/LeoStarkBR'
        },
        {
            image: './projeto_2.jpeg',
            title: 'Landing Page Desafio Frontend Mentor',
            description: 'Landing page desenvolvida a partir de um desafio do Frontend Mentor, focando em design responsivo e boas práticas de HTML e CSS.',
            tags: ['HTML5', 'CSS3', 'JavaScript'],
            liveUrl: 'https://leostarkbr.github.io/Landing-Page/',
            repoUrl: 'https://github.com/LeoStarkBR/Landing-Page'
        },
        // <<< adicionar novos projetos aqui >>>
    ];

    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        projects.forEach(project => {
            let cardHTML = `
                <div class="project-card">
                    <img src="${project.image}" alt="Imagem do projeto ${project.title}">
                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
                        <div class="project-links">
            `;
            if (project.liveUrl && project.liveUrl !== '#') {
                cardHTML += `<a href="${project.liveUrl}" target="_blank"><i class="fas fa-external-link-alt"></i> Ver ao Vivo</a>`;
            }
            if (project.repoUrl) {
                cardHTML += `<a href="${project.repoUrl}" target="_blank"><i class="fab fa-github"></i> Código</a>`;
            }
            cardHTML += `</div></div></div>`;
            projectsGrid.innerHTML += cardHTML;
        });
    }

    // =========================================================================
    // PARTE 2: LÓGICA PARA O SELETOR DE TEMA (CLARO/ESCURO)
    // =========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');

    // Função para aplicar o tema e salvar a preferência
    function applyTheme(theme) {
        if (theme === 'light') {
            body.classList.add('light-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            body.classList.remove('light-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        localStorage.setItem('theme', theme);
    }

    // Evento de clique no botão
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });

  
    const savedTheme = localStorage.getItem('theme') || 'dark'; 
    applyTheme(savedTheme);
});