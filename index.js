//Function for handle the search
const searchHandler = ()=>{
    // Element Selection
    const userInput = document.getElementById("search").value.toLowerCase();        //Get the userInput from the search field and convert its value to lowercase
    const item = document.getElementsByClassName("item");     //Get all the items

    for(let i = 0; i < item.length; i++){           //Loop through all the items
        if(!item[i].innerHTML.toLowerCase().includes(userInput)){
            item[i].style.display = "none";
        }else{                                                              //if the name of the product does not match the user input hide the products and if the product name mathches show the items as list item
            item[i].style.display = "list-item";
        }
    }
       
}