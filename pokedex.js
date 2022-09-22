
//Search pokedex by number
function searchByNumber(){
    
    let input = document.getElementById("search1").value;
    let x = document.getElementsByClassName("number");
    let b = document.getElementsByClassName("pics");
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
        }
    }
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

// Verify only alphabet inputs into form
function letters(event) {
  var key = event.keyCode;
  return ((key >= 65 && key <= 90) || key == 8);
};



