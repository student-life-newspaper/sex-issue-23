class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        header{
            height: 60px;
        }
          nav {
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: left;
            background-color:  #0a0a23;
          }
  
          ul {
            padding: 0;
            margin-top: 8px;
            margin-bottom: auto;
          }
          
          a {
            font-weight: 600;
            margin: 0 25px;
            color: #fff;
            text-decoration: none;
          }
          
          a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #fff;
          }
        </style>
        <header>
          <nav>
            <ul>
              <li><a href="#">StudLife | Sex Issue 2023</a></li>
              <li><a href="#"></a></li>
              
            </ul>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);