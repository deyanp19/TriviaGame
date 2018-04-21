/* needs to create two arrays 
1. Array I with questions
2. Array II with answers
the arrays indexes have to corespond to the data in the index number. 
The index that holds the question have to correspond with answer that is in the same index
spot in the II-nd array with answers.

Have to create radio buttons that dynamicly(random) change the description of the 
radio button with the answer of the question.

Have to create a timer that counts the time and after it finishes 
have to lock the screen and display result of the trivia game- the correctly answered 
questions.

The states are in span with ID= question1..4 . have to find a way randomly to change the states in this span elements
The answers are in the p element with class answer1..4. have to find a vay to load the answers and one of the cities to be a correcponding capital, and not repeating with any of the other reandomly polulated selections for a city-capital.*/

var states = ["Illinois", "New York", "Alabama","Arizona", "South Dacota", 
"North Carolina", "Oklahoma", "Oregon","Tennessee", "Texas"];
var answer = ["Springfield", "Albany", , "Montgomery", "Phoenix", "Pierre",
"Raleigh","Oklahoma City", "Salem", "Nashville", "Austin"];
$(document).ready(function() {



//calling the function to display the state in the question
displayQuestion1();
displayQuestion2();
displayQuestion3();
displayQuestion4();
displayAnswers();





});
//creating a function that will hold the random states
function displayQuestion1() {
    $("#question1").html(newFunction());

    function newFunction() {
        var statesRandom = states[Math.floor(Math.random()*states.length)];
        return statesRandom;
    }
}
function displayQuestion2() {
    $("#question1").html(newFunction());

    function newFunction() {
        var statesRandom = states[Math.floor(Math.random()*states.length)];
        return statesRandom;
    }
}
function displayQuestion3() {
    $("#question1").html(newFunction());

    function newFunction() {
        var statesRandom = states[Math.floor(Math.random()*states.length)];
        return statesRandom;
    }
}
function displayQuestion4() {
    $("#question1").html(newFunction());

    function newFunction() {
        var statesRandom = states[Math.floor(Math.random()*states.length)];
        return statesRandom;
    }
}
function displayAnswers() {
    /* have to link the value of the displayQuestion1 to the answers and secure one of the answers to be a valid answer. an empty array have to be created where
    4 values to be pushed 3 randomly selected and 1 real answer */

    

}
