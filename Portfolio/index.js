/*function checkForm(form) {
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
*/
///////////////////////////
//section Animation
const section = document.querySelectorAll(".section");

const revealSection = function (entrys, observer) {
  const [entry] = entrys;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  console.log(entry);
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
});

section.forEach((sec) => {
  sectionObserver.observe(sec);
  sec.classList.add("section--hidden");
});

/////////////////////////

////////////////////////
var d = new Date();
const n = d.getFullYear();
function current() {
  return n;
}

var tag = document.createElement("p");
var newtext = " copyright © " + current();
var text = document.createTextNode(newtext);
tag.appendChild(text);
var element = document.getElementById("new");
element.appendChild(tag);
