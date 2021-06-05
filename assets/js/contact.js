function contactForm(contactForm) {
    emailjs.send("service_38n4p0g","template_watchtower", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "area": contactForm.area.value,
        "email_body": contactForm.emailbody.value,
    })
        .then(
             function(response) {
            console.log("Email sent!", response);
            document.getElementById("myForm").reset();
            alert("You've reported a crime!");
        },
        function(error) {
            console.log("Error", error);
        }
    );
    return false;
}
