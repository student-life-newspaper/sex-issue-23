class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        footer{
            position: absolute;
            bottom: 0;
            width: 100%;
        }
          nav{
            height: 40px;
           
            display: flex;
            align-items: center;
            justify-content: left;
            background-color:  pink;
            
           

          }

          .footer_ul{
            height:0;
          }
  
          ul {
            padding: 0;
            margin-top: 8px;
            margin-bottom: auto;
          }
          
          a {
            font-weight: 700;
            
            margin: 0 25px;
            color: #fff;
            text-decoration: none;
          }

          footer a{
            font-size: .6em;
          }
          
          a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #fff;
          }
        </style>
        <footer>
          <nav class="footer">
            <ul class="footer_ul">
              <li><a href="#">Designed by Paige Steuber</a></li>
            
              
            </ul>
          </nav>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);