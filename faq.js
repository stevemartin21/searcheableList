var question = document.getElementsByClassName("question");
var icon = document.querySelectorAll('fa-arrow-down');
var i;

for (i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function() {
        // This is a toggle method to go back and forth ont he next element sibling which is the answer div
        this.classList.toggle("active");
        // This represents the variable question which represents every representation of the variable class
        /* back and forth from answer to question and back */
        var answer = this.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
}

// fa aarow up

// element.classList.remove("mystyle");

// My Listy


function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}