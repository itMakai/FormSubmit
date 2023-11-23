function submitForm() {
    var form = document.getElementById("myForm");
    var formData = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "process.php", true);
    xhr.onload = function () {
        if (xhr.status == 200) {
            alert("Email sent successfully!");
            form.reset(); 
        } else {
            alert("Error sending email. Please try again later.");
        }
    };
    xhr.send(formData);
}
