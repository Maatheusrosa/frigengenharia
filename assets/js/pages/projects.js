// ====================================
// PROJECTS PAGE - MODAL & FILTERS
// ====================================

const projects = [
    {
        id: 1,
        title: "Edifício Comercial Centro",
        category: "Comercial",
        emoji: "🏢",
        description: "Estrutura metálica com 25 pavimentos e fundações profundas em área de grande circulação.",
        details: "Projeto complexo de edifício comercial desenvolvido no centro da cidade, com 25 pavimentos, sistema de estacionamento subterrâneo com 3 níveis e estrutura antisísmica. Utilizamos análise FEM avançada e metodologia BIM para coordenação completa do projeto.",
        stats: { duration: "24 meses", area: "45.000m²", employees: "80+" },
        tags: ["Estrutura Metálica", "BIM", "Análise FEM"]
    },
    {
        id: 2,
        title: "Ponte Estaiada Moderna",
        category: "Infraestrutura",
        emoji: "🌉",
        description: "Obra de infraestrutura com tecnologia de ponta em cabos tensionados, 1.2km de extensão.",
        details: "Ponte estaiada de grande porte com 1.2km de comprimento, utilizando tecnologia de cabos tensionados de alta resistência. Projeto estrutural inovador que considerou aspectos geotécnicos complexos, análise de ventos e simulações dinâmicas.",
        stats: { duration: "36 meses", length: "1.200m", capacity: "50.000v/dia" },
        tags: ["Infraestrutura", "Análise FEM", "Dinâmica"]
    },
    {
        id: 3,
        title: "Complexo Industrial",
        category: "Industrial",
        emoji: "🏭",
        description: "Galpão industrial otimizado com sistemas de suporte avançado e tecnologia sustentável.",
        details: "Instalação industrial com galpão de grande vão (120m x 80m), sistemas de suporte otimizado para linhas de produção, e integração de tecnologias sustentáveis como painéis solares e coleta de água.",
        stats: { duration: "18 meses", area: "9.600m²", cost: "$2,5M" },
        tags: ["Industrial", "CAD 3D", "Sustentável"]
    },
    {
        id: 4,
        title: "Estádio Multiuso",
        category: "Comercial",
        emoji: "🏟️",
        description: "Estrutura de concreto protendido com 60.000 lugares e sistemas acústicos avançados.",
        details: "Estádio de grande capacidade com 60.000 lugares, estrutura de concreto protendido, cobertura retrátil parcial e sistemas de acústica avançados. Inclui instalações de valor agregado como centro de treinamento e espaços VIP.",
        stats: { duration: "42 meses", capacity: "60.000 lugares", area: "58.000m²" },
        tags: ["Concreto Protendido", "Acústica", "Cobertura"]
    },
    {
        id: 5,
        title: "Residencial Premium",
        category: "Residencial",
        emoji: "🏘️",
        description: "Torre residencial com 40 pavimentos e estrutura antisísmica com tecnologia inteligente.",
        details: "Torre residencial de luxo com 40 pavimentos, 200 unidades, estrutura antisísmica, sistemas inteligentes de automação residencial e coberturas verdes. Design arquitetônico contemporâneo com sustentabilidade integrada.",
        stats: { duration: "30 meses", floors: "40", units: "200" },
        tags: ["Residencial", "Sustentável", "Inteligente"]
    },
    {
        id: 6,
        title: "Terminal Aeroportuário",
        category: "Infraestrutura",
        emoji: "✈️",
        description: "Estrutura de vidro e aço com cobertura em malha espacial e 45.000m² de área.",
        details: "Terminal expansivo com estrutura inovadora de vidro e aço, cobertura em malha espacial para movimento natural de ar, áreas de check-in otimizadas, retail e restaurantes integrados. Projeto com foco em segurança, eficiência e sustentabilidade.",
        stats: { duration: "28 meses", area: "45.000m²", capacity: "20M pax/ano" },
        tags: ["Malha Espacial", "Vidro Estrutural", "BIM"]
    },
    {
        id: 7,
        title: "Condomínio Horizontal",
        category: "Residencial",
        emoji: "🏠",
        description: "Projeto de loteamento com 150 residências e infraestrutura completa de segurança.",
        details: "Loteamento residencial planejado com 150 casas, infraestruura completa de saneamento, urbanização, segurança 24h, áreas de lazer e comunitárias. Projeto de desenvolvimento urbano sustentável.",
        stats: { duration: "20 meses", units: "150", area: "85 hectares" },
        tags: ["Loteamento", "Infraestrutura", "Urbanização"]
    },
    {
        id: 8,
        title: "Planta de Manufatura",
        category: "Industrial",
        emoji: "🏗️",
        description: "Instalação industrial com linhas de produção automatizadas e segurança integrada.",
        details: "Fábrica moderna com linhas de produção automatizadas, sistemas de segurança integrados, automação patrimonial, e integração de IoT para monitoramento de processos em tempo real.",
        stats: { duration: "22 meses", area: "15.000m²", investment: "$3,8M" },
        tags: ["Manufatura", "Automação", "IoT"]
    },
    {
        id: 9,
        title: "Shopping Center",
        category: "Comercial",
        emoji: "🏪",
        description: "Centro comercial com 180 lojas, cinema e alimentação em estrutura inovadora.",
        details: "Shopping center de grande porte com 180 lojas, cinema multiplex, praça de alimentação, estacionamento inteligente para 2.000 veículos e áreas dedicadas a lazer e entretenimento familiar.",
        stats: { duration: "32 meses", stores: "180", area: "75.000m²" },
        tags: ["Comercial", "BIM", "Estacionamento Inteligente"]
    }
];

/**
 * Open Project Modal
 */
function openProjectModal(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <h2 style="font-size: 2rem; font-weight: 700; color: #000; margin-bottom: 1rem;">${project.title}</h2>
        <p style="color: #FBBF24; font-weight: 600; text-transform: uppercase; font-size: 0.85rem; margin-bottom: 1rem;">${project.category}</p>
        <div style="font-size: 3rem; margin-bottom: 1.5rem;">${project.emoji}</div>
        
        <p style="color: #4B5563; font-size: 1.05rem; line-height: 1.6; margin-bottom: 2rem;">${project.details}</p>
        
        <div class="project-stats">
            ${Object.entries(project.stats).map(([key, value]) => `
                <div class="stat">
                    <div class="stat-value">${value}</div>
                    <div class="stat-label">${key.charAt(0).toUpperCase() + key.slice(1)}</div>
                </div>
            `).join('')}
        </div>
        
        <div style="margin-top: 2rem;">
            <h3 style="font-weight: 700; margin-bottom: 1rem;">Tecnologias Utilizadas</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
                ${project.tags.map(tag => `<span class="tag" style="background-color: #F0F0F0; padding: 0.5rem 1rem; font-size: 0.9rem;">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Close Project Modal
 */
function closeProjectModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

/**
 * Initialize Project Filters
 */
function handleProjectFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            document.querySelectorAll('.project-card').forEach(card => {
                const category = card.dataset.category;
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
}

/**
 * Initialize Projects Page
 */
function initializeProjectsPage() {
    console.log('🔧 Initializing projects page...');
    handleProjectFilters();
    console.log('✓ Projects page initialized!');
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initializeProjectsPage);
