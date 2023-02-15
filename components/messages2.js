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