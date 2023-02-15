class DatingApp extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <DatingApp>
        <div class="container">
        <h1>
            Sent/recieved explict pictures or messages?
        </h1>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap sent_pictures">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                    
                            <p class="percent">55.33%</p>
                            <h2 class="special_h2">have sent explicit pictures</h2>
                            p class="responses">706 responses</p>
                            

                        </div>

                    </div>

                </div>
            </div>
            <div class="col-6">
                <div class="circle-wrap recieved_pictures">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                        <p class="percent">61.05%</p>
                        <h2 class="special_h2">have recieved explicit pictures</h2>
                        p class="responses">779 responses</p>
                          
                             
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div class="row gy-5">
            <div class="col-6">
                <div class="circle-wrap neither_pictures">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                        <p class="percent">35.03%</p>
                        <h2 class="special_h2">have neither recieved or sent explicit pictures</h2>
                        p class="responses">447 responses</p>
                            
                             

                        </div>

                    </div>

                </div>

            </div>
            <div class="col-6">
                <div class="circle-wrap sent_messages">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                        <p class="percent">66.01%</p>
                        <h2 class="special_h2">have sent explicit messages</h2>
                        p class="responses">841 responses</p>
                        
                            


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
                        <p class="percent">66.01%</p>
                        <h2 class="special_h2">have recieved explicit messages</h2>
                        p class="responses">841 responses</p>
                        
                            
                             
                           

                        </div>

                    </div>

                </div>

            </div>
            <div class="col-6">
                <div class="circle-wrap neither_messages">
                    <div class="circle">

                        <div class="mask full">
                            <div class="fill"></div>
                        </div>

                        <div class="mask half">
                            <div class="fill"></div>
                        </div>

                        <div class="inside-circle">
                           
                        <p class="percent">30.69%</p>
                        <h2 class="special_h2">have neither recieved or sent explicit messages</h2>
                        p class="responses">447 responses</p>
                           

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