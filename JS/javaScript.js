var main = function () {

    // when button is clicked...
    $("#submitButton").click(function (event) {
        // get new comment text from input box
        var inputText = $("#nweToDo").val();

        var newToDo = $("<p>");
        newToDo.text(inputText);


        $("#box1").append(newToDo);

        $("#newCommentBox").val("");


    });




}

$(document).ready(main);
