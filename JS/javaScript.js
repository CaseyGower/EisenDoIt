var main = function () {

    // when button is clicked...
    $("#submitButton1").click(function (event) {
        // get new comment text from input box
        var inputText = $("#newToDo").val();

        var newToDo = $("<li>");
        newToDo.text(inputText);


        $("#sortable1").append(newToDo);

        $("#newToDo").val("");


    });

    $("#submitButton2").click(function (event) {
        // get new comment text from input box
        var inputText = $("#newToDo").val();

        var newToDo = $("<li>");
        newToDo.text(inputText);


        $("#sortable2").append(newToDo);

        $("#newToDo").val("");


    });

    $("#submitButton3").click(function (event) {
        // get new comment text from input box
        var inputText = $("#newToDo").val();

        var newToDo = $("<li>");
        newToDo.text(inputText);


        $("#sortable3").append(newToDo);

        $("#newToDo").val("");


    });



    $("#submitButton4").click(function (event) {
        // get new comment text from input box
        var inputText = $("#newToDo").val();

        var newToDo = $("<li>");
        newToDo.text(inputText);


        $("#sortable4").append(newToDo);

        $("#newToDo").val("");


    });

    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

$(document).ready(main);
