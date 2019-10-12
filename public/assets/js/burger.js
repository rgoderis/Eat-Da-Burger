// wait until the DOM is loaded until the click handlers are set
$(function(){
    // click listener for devour-it button
    $(".devour-it").on("click", function(event){
        console.log("you clicked the devour button")
    });

    // click listener for burger-submit button
    $("#burger-submit").on("click", function(event){
        event.preventDefault();
        // retrieve burger_name from input and save to newBurger
        var newBurger = {
            burger: $("#new-burger").val().trim()
        }
        console.log(newBurger)
        // send the POST request of newBurger to /api/burgers
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                // log new burger created
                console.log("added new burger");
                // reload the page
                location.reload();
            }
        );
    });
});


