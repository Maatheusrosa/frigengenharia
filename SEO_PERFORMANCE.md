# 📊 EnginPro - SEO & Performance Guide

Otimizações e melhores práticas para melhorar visibilidade e performance.

## 🔍 SEO Checklist

### Meta Tags (No HTML Head)

```html
<!-- Básico -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Descrição clara da sua empresa (150-160 caracteres)">
<meta name="keywords" content="engenharia, projetos, construção">

<!-- Open Graph (Redes Sociais) -->
<meta property="og:title" content="EnginPro | Soluções em Engenharia">
<meta property="og:description" content="Sua descrição aqui">
<meta property="og:image" content="https://seu-dominio.com/og-image.jpg">
<meta property="og:url" content="https://seu-dominio.com">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="EnginPro">
<meta name="twitter:description" content="Sua descrição">
<meta name="twitter:image" content="https://seu-dominio.com/og-image.jpg">

<!-- Canonical (Importante!) -->
<link rel="canonical" href="https://seu-dominio.com/">

<!-- Prefetch DNS para APIs externas -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://fonts.gstatic.com">
```

### Estrutura de Headings

✅ **Use um único H1 por página (geralmente no hero)**

```html
<h1>Engenharia de Excelência</h1>

<!-- H2 para seções principais -->
<h2>Sobre a EnginPro</h2>
<h2>Portfólio de Projetos</h2>

<!-- H3 para subsecções -->
<h3>Expertise Técnica</h3>
```

### Alt Text em Imagens

```html
<!-- ❌ Errado -->
<img src="project.jpg">

<!-- ✅ Certo -->
<img src="project.jpg" alt="Edifício comercial com 25 pavimentos estrutura em aço">
```

### Schema Markup (JSON-LD)

Adicione antes de `</body>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EnginPro",
  "url": "https://seu-dominio.com",
  "logo": "https://seu-dominio.com/logo.png",
  "description": "Soluções em engenharia civil e estrutural",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Paulista, 1000",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01310-100",
    "addressCountry": "BR"
  },
  "telephone": "(11) 3333-4444",
  "email": "contato@enginepro.com.br",
  "sameAs": [
    "https://www.linkedin.com/company/enginepro",
    "https://www.instagram.com/enginepro"
  ]
}
</script>
```

## ⚡ Performance Otimization

### 1. Compressão de Imagens

```bash
# Usar serviços online:
# - TinyPNG.com
# - CompressJPEG.com
# - ImageOptim

# Ou via CLI:
# imagemin img/*.jpg --out-dir=img/compressed
```

### 2. Minificação (Opcional)

```html
<!-- CSS minificado -->
<link rel="stylesheet" href="css/style.min.css">

<!-- JS minificado -->
<script src="js/script.min.js"></script>
```

### 3. Cache Headers (No Servidor)

```apache
# .htaccess (Apache)
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "A31536000"
    ExpiresByType image/png "A31536000"
    ExpiresByType image/gif "A31536000"
    ExpiresByType application/javascript "A31536000"
    ExpiresByType text/css "A31536000"
</IfModule>
```

### 4. Lazy Loading

```html
<!-- HTML5 Native Lazy Loading -->
<img src="placeholder.jpg" loading="lazy" alt="">

<!-- Ou com Intersection Observer (no JS) -->
<img data-src="image.jpg" alt="" class="lazy">
```

### 5. Preload/Prefetch

```html
<!-- Para recursos críticos -->
<link rel="preload" as="font" href="fonts.woff2" crossorigin>
<link rel="preload" as="style" href="css/style.css">

<!-- Para recursos secundários -->
<link rel="prefetch" href="next-page.html">
```

## 📱 Mobile Optimization

### Viewport Meta Tag ✅

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Touch-Friendly Elements

```css
/* Botões devem ter no mínimo 44x44px */
button {
    min-height: 44px;
    min-width: 44px;
    padding: 12px 16px;
}

/* Espaçamento entre links */
a {
    padding: 8px;
}
```

### Mobile-First CSS

```css
/* Comece no mobile */
.container {
    font-size: 16px;
    padding: 16px;
}

/* Depois escale para desktop */
@media (min-width: 768px) {
    .container {
        font-size: 18px;
        padding: 32px;
    }
}
```

## 🎯 WebVitals (Core Web Vitals)

### Largest Contentful Paint (LCP)
- **Meta**: < 2.5s
- **Melhorar**: Otimizar imagens hero, reduzir JS

### First Input Delay (FID)
- **Meta**: < 100ms
- **Melhorar**: Code splitting, remover JS bloqueador

### Cumulative Layout Shift (CLS)
- **Meta**: < 0.1
- **Melhorar**: Reservar espaço para imagens, ads

## 🔐 Segurança

### HTTPS (Obrigatório)

```bash
# Todos os navegadores agora alertam sobre HTTP
# Use Let's Encrypt (gratuito) ou seu provedor
```

### Content Security Policy

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'">
```

### X-UA-Compatible

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

## 📊 Analytics Setup

### Google Analytics 4

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Search Console

1. Acesse https://search.google.com/search-console
2. Adicione sua propriedade
3. Valide com HTML tag
4. Envie sitemap.xml
5. Monitore erros de rastreamento

## ✅ Tools de Auditoria

### Lighthouse (Chrome DevTools)

```
F12 -> Lighthouse -> Analyze page load
```

**Metas:**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

### PageSpeed Insights

https://pagespeed.web.dev

### GTmetrix

https://gtmetrix.com

### Ahrefs

https://ahrefs.com (Ferramenta paga)

## 🗂️ Arquivo Robots.txt

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://seu-dominio.com/sitemap.xml
```

## 🗺️ Arquivo Sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seu-dominio.com/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 🔗 Backlinks & Authority

### Estratégias SEO Off-page

1. **Criar conteúdo de qualidade** → Mais compartilhamentos
2. **Diretórios de negócios** → Google My Business
3. **Redes sociais** → LinkedIn, Instagram
4. **Parceria com blogs** → Artigos convidados
5. **Comunicados de imprensa** → Cobertura mídia

### Google My Business

1. Acesse https://business.google.com
2. Crie/Reivindicque seu negócio
3. Complete todas as informações
4. Adicione fotos e horário
5. Responda reviews

## 📈 Keyword Research

### Ferramentas Gratuitas

- Google Keyword Planner (requer Google Ads)
- Ubersuggest (versão grátis)
- AnswerThePublic.com
- Semrush (versão grátis limitada)

### Estratégia de Keywords

```
Foco em long-tail keywords:
❌ "engenharia"
✅ "empresa de engenharia civil em São Paulo"
✅ "projetos de estrutura metálica"
```

## 📝 Content SEO

### Estrutura de Página Ótima

```
1. URL clara: /projetos/edificio-comercial (não: /p/234)
2. H1 único e descritivo
3. Meta description: 150-160 caracteres
4. Parágrafos curtos (3-5 linhas)
5. Listas com bullets
6. Links internos relevantes
7. Call-to-action clara
```

### Exemplo de Meta Description

```html
<!-- ❌ Errado -->
<meta name="description" content="Welcome">

<!-- ✅ Certo -->
<meta name="description" content="Engenharia de excelência com 15 anos de experiência. Projetos em estrutura civil, metálica e infraestrutura. Confira nosso portfólio.">
```

## 🚀 Pre-Launch Checklist

- [ ] Google Search Console ativado
- [ ] Google Analytics configurado
- [ ] Google My Business reivindicado
- [ ] Sitemap.xml submetido
- [ ] Robots.txt criado
- [ ] Meta descriptions preenchidas
- [ ] Schema Markup adicionado
- [ ] OG Tags configuradas
- [ ] Lighthouse score 90+
- [ ] Mobile responsivo testado
- [ ] Formulário testado
- [ ] HTTPS ativo
- [ ] 404 page customizada (opcional)

## 📞 Links Importantes

- [Google Search Central](https://developers.google.com/search)
- [MDN Web Docs](https://developer.mozilla.org)
- [Web.dev](https://web.dev)
- [Schema.org](https://schema.org)

---

**Com essas otimizações, sua landing page terá excelente performance e visibilidade! 📈**
