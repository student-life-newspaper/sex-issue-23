class AppUse extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <appUse>
        <div class="container">
        <h1>
            Percentage that use dating apps?
        </h1>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap big appUse">
                    <div class="circle ">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>
                                Out of 1238 responses
                            </h2>
                            
                            
                            <p class="percent">67.93%</p>
                            <h2 class="special_h2">have used a dating app</h2>

                        </div>

                    </div>

                </div>
            </div>
        </div>
        
    </div>
        </appUse>
      `;
    }
  }
  
  customElements.define('appuse-component', AppUse);

