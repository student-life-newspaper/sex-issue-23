class SexFrequency extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <SexFrequency>
        <div class="container">
        <h1>
             Sex frequency?
        </h1>
        <div class="row gy-2 p-3 pieHolder justify-content-center">
            <div class="col-12 justify-content-center">
                <div class="pieContainer">
                    <div class="pieBackground"></div>
                    <div id="pieSlice100" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice200" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice300" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice400" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice500" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice600" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice700" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice800" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice900" class="hold">
                        <div class="pie"></div>
                    </div>
                    <div id="pieSlice1000" class="hold">
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
                <div class="color_block sex_multi"></div>
            </div>
            <div class="col">
                <h2>Multiple times a day: 2.35%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block sex_daily"></div>
            </div>
            <div class="col">
                <h2>Daily: 6.87%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block sex_twoweek"></div>
            </div>
            <div class="col">
                <h2>2-3 times a week: 28.15%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block sex_weekly"></div>
            </div>
            <div class="col">
                <h2>
                    Weekly: 19.11%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block sex_tm"></div>
            </div>
            <div class="col">
                <h2>
                    Once or twice a month: 20.43%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block sex_tsemester"></div>
            </div>
            <div class="col">
                <h2>
                    2-3 times a semester: 11.21%</h2>
            </div>

        </div>
        <div class="row py-1">
            <div class="col-2 p-0 ">
                <div class="color_block sex_onesemester"></div>
            </div>
            <div class="col">
                <h2>

                    1 time a semester: 2.45%</h2>
                    
                    
            </div>

        </div>
        <div class="row py-1">
        <div class="col-2 p-0 ">
            <div class="color_block sex_tyear"></div>
        </div>
        <div class="col">
            <h2>

                2-3 times a year: 4.36%</h2>
                
                
        </div>

    </div>
    <div class="row py-1">
    <div class="col-2 p-0 ">
        <div class="color_block sex_oneyear"></div>
    </div>
    <div class="col">
        <h2>

            1 time year: 1.32%</h2>
            
            
    </div>

</div>
<div class="row py-1">
<div class="col-2 p-0 ">
    <div class="color_block sex_lessoneyear"></div>
</div>
<div class="col">
    <h2>

        Less than 1 time a year: 3.67%</h2>
        
        
</div>

</div>

    
  
        </SexFrequency>
      `;
    }
}

customElements.define('sexfrequency-component', SexFrequency);