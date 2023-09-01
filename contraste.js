document.addEventListener("DOMContentLoaded", function(){
    let url1 = "./style.css"
    let url2 = "./contraste.css"
    let contraste = document.getElementById("contraste")
    let semcontraste = document.getElementById("semcontraste")


    function createTag (url){

        let estilo = document.createElement("link")
        estilo.href = url
        estilo.rel = "stylesheet"
        estilo.type = "text/css"
        estilo.className = "acess"

        document.body.appendChild(estilo)
    }

    let tag = document.getElementsByClassName("acess")

    contraste.onclick = function(){
        tag[0].href = url2
        localStorage.setItem("css", url2)
    }

    semcontraste.onclick = function(){
        tag[0].href = url1
        localStorage.removeItem("css")
    }

    let css = localStorage.getItem("css")

    if(!css){
        createTag(url1)
    } else{
        createTag(url2)
    }

})