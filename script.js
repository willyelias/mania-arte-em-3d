/* ==========================================================================
   MANIA ARTE EM 3D — INTERACTIVE CATALOG, CUSTOM ORDER & INSTAGRAM FEED
   All actions redirect to WhatsApp: 8498995518 (558498995518)
   ========================================================================== */

let WHATSAPP_NUMBER = "558498995518";

// 24 Real Products extracted from @maniaarteem3d Instagram
let PRODUCTS = [
  {
    id: "trono-de-ferro-dragao",
    title: "Trono de Ferro com Dragão 3D",
    universe: "🐉 Game of Thrones / HotD",
    category: "geek",
    categoryLabel: "Colecionáveis Geek",
    hot: true,
    image: "assets/p_01_DehVpG3Ndmx.jpg",
    shortcode: "DehVpG3Ndmx",
    desc: "Peça épica colecionável: o lendário Trono de Ferro encimado por um dragão detalhado com acabamento em preto e vermelho."
  },
  {
    id: "kratos-god-of-war",
    title: "Action Figure Kratos em Base de Batalha",
    universe: "🪓 God of War",
    category: "geek",
    categoryLabel: "Colecionáveis Geek",
    hot: true,
    image: "assets/p_17_DdkmGjPDWsd.jpg",
    shortcode: "DdkmGjPDWsd",
    desc: "Kratos em pose épica de combate com as Lâminas do Caos e base texturizada. Rico em detalhes para fãs de PlayStation."
  },
  {
    id: "luffy-wanted-one-piece",
    title: "Busto Monkey D. Luffy 'Wanted' 3D",
    universe: "🏴‍☠️ One Piece",
    category: "geek",
    categoryLabel: "Colecionáveis Geek",
    hot: true,
    image: "assets/p_18_Ddkl2qatjat.jpg",
    shortcode: "Ddkl2qatjat",
    desc: "Moldura 3D em alto-relevo do cartaz de procurado do Luffy Gear / Chapéu de Palha. Ideal para mesa ou parede."
  },
  {
    id: "pikachu-pokebola-3d",
    title: "Pikachu & Pokébola Colecionável 3D",
    universe: "⚡ Pokémon",
    category: "geek",
    categoryLabel: "Colecionáveis Geek",
    hot: true,
    image: "assets/p_13_Ddt-uWCG5oG.jpg",
    shortcode: "Ddt-uWCG5oG",
    desc: "Dupla clássica impressa em 3D com cores vibrantes: Pikachu estilizado + Pokébola com acabamento impecável."
  },
  {
    id: "super-mario-3d",
    title: "Super Mario Bros Colecionável 3D",
    universe: "🍄 Super Mario / Nintendo",
    category: "geek",
    categoryLabel: "Colecionáveis Geek",
    hot: false,
    image: "assets/p_16_DdkmMylDZLA.jpg",
    shortcode: "DdkmMylDZLA",
    desc: "O ícone dos games impresso em 3D multicolorido para decorar seu setup gamer ou estante geek."
  },
  {
    id: "roronoa-zoro-chibi",
    title: "Roronoa Zoro Action Figure Chibi 3D",
    universe: "⚔️ One Piece",
    category: "geek",
    categoryLabel: "Colecionáveis Geek",
    hot: false,
    image: "assets/p_25_Ddi7ogDN0Q-.jpg",
    shortcode: "Ddi7ogDN0Q-",
    desc: "O espadachim dos Chapéus de Palha em versão colecionável 3D com suas katanas."
  },
  {
    id: "banguela-toothless-3d",
    title: "Dragão Banguela (Fúria da Noite) Articulado",
    universe: "🐉 Como Treinar o Seu Dragão",
    category: "geek",
    categoryLabel: "Colecionáveis Geek",
    hot: true,
    image: "assets/p_30_Ddhj1ObmFR4.jpg",
    shortcode: "Ddhj1ObmFR4",
    desc: "Banguela impresso em 3D com asas e corpo articulados, olhinhos verdes marcantes e cauda detalhada."
  },
  {
    id: "harry-potter-display-3d",
    title: "Harry Potter Colecionável & Display 3D",
    universe: "⚡ Harry Potter",
    category: "geek",
    categoryLabel: "Colecionáveis Geek",
    hot: false,
    image: "assets/p_52_DcvzzQ8NoOO.jpg",
    shortcode: "DcvzzQ8NoOO",
    desc: "Peça temática do universo bruxo de Hogwarts feita em impressão 3D para fãs e colecionadores."
  },
  {
    id: "dragao-cristal-articulado",
    title: "Dragão Oriental de Cristal Articulado 3D",
    universe: "🐉 Fantasia & RPG",
    category: "geek",
    categoryLabel: "Colecionáveis Geek",
    hot: false,
    image: "assets/p_22_Ddi8ASotF2c.jpg",
    shortcode: "Ddi8ASotF2c",
    desc: "Dragão longo totalmente articulado em filamento azul brilhante e dourado. Movimento fluido em cada escama."
  },
  {
    id: "cubo-anti-estresse-6-lados",
    title: "Cubo Anti-Estresse 6 Lados (Fidget Cube)",
    universe: "🕹️ Fidget & Gamer",
    category: "articulados",
    categoryLabel: "Articulados & Fidgets 3D",
    hot: true,
    image: "assets/p_04_DeIQ--kmMN2.jpg",
    shortcode: "DeIQ--kmMN2",
    desc: "6 lados repletos de funções: botões de clique, interruptor, engrenagens, joystick e disco giratório. Várias cores!"
  },
  {
    id: "infinity-cube-verde-preto",
    title: "Infinity Cube (Cubo Infinito 3D)",
    universe: "🧩 Fidget Toy 3D",
    category: "articulados",
    categoryLabel: "Articulados & Fidgets 3D",
    hot: true,
    image: "assets/p_03_DeISRb6NfEv.jpg",
    shortcode: "DeISRb6NfEv",
    desc: "Dobra e gira sem fim em todas as direções! Combinação irada de cores e articulações super resistentes."
  },
  {
    id: "esqueletos-dinossauros-articulados",
    title: "Esqueletos de Dinossauros Articulados (T-Rex, Triceratops, Brachiosaurus)",
    universe: "🦖 Dino 3D Flexi",
    category: "articulados",
    categoryLabel: "Articulados & Fidgets 3D",
    hot: true,
    image: "assets/p_09_Dd2JjvEN56w.jpg",
    shortcode: "Dd2JjvEN56w",
    desc: "Coleção de fósseis articulados que mexem cada vértebra e cauda. Escolha o seu favorito ou peça o trio!"
  },
  {
    id: "t-rex-articulado-vermelho",
    title: "T-Rex Articulado 3D Colorido",
    universe: "🦖 Mundo Dino",
    category: "articulados",
    categoryLabel: "Articulados & Fidgets 3D",
    hot: false,
    image: "assets/p_11_Dd1x4PLAC30.jpg",
    shortcode: "Dd1x4PLAC30",
    desc: "Dinossauro articulado que vira brinquedo criativo, presente ou peça de decoração geek."
  },
  {
    id: "hello-kitty-espiral-3d",
    title: "Hello Kitty Espiral Pass-Through (Ilusão 3D)",
    universe: "🎀 Sanrio / Kawaii Geek",
    category: "articulados",
    categoryLabel: "Articulados & Fidgets 3D",
    hot: true,
    image: "assets/p_10_Dd2IzF-Nf5W.jpg",
    shortcode: "Dd2IzF-Nf5W",
    desc: "Peça hipnotizante em formato da Hello Kitty onde as duas partes atravessam uma à outra em espiral!"
  },
  {
    id: "cone-espiral-ilusao",
    title: "Cone Espiral Impossible Passthrough 3D",
    universe: "🌀 ASMR Visual 3D",
    category: "articulados",
    categoryLabel: "Articulados & Fidgets 3D",
    hot: false,
    image: "assets/p_06_Dd4bWldtYGJ.jpg",
    shortcode: "Dd4bWldtYGJ",
    desc: "O famoso fidget de ilusão de ótica em impressão 3D de alta precisão. Satisfação pura para mexer o dia todo."
  },
  {
    id: "bolinhos-kawaii-bao",
    title: "Bolinhos Kawaii Articulados (Bao 3D Rosa/Verde)",
    universe: "🥟 Kawaii 3D",
    category: "articulados",
    categoryLabel: "Articulados & Fidgets 3D",
    hot: false,
    image: "assets/p_07_Dd4a35dt8C5.jpg",
    shortcode: "Dd4a35dt8C5",
    desc: "Bolinhos articulados super fofos com olhinhos Kawaii. Escolha #TeamRosa ou #TeamVerde!"
  },
  {
    id: "fidget-creeper-engrenagem",
    title: "Fidget Engrenagem Planetária Creeper",
    universe: "🟩 Minecraft",
    category: "articulados",
    categoryLabel: "Articulados & Fidgets 3D",
    hot: false,
    image: "assets/p_21_Ddi8VsGNqjI.jpg",
    shortcode: "Ddi8VsGNqjI",
    desc: "Spinner de engrenagens planetárias com rosto do Creeper do Minecraft impresso em 3D."
  },
  {
    id: "shuriken-spinner-engrenagem",
    title: "Estrela Ninja & Engrenagens Fidget 3D",
    universe: "🥷 Anime / Ninja",
    category: "articulados",
    categoryLabel: "Articulados & Fidgets 3D",
    hot: false,
    image: "assets/p_28_Ddhk7CsNfPL.jpg",
    shortcode: "Ddhk7CsNfPL",
    desc: "Fidget giratório estilo shuriken com sistema de engrenagens internas suaves."
  },
  {
    id: "polvo-articulado-3d",
    title: "Polvo Articulado Flexi 3D",
    universe: "🐙 Flexi Print",
    category: "articulados",
    categoryLabel: "Articulados & Fidgets 3D",
    hot: false,
    image: "assets/p_27_Ddi1lC_tC8W.jpg",
    shortcode: "Ddi1lC_tC8W",
    desc: "Polvo com 8 tentáculos totalmente articulados impresso em uma única peça sem montagem."
  },
  {
    id: "marca-paginas-harry-potter",
    title: "Marca-Páginas 3D Harry, Hermione & Rony",
    universe: "⚡ Harry Potter",
    category: "utilidades",
    categoryLabel: "Marca-Páginas & Utilidades",
    hot: true,
    image: "assets/p_32_DdhjQ8KNytk.jpg",
    shortcode: "DdhjQ8KNytk",
    desc: "Marca-páginas em impressão 3D multicolorida do trio de Hogwarts. Presente perfeito para leitores geek!"
  },
  {
    id: "marca-paginas-minions",
    title: "Marca-Páginas 3D Minions",
    universe: "🍌 Minions / Geek",
    category: "utilidades",
    categoryLabel: "Marca-Páginas & Utilidades",
    hot: false,
    image: "assets/p_33_DdhjAqmNj_p.jpg",
    shortcode: "DdhjAqmNj_p",
    desc: "Marca-páginas criativo e divertido dos Minions feito em impressão 3D."
  },
  {
    id: "marca-paginas-gatinhos",
    title: "Marca-Páginas 3D Gatinhos Minimalistas",
    universe: "🐾 Pets & Leitura",
    category: "utilidades",
    categoryLabel: "Marca-Páginas & Utilidades",
    hot: false,
    image: "assets/p_31_DdhjXfEtCHf.jpg",
    shortcode: "DdhjXfEtCHf",
    desc: "Silhueta de gatinho espiando entre as páginas do seu livro ou mangá favorito."
  },
  {
    id: "quadros-decorativos-anime-geek",
    title: "Quadros Decorativos Anime, Games & Arte Pixel",
    universe: "🖼️ One Piece, Demon Slayer, Minecraft",
    category: "quadros-bottons",
    categoryLabel: "Quadros & Bottons Geek",
    hot: true,
    image: "assets/p_66_DZN8UT1teDo.jpg",
    shortcode: "DZN8UT1teDo",
    desc: "Quadros em alta definição para quarto ou setup gamer! Escolha animes prontos ou envie sua arte personalizada."
  },
  {
    id: "bottons-personalizados-geek-gamer",
    title: "Bottons Personalizados Gamer, Anime, Memes & Copa",
    universe: "🔘 Colecionáveis & Mochila",
    category: "quadros-bottons",
    categoryLabel: "Quadros & Bottons Geek",
    hot: false,
    image: "assets/p_65_DZ040nAt15u.jpg",
    shortcode: "DZ040nAt15u",
    desc: "Estampe sua mochila, jaqueta ou colete com bottons gamers, animes, memes ou com a sua própria imagem!"
  }
];

// Real Instagram Feed Posts (@maniaarteem3d)
let IG_FEED_POSTS = [
  { file: "assets/p_01_DehVpG3Ndmx.jpg", code: "DehVpG3Ndmx", type: "Foto", caption: "O fogo e o sangue ganharam vida em 3D! Trono de Ferro com Dragão 🐉⚔️🔥" },
  { file: "assets/p_03_DeISRb6NfEv.jpg", code: "DeISRb6NfEv", type: "Foto", caption: "Viciar as mãos nunca foi tão divertido! Infinity Cubes verde e preto 🧩✨" },
  { file: "assets/p_04_DeIQ--kmMN2.jpg", code: "DeIQ--kmMN2", type: "Carrossel", caption: "Cubo Anti-Estresse de 6 lados repleto de funções para foco e alívio da ansiedade!" },
  { file: "assets/p_06_Dd4bWldtYGJ.jpg", code: "Dd4bWldtYGJ", type: "Foto", caption: "Satisfação pura em formato de 3D! Espiral flexível amarelo e vermelho 🌀✨" },
  { file: "assets/p_07_Dd4a35dt8C5.jpg", code: "Dd4a35dt8C5", type: "Foto", caption: "Os bolinhos articulados mais fofos da impressão 3D! #TeamRosa ou #TeamVerde? 🥟✨" },
  { file: "assets/p_08_Dd2LCmDtC4B.jpg", code: "Dd2LCmDtC4B", type: "Reel 🎥", caption: "Criar magia, camada por camada! Impressão 3D a todo vapor na Bambu Lab ✨" },
  { file: "assets/p_09_Dd2JjvEN56w.jpg", code: "Dd2JjvEN56w", type: "Foto", caption: "A era dos dinossauros flexíveis chegou! Triceratops, T-Rex e Brachiosaurus 🦖💨" },
  { file: "assets/p_10_Dd2IzF-Nf5W.jpg", code: "Dd2IzF-Nf5W", type: "Foto", caption: "Hello Kitty em espiral 3D! Qual a sua combinação de cor favorita? 🎀🌀" },
  { file: "assets/p_11_Dd1x4PLAC30.jpg", code: "Dd1x4PLAC30", type: "Foto", caption: "🦖 Um dinossauro articulado que vira presente, brinquedo ou peça de coleção!" },
  { file: "assets/p_13_Ddt-uWCG5oG.jpg", code: "Ddt-uWCG5oG", type: "Foto", caption: "Sua ideia pode virar uma peça 3D exclusiva! Pikachu & Pokébola ⚡" },
  { file: "assets/p_16_DdkmMylDZLA.jpg", code: "DdkmMylDZLA", type: "Reel 🎥", caption: "Super Mario Bros impresso em 3D com detalhes incríveis! 🍄🎮" },
  { file: "assets/p_17_DdkmGjPDWsd.jpg", code: "DdkmGjPDWsd", type: "Reel 🎥", caption: "Action Figure Kratos God of War em base de batalha! 🪓🔥" },
  { file: "assets/p_18_Ddkl2qatjat.jpg", code: "Ddkl2qatjat", type: "Reel 🎥", caption: "Monkey D. Luffy Wanted 3D — One Piece! 🏴‍☠️👒" },
  { file: "assets/p_21_Ddi8VsGNqjI.jpg", code: "Ddi8VsGNqjI", type: "Reel 🎥", caption: "Fidget Engrenagem Creeper Minecraft em impressão 3D 🟩💥" },
  { file: "assets/p_22_Ddi8ASotF2c.jpg", code: "Ddi8ASotF2c", type: "Reel 🎥", caption: "Dragão Articulado 3D azul cristal e dourado! #colecionaveis #animenatal" },
  { file: "assets/p_25_Ddi7ogDN0Q-.jpg", code: "Ddi7ogDN0Q-", type: "Reel 🎥", caption: "Roronoa Zoro 3D Colecionável! ⚔️💚" },
  { file: "assets/p_27_Ddi1lC_tC8W.jpg", code: "Ddi1lC_tC8W", type: "Reel 🎥", caption: "Polvo articulado impresso em 3D! 🐙✨" },
  { file: "assets/p_30_Ddhj1ObmFR4.jpg", code: "Ddhj1ObmFR4", type: "Foto", caption: "Banguela (Como Treinar o Seu Dragão) articulado em 3D! 🐉🖤" },
  { file: "assets/p_31_DdhjXfEtCHf.jpg", code: "DdhjXfEtCHf", type: "Foto", caption: "Marca-páginas 3D gatinhos minimalistas 🐾📚" },
  { file: "assets/p_32_DdhjQ8KNytk.jpg", code: "DdhjQ8KNytk", type: "Foto", caption: "Marca-páginas 3D Harry Potter, Hermione e Rony ⚡📖" },
  { file: "assets/p_33_DdhjAqmNj_p.jpg", code: "DdhjAqmNj_p", type: "Foto", caption: "Marca-páginas 3D Minions! 🍌👓" },
  { file: "assets/p_52_DcvzzQ8NoOO.jpg", code: "DcvzzQ8NoOO", type: "Reel 🎥", caption: "Especial Harry Potter em 3D! #harrypotteredit #3d #colecionaveis" },
  { file: "assets/p_64_DZ1H_S-Da7S.jpg", code: "DZ1H_S-Da7S", type: "Foto", caption: "Bottons personalizados Edição Especial Copa 2026! ⚽🇧🇷" },
  { file: "assets/p_65_DZ040nAt15u.jpg", code: "DZ040nAt15u", type: "Foto", caption: "Bottons personalizados para cada estilo de gamer 🎮🔘" },
  { file: "assets/p_66_DZN8UT1teDo.jpg", code: "DZN8UT1teDo", type: "Foto", caption: "🎮 Deixe o seu canto ou setup gamer com a sua cara! Quadros de Anime e Geek" },
  { file: "assets/p_67_DZN6WsdmDlb.jpg", code: "DZN6WsdmDlb", type: "Foto", caption: "Bottons divertidos de memes e nostalgia! 😂✨" },
  { file: "assets/p_68_DZNyJsCGDrQ.jpg", code: "DZNyJsCGDrQ", type: "Foto", caption: "Transforme sua mochila, jaqueta ou boné com bottons personalizados do seu jeito!" },
  { file: "assets/p_69_DY2DnuGAEBQ.jpg", code: "DY2DnuGAEBQ", type: "Foto", caption: "✨ Quadros Decorativos e Arte Pixel Anime sob encomenda em Natal/RN!" },
  { file: "assets/p_14_DdsLQqkN4OO.jpg", code: "DdsLQqkN4OO", type: "Reel 🎥", caption: "Bastidores da pintura e acabamento Pikachu & Pokébola 3D! 🎨⚡" },
  { file: "assets/p_26_Ddi3AQWtzLO.jpg", code: "Ddi3AQWtzLO", type: "Reel 🎥", caption: "Bambu Lab imprimindo peças geek com perfeição milimétrica 🖨️🔥" }
];

// State
let activeCategory = "todos";
let searchQuery = "";
let orderList = [];
let igVisibleCount = 12;
let selectedCustomType = "Colecionável / Action Figure 3D";
let uploadedImageFile = null;
let uploadedImageDataUrl = null;

// Load dynamic updates saved by the /admin panel
async function loadDynamicSiteData() {
  const urls = [
    "https://api.github.com/repos/willyelias/mania-arte-em-3d/contents/dados-site.json?t=" + Date.now(),
    "dados-site.json?t=" + Date.now()
  ];
  for (const url of urls) {
    try {
      const headers = url.includes("api.github.com")
        ? { Accept: "application/vnd.github.raw+json" }
        : {};
      const resp = await fetch(url, { headers, cache: "no-store" });
      if (resp.ok) {
        const data = await resp.json();
        if (data.config && data.config.whatsappNumero) {
          WHATSAPP_NUMBER = String(data.config.whatsappNumero).replace(/\D+/g, "");
        }
        if (Array.isArray(data.produtos) && data.produtos.length > 0) {
          PRODUCTS = data.produtos;
        }
        if (Array.isArray(data.feedInstagram) && data.feedInstagram.length > 0) {
          IG_FEED_POSTS = data.feedInstagram;
        }
        updateCategoryCounts();
        renderCatalog();
        renderInstagramFeed();
        return;
      }
    } catch (_) {}
  }
}

// Helper: Sanitize text for WhatsApp URL (removes surrogate-pair emojis that turn into  on WhatsApp Web/Desktop redirect)
function sanitizeForWhatsApp(str) {
  return String(str || "")
    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "")
    .replace(/[\u2600-\u27BF\uFE0F]/g, "")
    .replace(/  +/g, " ")
    .trim();
}

// Helper: Build WhatsApp URL using api.whatsapp.com/send to avoid wa.me 302 encoding corruption
function buildWhatsAppUrl(message) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

// Helper: Show Toast
function showToast(text) {
  const toast = document.getElementById("toastNotification");
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3600);
}

// ==========================================================================
// 1. RENDER PRODUCT CATALOG
// ==========================================================================
function updateCategoryCounts() {
  const countTodos = document.getElementById("count-todos");
  const countGeek = document.getElementById("count-geek");
  const countArt = document.getElementById("count-articulados");
  const countUtil = document.getElementById("count-utilidades");
  const countQB = document.getElementById("count-quadros-bottons");

  if (countTodos) countTodos.textContent = PRODUCTS.length;
  if (countGeek) countGeek.textContent = PRODUCTS.filter(p => p.category === "geek").length;
  if (countArt) countArt.textContent = PRODUCTS.filter(p => p.category === "articulados").length;
  if (countUtil) countUtil.textContent = PRODUCTS.filter(p => p.category === "utilidades").length;
  if (countQB) countQB.textContent = PRODUCTS.filter(p => p.category === "quadros-bottons").length;
}

function renderCatalog() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const q = searchQuery.trim().toLowerCase();
  const filtered = PRODUCTS.filter(item => {
    const matchesCat = activeCategory === "todos" || item.category === activeCategory;
    const matchesSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.universe.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      (item.categoryLabel || "").toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-subtle);">
        <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 8px;">Não encontrou esse modelo pronto? 🤔</h3>
        <p style="color: var(--text-secondary); margin-bottom: 18px;">Nós fabricamos qualquer personagem ou ideia sob encomenda na impressora 3D!</p>
        <a href="#encomenda-personalizada" class="btn-primary-geek">📸 Enviar Imagem / Pedir Esse Modelo</a>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map(item => {
      const inList = orderList.some(o => o.id === item.id);
      const igLink = item.shortcode
        ? `https://www.instagram.com/p/${item.shortcode}/`
        : "https://www.instagram.com/maniaarteem3d/";
      return `
        <article class="product-card">
          <div class="product-media" onclick="openProductModal('${item.id}')">
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
            <div class="product-badges">
              <span class="badge-universe">${item.universe}</span>
              ${item.hot ? `<span class="badge-hot">🔥 Em Alta</span>` : ""}
            </div>
            <a
              href="${igLink}"
              target="_blank"
              rel="noopener noreferrer"
              class="product-ig-link"
              onclick="event.stopPropagation();"
              title="Ver publicação original no Instagram @maniaarteem3d"
            >
              📷 Ver Post
            </a>
          </div>

          <div class="product-body">
            <span class="product-cat-label">${item.categoryLabel}</span>
            <h3 class="product-title">${item.title}</h3>
            <p class="product-desc">${item.desc}</p>

            <div class="product-actions">
              <button
                type="button"
                class="btn-order-card"
                onclick="quickOrderProduct('${item.title.replace(/'/g, "\\'")}', '${item.shortcode || ""}')"
              >
                <span>💬 Pedir no WhatsApp</span>
              </button>
              <button
                type="button"
                class="btn-add-list ${inList ? "in-list" : ""}"
                onclick="toggleProductInList('${item.id}')"
                title="Adicionar à lista para pedir vários itens juntos"
              >
                ${inList ? "✓ Na Lista" : "+ Lista"}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

// Direct 1-click WhatsApp order for a specific product
window.quickOrderProduct = function (title, shortcode) {
  const cleanTitle = sanitizeForWhatsApp(title);
  const igUrl = shortcode ? `https://www.instagram.com/p/${shortcode}/` : "https://www.instagram.com/maniaarteem3d/";
  const msg =
    `Olá, *Mania Arte em 3D*!\n\n` +
    `Vim pelo site e quero encomendar este produto do catálogo:\n` +
    `• *Produto:* ${cleanTitle}\n` +
    `• *Referência no Instagram:* ${igUrl}\n\n` +
    `Pode me passar os detalhes de valor, cores disponíveis e prazo?`;

  window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
};

// ==========================================================================
// 2. MULTI-ITEM ORDER LIST DRAWER ("MEU PEDIDO")
// ==========================================================================
window.toggleProductInList = function (productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIdx = orderList.findIndex(item => item.id === productId);
  if (existingIdx > -1) {
    orderList.splice(existingIdx, 1);
    showToast(`Removido da lista: ${product.title}`);
  } else {
    orderList.push({ ...product, qty: 1 });
    showToast(`✅ Adicionado à sua lista: ${product.title}`);
  }

  updateDrawerUI();
  renderCatalog();
};

window.changeItemQty = function (productId, delta) {
  const item = orderList.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    orderList = orderList.filter(i => i.id !== productId);
  }
  updateDrawerUI();
  renderCatalog();
};

function updateDrawerUI() {
  const badge = document.getElementById("drawerCountBadge");
  const container = document.getElementById("drawerItemsContainer");
  const totalCount = orderList.reduce((acc, item) => acc + item.qty, 0);

  if (badge) badge.textContent = totalCount;
  if (!container) return;

  if (orderList.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 16px; color: var(--text-secondary);">
        <div style="font-size: 2.4rem; margin-bottom: 10px;">📦</div>
        <p style="font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">Sua lista está vazia</p>
        <p style="font-size: 0.84rem;">Adicione um ou mais produtos do catálogo para enviar tudo de uma só vez para o nosso WhatsApp!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = orderList
    .map(
      item => `
      <div class="drawer-item">
        <img src="${item.image}" alt="${item.title}" />
        <div class="drawer-item-info">
          <h4>${item.title}</h4>
          <span>${item.universe}</span>
        </div>
        <div class="drawer-qty-controls">
          <button type="button" class="btn-qty" onclick="changeItemQty('${item.id}', -1)">−</button>
          <span style="font-weight: 800; min-width: 18px; text-align: center;">${item.qty}</span>
          <button type="button" class="btn-qty" onclick="changeItemQty('${item.id}', 1)">+</button>
        </div>
      </div>
    `
    )
    .join("");
}

function openDrawer() {
  document.getElementById("drawerBackdrop")?.classList.add("open");
  document.getElementById("orderDrawer")?.classList.add("open");
}

function closeDrawer() {
  document.getElementById("drawerBackdrop")?.classList.remove("open");
  document.getElementById("orderDrawer")?.classList.remove("open");
}

// ==========================================================================
// 3. PRODUCT QUICK VIEW MODAL
// ==========================================================================
window.openProductModal = function (productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  document.getElementById("modalProductImg").src = product.image;
  document.getElementById("modalProductImg").alt = product.title;
  document.getElementById("modalProductUniverse").textContent = product.universe;
  document.getElementById("modalProductTitle").textContent = product.title;
  document.getElementById("modalProductDesc").textContent = product.desc;
  document.getElementById("modalBtnIgLink").href = product.shortcode
    ? `https://www.instagram.com/p/${product.shortcode}/`
    : "https://www.instagram.com/maniaarteem3d/";

  const btnWa = document.getElementById("modalBtnWaDirect");
  btnWa.onclick = () => quickOrderProduct(product.title, product.shortcode);

  const btnAdd = document.getElementById("modalBtnAddList");
  const inList = orderList.some(i => i.id === product.id);
  btnAdd.textContent = inList ? "✓ Já está na Lista" : "+ Adicionar à Lista de Pedido";
  btnAdd.onclick = () => {
    toggleProductInList(product.id);
    const nowInList = orderList.some(i => i.id === product.id);
    btnAdd.textContent = nowInList ? "✓ Já está na Lista" : "+ Adicionar à Lista de Pedido";
  };

  document.getElementById("productModalBackdrop")?.classList.add("open");
};

function closeProductModal() {
  document.getElementById("productModalBackdrop")?.classList.remove("open");
}

// ==========================================================================
// 4. CUSTOM ORDER & REFERENCE IMAGE UPLOAD -> WHATSAPP
// ==========================================================================
function setupCustomOrderBuilder() {
  const dropzone = document.getElementById("imageDropzone");
  const fileInput = document.getElementById("refImageInput");
  const emptyState = document.getElementById("dropzoneEmpty");
  const previewBox = document.getElementById("uploadPreviewBox");
  const previewImg = document.getElementById("previewImageEl");
  const previewName = document.getElementById("previewFileName");
  const btnRemove = document.getElementById("btnRemoveImage");
  const typePills = document.querySelectorAll("#customTypePills .type-pill");
  const form = document.getElementById("customOrderForm");

  // Category Type Pills
  typePills.forEach(pill => {
    pill.addEventListener("click", () => {
      typePills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      selectedCustomType = pill.getAttribute("data-type") || "Colecionável 3D";
    });
  });

  function handleSelectedFile(file) {
    if (!file || !file.type.startsWith("image/")) {
      showToast("⚠️ Por favor, selecione um arquivo de imagem (JPG, PNG, WEBP).");
      return;
    }
    uploadedImageFile = file;
    const reader = new FileReader();
    reader.onload = e => {
      uploadedImageDataUrl = e.target.result;
      previewImg.src = uploadedImageDataUrl;
      previewName.textContent = file.name;
      emptyState.style.display = "none";
      previewBox.classList.add("active");
      showToast("📸 Imagem carregada! Preencha os detalhes e envie para o WhatsApp.");
    };
    reader.readAsDataURL(file);
  }

  if (dropzone && fileInput) {
    dropzone.addEventListener("click", e => {
      if (e.target === btnRemove || btnRemove?.contains(e.target)) return;
      fileInput.click();
    });

    fileInput.addEventListener("change", e => {
      if (e.target.files && e.target.files[0]) {
        handleSelectedFile(e.target.files[0]);
      }
    });

    dropzone.addEventListener("dragover", e => {
      e.preventDefault();
      dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", () => {
      dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", e => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleSelectedFile(e.dataTransfer.files[0]);
      }
    });
  }

  if (btnRemove) {
    btnRemove.addEventListener("click", e => {
      e.stopPropagation();
      uploadedImageFile = null;
      uploadedImageDataUrl = null;
      fileInput.value = "";
      previewImg.src = "";
      previewBox.classList.remove("active");
      emptyState.style.display = "flex";
    });
  }

  // Try to copy uploaded image to clipboard as PNG so user can just Ctrl+V in WhatsApp Web/Desktop
  async function tryCopyImageToClipboard() {
    if (!uploadedImageDataUrl || !navigator.clipboard || !window.ClipboardItem) return false;
    try {
      const img = new Image();
      img.src = uploadedImageDataUrl;
      await new Promise((res, rej) => {
        img.onload = res;
        img.onerror = rej;
      });
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
      if (blob) {
        await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
        return true;
      }
    } catch (_) {
      return false;
    }
    return false;
  }

  if (form) {
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const title = document.getElementById("customIdeaTitle")?.value.trim();
      const details = document.getElementById("customIdeaDetails")?.value.trim();
      const clientName = document.getElementById("customClientName")?.value.trim();
      const refLink = document.getElementById("customReferenceLink")?.value.trim();

      if (!title) {
        showToast("⚠️ Informe o nome do personagem ou ideia que você deseja!");
        document.getElementById("customIdeaTitle")?.focus();
        return;
      }

      let copiedToClipboard = false;
      if (uploadedImageFile) {
        copiedToClipboard = await tryCopyImageToClipboard();
      }

      let msg = `Olá, *Mania Arte em 3D*!\n`;
      msg += `Vim pelo site e quero fazer um *Pedido Personalizado / Sob Encomenda*:\n\n`;
      if (clientName) msg += `• *Cliente:* ${sanitizeForWhatsApp(clientName)}\n`;
      msg += `• *Categoria:* ${sanitizeForWhatsApp(selectedCustomType)}\n`;
      msg += `• *O que desejo:* ${sanitizeForWhatsApp(title)}\n`;
      if (details) msg += `• *Detalhes / Cores / Tamanho:* ${sanitizeForWhatsApp(details)}\n`;
      if (refLink) msg += `• *Link de Referência:* ${refLink}\n`;

      if (uploadedImageFile) {
        msg += `• *Imagem de Referência:* Selecionei a imagem *"${uploadedImageFile.name}"* no site e vou enviar aqui na conversa agora mesmo!\n`;
      }

      if (orderList.length > 0) {
        msg += `\n*Também selecionei do catálogo:*\n`;
        orderList.forEach(item => {
          msg += `• ${item.qty}x ${sanitizeForWhatsApp(item.title)}\n`;
        });
      }

      msg += `\nPodem avaliar e me passar o orçamento?`;

      if (copiedToClipboard) {
        showToast("📸 Sua imagem foi copiada! Basta colar (Ctrl+V) na conversa do WhatsApp.");
      } else if (uploadedImageFile) {
        showToast("📲 Abrindo WhatsApp! Anexe a foto que você escolheu na conversa.");
      }

      window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
    });
  }
}

// ==========================================================================
// 5. INSTAGRAM FEED SECTION (@maniaarteem3d)
// ==========================================================================
function renderInstagramFeed() {
  const grid = document.getElementById("igFeedGrid");
  const btnMore = document.getElementById("btnLoadMoreIg");
  if (!grid) return;

  const visiblePosts = IG_FEED_POSTS.slice(0, igVisibleCount);

  grid.innerHTML = visiblePosts
    .map(
      post => `
      <div class="ig-post-card">
        <img src="${post.file}" alt="${(post.caption || "").replace(/"/g, "&quot;")}" loading="lazy" />
        <span class="ig-post-type-badge">${post.type}</span>
        <div class="ig-post-overlay">
          <p class="ig-overlay-caption">${post.caption}</p>
          <div class="ig-overlay-btns">
            <button
              type="button"
              class="btn-ig-wa"
              onclick="quickOrderProduct('${(post.caption || "").slice(0, 48).replace(/'/g, "\\'")}...', '${post.code || ""}')"
            >
              💬 Pedir Igual
            </button>
            <a
              href="${post.code ? `https://www.instagram.com/p/${post.code}/` : "https://www.instagram.com/maniaarteem3d/"}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-ig-open"
            >
              Ver no Insta ↗
            </a>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  if (btnMore) {
    if (igVisibleCount >= IG_FEED_POSTS.length) {
      btnMore.style.display = "none";
    } else {
      btnMore.style.display = "inline-block";
    }
  }
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  updateCategoryCounts();
  renderCatalog();
  updateDrawerUI();
  setupCustomOrderBuilder();
  renderInstagramFeed();
  loadDynamicSiteData();

  // Category Tabs click
  document.querySelectorAll("#categoryTabs .cat-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#categoryTabs .cat-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-cat") || "todos";
      renderCatalog();
    });
  });

  // Search Input
  const searchInput = document.getElementById("catalogSearch");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      searchQuery = e.target.value;
      renderCatalog();
    });
  }

  // Drawer Open / Close / Checkout
  document.getElementById("btnOpenDrawer")?.addEventListener("click", openDrawer);
  document.getElementById("btnCloseDrawer")?.addEventListener("click", closeDrawer);
  document.getElementById("drawerBackdrop")?.addEventListener("click", closeDrawer);

  document.getElementById("btnCheckoutDrawer")?.addEventListener("click", () => {
    if (orderList.length === 0) {
      showToast("⚠️ Adicione pelo menos 1 produto à sua lista primeiro!");
      return;
    }
    const notes = document.getElementById("drawerNotesInput")?.value.trim();
    let msg = `Olá, *Mania Arte em 3D*!\n\n`;
    msg += `Montei minha *Lista de Encomenda* no site com os seguintes produtos:\n\n`;
    orderList.forEach(item => {
      msg += `• *${item.qty}x ${sanitizeForWhatsApp(item.title)}* (${sanitizeForWhatsApp(item.universe)})\n`;
      if (item.shortcode) {
        msg += `  Ref: https://www.instagram.com/p/${item.shortcode}/\n`;
      }
    });
    if (notes) {
      msg += `\n• *Observações / Preferência de cores:* ${sanitizeForWhatsApp(notes)}\n`;
    }
    msg += `\nPodem me informar o valor total e prazo de produção?`;

    window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  });

  // Modal Close
  document.getElementById("btnCloseModal")?.addEventListener("click", closeProductModal);
  document.getElementById("productModalBackdrop")?.addEventListener("click", e => {
    if (e.target.id === "productModalBackdrop") closeProductModal();
  });

  // Load More Instagram Posts
  document.getElementById("btnLoadMoreIg")?.addEventListener("click", () => {
    igVisibleCount = IG_FEED_POSTS.length;
    renderInstagramFeed();
  });
});
