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

let ww = document.createElement("welcome-component");
        ww.id="newID"
        body.append(ww)
        
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
       
        ww=document.getElementById("newID");
    
        ww.remove();
        prevbtn.setAttribute("class", "btn mybtn me-md-2")
        let hh = document.createElement("reality-component");
        hh.id="newID"
        
        bod.append(hh)
    //    fadeIn()
    }
    
    else if(currentPage == 4){
       
        hh=document.getElementById("newID");
    
        hh.remove();
        prevbtn.setAttribute("class", "btn mybtn me-md-2")
        let p = document.createElement("schoolsex-component");
        p.id="newID"
        
        bod.append(p)
    //    fadeIn()
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

    else if(currentPage == 5){
        // bod.style.opacity = 0;
       q=document.getElementById("newID");
    
        q.remove();

        let m = document.createElement("appuse-component");
        m.id="newID"
        
        bod.append(m)
        // fadeIn()

    }

    else if(currentPage == 6){
        // bod.style.opacity = 0;
       m=document.getElementById("newID");
    
        m.remove();

        let k = document.createElement("dating-component");
        k.id="newID"
        
        bod.append(k)
        // fadeIn()

    }

    else if(currentPage == 7){
       
       m=document.getElementById("newID");
        m.remove();

        let i = document.createElement("toys-component");
        i.id="newID"
        bod.append(i)
        

    }
    else if(currentPage == 8){
       
        i=document.getElementById("newID");
        i.remove();
 
         let im = document.createElement("maturbat-component");
         im.id="newID"
         bod.append(im)
         
 
     }

     else if(currentPage == 9){
       
        i=document.getElementById("newID");
        i.remove();
 
         let im = document.createElement("nomasturbation-component");
         im.id="newID"
         bod.append(im)
         
 
     }

    else if(currentPage == 10){
       
        im=document.getElementById("newID");
         im.remove();
 
         let j = document.createElement("masterbation-component");
         j.id="newID"
         bod.append(j)
         
 
     }

     else if(currentPage == 11){
       
        j=document.getElementById("newID");
         j.remove();
 
         let pp = document.createElement("porn-component");
         pp.id="newID"
         bod.append(pp)
         
 
     }

     else if(currentPage == 12){
       
        pp=document.getElementById("newID");
        pp.remove();
 
         let v = document.createElement("noporn-component");
         v.id="newID"
         bod.append(v)
         
 
     }
     else if(currentPage == 13){
       
        v=document.getElementById("newID");
        v.remove();
 
         let is = document.createElement("pornwatch-component");
         is.id="newID"
         bod.append(is)
         
 
     }
}

function changePageBackward(){
    // let p = document.createElement("schoolsex-component");
    if(currentPage == 1){
        let p =document.getElementById("newID");
        p.remove();

        let ww = document.createElement("welcome-component");
        ww.id="newID"
        bod.append(ww)

        prevbtn.setAttribute("class", "btn mybtn me-md-2 disabled")

    }
    else {
        changePageForward();

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


