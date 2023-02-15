class HairGroomming extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <HairGroomming>
        <div class="container">
        <h1>
            WashU's hair grooming habits?
        </h1>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap nogrooming">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>No bosy hair grooming </h2> 
                            <p class="percent">6.02%</p>
                            <p class="responses">80 responses</p>
                            

                        </div>

                    </div>

                </div>
            </div>
            <div class="col-6">
                <div class="circle-wrap arms">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2> Arms</h2>

                            <p class="percent">10.30%</p>
                            <p class="responses">137 responses</p>
                          
                             
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap armpits">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>Armpits</h2>
                            <p class="percent">66.47%</p>
                            <p class="responses">884 responses</p>
                            
                             

                        </div>

                    </div>

                </div>

            </div>
            <div class="col-6">
                <div class="circle-wrap legs">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>Legs</h2>

                            <p class="percent">52.78%</p>
                            <p class="responses">702 responses</p>
                           
                            


                        </div>

                    </div>

                </div>

            </div>
        </div>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap chest">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>Chest</h2>
                            <p class="percent">14.51%</p>
                            <p class="responses">193 responses</p>
                            
                             
                           

                        </div>

                    </div>

                </div>

            </div>
            <div class="col-6">
                <div class="circle-wrap back">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                           
                            <h2>Back</h2>
                            
                            <p class="percent">5.41%</p>
                            <p class="responses">72 responses</p>
                           

                        </div>

                    </div>

                </div>
            </div>
            </div>
            <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap face">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                           
                            <h2>Face</h2>
                            
                            <p class="percent">43.53%</p>
                            <p class="responses">579 responses</p>
                           

                        </div>

                    </div>

                </div>
            </div>
            <div class="col-6">
                <div class="circle-wrap pubic">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                           
                            <h2>Pubic hair</h2>
                            
                            <p class="percent">81.85%</p>
                            <p class="responses">1090 responses</p>

                           

                        </div>

                    </div>

                </div>
            </div>
        </div>
        

    </div>
        </HairGroomming>
      `;
    }
  }
  
  customElements.define('grooming-component', HairGroomming);