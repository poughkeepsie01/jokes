const jokeData = document.getElementById("joke");
const btn = document.getElementById("btn");
const category = document.getElementById("category");
const url = "https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let a = 1;

let nextbtn = "Another One";
let types = "Category";

let getJokeData = () => {
    fetch(url) //kunin ang value ng url which is the link of api
           //var w/ declaration so kahit ano pwede
    .then(data =>data.json()) //then yung json will transfer to var data
    .then(item => { //item is declared as the whole variable of the whole json file
        jokeData.textContent = `${item.joke}`;
        //console.log(item);
        category.dataset.status = "active";
        category.textContent = ("Category: "+`${item.category}`);
        //console.log(item.category);
        btn.textContent = `${nextbtn}`
       // console.log(nextbtn);

    });
}

btn.addEventListener("click",getJokeData,); //if nag click then do the function






