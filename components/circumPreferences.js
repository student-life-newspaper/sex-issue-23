class CircumcisedPreference extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <CircumcisedPreference>
        <div class="container">
        <h1>
            Does Washu prefer their partner to be circumcised?
        </h1>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap yes">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>Yes </h2> 
                            <p class="percent">24.24%</p>
                            

                        </div>

                    </div>

                </div>
            </div>
            <div class="col-6">
                <div class="circle-wrap no">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2> No</h2>

                            <p class="percent">2.88%</p>
                          
                             
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap dont_care">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>No preference</h2>
                            <p class="percent">39.55%</p>
                            
                             

                        </div>

                    </div>

                </div>

            </div>
            <div class="col-6">
                <div class="circle-wrap not_applicible">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>Not applicable</h2>

                            <p class="percent">33.33%</p>
                           
                            


                        </div>

                    </div>

                </div>

            </div>
        </div>  

    </div>
        </CircumcisedPreference>
      `;
    }
  }
  
  customElements.define('circumcisedpreference-component', CircumcisedPreference);