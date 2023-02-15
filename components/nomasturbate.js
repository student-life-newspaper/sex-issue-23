class NoMasturbation extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <nomasturbate>
         <div class="container">
        <h1>
            Why does 12.66% not masturbate?
        </h1>
       
        
        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar nopleasure2"></div></div>
            </div>

            <div class="col-3 p-1">
               
                <h2>Don't find it pleasurable</h2>
                <p class="percent">19.05%</p>
                <p class="responses">72 responses</p>

            </div>

        </div>
        <div class="row gy-5 bardiv">
        <div class="col-9 p-0">
            <div class="dbar"><div class="bar how"></div></div>

            
        </div>
        <div class="col-3 p-1">

            <h2>Don't know how</h2>
            <p class="percent">15.61%</p>
            <p class="responses">59 responses</p>
        </div>

    </div>
        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar perfernot2"></div></div>
            </div>
            <div class="col-3 p-1">
               
                <h2>Not against it but prefer not to</h2>
                <p class="percent">33.07%</p>
                <p class="responses">125 responses</p>
            </div>

        </div>
        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar moral2"></div></div>
            </div>
            <div class="col-3 p-1">
                
                <h2>Moral reasons</h2>
                <p class="percent">13.49%</p>
                <p class="responses">51 responses</p>
            </div>

        </div>
        <div class="row gy-5">
            
                <div class="col-9 p-0">
                    <div class="dbar"><div class="bar roommate"></div></div>
                </div>
                <div class="col-3 p-1">
                    <h2>Roommate is always around</h2>
                    <p class="percent">18.25%</p>
                    <p class="responses">69 responses</p>
                </div>
           

        </div>

        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar religion2"></div></div>
            </div>
            <div class="col-3 p-1">
                
                <h2>Religious Reasons</h2>
                <p class="percent">11.90%</p>
                <p class="responses">45 responses</p>
            </div>

        </div>



    </div>
        </nomasturbate>
      `;
    }
  }
  
  customElements.define('nomasturbation-component', NoMasturbation);