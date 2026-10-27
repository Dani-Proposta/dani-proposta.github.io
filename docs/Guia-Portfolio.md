# Portfólio da Dani — guia rápido de manutenção

> **Objetivo:** lembrar como cadastrar projetos e onde alterar cada parte do site. Este guia descreve o portfólio Astro atual; não é uma lista de tarefas pendentes.

## 1. Cadastrar um projeto novo

1. Crie `src/content/projects/nome-do-projeto.md` (nome minúsculo, com hífens). O nome do arquivo define a rota `/projetos/nome-do-projeto/`.
2. Copie o modelo abaixo e substitua pelos **dados reais** do trabalho.
3. Coloque as imagens em `public/images/projects/nome-do-projeto/`, quando houver.
4. Rode `npm run dev` para conferir a página, o catálogo e o destaque; depois `npm run build`.

### Modelo de `.md`

```md
---
title: "Nome do projeto"
summary: "Uma descrição curta, fiel ao trabalho e com pelo menos dez caracteres."
service: "programacao"
technologies:
  - "TypeScript"
  - "Astro"
status: "em-desenvolvimento"
featured: false

# Campos opcionais: apague-os se não forem usados.
repository: "https://github.com/Dani-Proposta/nome-do-projeto"
demo: "https://exemplo.com"
cover: "/images/projects/nome-do-projeto/cover.webp"
coverAlt: "Descrição do que aparece na capa"
gallery:
  - src: "/images/projects/nome-do-projeto/tela-inicial.webp"
    alt: "Descrição da primeira captura de tela"
    caption: "Tela inicial"
  - src: "/images/projects/nome-do-projeto/outra-tela.webp"
    alt: "Descrição da segunda captura de tela"
    caption: "Outra etapa do projeto"
---

## Objetivo

Qual problema ou necessidade o projeto atende?

## Solução e implementação

O que foi desenvolvido? Como funciona?

## Tecnologias e decisões

Quais ferramentas foram utilizadas e por quê?

## Resultados e próximos passos

O que está pronto e o que ainda está em evolução?
```

### Campos e valores válidos

| Campo | Regra |
| --- | --- |
| `title` | Obrigatório; mínimo de 3 caracteres |
| `summary` | Obrigatório; de 10 a 220 caracteres |
| `service` | Obrigatório: `programacao` ou `edicao-video` (conforme `src/data/services.ts`) |
| `technologies` | Obrigatório; ao menos uma tecnologia |
| `status` | **Somente** `em-desenvolvimento` ou `concluido` |
| `featured` | `true` para aparecer entre os destaques da Home; `false` caso contrário. Padrão: `false` |
| `repository`, `demo` | Opcionais; precisam ser URLs completas e válidas |
| `cover`, `coverAlt` | Opcionais; caminho da capa e sua descrição acessível |
| `gallery` | Opcional; lista de `src` + `alt` (obrigatórios por imagem) e `caption` (opcional) |

**Status:** mude diretamente a linha `status:` do `.md` quando o estado do projeto mudar. O arquivo `src/content.config.ts` é a fonte das regras; não use `planejado` ou `em-andamento` sem atualizar o schema primeiro.

**Imagem:** em `public/images/...` coloque o arquivo físico, mas no Markdown use `/images/...` (**sem** `public/`). A capa é usada nos cards do catálogo e do destaque. A galeria aparece na página individual somente quando tiver itens.

**Texto:** cada título `##` do Markdown alimenta o índice da página individual. Não altere componentes Astro para publicar mais um projeto: o catálogo e a página individual são gerados a partir dos `.md`.

## 2. Onde mudar cada coisa

| Quero ajustar… | Arquivo / o que procurar |
| --- | --- |
| **Cores globais** (fundo, roxo, azul, laranja, texto) | `src/styles/global.css` → `:root`, variáveis `--color-background`, `--color-accent`, `--color-accent-blue`, `--color-accent-warm`, `--color-text` |
| **Cores dos títulos brilhantes** | `src/styles/global.css` → `.glow-word`, `.glow-word--blue`, `.glow-word--warm`; variáveis `--text-*` |
| **Brilho, bordas e quadriculado dos painéis** | `src/styles/global.css` → `.tech-panel`, `--panel-energy`, `--tech-grid`; estrutura dos cantos em `src/components/ui/PanelFrame.astro` |
| **Velocidade do feixe que percorre as bordas** | `src/styles/global.css` → `@keyframes panel-beam-orbit`, `--panel-beam-angle`, `animation` e `animation-duration` em `.tech-panel .panel-frame::before` (normal/hover) |
| **Quantidade, tamanho, brilho, posição e velocidade das estrelas** | `src/components/ui/CosmicStarfield.astro` → geração/quantidade das estrelas, parâmetros aleatórios e regras de `animation-duration` / `@keyframes` |
| **Estrelas diferentes ao atualizar a página** | `CosmicStarfield.astro` → script de regeneração aleatória no carregamento; preservar o fallback inicial |
| **Imagem do buraco negro, enquadramento e opacidade** | `src/components/home/CosmicScene.astro` → `src` da imagem e CSS de `.cosmic-scene__art`, `.cosmic-scene__image`, máscaras e `@media` |
| **Texto, botões e espaçamento do Hero** | `src/components/home/Hero.astro`; comportamento do botão em `src/components/ui/CosmicButton.astro` |
| **Posição do quadro “Fluxo Criativo”** | `src/components/home/HeroOrnaments.astro` → `.hero-module` (`right`, `bottom`) |
| **Cards de Serviços, Stack, Destaques, FAQ e Contato** | `src/components/home/ServicesSection.astro`, `StackSection.astro`, `FeaturedProjects.astro`, `FAQ.astro`, `ContactSection.astro` |
| **Quais tecnologias ou serviços listar** | `src/data/stack.ts` e `src/data/services.ts` |
| **Menus e navegação orbital** | `src/components/Header.astro`, `src/components/home/OrbitalNavigation.astro`; marcadores em `src/components/ui/SectionMarker.astro` |
| **Contatos, nome do site e GitHub** | `src/config/site.ts` → `site` e `portfolioContact`; apresentação em `ContactSection.astro` / `Footer.astro` |
| **Catálogo, cards e filtros dos projetos** | `src/pages/projetos/index.astro` e `src/components/ProjectCard.astro` |
| **Página individual e galeria com zoom** | `src/pages/projetos/[id].astro` e `src/components/projects/ProjectGallery.astro` |
| **Quais campos o `.md` aceita** | `src/content.config.ts` → `schema` do projeto |

**Atenção com estilos:** algumas cores e velocidades podem ser definidas localmente nos componentes, não apenas no `global.css`. Se uma mudança global não surtir efeito, procure a classe específica no `.astro`.

**Links das seções:** preserve os IDs `inicio`, `servicos`, `stack`, `projetos`, `faq` e `contato`, pois são usados pela navegação. A navegação do Header também tem links definidos no próprio `Header.astro`.

## 3. Testar e publicar

```powershell
npm run dev       # Conferir enquanto edita
npm run build     # Validar o build
npm run preview   # Ver a versão de produção localmente

git status        # Conferir arquivos modificados
git diff          # Revisar o que mudou
git add docs/GUIA-DO-PORTFOLIO.md
git commit -m "docs: simplify portfolio maintenance guide"
git push
```

A linha `git add` acima registra **somente este guia**, depois que você o colocar em `docs/`. Para publicar projetos ou alterações de código, adicione também os arquivos correspondentes de forma consciente.

**Checklist mínimo:** confirmar capa e galeria, testar links/contatos, verificar celular e desktop, concluir `npm run build`, e conferir a publicação no GitHub Actions.

> **Segurança:** se este guia estiver num repositório público, não coloque senhas, tokens, arquivos privados de clientes ou dados pessoais que não queira divulgar.
