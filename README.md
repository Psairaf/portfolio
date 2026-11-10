# Portfólio Pessoal — Ana Souza

**Aluno(a):** Ana Souza
**Curso:** Técnico em Desenvolvimento de Sistemas — Desenvolvimento de Sistemas I (Agenda 15)

## Descrição
Portfólio pessoal para apresentação profissional. Reúne meu perfil, minhas habilidades, os projetos que desenvolvi no curso e um formulário de contato. É uma evolução do site construído em aula, com novos recursos visuais e interativos.

## Tecnologias utilizadas
- HTML5
- CSS3
- Bootstrap 5.3 (grid, navbar, carousel, cards, formulário)
- Bootstrap Icons
- JavaScript (IntersectionObserver)
- GitHub Pages (hospedagem)

## Link do site publicado
https://anasouza.github.io/portfolio/

## Como o projeto funciona
- **Menu de navegação** fixo no topo (`navbar` do Bootstrap). Cada link leva a uma seção pelo `id` (`#perfil`, `#habilidades`, `#projetos`, `#contato`). No celular, o menu vira um botão "hambúrguer" e fecha sozinho após o clique.
- **Perfil:** apresentação com nome, curso e botões de atalho.
- **Projetos:** um `carousel` com efeito *fade* que passa sozinho a cada 4 segundos, seguido de cards com a descrição de cada projeto.
- **Contato:** e-mail, GitHub, LinkedIn e um formulário com validação do HTML (`required`, `type="email"`).
- Arquivos: `index.html` (estrutura), `style.css` (estilos próprios) e `script.js` (interações).

## Recurso novo adicionado
1. **Seção Habilidades com barras de progresso animadas** — as barras começam vazias e enchem até o nível de cada tecnologia quando a seção aparece na tela.
2. **Animação ao rolar a página** — os blocos surgem com efeito de subida e transparência (*fade-up*).
3. **Hover nos cards de projeto** — o card sobe levemente e ganha sombra quando o mouse passa por cima.

## Como o recurso foi implementado
- **CSS:** a classe `.revelar` começa com `opacity: 0` e `transform: translateY(40px)`. Quando recebe a classe `.visivel`, volta para `opacity: 1` e posição normal. A propriedade `transition` faz a mudança ser suave. As barras começam com `width: 0` e têm `transition: width 1.5s`.
- **JavaScript:** usei o `IntersectionObserver`, que avisa quando um elemento entra na área visível. Nesse momento, o script adiciona a classe `.visivel` e, se houver uma barra, define a largura com o valor guardado no atributo `data-nivel` (ex.: `data-nivel="90"` → `width: 90%`).
- **Hover:** feito só com CSS, usando `:hover` com `transform: translateY(-8px) scale(1.02)` e `box-shadow`.

## Como publicar no GitHub Pages
1. Enviar os arquivos para o repositório no GitHub.
2. Em **Settings → Pages**, escolher a branch `main` e a pasta `/ (root)`.
3. Salvar e aguardar o link ficar disponível.
