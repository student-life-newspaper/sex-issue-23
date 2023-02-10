let scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);


const pages = [1, 2]
let currentPage = 1;
let btn = document.getElementById('next_btn');
let prevbtn = document.getElementById('prev_btn');

let body = document.getElementById('bod');

btn.onclick = function(){
    currentPage += 1;
    console.log(currentPage)
 
    changePageForward();

};

prevbtn.onclick = function(){
    if(currentPage == 1){
        // alert("no pages")
    }else{
        currentPage -= 1;
        console.log(currentPage)
     
        changePageBackward();
    
    }
    
};

function changePageForward(){
    // let p = document.createElement("schoolsex-component");
    
    if(currentPage == 2){
       

        prevbtn.setAttribute("class", "btn mybtn me-md-2")
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

function changePageBackward(){
    // let p = document.createElement("schoolsex-component");
    if(currentPage == 1){
        let p =document.getElementById("newID");
        p.remove();

        prevbtn.setAttribute("class", "btn mybtn me-md-2 disabled")

    }
    else if(currentPage == 2){
        prevbtn.setAttribute("class", "btn mybtn me-md-2")
        let q=document.getElementById("newID");
    
        q.remove();
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


