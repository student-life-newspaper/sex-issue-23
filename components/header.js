class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
          <nav>
            <ul>
              <li><a href="https://www.studlife.com/">StudLife | Sex Issue 2023</a></li>
              <li><a href="#"></a></li>
              
            </ul>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);


  class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
          <nav class="footer">
            <ul class="footer_ul">
              <li><a href="#">Designed by Paige Steuber</a></li>
            
              
            </ul>
          </nav>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);