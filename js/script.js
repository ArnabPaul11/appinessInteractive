var div1 = (innerHTML)=>{

    var div1=document.createElement("div")
    div1.innerHTML = innerHTML;
    return div1
    }
    
var divy=div1("all rights reserved")
var footer=document.getElementById("footer")
footer.appendChild(divy)
document.body.appendChild(footer);



