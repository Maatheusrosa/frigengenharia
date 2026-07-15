
<!-- Logo -->
<span class="text-xl font-bold text-black">EnginPro</span>

<!-- Title -->
<title>EnginPro | Soluções em Engenharia</title>

<!-- Meta -->
<meta name="description" content="EnginPro - Soluções em engenharia...">

<!-- Footer -->
<span class="text-xl font-bold text-white">EnginPro</span>
```

### 2️⃣ Customizar Cores

**Arquivo**: `css/style.css`

```css
:root {
    --color-black: #000000;        /* Cor primária */
    --color-yellow: #FBBF24;       /* Cor destaque */
    --color-gray-50: #F9FAFB;      /* Fundo secundário */
}
```

**Exemplos de paletas:**

```css
/* Azul + Laranja (Energia) */
--color-black: #0066CC;
--color-yellow: #FF9500;

/* Verde + Branco (Sustentável) */
--color-black: #0D7F3D;
--color-yellow: #FFD700;

/* Roxo + Pink (Moderno) */
--color-black: #6B46C1;
--color-yellow: #EC4899;
```

### 3️⃣ Adicionar Logo Real

**Arquivo**: `index.html`

```html
<!-- Substitua -->
<div class="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
    <span class="text-yellow-400 font-bold text-lg">⚙</span>
</div>

<!-- Por -->
<img src="path/to/seu-logo.png" alt="Logo" class="h-8 w-auto">
```

### 4️⃣ Mudar Textos e Conteúdo

#### Hero Section
```html
<h1 class="text-5xl md:text-6xl font-bold font-poppins text-black mb-6 leading-tight">
    Engenharia de <span class="text-yellow-400">Excelência</span>
</h1>
```

#### Cards de Sobre
```html
<h3 class="text-xl font-bold mb-4 text-black">Seu Titulo Aqui</h3>
<p class="text-gray-600 leading-relaxed">
    Sua descrição aqui...
</p>
```

#### Projetos do Portfólio
```html
<h3 class="text-xl font-bold text-black mb-2">Nome do Projeto</h3>
<p class="text-sm text-gray-600 mb-4">Descrição breve do projeto</p>
```

### 5️⃣ Substituir Imagens

**Arquivo**: `index.html`

Use URLs do Unsplash ou suas próprias imagens:

```html
<!-- Hero Image -->
<img src="https://images.unsplash.com/photo-XXXXX?w=600&fit=crop" alt="Descrição">

<!-- Sobre -->
<img src="https://images.unsplash.com/photo-XXXXX?w=500&fit=crop" alt="Sobre">

<!-- Projetos -->
<img src="https://images.unsplash.com/photo-XXXXX?w=400&h=300&fit=crop" alt="Projeto">
```

**Sites de imagens gratuitas:**
- https://unsplash.com
- https://pexels.com
- https://pixabay.com

### 6️⃣ Adicionar Clientes Reais

**Arquivo**: `index.html` - Seção Clientes

```html
<div class="w-full h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
    <img src="path/to/logo-cliente.png" alt="Nome do Cliente" class="max-h-12 w-auto">
</div>
```

### 7️⃣ Atualizar Informações de Contato

**Arquivo**: `index.html` - Seção Contact Info

```html
<!-- Localização -->
<p class="text-gray-600">
    Sua Rua, 000<br>
    Sua Cidade, Estado - CEP
</p>

<!-- Telefone -->
<p class="text-gray-600">
    (XX) XXXX-XXXX<br>
    (XX) XXXXX-XXXX
</p>

<!-- Email -->
<p class="text-gray-600">
    contato@suaempresa.com.br<br>
    projetos@suaempresa.com.br
</p>
```

### 8️⃣ Configurar Envio de E-mail

**Arquivo**: `js/script.js`

Altere a função `handleContactForm()` para integrar com seu backend:

```javascript
// Substitua a seção de simulação por:
const response = await fetch('https://seu-api.com/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
});

if (response.ok) {
    showFormMessage('✓ Mensagem enviada com sucesso!', 'success');
    form.reset();
} else {
    showFormMessage('Erro ao enviar. Tente novamente.', 'error');
}
```

### 9️⃣ Adicionar Google Analytics

**Arquivo**: `index.html` - Antes de `</head>`

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 🔟 Customizar Fontes

**Arquivo**: `index.html` - No `<head>`

```html
<!-- Remova -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">

<!-- E adicione suas fontes -->
<link href="https://fonts.googleapis.com/css2?family=NovaFont:wght@300;700&display=swap" rel="stylesheet">
```

**Arquivo**: `css/style.css`

```css
:root {
    --font-poppins: 'NovaFont', sans-serif;
}
```

## 🎨 Mudanças Avançadas

### Adicionar Seção Nova

1. Copie uma seção existente
2. Dê um novo `id`
3. Atualize a navegação
4. Customize o conteúdo

```html
<!-- Exemplo: Nova seção de Tecnologias -->
<section id="tech" class="py-20 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">Nossas Tecnologias</h2>
        <!-- Seu conteúdo aqui -->
    </div>
</section>
```

### Mudar Layout de Cards

Altere `grid-cols-3` para `grid-cols-2` ou `grid-cols-1`:

```html
<!-- Antes -->
<div class="grid md:grid-cols-3 gap-8">

<!-- Depois -->
<div class="grid md:grid-cols-2 gap-8">
```

### Adicionar Animação Customizada

**Arquivo**: `css/style.css`

```css
@keyframes bounce-slow {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

.animate-bounce-slow {
    animation: bounce-slow 2s infinite;
}
```

**Usar em HTML:**
```html
<div class="animate-bounce-slow">Seu elemento</div>
```

## 📦 Checklist Final

Antes de publicar:

- [ ] Nomes da empresa atualizados
- [ ] Informações de contato corretas
- [ ] Logo da empresa adicionada
- [ ] Imagens pertinentes carregadas
- [ ] Descrições de projetos preenchidas
- [ ] Clientes reais adicionados
- [ ] Cores personalizadas
- [ ] Testado em mobile
- [ ] Testado em desktop
- [ ] Links internos funcionando
- [ ] Formulário enviando
- [ ] SEO básico configurado

## 🚀 Deploy Checklist

1. **Testes Finais**
   ```bash
   # Verificar erros no console
   # Testar formulário
   # Verificar responsividade
   ```

2. **Otimização**
   ```bash
   # Comprimir imagens
   # Minificar CSS/JS (opcional)
   # Verificar performance
   ```

3. **Deploy**
   - [ ] Conteu atualizado
   - [ ] Links funcionando
   - [ ] Formulário integrado
   - [ ] Analytics configurado

## 🆘 Troubleshooting

### Imagens não carregam
- Verifique se a URL está correta
- Use `https://` ao invés de `http://`
- Teste em navegador privado

### Formulário não envia
- Verifique o console (F12)
- Configure o backend correto
- Teste com dados válidos

### Animações lentas
- Reduza o `duration` no AOS
- Verifique performance do navegador
- Desative em dispositivos antigos

### Layout quebrado no mobile
- Verifique viewport meta tag
- Teste em device real
- Use Chrome DevTools mobile

## 📞 Suporte

Por dúvidas sobre customização:
1. Revise a documentação no README.md
2. Consulte comentários no código
3. Teste no console do navegador

---

**Parabéns! Sua landing page está pronta para customização! 🎉**
