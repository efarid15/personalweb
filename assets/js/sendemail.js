var myform = $("form#contactForm");
myform.submit(function(event){
	event.preventDefault();

	var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";

  var template_id = "template_4uzZqfnH";
  myform.find("button").text("Sending...");
  emailjs.send(service_id, template_id, params)
  	.then(function(){ 
        bootstrap_alert.success('Your message success send');
        kosongkanForm();
       myform.find("button").text("Send");
     }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });

  return false;
});

bootstrap_alert = function() {}
bootstrap_alert.success = function(message) {
            $('#alertsend').html('<div class="alert alert-success" role="alert">'+message+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
        }

function kosongkanForm() {
            document.getElementById("contactForm").reset();
          }