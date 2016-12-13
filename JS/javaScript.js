var main = function () {

    // when button is clicked...
    $("#submitButton").click(function (event) {
        // get new comment text from input box
        var inputText = $("#newToDo").val();

        var newToDo = $("<p>");
        newToDo.text(inputText);


        $("#box1").append(newToDo);

        $("#newToDo").val("");


    });




}

$(document).ready(main);
