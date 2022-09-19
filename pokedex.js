
//Search pokedex by number
function searchByNumber(){
    
    let input = document.getElementById("search1").value;
    let x = document.getElementsByClassName("number");
    let b = document.getElementsByClassName("pics");
    let n = document.getElementsByClassName("name");
    console.log(input);
    for(i=0;i<x.length;i++){
        let temp = x[i].innerHTML;

    var  names = [];
        if(!temp.includes(input)){
        console.log("MAtch")

            b[i].style.display = "none";
            
        }
        else{
            b[i].style.display = "block";
            names.push(n[i].innerHTML);
        }
        
    }
    var txt = names.toString();
   //alert(names);
   console.log(txt);
    //alert(text);
 

}
//Search Pokedex by name
function searchByName(){
    let input = document.getElementById("search2").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("name");
    let b = document.getElementsByClassName("pics");

    for(i=0;i<x.length;i++){
        let temp = x[i].innerHTML.toLowerCase();

        
        if(!temp.includes(input)){
        console.log("MAtch")

            b[i].style.display = "none";
            
        }
        else{
            b[i].style.display="block"
        }
        
    }
 
}



// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

function open() {
    modal.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var input3 = document.getElementById("search1");
input3.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    
    document.getElementById("btn1").click();
    event.preventDefault();
  }
});
