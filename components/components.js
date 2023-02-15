class AppUse extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <appUse>
        <div class="container">
        <h1>
            Percentage that use dating apps?
        </h1>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap big appUse">
                    <div class="circle ">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>
                                Out of 1238 responses
                            </h2>
                            
                            
                            <p class="percent">67.93%</p>
                            <h2 class="special_h2">have used a dating app</h2>

                        </div>

                    </div>

                </div>
            </div>
        </div>
        
    </div>
        </appUse>
      `;
    }
  }
  
  customElements.define('appuse-component', AppUse);

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

  class Masterbation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <Masterbation>
        <div class="container">
        <h1>
             Masturbation frequency?
        </h1>
        <div class="row gy-2 p-3 pieHolder justify-content-center">
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
                <h2>Once or twice a month: 16.97%</h2>
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

    
  
        </Masterbation>
      `;
    }
}

customElements.define('masterbation-component', Masterbation);

class Masturbat extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        
        <div class="container">
        <h1>
            Percentage that masturbate?
        </h1>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap big masturbat">
                    <div class="circle ">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>
                                out of 1335 responses
                            </h2>
                            
                            
                            <p class="percent">87.34%</p>
                            <h2 class="special_h2">maturbate</h2>

                        </div>

                    </div>

                </div>
            </div>
        </div>
        
    </div>
        
      `;
    }
  }
  customElements.define('maturbat-component', Masturbat);

  class Messages extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <Toys>
         <div class="container">
        <h1>
            Sent/recieved explict pictures or messages?
        </h1>
        <div class="row gy-5 sent_pictures">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar sent_pictures"></div></div>

                
            </div>
            <div class="col-3 p-1">

            <p class="percent">55.33%</p>
            <h2 class="special_h2">have sent explicit pictures</h2>
            <p class="responses">706 responses</p>
              
            </div>

        </div>
        <div class="row gy-5">
            
                <div class="col-9 p-0">
                    <div class="dbar"><div class="bar recieved_pictures"></div></div>
                </div>
                <div class="col-3 p-1">
                <p class="percent">61.05%</p>
                <h2 class="special_h2">have recieved explicit pictures</h2>
                <p class="responses">779 responses</p>
                    
                </div>
           

        </div>
        <div class="row gy-5">
        <div class="col-9 p-0">
                <div class="dbar"><div class="bar neither_pictures"></div></div>
            </div>

            <div class="col-3 p-1">
               
            <p class="percent">35.03%</p>
            <h2 class="special_h2">have neither recieved or sent explicit pictures</h2>
            <p class="responses">447 responses</p>
          

            </div>
            
       
   

</div>
        <div class="row gy-5">
        <div class="col-9 p-0">
        <div class="dbar"><div class="bar sent_messages"></div></div>
        </div>
        <div class="col-3 p-1">
        <p class="percent">66.01%</p>
        <h2 class="special_h2">have sent explicit messages</h2>
        <p class="responses">841 responses</p>
            
        </div>

        </div>
        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar recieved_messages"></div></div>
            </div>
            <div class="col-3 p-1">
               
            <p class="percent">66.01%</p>
            <h2 class="special_h2">have recieved explicit messages</h2>
           <p class="responses">841 responses</p>
                
            </div>

        </div>
        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar neither_messages"></div></div>
            </div>
            <div class="col-3 p-1">
               
            <p class="percent">30.69%</p>
            <h2 class="special_h2">have neither recieved or sent explicit messages</h2>
            <p class="responses">447 responses</p>
                
            </div>

        </div>


    </div>
        </Toys>
      `;
    }
}

customElements.define('messages-component', Messages);

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

  class NoPorn extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <noporn>
         <div class="container">
        <h1>
            Why does 36.23% not watch porn?
        </h1>
       
        
        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar prefernot"></div></div>
            </div>

            <div class="col-3 p-1">
               
                <h2>Not against it but prefer not to</h2>
                <p class="percent">71.25%</p>
                <p class="responses">57 responses</p>

            </div>

        </div>
        <div class="row gy-5 bardiv">
        <div class="col-9 p-0">
            <div class="dbar"><div class="bar nopleasure"></div></div>

            
        </div>
        <div class="col-3 p-1">

            <h2>Don't find it pleasurable</h2>
            <p class="percent">41.58%</p>
            <p class="responses">190 responses</p>
        </div>

    </div>
        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar moral"></div></div>
            </div>
            <div class="col-3 p-1">
               
                <h2>Moral reasons</h2>
                <p class="percent">39.61%</p>
                <p class="responses">181 responses</p>
            </div>

        </div>
        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar religion"></div></div>
            </div>
            <div class="col-3 p-1">
                
                <h2>Religious reasons</h2>
                <p class="percent">10.94%</p>
                <p class="responses">50 responses</p>
            </div>

        </div>
        <div class="row gy-5">
            
                <div class="col-9 p-0">
                    <div class="dbar"><div class="bar caugt"></div></div>
                </div>
                <div class="col-3 p-1">
                    <h2>Afraid of being caught</h2>
                    <p class="percent">6.78%</p>
                    <p class="responses">31 responses</p>
                </div>
           

        </div>

        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar wifi"></div></div>
            </div>
            <div class="col-3 p-1">
                
                <h2>Eduroam can't support steaming needs</h2>
                <p class="percent">2.63%</p>
                <p class="responses">12 responses</p>
            </div>

        </div>



    </div>
        </noporn>
      `;
    }
  }
  
  customElements.define('noporn-component', NoPorn);

  class Watch extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        
        <div class="container">
        <h1>
            Percentage that watch porn?
        </h1>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap big porn">
                    <div class="circle ">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                            <h2>
                                out of 1311 responses
                            </h2>
                            
                            
                            <p class="percent">63.77%</p>
                            <h2 class="special_h2">watch porn</h2>

                        </div>

                    </div>

                </div>
            </div>
        </div>
        
    </div>
        
      `;
    }
  }
  customElements.define('porn-component', Watch);

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

class Reality extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <Reality>
         <div class="container">
        <h1>
            How many students are having sex?
        </h1>
        <div class="row gy-5 bardiv">
            <div class="col-8 p-0">
                <div class="dbar"><div class="bar actually_sex"></div></div>

                
            </div>
            <div class="col-4 p-1">

                <h2>Percent that have had sex</h2>
                <p class="percent">75.66%</p>
                <p class="responses">1562 responses</p>
            </div>

        </div>
        <div class="row gy-5">
            
                <div class="col-8 p-0">
                    <div class="dbar"><div class="bar guess_sex"></div></div>
                </div>
                <div class="col-4 p-1">
                    <h2>What students think the percentage is</h2>
                    <p class="percent">65%</p>
                    <p class="responses">1567 responses</p>
                </div>
           

        </div>
        



    </div>
        </Reality>
      `;
    }
  }
  
  customElements.define('reality-component', Reality);

  class SchoolSex extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <SchoolSex>
         <div class="container">
        <h1>
            Which school has had the most sex?
        </h1>
        <div class="row gy-5 bardiv">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar artsci"></div></div>

                
            </div>
            <div class="col-3 p-1">

                <h2>ArtSci</h2>
                <p class="percent">74.30%</p>
                <p class="responses">856 responses</p>
            </div>

        </div>
        <div class="row gy-5">
            
                <div class="col-9 p-0">
                    <div class="dbar"><div class="bar olin"></div></div>
                </div>
                <div class="col-3 p-1">
                    <h2>Olin</h2>
                    <p class="percent">78.51%</p>
                    <p class="responses">121 responses</p>
                </div>
           

        </div>
        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar samfox"></div></div>
            </div>

            <div class="col-3 p-1">
               
                <h2>Sam Fox</h2>
                <p class="percent">71.25%</p>
                <p class="responses">57 responses</p>

            </div>

        </div>
        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar mckelvey"></div></div>
            </div>
            <div class="col-3 p-1">
               
                <h2>Mckelvey</h2>
                <p class="percent">70.15%</p>
                <p class="responses">201 responses</p>
            </div>

        </div>
        <div class="row gy-5">
            <div class="col-9 p-0">
                <div class="dbar"><div class="bar medschool"></div></div>
            </div>
            <div class="col-3 p-1">
                
                <h2>Med School</h2>
                <p class="percent">87.50%</p>
                <p class="responses">216 responses</p>
            </div>

        </div>



    </div>
        </SchoolSex>
      `;
    }
  }
  
  customElements.define('schoolsex-component', SchoolSex);

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
                <div class="dbar"><div class="bar dildo"></div></div>
            </div>

            <div class="col-3 p-1">
               
                <h2>Dildo</h2>
                <p class="percent">16.86%</p>
          

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