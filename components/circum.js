class Circumcision extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <Masterbation>
        <div class="container">
        <h1>
            What percent of the responses are circumcised?
        </h1>
        <div class="row gy-2 p-3 pieHolder justify-content-center">
            <div class="col-12 justify-content-center">
                <div class="pieContainer">
                    <div class="pieBackground"></div>
                    <div id="pieSliceCirc" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice2000" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice3000" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice4000" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div class="innerCircle">
                        <div class="content"></div>
                    </div>
                </div>
            </div>

        </div>
        
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block circ"></div>
            </div>
            <div class="col">
                <h2>Circumcised: 29.51%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block nocirc"></div>
            </div>
            <div class="col">
                <h2>Not circumcised: 9.36%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block notnotapp"></div>
            </div>
            <div class="col">
                <h2>
                    Not applicable: 61.13%</h2>
            </div>

        </div>

    
  
        </Masterbation>
      `;
    }
}

customElements.define('circumcision-component', Circumcision);