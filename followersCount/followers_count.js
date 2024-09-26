let count = 0; //initialize count to 0

function increaseCount(){
    count++;
    displayCount(); //display the count
    checkCountValue(); //check the count and alert
}
function checkCountValue(){
    if (count == 10){
        alert("Your instagram post has 10 followers. Congradulations!");
    } else if (count == 20){
        alert("Your instagram post has 20 followers. Congradulations!");
    }
}
function displayCount(){
    document.getElementById("countDisplay").innerText = count; //display the count in HTML
}
function resetCount(){
    count = 0;
    document.getElementById("countDisplay").innerText = count;
    alert("Your followers count has been reset");
}

