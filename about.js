function sendMail() {
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value, 
    }

    emailjs.send("service_kykm54j", "template_6nimcz1", parms).then(alert("Email Sent !!"))
}