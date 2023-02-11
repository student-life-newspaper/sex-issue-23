class Masterbation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <Masterbation>
        <div class="container">
        <h1>
            Masterbation frequency?
        </h1>
        <div class="row gy-5 pieHolder justify-content-center">
            <div class="col-12 justify-content-center">
                <div class="pieContainer">
                    <div class="pieBackground"></div>
                    <div id="pieSlice1" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice2" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice3" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice4" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice5" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice6" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div class="innerCircle">
                        <div class="content"></div>
                    </div>
                </div>
            </div>

        </div>
        <div class="row py-1 justify-content-center">
            <div class="col-2 p-0 ">
                <div class="color_block never"></div>
            </div>
            <div class="col">
                <h2>Never: 0.17%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block month"></div>
            </div>
            <div class="col">
                <h2>Less than once a month: 6.88%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block tmonth"></div>
            </div>
            <div class="col">
                <h2>Once or twice a month 16.97%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block week"></div>
            </div>
            <div class="col">
                <h2>
                    Weekly: 28.29%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block tweek"></div>
            </div>
            <div class="col">
                <h2>
                    Several times a week: 34.03%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block daily"></div>
            </div>
            <div class="col">
                <h2>
                    Daily: 11.14%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block multi"></div>
            </div>
            <div class="col">
                <h2>

                    Multiple times daily: 2.52%</h2>
                    
                    
            </div>

        </div>

    </div>
  
        </Masterbation>
      `;
    }
}

customElements.define('masterbation-component', Masterbation);