function checkForm(form) {
    val1=document.getElementById('entry.451699722').value;
    if (val1=="" ) {
        alert("Error: You Entered Null value in Name section ❌");
        document.getElementById('entry.451699722').focus();
        return false;
    }
    else if (document.getElementById('entry.1031484370').value=="" ) {
        alert("Error: You Entered Null value in Email section ❌");
        document.getElementById('entry.1031484370').focus();
        return false;
    }
    
    else {
        alert("Thank you, We will get in touch with you shortly 👍 ");
        document.getElementById('entry.451699722').value="";
        document.getElementById('entry.1031484370').value="";
        document.getElementById('entry.2128101961').value="";
        
        return true;

    }

}


var d= new Date();
const n = d.getFullYear();
function current() {
    return n;
}

var tag = document.createElement("p");
var newtext= ' copyright © '+current();
   var text = document.createTextNode(newtext);
   tag.appendChild(text);
   var element = document.getElementById("new");
   element.appendChild(tag);