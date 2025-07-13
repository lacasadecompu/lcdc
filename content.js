// Detectar idioma del navegador
function getLang() {
  const lang = navigator.language || navigator.userLanguage;
  return lang && lang.toLowerCase().startsWith('en') ? 'en' : 'es';
}

function loadContent() {
  const lang = getLang();
  const jsonFile = lang === 'en' ? 'content_en.json' : 'content_es.json';
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      document.querySelector('h1').innerHTML = data.title;
      document.querySelector('.subtitle').innerHTML = data.subtitle;
      document.querySelector('.footer').innerHTML = data.footer + '<span class="footer-idea">' + data.footer_idea + '</span>';
      const wa = document.querySelector('.whatsapp');
      wa.href = data.whatsapp_link;
      wa.innerHTML = `<svg class="whatsapp-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M24.5 19.7c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.5-.2-.7.2-.2.4-.7 1.2-.9 1.4-.2.2-.3.3-.7.1-.4-.2-1.5-.5-2.8-1.7-1-1-1.7-2.2-1.9-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.1.2 1.7 2.7 4.1 3.7.6.3 1.1.5 1.5.6.6.2 1.1.2 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2z" fill="#25D366"/></svg> ` + data.whatsapp;
    });
}

document.addEventListener('DOMContentLoaded', loadContent); 