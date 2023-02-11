class Watch extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        
        <div class="container">
        <h1>
            Percentage that watch porn?
        </h1>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap big porn">
                    <div class="circle ">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>
                                out of 1311 responses
                            </h2>
                            
                            
                            <p class="percent">63.77%</p>
                            <h2 class="special_h2">watch porn</h2>

                        </div>

                    </div>

                </div>
            </div>
        </div>
        
    </div>
        
      `;
    }
  }
  customElements.define('porn-component', Watch);

