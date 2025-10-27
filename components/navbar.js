class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }
        
        nav {
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(0, 255, 255, 0.1);
        }
        
        .logo {
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: white;
          text-decoration: none;
          background: linear-gradient(90deg, #00FFFF, #FF00FF);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }
        
        .logo::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #00FFFF, #FF00FF);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }
        
        .logo:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-links li a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-links li a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #00FFFF;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }
        
        .nav-links li a:hover {
          color: white;
        }
        
        .nav-links li a:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: rgba(10, 10, 20, 0.95);
            flex-direction: column;
            align-items: center;
            padding: 2rem 0;
            gap: 1.5rem;
            clip-path: circle(0px at 90% -10%);
            transition: clip-path 0.5s ease;
            pointer-events: none;
          }
          
          .nav-links.open {
            clip-path: circle(1000px at 90% -10%);
            pointer-events: all;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      
      <nav>
        <a href="/" class="logo">Futuro Neon</a>
        
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        
        <ul class="nav-links">
          <li><a href="#hero">Início</a></li>
          <li><a href="#tech">Tecnologias</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    `;
    
    // Initialize mobile menu functionality
    const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('open') 
          ? '<i data-feather="x"></i>' 
          : '<i data-feather="menu"></i>';
        feather.replace();
      });
    }
    
    // Replace feather icons
    feather.replace();
  }
}

customElements.define('custom-navbar', CustomNavbar);