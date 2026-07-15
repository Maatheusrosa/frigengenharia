# 🚀 EnginPro - Quick Start Guide

Bem-vindo! Este guia te ajudará a começar em poucos passos.

## ⚡ Início Rápido (2 minutos)

### Opção 1: Abrir Direto no Navegador

1. Abra o arquivo `index.html` no seu navegador
2. Pronto! A landing page está funcionando

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Opção 2: Usar um Servidor Local

Se você tem Python instalado:

```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

Ou com Node.js:

```bash
# Instalar http-server global
npm install -g http-server

# Executar
http-server
```

Acesse: `http://localhost:8000`

### Opção 3: Live Server (VS Code)

1. Abra a pasta em VS Code
2. Instale a extensão "Live Server"
3. Clique em "Go Live" no rodapé

## 📁 Estrutura de Arquivos

```
enginepro/
├── index.html              ← Arquivo principal
├── css/
│   └── style.css           ← Estilos customizados
├── js/
│   └── script.js           ← Interatividade
├── assets/
│   └── img/                ← Suas imagens aqui
├── README.md               ← Documentação completa
├── CUSTOMIZATION_GUIDE.md  ← Guia de customização
├── manifest.json           ← Configuração PWA
├── sitemap.xml             ← SEO Sitemap
├── robots.txt              ← SEO Robots
└── .gitignore              ← Git ignore
```

## 🎨 Primeiras Customizações

### 1. Trocar Nome da Empresa

Edite `index.html` e busque por `EnginPro`:

```html
<!-- Troque todas as ocorrências de "EnginPro" pelo nome da sua empresa -->
<span class="text-xl font-bold text-black">SuaEmpresa</span>
```

### 2. Trocar Cores

Edite `css/style.css`:

```css
:root {
    --color-black: #SUAS_CORES_AQUI;
    --color-yellow: #SUAS_CORES_AQUI;
}
```

### 3. Adicionar Logo

Edite `index.html`:

```html
<!-- Substitua o ícone padrão -->
<img src="path/to/seu-logo.png" alt="Logo" class="h-8 w-auto">
```

### 4. Atualizar Informações de Contato

Busque a seção "Contact" em `index.html`:

```html
<!-- Localização -->
<p class="text-gray-600">Sua Rua, Numero<br>Sua Cidade, Estado</p>

<!-- Telefone -->
<p class="text-gray-600">(XX) XXXX-XXXX</p>

<!-- Email -->
<p class="text-gray-600">seu-email@empresa.com.br</p>
```

## 🔍 Testando

### Verificar Erros

1. Abra o navegador
2. Pressione `F12` ou `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
3. Vá na aba "Console"
4. Procure por erros vermelhos

### Testar em Mobile

```bash
# Firefox Developer Edition
# Chrome DevTools -> Clique em "Toggle Device Toolbar"

# Ou acesse em seu telefone:
http://seu-ip-local:8000
```

### Checar Performance

No Chrome DevTools:
1. Abra DevTools (F12)
2. Clique em "Lighthouse"
3. Clique em "Analyze page load"

## 📧 Formulário de Contato

Por padrão, o formulário faz uma simulação. Para enviar e-mails reais:

1. **Opção 1**: Integre com EmailJS
2. **Opção 2**: Configure um backend Node.js
3. **Opção 3**: Use um serviço como Formspree

Veja `CUSTOMIZATION_GUIDE.md` para instruções detalhadas.

## 🌐 Deploy (Publicar Online)

### GitHub Pages (Gratuito)

1. Crie um repositório GitHub
2. Faça push dos arquivos
3. Ative "GitHub Pages" nas configurações
4. Pronto!

### Netlify (Gratuito)

1. Acesse https://netlify.com
2. Clique em "New site from Git"
3. Autorize seu GitHub
4. Selecione o repositório
5. Clique em "Deploy"

### Seu Próprio Servidor

```bash
# Via FTP
# 1. Upload dos arquivos para seu servidor
# 2. Configure htaccess (se necessário)
# 3. Teste no seu domínio
```

## 🐛 Troubleshooting

### A página não carrega

- Verifique o console (F12) para erros
- Teste em outro navegador
- Limpe o cache (Ctrl+Shift+Del)

### Imagens não aparecem

- Verifique o caminho das imagens
- Teste URLs externas do Unsplash
- Verifique conexão com internet

### Menu hambúrguer não funciona

- Abra o console (F12)
- Procure por erros JavaScript
- Recarregue a página

### Formulário não envia

- Teste em outro navegador
- Verifique se JavaScript está habilitado
- Abra o console para ver o erro

## 📱 Funcionalidades

✅ Scroll suave para navegação interna
✅ Menu responsivo (funciona em mobile)
✅ Animações de página com AOS
✅ Validação de formulário
✅ Botão voltar ao topo
✅ Navbar com efeito scroll
✅ Cards com hover effects
✅ Totalmente responsivo
✅ SEO otimizado
✅ PWA ready

## 📚 Documentação Completa

Para informações detalhadas, veja:

- **README.md** - Documentação completa
- **CUSTOMIZATION_GUIDE.md** - Guia de customização
- **codigo comentado** - Abra o código HTML/CSS/JS para ler comentários

## 🎯 Checklist para Usar

- [ ] Renomear projeto em `index.html`
- [ ] Trocar logo da empresa
- [ ] Atualizar cores em `css/style.css`
- [ ] Adicionar informações corretas de contato
- [ ] Substituir imagens do portfólio
- [ ] Atualizar textos (Sobre, Projetos, etc)
- [ ] Configurar formulário de contato
- [ ] Testar em mobile
- [ ] Testar em desktop
- [ ] Deploy online

## 💡 Dicas

1. **Backup**: Faça backup antes de editar arquivos
2. **Testes**: Sempre teste em mobile e desktop
3. **Performance**: Otimize imagens antes de usar
4. **SEO**: Atualize meta descriptions
5. **Analytics**: Adicione Google Analytics depois

## 🆘 Precisa de Ajuda?

1. Revisar este arquivo
2. Ler o README.md
3. Consultar CUSTOMIZATION_GUIDE.md
4. Procurar no Google (seu problema específico)
5. Testar no console do navegador (F12)

## 🎉 Pronto!

Sua landing page está pronta para uso!

Se tiver sucesso, considere:
- ⭐ Dar uma estrela
- 💬 Compartilhar feedback
- 🔗 Compartilhar o resultado

---

**Bom desenvolvimento! 🚀**

*Última atualização: 2024*
