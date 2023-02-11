class Toys extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <Toys>
         <div class="container">
        <h1>
            Toys?
        </h1>
        <div class="row gy-5 no_toys">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar no_toys"></div></div>

                
            </div>
            <div class="col-3 p-1">

                <h2>"I don't own any"</h2>
                <p class="percent">49.26%</p>
              
            </div>

        </div>
        <div class="row gy-5">
            
                <div class="col-9 p-0">
                    <div class="dbar"><div class="bar vibrator"></div></div>
                </div>
                <div class="col-3 p-1">
                    <h2>Vibrator</h2>
                    <p class="percent">42.26%</p>
                    
                </div>
           

        </div>
        <div class="row gy-5">
            
        <div class="col-9 p-0">
            <div class="dbar"><div class="bar handcuffs"></div></div>
        </div>
        <div class="col-3 p-1">
            <h2>Handcuffs</h2>
            <p class="percent">14.32%</p>
            
        </div>
   

</div>
        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar dildo"></div></div>
            </div>

            <div class="col-3 p-1">
               
                <h2>Dildo</h2>
                <p class="percent">16.86%</p>
          

            </div>

        </div>
        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar butt_plug"></div></div>
            </div>
            <div class="col-3 p-1">
               
                <h2>Butt Plug</h2>
                <p class="percent">8.62%</p>
                
            </div>

        </div>


    </div>
        </Toys>
      `;
    }
  }
  
  customElements.define('toys-component', Toys);