# 🏗️ EnginPro - Índice de Arquivos

Guia rápido para encontrar o que precisa.

## 📂 Estrutura Completa

```
enginepro/
│
├── 📄 index.html                    ← ARQUIVO PRINCIPAL (abra isto!)
│
├── 📁 css/
│   └── 🎨 style.css                 ← Estilos customizados
│
├── 📁 js/
│   └── ⚙️ script.js                  ← JavaScript interativo
│
├── 📁 assets/img/                   ← Suas imagens aqui
│
├── 🔧 Arquivos de Configuração
│   ├── manifest.json                ← PWA (web app)
│   ├── robots.txt                   ← SEO (crawlers)
│   ├── sitemap.xml                  ← SEO (mapa do site)
│   ├── .htaccess                    ← Servidor Apache
│   └── .gitignore                   ← Git ignore
│
└── 📚 Documentação
    ├── README.md                    ← Comece AQUI
    ├── QUICK_START.md               ← 2 minutos para começar
    ├── CUSTOMIZATION_GUIDE.md       ← Como personalizar
    ├── SEO_PERFORMANCE.md           ← Otimizações
    └── PROJECT_SUMMARY.md           ← Resumo do projeto
```

---

## 📖 Por Onde Começar?

### 🟢 Iniciante (Primeira Vez)

1. Leia: **QUICK_START.md**
2. Abra: **index.html** no navegador
3. Explore o código

### 🟡 Desenvolvedor

1. Clone o repositório
2. Personalize em **CUSTOMIZATION_GUIDE.md**
3. Otimize em **SEO_PERFORMANCE.md**
4. Deploy com confiança

### 🔴 Avançado

1. Modifique arquivo por arquivo
2. Leia código comentado
3. Configure setup específico
4. Otimize para suas necessidades

---

## 🎯 Principais Arquivos por Tarefa

### "Como fazer..."

| Tarefa | Arquivo | Seção |
|--------|---------|-------|
| Começar rápido | `QUICK_START.md` | Início Rápido |
| Trocar cores | `css/style.css` | `:root` |
| Adicionar logo | `index.html` | Navbar |
| Mudar textos | `index.html` | Procure pelo texto |
| Customizar textos | `CUSTOMIZATION_GUIDE.md` | Mudar Textos |
| Configurar SEO | `SEO_PERFORMANCE.md` | SEO Checklist |
| Melhorar performance | `SEO_PERFORMANCE.md` | Performance |
| Deploy online | `QUICK_START.md` | Deploy |
| Integrar formulário | `CUSTOMIZATION_GUIDE.md` | Configurar Envio |
| Adicionar Google Analytics | `SEO_PERFORMANCE.md` | Analytics Setup |

---

## 📋 Arquivos Editáveis

### 🔴 EDITAR PRIMEIRO

```
1. index.html             ← Conteúdo principal
2. css/style.css          ← Cores e estilos
3. js/script.js           ← Funcionalidades
```

### 🟡 EDITAR DEPOIS

```
4. manifest.json          ← PWA
5. robots.txt             ← SEO
6. sitemap.xml            ← SEO
7. .htaccess              ← Servidor
```

### 🟢 REFERÊNCIA

```
- README.md
- QUICK_START.md
- CUSTOMIZATION_GUIDE.md
- SEO_PERFORMANCE.md
- PROJECT_SUMMARY.md
```

---

## 🔄 Fluxo de Trabalho Recomendado

### 1️⃣ Setup Inicial
```
✓ Leia QUICK_START.md
✓ Abra index.html no navegador
✓ Teste em mobile
```

### 2️⃣ Personalização
```
✓ Edite nome da empresa
✓ Troque logo
✓ Customize cores
✓ Atualize conteúdo
```

### 3️⃣ Otimização
```
✓ Configure SEO (SEO_PERFORMANCE.md)
✓ Otimize imagens
✓ Teste performance
✓ Valide HTML/CSS
```

### 4️⃣ Deploy
```
✓ Teste em múltiplos dispositivos
✓ Funcionalidades OK?
✓ Deploy online
✓ Monitore analytics
```

---

## 🎨 Guia de Estilos

### Cores

**Edite em**: `css/style.css` → `:root`

```css
--color-black: #000000;       /* Primária */
--color-yellow: #FBBF24;      /* Destaque */
--color-gray-50: #F9FAFB;     /* Fundo */
```

### Fontes

**Edite em**: `index.html` → `<head>` Google Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Espaçamentos

**Edite em**: `css/style.css` ou use Tailwind no HTML

```css
padding: 16px;    /* Mobile */
padding: 32px;    /* Desktop */
```

---

## 🔧 Funcionalidades por Arquivo

### index.html (Estrutura)

- Navbar com menu
- Hero section
- Seção Sobre
- Grid Clientes
- Galeria Projetos
- Formulário Contato
- Footer

### css/style.css (Estilos)

- Definições de cores
- Animações customizadas
- Responsive design
- Efeitos hover
- Estados ativos

### js/script.js (Funcionalidades)

- Navbar scroll effect
- Menu mobile toggle
- Smooth scroll
- Form validation
- Scroll to top
- AOS initialization
- Performance monitoring

---

## 🚀 Quick Commands

### Abrir Servidor Local

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# Live Server (VS Code)
# Clique em "Go Live"
```

### Testar em Mobile

```bash
# Descubra seu IP
ipconfig getifaddr en0  # Mac
hostname -I             # Linux

# Acesse em seu telefone
http://seu-ip-local:8000
```

### Deploy Rápido

```bash
# GitHub Pages
# 1. Push para main
# 2. Ative Pages nas configurações

# Netlify
# 1. Conecte repo
# 2. Clique Deploy

# Vercel
# 1. Importe projeto
# 2. Deploy automático
```

---

## 📞 Problemas Comuns

### Imagens não carregam
👉 Arquivo: `QUICK_START.md` → Troubleshooting

### Formulário não funciona
👉 Arquivo: `CUSTOMIZATION_GUIDE.md` → Configurar Envio

### Layout quebrado em mobile
👉 Arquivo: `index.html` → Verifique viewport meta tag

### Performance lenta
👉 Arquivo: `SEO_PERFORMANCE.md` → Performance Optimization

---

## ✅ Checklist Final

Antes de publicar:

- [ ] Conteúdo atualizado em `index.html`
- [ ] Cores customizadas em `css/style.css`
- [ ] Logo adicionada
- [ ] Imagens trocadas
- [ ] Testado em mobile e desktop
- [ ] Formulário funciona
- [ ] SEO checklist completo
- [ ] Performance verificada
- [ ] Publicado online

---

## 🎓 Estrutura de Aprendizado

```
├── 1. QUICK_START.md
│   └─ Para começar em 2 minutos
│
├── 2. README.md
│   └─ Para entender o projeto
│
├── 3. CUSTOMIZATION_GUIDE.md
│   └─ Para personalizar
│
├── 4. SEO_PERFORMANCE.md
│   └─ Para otimizar
│
└── 5. Código fonte
    └─ Para aprender avançado
```

---

## 🎯 Metas do Projeto

✅ Landing page profissional
✅ Totalmente responsiva
✅ SEO otimizado
✅ Performance elevada
✅ Acessível (WCAG)
✅ PWA ready
✅ Fácil de customizar
✅ Bem documentado

---

## 📚 Recursos Externos

- [Tailwind CSS](https://tailwindcss.com)
- [AOS Library](https://michalsnik.github.io/aos/)
- [MDN Docs](https://developer.mozilla.org)
- [Web.dev](https://web.dev)
- [Schema.org](https://schema.org)

---

## 🆘 Precisa de Ajuda?

1. **Comece**: Leia `QUICK_START.md`
2. **Procure**: Use Ctrl+F nos docs
3. **Estude**: Leia código comentado
4. **Teste**: Abra console (F12)
5. **Pesquise**: Google seu erro específico

---

## 📸 Resumo Visual

```
┌─────────────────────────────────┐
│      TAB DO NAVEGADOR           │
│   EnginPro | Soluções           │
├─────────────────────────────────┤
│  [LOGO]  Home | Sobre | Contato │
├─────────────────────────────────┤
│                                 │
│    HERO SECTION - GRANDE       │
│    Engenharia de Excelência     │
│    [BOTÕES CTA]                │
│                                 │
├─────────────────────────────────┤
│  SOBRE | CLIENTES | PROJETOS    │
│  CONTATO | FOOTER               │
└─────────────────────────────────┘
```

---

**Pronto para começar? Abra `QUICK_START.md! 🚀`**
