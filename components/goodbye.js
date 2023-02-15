class Goodbye extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <goodbye>
        <div class="container">
        <div
          class="row align-items-center">
          <div class="col-md-12 align-items-center">
          
            <h3>
                <p>That's it!</p>
                Thanks for stopping by 
                <p>Remeber to take the Studlife Sex Issue survey next year!</p>
            </h3>
            
          </div>
        </div>
        </div>
        </goodbye>
      `;
    }
  }
  
  customElements.define('goodbye-component', Goodbye);

