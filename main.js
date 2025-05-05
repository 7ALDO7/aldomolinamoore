'use strict';
// debug
console.log('main.js loaded');

// i18n dictionary
const translations = {
  en: {
    // navigation
    'nav.home':     'Home',
    'nav.about':    'About',
    'nav.skills':   'Skills',
    'nav.portfolio':'Portfolio',
    'nav.contact':  'Contact',

    // hero
    'hero.title': 'Designing & Building Creative Products',
    'hero.cta':   'Contact me',

    // stats
    'stats.years':      '15+',
    'stats.years_lbl':  'Years Experience',
    'stats.projects':   '300+',
    'stats.projects_lbl':'Projects Delivered',
    'stats.clients':    '120+',
    'stats.clients_lbl':'Happy Clients',

    // about
    'about.subtitle':'About me',
    'about.title':   'Hello, I’m Aldo Molina-Moore',
    'about.text':
      'I’m a multidisciplinary professional combining web development, data analytics, ' +
      'quality management and leadership. With a Ph.D. in Psychology and 15+ years driving ' +
      'solutions in both public health and tech sectors, I build intuitive web apps, manage complex ' +
      'portfolios and ensure projects exceed expectations.',
    'about.hire':'Hire me',
    'about.cv':  'Download CV',

    // skills section
    'skills.subtitle':'My Skills',
    'skills.title':'What I Offer',
    'skills.text':
      'Crafting clean, performant web experiences—front-end & back-end—alongside data & quality ' +
      'management solutions.',
    'skills.btn_skills':'Skills',
    'skills.btn_tools':'Tools',

    // portfolio section
    'portfolio.subtitle':'My Work',
    'portfolio.title':'Selected Projects',
    'portfolio.text':
      'A showcase of web and data-driven solutions I’ve delivered across industries.',

    // contact section
    'contact.subtitle':'Contact',
    'contact.title':'Let’s build something together!',
    'contact.text':
      'Reach out for collaborations, freelance or full-time opportunities.',
    'contact.send':'Send'
  },
  es: {
    // navegación
    'nav.home':'Inicio',
    'nav.about':'Sobre mí',
    'nav.skills':'Habilidades',
    'nav.portfolio':'Proyectos',
    'nav.contact':'Contacto',

    // héroe
    'hero.title':'Diseño y Creación de Productos Creativos',
    'hero.cta':'Contáctame',

    // estadísticas
    'stats.years':'15+',
    'stats.years_lbl':'Años de Experiencia',
    'stats.projects':'300+',
    'stats.projects_lbl':'Proyectos Entregados',
    'stats.clients':'120+',
    'stats.clients_lbl':'Clientes Satisfechos',

    // sobre mí
    'about.subtitle':'Sobre mí',
    'about.title':'Hola, soy Aldo Molina-Moore',
    'about.text':
      'Soy un profesional multidisciplinar que combina desarrollo web, análisis de datos, ' +
      'gestión de calidad y liderazgo. Con un doctorado en Psicología y más de 15 años impulsando ' +
      'soluciones en sectores de salud pública y tecnología, construyo aplicaciones web intuitivas ' +
      'y gestiono portafolios para garantizar proyectos de alto impacto.',
    'about.hire':'Contrátame',
    'about.cv':'Descargar CV',

    // sección de habilidades
    'skills.subtitle':'Mis Habilidades',
    'skills.title':'Lo que Ofrezco',
    'skills.text':
      'Creando experiencias web limpias y de alto rendimiento (front-end y back-end), junto ' +
      'con soluciones de gestión de datos y calidad.',
    'skills.btn_skills':'Habilidades',
    'skills.btn_tools':'Herramientas',

    // sección portafolio
    'portfolio.subtitle':'Mi Trabajo',
    'portfolio.title':'Proyectos Seleccionados',
    'portfolio.text':
      'Una muestra de soluciones web y basadas en datos que he entregado en diversas industrias.',

    // sección de contacto
    'contact.subtitle':'Contacto',
    'contact.title':'¡Construyamos algo juntos!',
    'contact.text':
      'Contáctame para colaboraciones, proyectos freelance o oportunidades laborales.',
    'contact.send':'Enviar'
  }
};

// translate all [data-i18n]
function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// helper
const toggle = (el, cls) => el.classList.toggle(cls);

// header & go-top
const header = document.querySelector('[data-header]');
const goTop  = document.querySelector('[data-go-top]');
window.addEventListener('scroll', () => {
  header.classList.toggle('active', window.scrollY > 10);
  goTop.classList.toggle('active', window.scrollY > 10);
});

// mobile menu
const navBtn = document.querySelector('[data-nav-toggle-btn]');
const nav    = document.querySelector('[data-navbar]');
navBtn.addEventListener('click', () => {
  toggle(navBtn, 'active');
  toggle(nav, 'active');
  toggle(document.body, 'active');
});

// theme switch
const themeBtn = document.querySelector('[data-theme-btn]');
themeBtn.addEventListener('click', () => {
  toggle(themeBtn, 'active');
  if (themeBtn.classList.contains('active')) {
    document.body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light-theme');
  } else {
    document.body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  }
});
// apply stored theme
if (localStorage.getItem('theme') === 'light-theme') {
  themeBtn.classList.add('active');
  document.body.classList.replace('dark-theme', 'light-theme');
}

// language switcher
const langSel = document.getElementById('lang');
langSel.addEventListener('change', () => applyTranslations(langSel.value));
applyTranslations(langSel.value);

// ==== Skills / Tools toggle ====
const toggleBtnBox = document.querySelector('[data-toggle-box]');
const toggleBtns   = document.querySelectorAll('[data-toggle-btn]');
const skillsBox    = document.querySelector('[data-skills-box]');

toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // slide the little indicator
    toggleBtnBox.classList.toggle('active');
    // switch the button text colors
    toggleBtns.forEach(b => b.classList.toggle('active'));
    // show/hide the two lists
    skillsBox.classList.toggle('active');
  });
});
