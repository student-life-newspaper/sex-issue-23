class YearSex extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <YearSex>
        <div class="container">
        <h1>
            Which year has had the most sex?
        </h1>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap h">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>First Years </h2> 
                            <p class="percent">57.40%</p>
                            <p class="responses">331 responses</p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="col-6">
                <div class="circle-wrap sophmore">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2> Sophomores</h2>

                            <p class="percent">73.99%</p>
                            <p class="responses">373 responses</p>
                             
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap junior">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>Juniors</h2>
                            <p class="percent">78.99%</p>
                            <p class="responses">276 responses</p>
                             

                        </div>

                    </div>

                </div>

            </div>
            <div class="col-6">
                <div class="circle-wrap senior">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>Seniors</h2>

                            <p class="percent">88.05%</p>
                            <p class="responses">226 responses</p>
                            


                        </div>

                    </div>

                </div>

            </div>
        </div>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap grad">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>Grad Students</h2>
                            <p class="percent">79.41%</p>
                            <p class="responses">108 responses</p>
                             
                           

                        </div>

                    </div>

                </div>

            </div>
            <div class="col-6">
                <div class="circle-wrap med">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                           
                            <h2>Med Students</h2>
                            
                            <p class="percent">89.78%</p>
                            <p class="responses">123 responses</p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
        

    </div>
        </YearSex>
      `;
    }
  }
  
  customElements.define('yearsex-component', YearSex);