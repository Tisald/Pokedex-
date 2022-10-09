
function loadImg(){
//linking to static page elements
const staticPocList = document.getElementById("pokemons")
var staticUL = document.querySelector(".container")

//Needed html elements 
var newDiv = document.createElement('div');
newDiv.id = "newDiv";
newDiv.className = "newDiv"
var newUl = document.createElement('ul');
newUl.id = "newUl";

//Append new to html document 
document.body.appendChild(newDiv);
staticPocList.insertBefore(newDiv,staticUL);
newDiv.appendChild(newUl);
}


//Arrays
var pList = [];
const pName = [];
const pNum = [];

let count =0;

//Search pokedex by number
function searchByNumber(){

    const ul = document.getElementById('newUl');

    //Filter
    let input = document.getElementById("search1").value;

    let x = document.getElementsByClassName("number");
    let nm = document.getElementsByClassName('name');
    let inf = document.getElementsByClassName("info");

    let picture = document.getElementById('poc').getElementsByTagName('img');

    var img = document.createElement('img');
    let p = document.createElement('p');
    p.className = "ltrs";
    const setOfImages = [];

    newDiv.style.border = "none";
    newDiv.style.backgroundColor = "none";

    count = 0;
    //Removing images
    removeSearch();

    //Saving pokemon info
    for (i = 0; i < x.length; i++) {  

        if (!x[i].innerHTML.includes(input)) {
            //do Nothing 

        }else {
            newDiv.style.display = "block";
            pList[count] = nm[i].innerHTML+" "+inf[i].textContent;
            pNum[count] =nm[i].innerHTML+" "+x[i].innerHTML +" "+inf[i].textContent;
            setOfImages[count] = picture[i].cloneNode(true);
            count++;              
        }
    }
    //Creating list and appending pokemon to page
    for(j=0; j<setOfImages.length;j++){
        var li = document.createElement('li');
        li.className = "child";
        li.id=pNum[j];
        p = pNum[j] ;
        img = setOfImages[j];
        ul.appendChild(li);
        li.appendChild(img);
        li.append(p);
    
    }
    if(input.length==0){
        newDiv.style.display = "none";
    }
 
}



//Search Pokedex by name
function searchByName(){

    const ul = document.getElementById('newUl');
    
    //Filter
    let input = document.getElementById("search2").value;

    let x = document.getElementsByClassName("number");
    let nm = document.getElementsByClassName('name');
    let inf = document.getElementsByClassName("info");

    let picture = document.getElementById('poc').getElementsByTagName('img');

    var img = document.createElement('img');
    let p = document.createElement('p');
    p.className = "ltrs";
    const setOfImages = [];

    newDiv.style.border = "none";
    newDiv.style.backgroundColor = "none";

    count = 0;
    //Removing images
    removeSearch();

    //Saving pokemon info
    for (i = 0; i < nm.length; i++) {  

        if (!nm[i].innerHTML.toLowerCase().includes(input)) {
            //do Nothing 

        }else {
            newDiv.style.display = "block";
            pList[count] = nm[i].innerHTML+" "+inf[i].textContent;
            pNum[count] =nm[i].innerHTML+"  "+x[i].innerHTML+" \n "+inf[i].textContent;
            setOfImages[count] = picture[i].cloneNode(true);
            count++;              
        }
    }
    //Creating list and appending pokemon to page
    for(j=0; j<setOfImages.length;j++){
        var li = document.createElement('li');
        li.className = "child";
        li.id=pNum[j];
        p = pNum[j] ;
        img = setOfImages[j];
        ul.appendChild(li);
        li.append(p);
        li.appendChild(img);
        
    }
    if(input.length==0){
        newDiv.style.display = "none";
    }
}

// Verify only alphabet inputs into form
function letters(event) {
  var key = event.keyCode;
  return ((key >= 65 && key <= 90) || key == 8);
}

//Removing unwanted results
function removeSearch(){
    const temp =document.getElementById("newUl");
    let children = document.querySelectorAll('.child');
      for(let c of children){
          temp.removeChild(c);
    } 
  }



