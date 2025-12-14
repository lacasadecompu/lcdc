// ===== GLOBAL VARIABLES =====
let currentLang = 'es';
let contentData = {};

// ===== LANGUAGE DETECTION =====
function detectLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang && browserLang.toLowerCase().startsWith('en') ? 'en' : 'es';
}

// ===== CONTENT LOADING =====
async function loadContent(lang = null) {
  if (lang) currentLang = lang;
  
  try {
    const response = await fetch(`assets/json/content_${currentLang}.json`);
    contentData = await response.json();
    updatePageContent();
    updateLanguageButtons();
    return true;
  } catch (error) {
    console.error('Error loading content:', error);
    return false;
  }
}

// ===== UPDATE PAGE CONTENT =====
function updatePageContent() {
  if (!contentData) return;
  
  // Update HTML lang attribute
  document.documentElement.lang = currentLang;
  
  // Update Hero Section
  updateHeroSection();
  
  // Update About Section
  updateAboutSection();
  
  // Update Services Section
  updateServicesSection();
  
  // Update Projects Section
  updateProjectsSection();
  
  // Update Contact Section
  updateContactSection();
  
  // Update Footer
  updateFooterSection();
  
  // Update Navigation
  updateNavigation();
}

// ===== HERO SECTION =====
function updateHeroSection() {
  const hero = contentData.hero;
  
  safeUpdateElement('.hero-title', hero.title);
  safeUpdateElement('.hero-subtitle', hero.subtitle);
  
  // Update CTAs
  safeUpdateElement('.hero-cta a', hero.cta_contact);
}

// ===== ABOUT SECTION =====
function updateAboutSection() {
  const about = contentData.about;
  
  safeUpdateElement('.about-text h2', about.title);
  safeUpdateElement('.about-text p', about.description);
  
  // Update features list
  const featuresList = getElement('.about-features');
  if (featuresList && about.features) {
    featuresList.innerHTML = about.features.map(feature => `<li>${feature}</li>`).join('');
  }
  
  // Update about card
  safeUpdateElement('.about-card-content h3', about.card_title);
  safeUpdateElement('.about-card-content p', about.card_description);
  
  safeUpdateElement('.tech-preview h3', about.tech_title);
  
  // Update technologies
  const techIcons = getElement('.tech-icons');
  if (techIcons && about.technologies) {
    techIcons.innerHTML = about.technologies.map(tech => `
      <div class="tech-icon"><span>${tech}</span></div>
    `).join('');
  }
}

// ===== SERVICES SECTION =====
function updateServicesSection() {
  const services = contentData.services;
  
  safeUpdateElement('.services .section-header h2', services.title);
  safeUpdateElement('.services .section-header p', services.description);
  
  // Update services grid
  const servicesGrid = getElement('.services-grid');
  if (servicesGrid && services.items) {
    servicesGrid.innerHTML = services.items.map(service => `
      <div class="service-card">
        <div class="service-icon">
          <span>${service.icon}</span>
        </div>
        <div class="service-content">
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <ul class="service-features">
            ${service.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
          <div class="service-cta">
            <a href="#contacto" class="btn btn-primary">${currentLang === 'es' ? 'Solicitar' : 'Request'}</a>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// ===== PROJECTS SECTION =====
function updateProjectsSection() {
  const projects = contentData.projects;
  
  safeUpdateElement('.projects .section-header h2', projects.title);
  safeUpdateElement('.projects .section-header p', projects.description);
  
  // Update filters
  const filtersContainer = getElement('.projects-filter');
  if (filtersContainer && projects.filters) {
    filtersContainer.innerHTML = projects.filters.map((filter, index) => `
      <button class="filter-btn ${index === 0 ? 'active' : ''}" data-filter="${filter.toLowerCase()}">
        ${filter}
      </button>
    `).join('');
  }
  
  // Update projects grid
  const projectsGrid = getElement('.projects-grid');
  if (projectsGrid && projects.items) {
    const gridHTML = projects.items.map(project => `
      <div class="project-card animate-element" data-category="${project.category.toLowerCase()}">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
          <div class="project-overlay">
            <a href="${project.demo_url}" target="_blank" rel="noopener" class="btn btn-primary">
              ${currentLang === 'es' ? 'Ver' : 'View'}
            </a>
          </div>
        </div>
        <div class="project-content">
          ${project.badge ? `<div class="project-badge">${project.badge}</div>` : ''}
          <h3 class="project-title">${project.title}</h3>
          <div class="project-meta">
            <span class="project-year">${project.year}</span>
            <span class="project-category">${project.category}</span>
          </div>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.demo_url}" target="_blank" rel="noopener">
              ${currentLang === 'es' ? 'Ver' : 'View'} →
            </a>
          </div>
        </div>
      </div>
    `).join('');
    
    projectsGrid.innerHTML = gridHTML;
    
    // Reinitialize animations for new elements
    setTimeout(() => {
      const newAnimateElements = projectsGrid.querySelectorAll('.animate-element');
      newAnimateElements.forEach(el => {
        el.classList.add('animate-in');
      });
    }, 100);
  }
  

  
  // Update CTA
  if (projects.cta) {
    safeUpdateElement('.projects-cta h3', projects.cta.title);
    safeUpdateElement('.projects-cta p', projects.cta.description);
    safeUpdateElement('.projects-cta .btn', projects.cta.btn_contact);
  }
}

// ===== CONTACT SECTION =====
function updateContactSection() {
  const contact = contentData.contact;
  
  safeUpdateElement('.contact .section-header h2', contact.title);
  safeUpdateElement('.contact .section-header p', contact.description);
  
  // Update form
  safeUpdateElement('.contact-form h3', contact.form.title);
  safeUpdateElement('label[for="nombre"]', contact.form.fields.name + ' ' + contact.form.fields.required);
  safeUpdateElement('label[for="email"]', contact.form.fields.email + ' ' + contact.form.fields.required);
  safeUpdateElement('label[for="asunto"]', contact.form.fields.subject + ' ' + contact.form.fields.required);
  safeUpdateElement('label[for="mensaje"]', contact.form.fields.message + ' ' + contact.form.fields.required);
  safeUpdateElement('#contactForm button[type="submit"]', contact.form.button);
  safeUpdateElement('.form-note', contact.form.note);
}

// ===== FOOTER SECTION =====
function updateFooterSection() {
  const footer = contentData.footer;
  
  // Update company info
  safeUpdateElement('.footer-logo span', footer.company.name);
  safeUpdateElement('.footer-description', footer.company.description);
  
  // Update navigation links
  if (footer.links.navigation) {
    const navLinks = getElement('.footer-navigation ul');
    if (navLinks) {
      navLinks.innerHTML = footer.links.navigation.items.map(item => `
        <li><a href="${item.href}">${item.text}</a></li>
      `).join('');
    }
    safeUpdateElement('.footer-navigation h4', footer.links.navigation.title);
  }
  
  // Update services links
  if (footer.links.services) {
    const servicesLinks = getElement('.footer-services ul');
    if (servicesLinks) {
      servicesLinks.innerHTML = footer.links.services.items.map(item => `
        <li><a href="${item.href}">${item.text}</a></li>
      `).join('');
    }
    safeUpdateElement('.footer-services h4', footer.links.services.title);
  }
  
  // Update bottom
  safeUpdateElement('.footer-copyright', footer.bottom.copyright);
  safeUpdateElement('.footer-made-with', footer.bottom.made_with);
}

// ===== NAVIGATION =====
function updateNavigation() {
  const navigation = contentData.footer?.links?.navigation;
  if (!navigation) return;
  
  const links = getElements('.nav-link');
  links.forEach(link => {
    const href = link.getAttribute('href');
    const navItem = navigation.items.find(item => item.href === href);
    if (navItem) {
      link.textContent = navItem.text;
    }
  });
}

// ===== UTILITY FUNCTIONS =====
function safeUpdateElement(selector, content, attribute = 'innerHTML', value = null) {
  const element = getElement(selector);
  if (element && content !== undefined) {
    if (attribute === 'innerHTML') {
      element.innerHTML = content;
    } else if (attribute === 'textContent') {
      element.textContent = content;
    } else {
      element.setAttribute(attribute, value || content);
    }
  }
}

function updateLanguageButtons() {
  const langButtons = getElements('.lang-btn');
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

// ===== CACHED SELECTORS =====
let cachedElements = {};

function getElement(selector) {
  if (!cachedElements[selector]) {
    cachedElements[selector] = document.querySelector(selector);
  }
  return cachedElements[selector];
}

function getElements(selector) {
  if (!cachedElements[selector]) {
    cachedElements[selector] = document.querySelectorAll(selector);
  }
  return cachedElements[selector];
}

// ===== CONTACT FORM =====
function initContactForm() {
  const contactForm = getElement('#contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data using FormData
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Validate form
      if (!data.nombre || !data.email || !data.asunto || !data.mensaje) {
        const errorMsg = currentLang === 'es' 
          ? 'Por favor, completa todos los campos obligatorios.' 
          : 'Please fill in all required fields.';
        alert(errorMsg);
        return;
      }
      
      // Create WhatsApp message
      const template = currentLang === 'es'
        ? `Hola! Soy ${data.nombre}.\n\nEmail: ${data.email}\nAsunto: ${data.asunto}\n\nMensaje: ${data.mensaje}`
        : `Hello! I'm ${data.nombre}.\n\nEmail: ${data.email}\nSubject: ${data.asunto}\n\nMessage: ${data.mensaje}`;
      
      // Open WhatsApp
      const whatsappNumber = contentData.whatsapp?.number || '5492284721873';
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(template)}`;
      
      window.open(whatsappURL, '_blank');
      contactForm.reset();
    });
  }
}



// ===== ANIMATIONS =====
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = getElements('.animate-element');
  animateElements.forEach(el => {
    observer.observe(el);
  });
}


// ===== PROJECT FILTERS =====
function initProjectFilters() {
  const filterButtons = getElements('.filter-btn');
  const projectCards = getElements('.project-card');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      // Update active button
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const filter = this.dataset.filter.toLowerCase();
      const showAll = filter === 'todos' || filter === 'all';
      
      // Filter projects
      projectCards.forEach(card => {
        const category = (card.dataset.category || '').toLowerCase();
        const shouldShow = showAll || filter === category;
        
        if (shouldShow) {
          card.style.display = 'block';
          setTimeout(() => card.classList.add('animate-in'), 100);
        } else {
          card.style.display = 'none';
          card.classList.remove('animate-in');
        }
      });
    });
  });
}

// ===== UNIFIED SCROLL HANDLER =====
function initScrollHandler() {
  const navbar = getElement('.navbar');
  const backToTopBtn = getElement('.back-to-top');
  
  // Single scroll listener for all scroll-based functionality
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    // Navbar background
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 50);
    }
    
    // Back to top button
    if (backToTopBtn) {
      backToTopBtn.classList.toggle('visible', scrollY > 300);
    }
  });
  
  // Back to top click handler
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function() {
      scrollToSection('#inicio');
    });
  }
}

// ===== INITIALIZE ALL =====
document.addEventListener('DOMContentLoaded', function() {
  // Initialize language
  currentLang = detectLanguage();
  loadContent().then(() => {
    // Initialize all functionality after content loads
    initContactForm();
    initScrollAnimations();
    initProjectFilters();
    initNavigation();
  });
});

// ===== NAVIGATION FUNCTIONALITY =====
function initNavigation() {
  // Mobile Navigation Toggle
  const navToggle = getElement('.nav-toggle');
  const navMenu = getElement('.nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }

  // Smooth scrolling for navigation links
  const navLinks = getElements('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      scrollToSection(targetId);
      
      // Close mobile menu if open
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  });

  // Initialize unified scroll handler
  initScrollHandler();
  
  // Language switcher
  const langButtons = getElements('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const newLang = this.dataset.lang;
      if (newLang !== currentLang) {
        loadContent(newLang);
      }
    });
  });
}

// ===== UTILITY FUNCTIONS =====
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 70;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// Make functions globally available
window.scrollToSection = scrollToSection;