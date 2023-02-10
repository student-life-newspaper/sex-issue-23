let scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);


const pages = [1, 2]
let currentPage = 1;
let btn = document.getElementById('next_btn');
let body = document.getElementById('bod');

btn.onclick = function(){
    currentPage += 1;
    console.log(currentPage)
 
    changePage();

};

function changePage(){
    // let p = document.createElement("schoolsex-component");
    if(currentPage == 2){
        let p = document.createElement("schoolsex-component");
        p.id="newID"
        
        bod.append(p)
       fadeIn()
    }
    else if(currentPage == 3){
        // bod.style.opacity = 0;
       p=document.getElementById("newID");
    
        p.remove();

        let q = document.createElement("yearsex-component");
        q.id="newID"
        
        bod.append(q)
        // fadeIn()

    }
}


function fadeIn() {
    let opacity = 0;
    let intervalID = setInterval(function() {
  
        if (opacity < 1) {
            opacity = opacity + 0.1
            bod.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 50);
}


