class NoPorn extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <noporn>
         <div class="container">
        <h1>
            Why does 36.23% not watch porn?
        </h1>
       
        
        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar prefernot"></div></div>
            </div>

            <div class="col-3 p-1">
               
                <h2>Not against it but prefer not to</h2>
                <p class="percent">71.25%</p>
                <p class="responses">57 responses</p>

            </div>

        </div>
        <div class="row gy-5 bardiv">
        <div class="col-9 p-0">
            <div class="dbar"><div class="bar nopleasure"></div></div>

            
        </div>
        <div class="col-3 p-1">

            <h2>Don;t find it pleasurable</h2>
            <p class="percent">41.58%</p>
            <p class="responses">190 responses</p>
        </div>

    </div>
        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar moral"></div></div>
            </div>
            <div class="col-3 p-1">
               
                <h2>Moral reasons</h2>
                <p class="percent">39.61%</p>
                <p class="responses">181 responses</p>
            </div>

        </div>
        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar religion"></div></div>
            </div>
            <div class="col-3 p-1">
                
                <h2>Religious reasons</h2>
                <p class="percent">10.94%</p>
                <p class="responses">50 responses</p>
            </div>

        </div>
        <div class="row gy-5">
            
                <div class="col-9 p-0">
                    <div class="dbar"><div class="bar caugt"></div></div>
                </div>
                <div class="col-3 p-1">
                    <h2>Afraid of being caught</h2>
                    <p class="percent">6.78%</p>
                    <p class="responses">31 responses</p>
                </div>
           

        </div>

        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar wifi"></div></div>
            </div>
            <div class="col-3 p-1">
                
                <h2>Eduroam can't support steaming needs</h2>
                <p class="percent">2.63%</p>
                <p class="responses">12 responses</p>
            </div>

        </div>



    </div>
        </noporn>
      `;
    }
  }
  
  customElements.define('noporn-component', NoPorn);