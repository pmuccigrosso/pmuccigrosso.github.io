function sendMail(params) {
    var tempParams = {
        from_name : document.getElementById("fromName").value,
        message : document.getElementById("msg").value
    };

emailjs.send('service_n0z9iq5', 'template_ezcb8ta',tempParams)
.then(function(res) {
    console.log("success",res.status);

})
}
