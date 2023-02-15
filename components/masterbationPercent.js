class Masturbat extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        
        <div class="container">
        <h1>
            Percentage that masturbate?
        </h1>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap big masturbat">
                    <div class="circle ">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>
                                out of 1335 responses
                            </h2>
                            
                            
                            <p class="percent">87.34%</p>
                            <h2 class="special_h2">maturbate</h2>

                        </div>

                    </div>

                </div>
            </div>
        </div>
        
    </div>
        
      `;
    }
  }
  customElements.define('maturbat-component', Masturbat);

