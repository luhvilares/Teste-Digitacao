//Random Quotes Api URL
const quoteApiUrl = "https://api.quotable.io/random?minLength=80&maxLength=100";
const quoteSection = document.getElementById("quote");
const userInput = document.getElementById("quote-input");

//Declaring variables
let quote = "";
let time = 60;
let timer = "";
let mistakes = 0;

//Display random quotes
const renderNewQuote = async () => {
    //Fetch contents from url
    const response = await fetch(quoteApiUrl);

    //Store response
    let data = await response.json();

    //Acess quote
    quote = data.content;

    //Array of characters in the quote
    let arr = quote.split("").map(value => {
        //Wrap the characters in a span tag
        return "<span class='quote-chars'>" + value + "</span>";
    });
    //join array for displaying
    quoteSection.innerHTML += arr.join("");
    console.log(arr);
};

//Generate new test sentence
window.onload = () => {
    userInput.value = "";
    document.getElementById("start-test").style.display = "block";
    document.getElementById("stop-test").style.display = "none";
    userInput.disabled = true;
    renderNewQuote();
}

//Implement startTest()

//Logic to compare input sentence with teste sentence

//Stop test & display result
