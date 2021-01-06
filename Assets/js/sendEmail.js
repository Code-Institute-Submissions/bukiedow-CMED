
function sendMail(contactForm) {
     emailjs.send("gmail", "bukie", {
         "from_name": contactForm.name.value,
         "from_email": contactForm.emailaddress.value,
         "doctor_request": contactForm.message.value
    })

     .then(
        function(response) {
            $(".close").click()
            alert("message sent")
            
       
        }, 
    
        function(error) {
       console.log('FAILED...', error);
        }
    );
        return false;

       
}
   $('.modal').on('hidden.bs.modal', function(){
    $(this).find('form')[0].reset();
});


 