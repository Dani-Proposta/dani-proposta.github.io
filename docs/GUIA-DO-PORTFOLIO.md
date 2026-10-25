# Guia de manutenção do portfólio — Dani

**Finalidade:** colinha prática para atualizar o site Astro sem precisar redescobrir onde cada coisa fica.

> **Privacidade:** este arquivo não é automaticamente privado. Se for incluído em um repositório público no GitHub, qualquer pessoa poderá lê-lo. Não coloque nele senhas, tokens, credenciais, dados privados de clientes ou informações pessoais não destinadas à publicação. Se quiser manter o guia só no computador, guarde-o fora do repositório ou configure o `.gitignore` antes de versioná-lo.

## 1. Rotina rápida

Abra um terminal na **raiz do projeto** (a pasta que contém `package.json`).

```bash
npm install      # Só quando necessário instalar/atualizar dependências
npm run dev      # Iniciar o site para edição local
npm run build    # Verificar se o site compila para produção
npm run preview  # Conferir a versão compilada
```

Fluxo recomendado para uma alteração:

1. Inicie com `npm run dev`.
2. Edite um arquivo por vez e confira o resultado no navegador.
3. Rode `npm run build` antes de publicar.
4. Revise as mudanças com `git diff` e `git status`.
5. Faça o commit e envie para a branch configurada no GitHub Actions.
6. Confira o resultado em **Actions** e depois no site publicado.

## 2. Mapa dos arquivos

| Quero alterar… | Onde procurar |
| --- | --- |
| Página inicial | `src/pages/index.astro` e `src/components/home/` |
| Título, textos e botões do Hero | `src/components/home/Hero.astro` |
| Painel do buraco negro | `src/components/home/CosmicScene.astro` |
| Navegação orbital | `src/components/home/OrbitalNavigation.astro` |
| Estrelas do fundo | `src/components/ui/CosmicStarfield.astro` |
| Visual dos painéis | `src/components/ui/PanelFrame.astro` e `src/styles/global.css` |
| Botões luminosos | `src/components/ui/CosmicButton.astro` |
| Marcadores das seções | `src/components/ui/SectionMarker.astro` |
| Dados dos serviços | `src/data/services.ts` |
| Grupos da stack | `src/data/stack.ts` |
| Canais de contato | `src/config/site.ts` |
| Catálogo de projetos | `src/pages/projetos/index.astro` |
| Visual dos cards de projetos | `src/components/ProjectCard.astro` |
| Página individual de projeto | `src/pages/projetos/[id].astro` |
| Galeria com zoom | `src/components/projects/ProjectGallery.astro` |
| Arquivos de conteúdo dos projetos | `src/content/projects/*.md` |
| Campos permitidos no frontmatter | `src/content.config.ts` |
| Estilos e cores globais | `src/styles/global.css` |
| Estrutura comum das páginas | `src/layouts/BaseLayout.astro` |

**Dica:** o nome de um componente pode mudar durante a manutenção. Se algum caminho não existir, pesquise pelo nome correspondente dentro de `src/`.

## 3. Como adicionar um novo projeto

### Passo 1 — Criar o arquivo Markdown

Dentro de `src/content/projects/`, crie um novo `.md` com um identificador simples, por exemplo:

```text
src/content/projects/meu-projeto.md
```

O identificador é usado para formar a URL, por exemplo `/projetos/meu-projeto/`.

**Não comece com um frontmatter inventado:** abra `portfolio-astro.md` (ou outro projeto existente), copie o frontmatter completo e altere os valores. Assim você mantém todos os campos exigidos pelo schema, inclusive eventuais opções de `status`.

Campos utilizados pela apresentação atual:

| Campo | Para que serve |
| --- | --- |
| `title` | Nome do projeto |
| `summary` | Resumo do card e da página individual |
| `service` | Especialidade correspondente; deve existir em `services.ts` |
| `technologies` | Lista de tecnologias/ferramentas efetivamente utilizadas |
| `featured` | Destaca o projeto quando aplicável |
| `cover` | Caminho opcional da imagem de capa |
| `coverAlt` | Descrição acessível da capa |
| `gallery` | Lista opcional de imagens detalhadas |

Confirme os nomes, valores permitidos e campos obrigatórios diretamente em `src/content.config.ts`.

### Passo 2 — Escrever a descrição

Abaixo do segundo `---`, descreva o projeto em Markdown. Use subtítulos `##` para as seções principais, porque o índice da página individual é montado automaticamente a partir deles.

Exemplo de estrutura (adapte ao trabalho real):

```md
## Objetivo

Explique a necessidade ou o problema tratado.

## Solução

Descreva o que você desenvolveu e as decisões importantes.

## Arquitetura e tecnologias

Documente a organização do projeto e as ferramentas utilizadas.

## Resultado e próximos passos

Explique o estado atual, os aprendizados e melhorias previstas.
```

Não invente métricas, clientes ou funcionalidades. Diferencie o que já foi entregue do que ainda está planejado.

### Passo 3 — Conferir

Abra o catálogo `/projetos/` e a rota individual do projeto. Confira título, categoria, resumo, tecnologias, headings e links. Rode `npm run build`.

## 4. Capas e galerias

### Onde colocar as imagens

```text
public/images/projects/meu-projeto/
  cover.webp
  tela-inicial.webp
  configuracoes.webp
```

Nos arquivos Markdown, **não coloque `public/` no início do caminho**. Use `/images/projects/...`.

### Como preencher os campos de imagem

Acrescente os campos opcionais **dentro do frontmatter existente**, sem criar outro par de `---`:

```yaml
cover: "/images/projects/meu-projeto/cover.webp"
coverAlt: "Página inicial do projeto mostrando o painel principal"

gallery:
  - src: "/images/projects/meu-projeto/tela-inicial.webp"
    alt: "Captura da tela inicial do projeto"
    caption: "Visão geral da interface"
  - src: "/images/projects/meu-projeto/configuracoes.webp"
    alt: "Captura do painel de configurações"
    caption: "Configurações disponíveis"
```

Se não houver imagens, omita `cover` e deixe `gallery` ausente ou vazia. O card continuará usando sua arte abstrata e a galeria não será exibida.

### Boas práticas para imagens

- Prefira **WebP** para capturas e imagens de capa, conferindo se o texto permanece legível.
- Use nomes de arquivos em minúsculas e com hífens, sem espaços.
- Para capas de cards, priorize uma composição que funcione no formato **16:9**.
- Para capturas longas, mantenha a imagem completa na galeria; ela será exibida com `object-fit: contain` no visualizador ampliado.
- Escreva `alt` descrevendo o conteúdo real, não apenas “print” ou “imagem”.
- Confira se a imagem pode ser publicada (sem dados sensíveis, tokens, documentos particulares ou informações de clientes sem autorização).

## 5. Serviços, stack e contato

### Alterar serviços

Edite `src/data/services.ts`. Os `slug`s vinculam os serviços aos projetos. Se alterar um slug, revise também os Markdown que usam `service` e as rotas correspondentes.

### Alterar tecnologias e ferramentas

Edite `src/data/stack.ts`. Use nomes e níveis de experiência fiéis às habilidades atuais.

### Atualizar canais de contato

Edite `src/config/site.ts`, no objeto `portfolioContact`. Confirme os endereços reais antes de publicar: e-mail, WhatsApp, Discord e GitHub devem abrir o destino correto.

**Atenção:** não suponha que um nome de usuário do WhatsApp funciona automaticamente num link `wa.me`. Teste o link público real no navegador e no celular antes de anunciar o canal.

## 6. Identidade visual e interações

| Efeito | Arquivo principal | Cuidado |
| --- | --- | --- |
| Fundo estrelado | `CosmicStarfield.astro` | Um novo céu pode ser gerado a cada carregamento; preserve fallback e movimento reduzido |
| Buraco negro | `CosmicScene.astro` | Não substituir a imagem sem conferir máscaras e responsividade |
| Cards luminosos | `PanelFrame.astro` + `global.css` | Preservar o quadriculado e o contraste do texto |
| Feixe nas bordas | `global.css` | Evitar animações muito pesadas em dispositivos móveis |
| Botões premium | `CosmicButton.astro` | Usar em ações; não colocar um link dentro de outro link |
| Navegação lateral | `OrbitalNavigation.astro` | IDs das seções precisam coincidir com a navegação |
| Marcadores numerados | `SectionMarker.astro` | Manter consistência entre seções |

### IDs importantes da Home

```text
inicio
servicos
stack
projetos
faq
contato
```

Se mudar algum desses IDs, revise tanto os links quanto a lógica da Navegação Orbital e do Header.

## 7. Publicar no GitHub Pages

1. Faça `npm run build` e resolva os erros antes do commit.
2. Revise `git status` e `git diff`.
3. Faça commit das alterações desejadas.
4. Envie para a branch de publicação configurada no repositório.
5. Abra a aba **Actions** do GitHub e confira se o workflow concluiu com sucesso.
6. Visite `https://dani-proposta.github.io/` e teste as páginas publicadas.

Comandos de referência:

```bash
git status
git diff
git add .
git commit -m "docs: update portfolio content"
git push
```

**Não execute `git add .` às cegas:** confira antes se há arquivos temporários, imagens privadas ou credenciais entre as alterações.

## 8. Quando algo quebrar

| Sintoma | O que verificar primeiro |
| --- | --- |
| Erro de schema | Campos e valores do frontmatter versus `src/content.config.ts` |
| Imagem não aparece | Caminho, nome do arquivo, extensão e presença em `public/` |
| Galeria não aparece | Se `gallery` tem itens válidos e se `ProjectGallery.astro` está importado |
| Página individual dá erro | Estrutura de `src/pages/projetos/[id].astro`, `getStaticPaths()` e arquivo Markdown |
| Link para seção não funciona | `href`, `id` e configuração do Header/Orbital |
| Botão ficou estranho | CSS antigo conflitante com `CosmicButton.astro` |
| Fundo duplicado | Estrelas antigas no `body::before`/`body::after` de `global.css` |
| Site local funciona, mas publicado não | Resultado do GitHub Actions, paths, nomes com maiúsculas e configuração de deploy |

## 9. Checklist antes de divulgar o portfólio

- [ ] Todos os links de contato foram testados.
- [ ] As páginas de serviços e projetos abrem corretamente.
- [ ] Nenhum projeto contém informações ou resultados inventados.
- [ ] Imagens possuem textos alternativos apropriados.
- [ ] O site foi conferido em desktop e celular.
- [ ] Navegação por teclado e botão de fechar da galeria foram testados.
- [ ] Efeitos não atrapalham a leitura nem causam lentidão perceptível.
- [ ] Textos e idiomas disponíveis no site foram revisados.
- [ ] Rodapé, nome do site e links do Header estão corretos.
- [ ] `npm run build` concluiu sem erros.
- [ ] GitHub Actions publicou a versão esperada.

## 10. Decisões e melhorias reservadas

Estas observações são **tarefas de revisão**, não funcionalidades necessariamente prontas:

- Centralizar a navegação principal do Header independentemente da marca.
- Reposicionar o módulo **Fluxo Criativo** para reduzir a interferência sobre o buraco negro.
- Revisar responsividade, desempenho das animações e acessibilidade.
- Conferir a consistência de PT/EN se a versão bilíngue estiver habilitada.
- Revisar o rodapé e pequenos detalhes de textos/alinhamento.
- Substituir capas abstratas por imagens reais dos projetos conforme forem ficando disponíveis.

---

**Regra de ouro:** altere primeiro os dados e componentes existentes; só crie uma nova estrutura quando a atual realmente não atender ao objetivo. Assim o portfólio continua simples de manter. 💜
