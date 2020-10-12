// $(document).ready(function(){
// 	$('.my-background-video').bgVideo();
// });

var openChat1 = document.getElementById('chat-title');
var openChat2 = document.getElementById('chat-message-list');
var openChat3 = document.getElementById('chat-form');
openChat1.style.display='grid';
openChat2.style.display='flex';
openChat3.style.display='grid';

  
  var finalClick = document.getElementById("js-final-click");
  
    finalClick.addEventListener("click", function () {    
      var $result = $("#email-error");
      var email = $("#email_input").val();
      var location =  window.location.href; 
      var country_pathname =  window.location.pathname;
      var country = country_pathname.substr(1, 2);
      var openChat1 = document.getElementById('chat-title');
      var openChat2 = document.getElementById('chat-message-list');
      var openChat3 = document.getElementById('chat-form');
      var videoBlock = document.getElementById('videoBlock');
      var opacityBlock = document.getElementById('opacityBlock');
      $result.text("");   
  
      if (validateEmail(email)) { 
        //   console.log('click');
        // videoBlock.style.display='none';  
        // opacityBlock.style.display='none'; 
        // openChat1.style.display='grid';
        // openChat2.style.display='flex';
        // openChat3.style.display='grid';
       
      
          //apiRequestCustomer(email, location, country);
      } else {      
        $result.text(email + " This email is incorrect. Please,  try again");
        $result.css("color", "red");
      }
      return false;
  });
  
  
  
//   function apiRequestCustomer(email, location, country) {
//       $.ajax({
//           method: 'POST',
//           url: 'https://mdbng.com/api/customers',
//           headers: {
//               Accept: 'application/json',
//               Authorization: 'Bearer ' + 'FtgZvaXyBsc9SxKwiuXv1mC2XSP55DKABhYUrfbeEsuuXAHCwfxqHLbCuioy'
//           },
//           crossDomain: true,
//           dataType: 'json',
//           data: {            
//               email: email,           
//               offer: location,
//               country:  country,        
//           },
//           success: function (response) {
//             document.location.href = "https://mdbng.tech/click.php?lp=1"
//         },
//         error: function (response) {
//           document.location.href = "https://mdbng.tech/click.php?lp=1"
//         }
//       })
//     }
      
     
  
  
    function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  
  

