document.addEventListener("DOMContentLoaded", function(){

    let url1 = "../css/estilo.css";
    let url2 = "../css/contraste.css";
    let contraste = document.getElementById("contraste");
    let semcontraste = document.getElementById("semcontraste");
 
    let css = localStorage.getItem("css");
    if(!css){
       criaTag(url1);
    }else{
       criaTag(css);
    }
 
    function criaTag(url){
       let estilo = document.createElement("link");
       estilo.rel = "stylesheet";
       estilo.type = "text/css";
       estilo.className = "acess";
       estilo.href = url;
       document.body.appendChild(estilo);
    }

    let tag = document.getElementsByClassName("acess");
    contraste.onclick = function(){
  
 
          tag[0].href = url2;
          localStorage.setItem("css", url2);
       
 
    }
    semcontraste.onclick = function(){
        tag[0].href = url1;
        localStorage.setItem("css", url1);
        
    }
 
 });