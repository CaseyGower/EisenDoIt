var main = function () {

    // when button is clicked...
    $("#submitButton").click(function (event) {
        // get new comment text from input box
        var inputText = $("#input").val();

        var newToDo = $("#box1");
        newToDo.text(inputText);

        newToDo.hide();
        $("#box1").append(newToDo);

        $("#newCommentBox").val("");


    });




}

$(document).ready(main);
