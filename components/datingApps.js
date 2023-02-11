class DatingApp extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <DatingApp>
        <div class="container">
        <h1>
            WashU's prefered dating app?
        </h1>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap tinder">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>Tinder </h2> 
                            <p class="percent">54.2%</p>
                            

                        </div>

                    </div>

                </div>
            </div>
            <div class="col-6">
                <div class="circle-wrap hinge">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2> Hinge</h2>

                            <p class="percent">32.39%</p>
                          
                             
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap grindr">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>Grindr</h2>
                            <p class="percent">5.41%</p>
                            
                             

                        </div>

                    </div>

                </div>

            </div>
            <div class="col-6">
                <div class="circle-wrap bumble">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>Bumble</h2>

                            <p class="percent">30.21%</p>
                           
                            


                        </div>

                    </div>

                </div>

            </div>
        </div>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap snapchat">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>Snapchat</h2>
                            <p class="percent">16.88%</p>
                            
                             
                           

                        </div>

                    </div>

                </div>

            </div>
            <div class="col-6">
                <div class="circle-wrap DataMatc">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                           
                            <h2>DataMatch</h2>
                            
                            <p class="percent">13%</p>
                           

                        </div>

                    </div>

                </div>
            </div>
        </div>
        

    </div>
        </DatingApp>
      `;
    }
  }
  
  customElements.define('dating-component', DatingApp);