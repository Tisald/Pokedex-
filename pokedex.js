
//Search pokedex by number
function searchByNumber(){

    // let sp1 = document.createElement("ul");
    // sp1.setAttribute('id','newList');
    // let sp2 = document.getElementById("menue");
    // let parentDiv = sp2.parentNode;
    // parentDiv.insertBefore(sp1, sp2);
    
    // let li = document.createElement("li");
    // sp1.appendChild(li);
    // li.appendChild(document.createTextNode("hello"));


    let input = document.getElementById("search1").value;
    let x = document.getElementsByClassName("number");
    let b = document.getElementsByClassName("pics");
    console.log(input);
    for(i=0;i<x.length;i++){
        let temp = x[i].firstChild.nodeValue;

    
        if(!temp.includes(input)||input.length==0){
        console.log("MAtch")

          b[i].style.display = "none";
          
        }
        else{
            b[i].style.display = "block";
        }
        }
    

}

//Search Pokedex by name
function searchByName(){
    let input1 = document.getElementById("search2").value;
    input = input1.toLowerCase();
    let x = document.getElementsByClassName("name");
    let b = document.getElementsByClassName("pics");

    for(i=0;i<x.length;i++){
        let temp = x[i].firstChild.nodeValue.toLowerCase();

        
        if(!temp.includes(input||input1.length==0)){
        console.log("MAtch")

            b[i].style.display = "none";
            
        }
        else{
            b[i].style.display="block"
        }
    }
}

// Verify only alphabet inputs into form
function letters(event) {
  var key = event.keyCode;
  return ((key >= 65 && key <= 90) || key == 8);
};



