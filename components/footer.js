class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: linear-gradient(to top, #0A0A0A, #1E1E2F);
          color: white;
          padding: 4rem 2rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00FFFF, transparent);
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          text-align: left;
        }
        
        .footer-section h3 {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: #00FFFF;
          position: relative;
          display: inline-block;
        }
        
        .footer-section h3::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #00FFFF, #FF00FF);
        }
        
        .footer-section p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
          display: inline-block;
        }
        
        .footer-links a:hover {
          color: #00FFFF;
          transform: translateX(5px);
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          background: #00FFFF;
          color: #0A0A0A;
          transform: translateY(-3px);
        }
        
        .copyright {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
        }
        
        .footer-decoration {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 0;
        }
        
        .footer-decoration::before,
        .footer-decoration::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.2;
        }
        
        .footer-decoration::before {
          width: 300px;
          height: 300px;
          background: #FF00FF;
          bottom: -100px;
          left: -100px;
        }
        
        .footer-decoration::after {
          width: 200px;
          height: 200px;
          background: #00FFFF;
          top: -50px;
          right: -50px;
        }
      </style>
      
      <footer>
        <div class="footer-decoration"></div>
        <div class="footer-content">
          <div class="footer-section">
            <h3>Futuro Neon Digital</h3>
            <p>Explorando as fronteiras da tecnologia e inovação para criar um futuro digital mais brilhante e eficiente.</p>
            <div class="social-links">
              <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
              <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
              <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
            </div>
          </div>
          
          <div class="footer-section">
            <h3>Links Rápidos</h3>
            <ul class="footer-links">
              <li><a href="#hero">Início</a></li>
              <li><a href="#tech">Tecnologias</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3>Serviços</h3>
            <ul class="footer-links">
              <li><a href="#">Consultoria em TI</a></li>
              <li><a href="#">Desenvolvimento de Software</a></li>
              <li><a href="#">Segurança Digital</a></li>
              <li><a href="#">Cloud Computing</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3>Contato</h3>
            <p>contato@futuroneon.com</p>
            <p>+55 11 98765-4321</p>
            <p>São Paulo, Brasil</p>
          </div>
        </div>
        
        <div class="copyright">
          &copy; 2024 Futuro Neon Digital. Todos os direitos reservados.
        </div>
      </footer>
    `;
    
    // Replace feather icons
    feather.replace();
  }
}

customElements.define('custom-footer', CustomFooter);