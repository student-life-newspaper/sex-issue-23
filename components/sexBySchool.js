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