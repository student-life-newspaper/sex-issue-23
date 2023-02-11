class Welcome extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <welcome>
        <div class="container">
        <div
          class="row align-items-center">
          <div class="col-md-12 align-items-center">
          
            <h3>
                <p>StudLife Presents:</p>
                The 2023 Sex Issue Data 
                <p>Gathered from over 1,800 WashU Students </p>
            </h3>
            
          </div>
        </div>
        </div>
        </welcome>
      `;
    }
  }
  
  customElements.define('welcome-component', Welcome);

