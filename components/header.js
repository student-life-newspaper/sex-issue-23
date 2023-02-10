class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
          <nav>
            <ul>
              <li><a href="#">StudLife | Sex Issue 2023</a></li>
              <li><a href="#"></a></li>
              
            </ul>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);