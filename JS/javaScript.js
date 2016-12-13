var main = function () {

    // when button is clicked...
    $("#submitButton1").click(function (event) {
        // get new comment text from input box
        var inputText = $("#newToDo").val();

        var newToDo = $("<div>");
        newToDo.text(inputText);


        $("#box1").append(newToDo);

        $("#newToDo").val("");


    });

    $("#submitButton2").click(function (event) {
        // get new comment text from input box
        var inputText = $("#newToDo").val();

        var newToDo = $("<div>");
        newToDo.text(inputText);


        $("#box2").append(newToDo);

        $("#newToDo").val("");


    });

    $("#submitButton3").click(function (event) {
        // get new comment text from input box
        var inputText = $("#newToDo").val();

        var newToDo = $("<div>");
        newToDo.text(inputText);


        $("#box3").append(newToDo);

        $("#newToDo").val("");


    });



    $("#submitButton4").click(function (event) {
        // get new comment text from input box
        var inputText = $("#newToDo").val();

        var newToDo = $("<div>");
        newToDo.text(inputText);


        $("#box4").append(newToDo);

        $("#newToDo").val("");


    });




}

$(document).ready(main);
