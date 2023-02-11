class Reality extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <Reality>
         <div class="container">
        <h1>
            How many students are having sex?
        </h1>
        <div class="row gy-5 bardiv">
            <div class="col-8 p-0">
                <div class="dbar"><div class="bar actually_sex"></div></div>

                
            </div>
            <div class="col-4 p-1">

                <h2>Percent that have had sex</h2>
                <p class="percent">75.66%</p>
                <p class="responses">1562 responses</p>
            </div>

        </div>
        <div class="row gy-5">
            
                <div class="col-8 p-0">
                    <div class="dbar"><div class="bar guess_sex"></div></div>
                </div>
                <div class="col-4 p-1">
                    <h2>What students think the percentage is</h2>
                    <p class="percent">65%</p>
                    <p class="responses">1567 responses</p>
                </div>
           

        </div>
        



    </div>
        </Reality>
      `;
    }
  }
  
  customElements.define('reality-component', Reality);