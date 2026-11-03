"use strict";

/* ==========================================================
   TRANSLATIONS
   ========================================================== */
const translations = {
  pt: {
    "nav.about": "SOBRE",
    "nav.skills": "STACK",
    "nav.certs": "CERTIFICAÇÕES",
    "nav.projects": "PROJETOS",
    "nav.timeline": "TRAJETÓRIA",
    "nav.contact": "CONTATO",

    "hero.status": "◉ OPEN TO WORK",
    "hero.title1": "DESENVOLVEDOR FULL STACK",
    "hero.title2": "& CLOUD",
    "hero.sub":
      "Código estruturado como uma boa batida: cada parte no seu tempo, cada função no seu compasso. Full stack por profissão, baterista por paixão.",
    "hero.cta1": "VER PROJETOS",
    "hero.cta2": "FALAR COMIGO",
    "hero.tempo": "92 BPM · EM FOCO",

    "about.eyebrow": "/* sobre mim */ compasso e código",
    "about.title": "Quem toca por trás do teclado.",
    "about.p1":
      "Sou <strong>Douglas</strong>, desenvolvedor em formação em Análise e Desenvolvimento de Sistemas no IFPE Campus Jaboatão e pesquisador em iniciação em desenvolvimento tecnológico e inovação. Gosto de construir produtos que funcionam de ponta a ponta: do banco de dados à interface, com infraestrutura e deploy na nuvem AWS.",
    "about.p2":
      "No desenvolvimento, trabalho com Java/Spring Boot, Angular e React, APIs REST seguras (JWT e OAuth2), microsserviços e arquitetura orientada a eventos com RabbitMQ, Kafka, SNS e SQS. Aplico Clean Code, SOLID, DDD e TDD, e provisiono infraestrutura como código com Terraform e Docker.",
    "about.p3":
      "Na inteligência artificial, cuido do ciclo completo: do pré-processamento e balanceamento de dados ao treinamento, avaliação e otimização de modelos de Machine Learning e Deep Learning (Scikit-learn, TensorFlow e Keras), até a integração em aplicações web e pipelines serverless.",
    "about.p4":
      "Fora do código, sou baterista. Aprendi que estúdio e escritório pedem a mesma coisa: escutar antes de tocar, manter o tempo e saber quando o silêncio vale mais que uma nota extra.",

    "skills.eyebrow": "/* stack técnica */ mesa de som",
    "skills.title": "Cada tecnologia no seu canal.",
    "skills.lead": "O que uso no dia a dia, equalizadas por nível de domínio.",

    "certs.eyebrow": "/* certificações */ discos de ouro",
    "certs.title": "Certificações que já subi ao palco.",
    "certs.lead": "Certificações que validam meu conhecimento em nuvem.",
    "certs.link": "Ver certificado ↗",

    "projects.eyebrow": "/* projetos */ setlist",
    "projects.title": "Faixas que já gravei.",
    "projects.lead":
      "Um repertório de projetos desenvolvidos para exercitar a arquitetura de software, testar novas tecnologias e colocar a teoria em prática.",
    "projects.link": "Ver no GitHub ↗",
    "projects.frontend.link": "Ver no GitHub (frontend) ↗",
    "projects.backend.link": "Ver no GitHub (backend) ↗",
    "projects.terraform.link": "Ver no GitHub (terraform) ↗",
    "projects.p1desc":
      "Plataforma web para visualização e gestão de exames radiológicos, focada na navegação segura de laudos e laudos/imagens para pacientes e profissionais de saúde.",
    "projects.p2desc":
      "Plataforma para gestão e rastreabilidade de ocorrências acadêmicas, conectando professores, coordenação e responsáveis do registro à resolução.",
    "projects.p3desc":
      "Plataforma de agendamento inteligente para autônomos, automatizando a gestão de horários, clientes e disponibilidade em um só lugar.",
    "projects.p4desc":
      "Previsão de desempenho acadêmico com Machine Learning. Pipeline completo com pré-processamento, balanceamento de classes (SMOTE), comparação de seis algoritmos e otimização com GridSearchCV. O Random Forest atingiu cerca de 87% de acurácia, e a análise mostrou que fatores comportamentais pesam mais que os demográficos. Publicado em um app interativo com Streamlit.",
    "projects.p5desc":
      "Plataforma de microsserviços orientada a eventos para cadastro de clientes, avaliação de crédito e emissão assíncrona de cartões. Cinco serviços com service discovery (Eureka) e API Gateway com validação de JWT via Keycloak (OAuth2). A emissão de cartões é processada de forma assíncrona com RabbitMQ, a comunicação síncrona usa OpenFeign e cada serviço tem seu próprio banco MySQL. Todo o ecossistema sobe com um único Docker Compose.",
    "projects.p6desc":
      "Sistema de e-commerce orientado a eventos que processa pedidos em tempo real: pagamento, faturamento e envio. Cinco microsserviços (clientes, produtos, pedidos, faturamento e logística) se comunicam por tópicos do Kafka, enquanto o serviço de pedidos orquestra o fluxo e valida dados via OpenFeign. As notas fiscais são geradas em PDF com JasperReports e guardadas no MinIO, e o status do pedido é atualizado ponta a ponta.",

    "timeline.eyebrow": "/* trajetória */ set completo",
    "timeline.title": "Minha jornada até aqui.",
    "timeline.now": "AGORA",
    "timeline.t1title": "Pesquisador em Iniciação Científica (PIBITI)",
    "timeline.t1desc":
      "Pesquisador bolsista do PIBITI, atuo na pesquisa e no desenvolvimento de um aplicativo mobile (Android/iOS) de tecnologia assistiva voltado ao tratamento da disfonia funcional. O trabalho abrange todo o ciclo do produto: levantamento teórico e definição de requisitos com conceitos de fonoaudiologia e voz, prototipação de interfaces (UI/UX) da baixa à alta fidelidade com foco em acessibilidade, e desenvolvimento da arquitetura à implementação. Também conduzo a pesquisa experimental de validação, com testes estruturados junto ao público-alvo, e redijo o artigo científico com os resultados para submissão.",
    "timeline.t2title": "Jovem Aprendiz em Logística",
    "timeline.t2desc":
      "Jovem Aprendiz em Logística na RD Saúde, onde atuei no setor de produção e em diferentes etapas da operação logística, acompanhando de perto o fluxo de processos, prazos e entregas de uma grande empresa do varejo farmacêutico. Em paralelo, cursei o programa de aprendizagem profissional no SENAC, aliando a teoria da sala de aula à prática do dia a dia por meio de um projeto integrador. A vivência me deu visão de processo e responsabilidade com prazos, e hoje levo esse olhar para o desenvolvimento de software.",
    "timeline.t3title": "Primeiros passos no código",
    "timeline.t4title": "Baterista nas horas vagas",
    "timeline.t4desc":
      "Ensaiando compasso com o mesmo cuidado que reviso um pull request.",

    "contact.eyebrow": "/* contato */ fale comigo",
    "contact.title": "Vamos tocar juntos?",
    "contact.lead":
      "Estou em busca da minha primeira oportunidade para somar, evoluir junto com o time e manter as entregas no ritmo certo.",

    "footer.text": "DOUGLAS PHELIPE — construído com código e compasso.",
  },

  en: {
    "nav.about": "ABOUT",
    "nav.skills": "STACK",
    "nav.certs": "CERTIFICATIONS",
    "nav.projects": "PROJECTS",
    "nav.timeline": "JOURNEY",
    "nav.contact": "CONTACT",

    "hero.status": "◉ OPEN TO WORK",
    "hero.title1": "FULL STACK DEVELOPER",
    "hero.title2": "& CLOUD",
    "hero.sub":
      "Code structured like a good rhythm: every part in time, every function on beat. Full stack by profession, drummer by passion.",
    "hero.cta1": "VIEW PROJECTS",
    "hero.cta2": "TALK TO ME",
    "hero.tempo": "92 BPM · IN FOCUS",

    "about.eyebrow": "/* about me */ rhythm and code",
    "about.title": "Who's playing behind the keyboard.",
    "about.p1":
      "I'm <strong>Douglas</strong>, a developer in training pursuing a degree in Systems Analysis and Development at IFPE Campus Jaboatão, and a research fellow in technological development and innovation. I enjoy building products that work end to end: from the database to the interface, with infrastructure and deployment on AWS.",
    "about.p2":
      "On the development side, I work with Java/Spring Boot, Angular and React, secure REST APIs (JWT and OAuth2), microservices, and event-driven architecture with RabbitMQ, Kafka, SNS and SQS. I apply Clean Code, SOLID, DDD and TDD, and provision infrastructure as code with Terraform and Docker.",
    "about.p3":
      "In artificial intelligence, I handle the full lifecycle: from data preprocessing and balancing to training, evaluating and tuning Machine Learning and Deep Learning models (Scikit-learn, TensorFlow and Keras), all the way to integrating them into web applications and serverless pipelines.",
    "about.p4":
      "Outside of code, I'm a drummer. I've learned that the studio and the office ask for the same thing: listen before you play, keep time, and know when silence is worth more than an extra note.",

    "skills.eyebrow": "/* tech stack */ mixing console",
    "skills.title": "Every technology in its channel.",
    "skills.lead": "What I use on a daily basis, equalized by mastery level.",

    "certs.eyebrow": "/* certifications */ gold records",
    "certs.title": "Certifications that already hit the stage.",
    "certs.lead": "AWS certifications that back up my cloud knowledge.",
    "certs.link": "View certificate ↗",

    "projects.eyebrow": "/* projects */ setlist",
    "projects.title": "Tracks I've recorded.",
    "projects.lead":
      "A repertoire of projects developed to practice software architecture, test new technologies, and put theory into practice.",
    "projects.link": "View on GitHub ↗",
    "projects.frontend.link": "View on GitHub (frontend) ↗",
    "projects.backend.link": "View on GitHub (backend) ↗",
    "projects.terraform.link": "View on GitHub (terraform) ↗",
    "projects.p1desc":
      "Web platform for viewing and managing radiological exams, focused on the secure navigation of reports and medical images for patients and healthcare professionals.",
    "projects.p2desc":
      "Platform for managing and tracking academic incidents, connecting teachers, coordination, and guardians from report to resolution.",
    "projects.p3desc":
      "Smart scheduling platform for freelancers and self-employed professionals, automating time, client, and availability management in one place.",
    "projects.p4desc":
      "Academic performance prediction with Machine Learning. A complete pipeline with preprocessing, class balancing (SMOTE), a comparison of six algorithms and tuning with GridSearchCV. Random Forest reached about 87% accuracy, and the analysis showed that behavioral factors weigh more than demographic ones. Published as an interactive Streamlit app.",
    "projects.p5desc":
      "Event-driven microservices platform for client registration, credit evaluation and asynchronous credit card issuance. Five services with service discovery (Eureka) and an API Gateway validating JWTs through Keycloak (OAuth2). Card issuance is processed asynchronously with RabbitMQ, synchronous calls use OpenFeign and each service has its own MySQL database. The whole ecosystem starts with a single Docker Compose.",
    "projects.p6desc":
      "Event-driven e-commerce system that processes orders in real time: payment, invoicing and shipping. Five microservices (customers, products, orders, invoicing and logistics) communicate through Kafka topics, while the orders service orchestrates the flow and validates data via OpenFeign. Invoices are generated as PDFs with JasperReports and stored in MinIO, and the order status is updated end to end.",

    "timeline.eyebrow": "/* journey */ full set",
    "timeline.title": "My journey so far.",
    "timeline.now": "NOW",
    "timeline.t1title": "Undergraduate Research Fellow (PIBITI)",
    "timeline.t1desc":
      "Scholarship researcher in PIBITI (Institutional Program for Scholarships in Technological Development and Innovation), I work on the research and development of a mobile app (Android/iOS) for assistive technology aimed at treating functional dysphonia. The work covers the entire product cycle: literature review and requirements definition with concepts from speech-language pathology and voice science, UI/UX interface prototyping from low to high fidelity with a focus on accessibility, and development from architecture to implementation. I also conduct the experimental validation research, with structured tests involving the target audience, and I am writing the scientific article with the results for submission.",
    "timeline.t2title": "Logistics Apprentice",
    "timeline.t2desc":
      "Logistics Apprentice at RD Saúde, where I worked in the production sector and across different stages of the logistics operation, getting close to the flow of processes, deadlines and deliveries at a major pharmacy retail company. In parallel, I completed the professional apprenticeship program at SENAC, combining classroom theory with day-to-day practice through an integrative project. The experience gave me a process-oriented mindset and a sense of responsibility for deadlines, which I now bring to software development.",
    "timeline.t4title": "Drummer in my spare time",
    "timeline.t4desc":
      "Practicing rhythm with the same care I review a pull request.",

    "contact.eyebrow": "/* contact */ talk to me",
    "contact.title": "Shall we play together?",
    "contact.lead":
      "I am looking for my first opportunity to contribute, grow alongside the team, and keep deliveries on track.",

    "footer.text": "DOUGLAS PHELIPE — built with code and rhythm.",
  },
};

/* ==========================================================
   CONFIG & HELPERS
   ========================================================== */
const DEFAULT_LANG = "pt";
const DEFAULT_THEME = "dark";
const STORAGE_KEYS = { lang: "lang", theme: "theme" };

const EQ_BAR_COUNT = 48;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

/** localStorage pode lançar erro (modo privado, dados bloqueados). */
function readStorage(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* ignora: a preferência só não persiste */
  }
}

/** Executa `onEnter` uma única vez por elemento, quando ele entra na tela. */
function observeOnce(elements, onEnter, threshold) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        onEnter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold },
  );
  elements.forEach((el) => observer.observe(el));
}

const randomBetween = (min, max) => min + Math.random() * (max - min);

/* ==========================================================
   I18N
   ========================================================== */
let currentLang = DEFAULT_LANG;

function applyLang(lang) {
  const dictionary = translations[lang];
  if (!dictionary) return;

  currentLang = lang;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  $$("[data-i18n]").forEach((el) => {
    const value = dictionary[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });

  $("[data-lang-current]").textContent = lang.toUpperCase();
  $("[data-lang-alt]").textContent = lang === "pt" ? "EN" : "PT";
  writeStorage(STORAGE_KEYS.lang, lang);
}

function initI18n() {
  const saved = readStorage(STORAGE_KEYS.lang, DEFAULT_LANG);
  const lang = saved in translations ? saved : DEFAULT_LANG;

  $("#langToggle").addEventListener("click", () => {
    applyLang(currentLang === "pt" ? "en" : "pt");
  });

  applyLang(lang);
}

/* ==========================================================
   THEME TOGGLE
   ========================================================== */
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  writeStorage(STORAGE_KEYS.theme, theme);
}

function initTheme() {
  const saved = readStorage(STORAGE_KEYS.theme, DEFAULT_THEME);
  document.documentElement.setAttribute("data-theme", saved);

  $("#themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
}

/* ==========================================================
   MOBILE NAV
   ========================================================== */
function initMobileNav() {
  const burger = $("#navBurger");
  const mobileNav = $("#navMobile");

  const setOpen = (open) => {
    mobileNav.classList.toggle("open", open);
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  };

  burger.addEventListener("click", () => {
    setOpen(!mobileNav.classList.contains("open"));
  });

  $$("a", mobileNav).forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
}

/* ==========================================================
   HERO EQUALIZER BARS
   ========================================================== */
function initHeroEqualizer() {
  const container = $("#heroEq");
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < EQ_BAR_COUNT; i++) {
    const bar = document.createElement("span");
    bar.style.height = `${randomBetween(20, 120)}px`;
    bar.style.animationDuration = `${randomBetween(0.8, 2).toFixed(2)}s`;
    bar.style.animationDelay = `${randomBetween(0, 1.5).toFixed(2)}s`;
    fragment.appendChild(bar);
  }

  container.appendChild(fragment);
}

/* ==========================================================
   SCROLL REVEAL
   ========================================================== */
function initScrollReveal() {
  observeOnce(
    $$(".reveal, .reveal-avatar"),
    (el) => el.classList.add("in-view"),
    0.15,
  );
}

/* ==========================================================
   MIXING CONSOLE — animate channel fills into view
   ========================================================== */
function initMixingConsole() {
  observeOnce(
    $$(".channel"),
    (channel) => {
      const level = `${channel.dataset.level}%`;
      $(".channel-fill", channel).style.height = level;
      $(".channel-cap", channel).style.bottom = level;
    },
    0.4,
  );
}

/* ==========================================================
   NAV SHADOW ON SCROLL
   ========================================================== */
function initNavShadow() {
  const nav = $(".nav");

  const update = () => {
    nav.style.boxShadow = window.scrollY > 20 ? "var(--shadow)" : "none";
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ==========================================================
   INIT
   ========================================================== */
initTheme();
initMobileNav();
initHeroEqualizer();
initScrollReveal();
initMixingConsole();
initNavShadow();
initI18n();
