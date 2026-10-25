# Portfólio — Dani

Portfólio profissional desenvolvido com **Astro, TypeScript e CSS**, criado para apresentar projetos, habilidades e serviços de desenvolvimento de software e edição de vídeo.

A proposta visual combina uma atmosfera cósmica com elementos de interface tecnológica: painéis luminosos, navegação por seções, tipografia destacada e um campo de estrelas dinâmico.

**Site:** [dani-proposta.github.io](https://dani-proposta.github.io/)  
**GitHub:** [@Dani-Proposta](https://github.com/Dani-Proposta)

> Projeto em evolução. Novos trabalhos serão adicionados à medida que forem concluídos e documentados.

## Funcionalidades

- **Página inicial** com apresentação, serviços, stack, projetos em destaque, perguntas frequentes e canais de contato.
- **Catálogo de projetos** com filtros por especialidade e cards com capas opcionais.
- **Páginas individuais** geradas automaticamente a partir dos arquivos Markdown da coleção `projects`.
- **Galeria opcional** de capturas de tela, com visualização ampliada e navegação por teclado.
- **Identidade visual própria**, com componentes reutilizáveis, painéis tecnológicos e efeitos luminosos.
- **Céu estrelado dinâmico**, com distribuição renovada no carregamento da página.
- **Atenção à acessibilidade**, incluindo marcação semântica, foco visível e respeito à preferência por movimento reduzido.

## Tecnologias

| Tecnologia | Utilização |
| --- | --- |
| [Astro](https://astro.build/) | Estrutura do site, roteamento e páginas estáticas |
| TypeScript | Tipagem e interações no navegador |
| CSS | Layout, identidade visual, animações e responsividade |
| Astro Content Collections | Cadastro e validação dos projetos em Markdown |
| GitHub Actions / GitHub Pages | Processo de publicação do site |

## Executar localmente

É necessário ter **Node.js e npm** instalados. Use uma versão de Node.js compatível com as dependências declaradas no projeto.

```bash
npm install
npm run dev
```

O servidor de desenvolvimento normalmente estará disponível em `http://localhost:4321/` (confirme o endereço exibido no terminal).

Outros comandos úteis:

```bash
npm run build    # Gera a versão de produção
npm run preview  # Prévia local do resultado do build
```

## Organização principal

```text
public/
  images/
    projects/                 # Capas e capturas de projetos
src/
  components/
    home/                     # Seções e efeitos específicos da Home
    projects/                 # Galeria dos projetos
    ui/                       # Componentes visuais reutilizáveis
    ProjectCard.astro         # Card utilizado no catálogo
  config/
    site.ts                   # Configuração dos contatos
  content/
    projects/                 # Dados e descrição dos projetos (.md)
  content.config.ts           # Schema da coleção de projetos
  data/
    services.ts               # Serviços apresentados
    stack.ts                  # Grupos de tecnologias
  layouts/
    BaseLayout.astro          # Layout compartilhado
  pages/
    index.astro               # Página inicial
    projetos/
      index.astro             # Catálogo
      [id].astro              # Página individual de cada projeto
    servicos/
      [slug].astro            # Páginas dos serviços
  styles/
    global.css                # Estilos globais e tokens visuais
```

## Como os projetos são cadastrados

Os projetos ficam em `src/content/projects/`, cada um com seu próprio arquivo Markdown. O frontmatter reúne informações como título, resumo, especialidade e tecnologias; o conteúdo abaixo dele descreve o trabalho.

O arquivo `src/content.config.ts` define quais campos são aceitos. Capas (`cover`) e galerias (`gallery`) são opcionais: quando não há capa, o card exibe uma composição visual abstrata.

Imagens públicas ficam em `public/images/projects/<identificador-do-projeto>/` e são referenciadas no Markdown com caminhos como `/images/projects/<identificador-do-projeto>/cover.webp`.

## Publicação

O projeto utiliza **GitHub Actions e GitHub Pages**. Após validar as alterações localmente com `npm run build`, envie os commits para a branch configurada no fluxo de publicação e confira a execução em **Actions** no GitHub.

Os detalhes do workflow e da branch de publicação devem ser consultados na configuração real do repositório.

## Autoria

Desenvolvido por **Dani** como portfólio profissional e projeto de evolução contínua.
