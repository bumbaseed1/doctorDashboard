$(document).ready(function () {
    $("#login-form").on("submit", function (e) {
        e.preventDefault();
        var username = $("#username").val();
        var password = $("#password").val();

        // Perform login validation here (e.g., check against a database)
        //  assume the login is successful
        if (username == "admin" && password == "password") {
            // Redirect to index.html after successful login
            window.location.href = "dashboard.html";
        } else {
            alert("Please enter a valid username and password.");
        }
    });
});
