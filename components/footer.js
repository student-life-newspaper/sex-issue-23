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