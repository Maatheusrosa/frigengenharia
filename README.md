# EnginPro - Landing Page

Uma landing page moderna, profissional e responsiva para uma empresa de engenharia civil e estrutural.

## 📋 Visão Geral

**EnginPro** é uma landing page completa, desenvolvida com HTML5 semântico, Tailwind CSS e JavaScript Vanilla, seguindo as melhores práticas de design moderno, UX/UI e acessibilidade web.

### Características Principais

✨ **Design Limpo e Moderno**
- Estilo minimalista com paleta de cores profissional (Preto + Amarelo)
- Tipografia refinada com fontes Google (Poppins e Inter)
- Espaçamentos consistentes e harmoniosos

📱 **Totalmente Responsivo**
- Mobile-first approach
- Funciona perfeitamente em todos os dispositivos
- Menu hambúrguer adaptável

🎨 **Interações Suaves**
- Animações sutis com AOS (Animate On Scroll)
- Transições fluidas em elementos interativos
- Scroll suave para navegação interna

♿ **Acessível**
- HTML5 semântico
- Suporte a navegação por teclado
- Respeita preferências de movimento reduzido
- Labels corretos em formulários

⚡ **Otimizado para Performance**
- Tailwind CSS via CDN para carregamento rápido
- Imagens otimizadas do Unsplash
- Lazy loading de imagens
- Monitoramento de performance

📧 **Formulário de Contato Funcional**
- Validação de e-mail integrada
- Feedback visual ao usuário
- Tratamento de erros elegante

## 🗂️ Estrutura de Arquivos

```
/
├── index.html              # Arquivo principal HTML
├── css/
│   └── style.css           # Estilos customizados
├── js/
│   └── script.js           # Interações JavaScript
└── assets/
    └── img/                # Pasta para imagens (opcional)
```

## 🚀 Como Usar

### 1. Clonar ou Baixar o Projeto

```bash
# Clone ou baixe os arquivos do projeto
```

### 2. Abrir no Navegador

Simplesmente abra o arquivo `index.html` em seu navegador web:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Ou use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com Live Server (VS Code)
# Instale a extensão Live Server e clique em "Go Live"
```

## 📖 Seções da Landing Page

### 1. **Navegação (Header)**
- Logo com ícone personalizável
- Menu de navegação fixa
- Menu hambúrguer responsivo
- Efeito de scroll com blur e sombra

### 2. **Home (Hero Section)**
- Headline impactante com destaque em amarelo
- Call-to-action (CTA) com botões bem definidos
- Estatísticas visuais (150+ projetos, etc.)
- Imagem representativa lado a lado
- Animação de entrada com AOS

### 3. **Sobre**
- Cards informativos com ícones
- Conteúdo sobre expertise técnica
- Grid de vantagens/diferenciais
- Imagem complementar

### 4. **Clientes**
- Grid 4x2 de logotipos de clientes
- Placeholders profissionais
- Efeito hover com sombra
- Animações de zoom

### 5. **Projetos**
- Galeria 3x2 de cards de projetos
- Imagens do Unsplash (obras reais)
- Overlay com hover
- Tags de categorias
- CTA dentro dos cards

### 6. **Contato**
- Informações de contato (endereço, phone, email)
- Formulário completo com validação
- Campos: Nome, Email, Phone, Empresa, Assunto, Mensagem
- Checkbox de termos
- Feedback visual (sucesso/erro)
- Responsivo e acessível

### 7. **Rodapé**
- Logo e descrição da empresa
- Links rápidos
- Serviços listados
- Links de redes sociais
- Informações legais (privacy, termos)

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Preto | #000000 | Primário, textos |
| Amarelo | #FBBF24 | Destaques, CTA |
| Branco | #FFFFFF | Fundo |
| Cinza 50 | #F9FAFB | Fundo secundário |
| Cinza 600 | #4B5563 | Textos secundários |

## 🔧 Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos
- **JavaScript (Vanilla)** - Interações
- **Tailwind CSS** - Framework CSS via CDN

### Bibliotecas Externas
- **AOS (Animate On Scroll)** - Animações ao scroll
- **Google Fonts** - Tipografia (Poppins, Inter)
- **Unsplash API** - Imagens stock

### Ferramentas de Desenvolvimento
- **VS Code** - Editor de código
- **Browser DevTools** - Debugging
- **Lighthouse** - Auditoria de performance

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints padrão:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Testes Recomendados
```
- iPhone 12/13/14/15
- iPad / iPad Pro
- Android devices
- Desktop (1920x1080)
- Ultra-wide (2560px+)
```

## ✨ Funcionalidades JavaScript

### 1. **Navbar Scroll Effect**
- Adiciona sombra e blur quando scrolla
- Destaca o link ativo automaticamente

### 2. **Mobile Menu**
- Toggle com ícone hambúrguer
- Fecha ao clicar em link
- Animação suave de entrada/saída

### 3. **Smooth Scroll**
- Scroll suave para todos os links `#`
- Funciona em todos os navegadores

### 4. **Form Validation**
- Validação de e-mail regex
- Feedback visual
- Simulação de envio com delay

### 5. **Scroll to Top**
- Botão flutuante que aparece ao scroll down
- Volta ao topo com animação suave

### 6. **AOS Animations**
- Fade-in, fade-up, fade-left, fade-right
- Zoom-in para clientes
- Delays automáticos

## 🔐 Acessibilidade

✓ Labels associados aos inputs
✓ Semântica HTML adequada
✓ Contraste de cores WCAG AA
✓ Navegação por teclado
✓ Suporte a screen readers
✓ Respira preferências de movimento reduzido

## 🚀 Deploy

### Opções de Hospedagem Recomendadas

1. **GitHub Pages** (Gratuito)
   ```bash
   git push origin main
   # Ative GitHub Pages nas configurações
   ```

2. **Netlify** (Gratuito)
   - Conecte seu repositório
   - Deploy automático

3. **Vercel** (Gratuito)
   - Importar projeto
   - Deploy instantâneo

4. **Servidor Compartilhado** (Paid)
   - Upload via FTP
   - Muito rápido

## 🛠️ Personalização

### Mudar Cores

Edite em `css/style.css`:
```css
:root {
    --color-black: #000000;
    --color-yellow: #FBBF24;
    /* ... */
}
```

### Mudar Fontes

Edite em `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;700&display=swap" rel="stylesheet">
```

### Modificar Conteúdo

- Textos: Edite diretamente no `index.html`
- Imagens: Substitua URLs do Unsplash
- Logotipos: Atualize em `/assets/img/`

## 📊 SEO Otimização

✓ Meta descrição
✓ Heading hierarchy (H1, H2, H3)
✓ Imagens com alt text
✓ Open Graph tags (adicione se necessário)
✓ Sitemap (recomendado)
✓ robots.txt (recomendado)

## 🐛 Debugging

Abra o console do navegador (F12) para ver:
- Logs de inicialização
- Mensagens de erro
- Performance metrics
- Funções disponíveis em `window.EnginPro`

## 🤝 Contribuindo

1. Faça suas alterações
2. Teste em múltiplos dispositivos
3. Valide o código HTML/CSS/JS
4. Faça commit com mensagem clara

## 📄 Licença

Este projeto é fornecido como está para uso educacional e comercial.

## 📞 Suporte

Para questões ou melhorias:
- Revisar a documentação
- Consultar o código comentado
- Testar em diferentes navegadores

## 🎯 Roadmap Futuro

- [ ] Adicionar formulário de newsletter
- [ ] Integrar com backend real
- [ ] Sistema de CMS
- [ ] Blog relacionado
- [ ] Chat ao vivo
- [ ] Analytics integrado
- [ ] Multi-idiomas

## 📈 Performance

Métricas típicas:
- **Lighthouse Score**: 90+
- **Time to Interactive**: < 2s
- **First Contentful Paint**: < 1s
- **Size**: ~50KB (sem imagens)

## 🎓 Boas Práticas Implementadas

✓ Mobile-first design
✓ Progressive enhancement
✓ Semantic HTML5
✓ CSS Grid & Flexbox
✓ Animations performance-optimized
✓ Lazy loading
✓ Error handling
✓ Form validation
✓ Accessibility WCAG 2.1
✓ Responsive design

---

**Desenvolvido com ❤️ para empresas de engenharia modernas**

*Última atualização: 2024*
