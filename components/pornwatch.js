class PornWatch extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <Masterbation>
        <div class="container">
        <h1>
            How offen does WashU view porn?
        </h1>
        <div class="row gy-2 p-3 pieHolder justify-content-center">
            <div class="col-12 justify-content-center">
                <div class="pieContainer">
                    <div class="pieBackground"></div>
                    <div id="pieSlice10" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice20" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice30" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice40" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice50" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice60" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice70" class="hold">
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
                <div class="color_block month"></div>
            </div>
            <div class="col">
                <h2>Once or twice a year: 3.40%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block tmonth"></div>
            </div>
            <div class="col">
                <h2>Once every few months: 12.38%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block week"></div>
            </div>
            <div class="col">
                <h2>
                    Once or twice a month: 25.12%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block tweek"></div>
            </div>
            <div class="col">
                <h2>
                    Weekly: 27.31%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block daily"></div>
            </div>
            <div class="col">
                <h2>
                    Several times a week: 24.27%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block multi"></div>
            </div>
            <div class="col">
                <h2>

                    Daily: 5.58%</h2>
                    
                    
            </div>

        </div>
        <div class="row py-1 justify-content-center">
            <div class="col-2 p-0 ">
                <div class="color_block never"></div>
            </div>
            <div class="col">
                <h2>Multiple times daily: 1.94%</h2>
            </div>

        </div>

    
  
        </Masterbation>
      `;
    }
}

customElements.define('pornwatch-component', PornWatch);