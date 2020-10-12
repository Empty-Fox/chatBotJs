var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    var name =document.querySelectorAll('.name');
    var image_profiles = document.querySelectorAll(".image_profiles");
    var textProfiles = document.querySelectorAll(".message_profiles");
    var profile_name =document.querySelectorAll(".namepro");
    var profile_image = document.querySelectorAll(".image_prof");
    var photoInsideMessage=document.querySelectorAll(".content_photo");
    var messageTextFirst = document.querySelectorAll(".message-text_other");
 

    var a=_.shuffle(_.range(0,9)).slice(0,9);   
    var b=_.shuffle(_.range(0,9)).slice(0,9);  
    for (var i = 0; i < name.length; i++) {        
      name[i].innerText=myObj.name[a[i]];
      image_profiles[i].src=myObj.photoProfiles[a[i]];   
      profile_name[i].innerText=myObj.name[a[i]];
      profile_image[i].src=myObj.photoProfiles[a[i]];
       photoInsideMessage[i].src=myObj.photoProfiles[a[i]];

    }
    i++;
    for (var j = 0; j < textProfiles.length; j++) {        
      textProfiles[j].innerText=myObj.textProfiles[b[j]];
      messageTextFirst[j].innerText=myObj.textProfilesFullVersion[b[j]];
     
    }
    j++;
    
  }
};
xmlhttp.open("GET", "data1.json", true);
xmlhttp.send();

///////////////////////////Active class/////////////////

var header = document.getElementById("conversation-list");
var btns = header.getElementsByClassName("conversation");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";   
  });

}
////////////////////////////////////////////////////////////////////////////

// 




/////////////////////////////////Text for message//////////////////////////////////

var botMessage = [
  ["Яблоко1", "Апельсин2", "Слива3", "Яблоко4", "Апельсин5","Яблоко6", "Апельсин7", "Слива8", "Яблоко9", "Апельсин10","Яблоко11", "Апельсин12", "Слива13", "Яблоко14", "Апельсин15","Яблоко16", "Апельсин17", "Слива18", "Яблоко19", "Апельсин20"], 
  ["2Яблоко1", "2Апельсин2", "2Слива3", "2Яблоко4", "2Апельсин5","2Яблоко6", "2Апельсин7", "2Слива8", "2Яблоко9", "2Апельсин10","2Яблоко11", "2Апельсин12", "2Слива13", "2Яблоко14", "2Апельсин15","2Яблоко16", "2Апельсин17", "2Слива18", "2Яблоко19", "2пельсин20"], 
  ["3Яблоко1", "3Апельсин2", "3Слива3", "3Яблоко4", "3Апельсин5","3Яблоко6", "3Апельсин7", "3Слива8", "3Яблоко9", "3Апельсин10","3Яблоко11", "3Апельсин12", "3Слива13", "3Яблоко14", "3Апельсин15","3Яблоко16", "3Апельсин17", "3Слива18", "3Яблоко19", "3Апельсин20"], 
  ["4Яблоко1", "4Апельсин2", "4Слива3", "4Яблоко4", "4Апельсин5","4Яблоко6", "4Апельсин7", "4Слива8", "4Яблоко9", "4Апельсин10","4Яблоко11", "4Апельсин12", "4Слива13", "4Яблоко14", "4Апельсин15","4блоко16", "4пельсин17", "4Слива18", "4Яблоко19", "4Апельсин20"], 
  ["5Яблоко1", "5Апельсин2", "5Слива3", "5Яблоко4", "5Апельсин5","5Яблоко6", "5Апельсин7", "5Слива8", "5Яблоко9", "5Апельсин10","5Яблоко11", "5Апельсин12", "5Слива13", "5Яблоко14", "5Апельсин15","5Яблоко16", "5Апельсин17", "5Слива18", "5Яблоко19", "5Апельсин20"], 
  ["6Яблоко1", "6Апельсин2", "6Слива3", "6Яблоко4", "6Апельсин5","6Яблоко6", "6Апельсин7", "6Слива8", "6Яблоко9", "6Апельсин10","6Яблоко11", "6Апельсин12", "6Слива13", "6Яблоко14", "6Апельсин15","6Яблоко16", "6Апельсин17", "6Слива18", "6Яблоко19", "6Апельсин20"], 
  ["7Яблоко1", "7Апельсин2", "7Слива3", "7Яблоко4", "7Апельсин5","7Яблоко6", "7Апельсин7", "7Слива8", "7Яблоко9", "7Апельсин10","7Яблоко11", "7Апельсин12", "7Слива13", "7Яблоко14", "7Апельсин15","7Яблоко16", "7Апельсин17", "7Слива18", "7Яблоко19", "7Апельсин20"], 
  ["8Яблоко1", "8Апельсин2", "8Слива3", "8Яблоко4", "8Апельсин5","8Яблоко6", "8Апельсин7", "8Слива8", "8Яблоко9", "8Апельсин10","8Яблоко11", "8Апельсин12", "8Слива13", "8Яблоко14", "8Апельсин15","8Яблоко16", "8Апельсин17", "8Слива18", "8Яблоко19", "8Апельсин20"], 
  ["9Яблоко1", "9Апельсин2", "9Слива3", "9Яблоко4", "9Апельсин5","9Яблоко6", "9Апельсин7", "9Слива8", "9Яблоко9", "9Апельсин10","9Яблоко11", "9Апельсин12", "9Слива13", "9Яблоко14", "9Апельсин15","9Яблоко16", "9Апельсин17", "9Слива18", "9Яблоко19", "9Апельсин20"], 
  ["10Яблоко1", "10Апельсин2", "10Слива3", "10Яблоко4", "10Апельсин5","10Яблоко6", "10Апельсин7", "10Слива8", "10Яблоко9", "10Апельсин10","10Яблоко11", "10Апельсин12", "10Слива13", "10Яблоко14", "10Апельсин15","10Яблоко16", "10Апельсин17", "10Слива18", "10Яблоко19", "10Апельсин20"]
];

///////////////////////////////////Text for Long wait message/////////////////////////
var botMessageTimer = [
  "11111",'222222'
]
//////////////////////set interval for signalpresent/////////////


function changeSignal(){
  var signal = document.querySelectorAll(".signalPresent");
  var rand1 =Math.floor(Math.random() * 10)+1;

  if(signal[rand1].style.opacity=1){
    return signal[rand1].style.opacity=0;
   }    
}
changeSignal();


////////////////timer on send message for long time wait
var timer1, timer2, timer3, timer4, timer5, timer6, timer7, timer8, timer9, timer10;




function counterStart1() {  
    timer1 = setInterval(function() {   
          clearInterval(timer1);
          if(!document.getElementById('signalPresent1').style.opacity){
            addMessageBotTimer1(['message-row', 'other-message'], botMessageTimer);
          }
         
    }, 10000); 
}
function counterStart2(){
  timer2 = setInterval(function() {   
    clearInterval(timer2);
    if(!document.getElementById('signalPresent2').style.opacity){
      addMessageBotTimer2(['message-row', 'other-message'], botMessageTimer);
    }
   
}, 30000);
}
function counterStart3(){
  timer3 = setInterval(function() {   
    clearInterval(timer3);
    if(!document.getElementById('signalPresent3').style.opacity){
      addMessageBotTimer3(['message-row', 'other-message'], botMessageTimer);
    }
   
}, 30000);
}
function counterStart4(){
  timer4 = setInterval(function() {   
    clearInterval(timer4);
    if(!document.getElementById('signalPresent4').style.opacity){
      addMessageBotTimer4(['message-row', 'other-message'], botMessageTimer);
    }
   
}, 80000);
}
function counterStart5(){
  timer5 = setInterval(function() {   
    clearInterval(timer5);
    if(!document.getElementById('signalPresent5').style.opacity){
      addMessageBotTimer5(['message-row', 'other-message'], botMessageTimer);
    }
   
}, 3900000);
}
function counterStart6(){
  timer6 = setInterval(function() {   
    clearInterval(timer6);
    if(!document.getElementById('signalPresent6').style.opacity){
      addMessageBotTimer6(['message-row', 'other-message'], botMessageTimer);
    }
   
}, 9300000);
}
function counterStart7(){
  timer7 = setInterval(function() {   
    clearInterval(timer7);
    if(!document.getElementById('signalPresent7').style.opacity){
      addMessageBotTimer7(['message-row', 'other-message'], botMessageTimer);
    }
   
}, 3090000);
}
function counterStart8(){
  timer8 = setInterval(function() {   
    clearInterval(timer8);
    if(!document.getElementById('signalPresent8').style.opacity){
      addMessageBotTimer8(['message-row', 'other-message'], botMessageTimer);
    }
   
}, 1000000);
}
function counterStart9(){
  timer9 = setInterval(function() {   
    clearInterval(timer9);
    if(!document.getElementById('signalPresent9').style.opacity){
      addMessageBotTimer9(['message-row', 'other-message'], botMessageTimer);
    }
   
}, 5300000);
}
function counterStart10(){
  timer10 = setInterval(function() {   
    clearInterval(timer10);
    if(!document.getElementById('signalPresent10').style.opacity){
      addMessageBotTimer10(['message-row', 'other-message'], botMessageTimer);
    }
   
}, 1300000);
}

/////////////////////////////////////////////////////////



function enterMessage () { 
   counterStart1() ;
   counterStart2() ;
   counterStart3() ;
   counterStart4() ;
   counterStart5() ;
   counterStart6() ;
   counterStart7() ;
   counterStart8() ;
   counterStart9() ;
   counterStart10() ;


  var yourMessage= document.getElementsByTagName("input")[1].value;    
  if (yourMessage == null || yourMessage == ""){
  console.log("empty");
    }
    else
    {     
      addMessage(['message-row', 'you-message'], yourMessage);
        setTimeout(function() {     
        addMessageBot(['message-row', 'other-message'], botMessage);
      },2000)
    }
    document.getElementsByTagName("input")[1].value= "";
}




var clicks1 = 0;
var clicks2 = 0;
var clicks3 = 0;
var clicks4 = 0;
var clicks5 = 0;
var clicks6 = 0;
var clicks7 = 0;
var clicks8 = 0;
var clicks9 = 0;
var clicks10 = 0;

function addMessageBot(classList, message) {  
  
  var messageRow = document.createElement('div');
 
  var messageContent = document.createElement('div');  
  var messageImage = document.createElement('img');
  var messageText = document.createElement('div');
  
  messageRow.classList.add(...classList);
  messageContent.classList.add('message-content');
  messageText.classList.add('message-text'); 

  messageRow.appendChild(messageContent);   
  
  messageContent.appendChild(messageImage);
  messageContent.appendChild(messageText);

  if(document.querySelector('.conversation1').classList.contains('active')){
    
    if(!document.getElementById('signalPresent1').style.opacity){
      clicks1 += 1;  
      document.getElementById('container1').appendChild(messageRow);
      messageText.innerText = 'typing now ....';
      setTimeout(function(){
        messageText.innerText='';
        messageText.innerText = message[0][clicks1-1];       
      },2000);

      var picture=document.images[0].src;      
        messageImage.classList.add('message_content_photo1');
        messageImage.src=picture; 
    }    
  } 

  if(document.querySelector('.conversation2').classList.contains('active')){
    
    if(!document.getElementById('signalPresent2').style.opacity){
      clicks2 += 1;
      document.getElementById('container2').appendChild(messageRow);
      messageText.innerText = 'typing now ....';

      setTimeout(function(){
        messageText.innerText='';
        messageText.innerText = message[1][clicks2-1];    
      },2000)

    var picture=document.images[1].src;    
    messageImage.classList.add('message_content_photo2');
    messageImage.src=picture;
    }
  }

  if(document.querySelector('.conversation3').classList.contains('active')){
    if(!document.getElementById('signalPresent3').style.opacity){
    clicks3 += 1;
    document.getElementById('container3').appendChild(messageRow);
    messageText.innerText = 'typing now ....';
    setTimeout(function(){
      messageText.innerText='';
      messageText.innerText = message[2][clicks3-1];       
    },2000);     
    var picture=document.images[2].src;    
    messageImage.classList.add('message_content_photo3');
    messageImage.src=picture;
    }
  }

  if(document.querySelector('.conversation4').classList.contains('active')){
    if(!document.getElementById('signalPresent4').style.opacity){
      clicks4 += 1;
      document.getElementById('container4').appendChild(messageRow);
      messageText.innerText = 'typing now ....';
      setTimeout(function(){
        messageText.innerText='';
        messageText.innerText = message[3][clicks4-1];      
      },2000);      
      var picture=document.images[3].src;    
      messageImage.classList.add('message_content_photo4');
      messageImage.src=picture;      
    } 
  }

  if(document.querySelector('.conversation5').classList.contains('active')){
    if(!document.getElementById('signalPresent5').style.opacity){
      clicks5 += 1;
      document.getElementById('container5').appendChild(messageRow);
      messageText.innerText = 'typing now ....';

      setTimeout(function(){
        messageText.innerText='';
        messageText.innerText = message[4][clicks5-1];     
      },2000);

      var picture=document.images[4].src; 
      messageImage.classList.add('message_content_photo5'); 
      messageImage.src=picture;
    }
  }

  if(document.querySelector('.conversation6').classList.contains('active')){
    if(!document.getElementById('signalPresent6').style.opacity){
      clicks6 += 1;
      document.getElementById('container6').appendChild(messageRow);
      messageText.innerText = 'typing now ....';

      setTimeout(function(){
        messageText.innerText='';        
        messageText.innerText = message[5][clicks6-1];     
      },2000);

      var picture=document.images[5].src; 
      messageImage.classList.add('message_content_photo6'); 
      messageImage.src=picture;
    }
  
  }

  if(document.querySelector('.conversation7').classList.contains('active')){
    if(!document.getElementById('signalPresent7').style.opacity){
      clicks7 += 1;      
      document.getElementById('container7').appendChild(messageRow);
      messageText.innerText = 'typing now ....';
      setTimeout(function(){
        messageText.innerText='';
        messageText.innerText = message[6][clicks7-1];       
      },2000);
      var picture=document.images[6].src;      
      messageImage.classList.add('message_content_photo7'); 
      messageImage.src=picture;     
    }  
  }

  if(document.querySelector('.conversation8').classList.contains('active')){
    if(!document.getElementById('signalPresent8').style.opacity){
      clicks8 += 1;
      document.getElementById('container8').appendChild(messageRow);
      messageText.innerText = 'typing now ....';

      setTimeout(function(){
        messageText.innerText='';
        messageText.innerText = message[7][clicks8-1];       
      },2000);

      var picture=document.images[7].src;     
      messageImage.classList.add('message_content_photo8'); 
      messageImage.src=picture;
      
    }   
    
  }

  if(document.querySelector('.conversation9').classList.contains('active')){
    if(!document.getElementById('signalPresent9').style.opacity){
      clicks9 += 1;
      document.getElementById('container9').appendChild(messageRow);
      messageText.innerText = 'typing now ....';
      setTimeout(function(){
        messageText.innerText='';        
        messageText.innerText = message[8][clicks9-1];     
      },2000);
      
      var picture=document.images[8].src; 
      messageImage.classList.add('message_content_photo9'); 
      messageImage.src=picture;      
    }
    
  }
  if(document.querySelector('.conversation10').classList.contains('active')){
    if(!document.getElementById('signalPresent10').style.opacity){
      clicks10 += 1;
      document.getElementById('container10').appendChild(messageRow);
      messageText.innerText = 'typing now ....';
      setTimeout(function(){
        messageText.innerText='';
        messageText.innerText = message[9][clicks10-1];       
      },2000);

      var picture=document.images[9].src;
      messageImage.classList.add('message_content_photo10'); 
      messageImage.src=picture;
      
    }

  
  }

}

function addMessage(classList, message) {
  var messageRow = document.createElement('div');
  var messageContent = document.createElement('div');  
  var messageText = document.createElement('div');
  messageRow.classList.add(...classList);
  messageContent.classList.add('message-content');
  messageText.classList.add('message-text');
  messageText.innerText = message;
  messageRow.appendChild(messageContent);  
  messageContent.appendChild(messageText);

  if(document.querySelector('.conversation1').classList.contains('active')){
    document.getElementById("conersation-message1").innerHTML='';
    document.getElementById('container1').appendChild(messageRow);
    console.log('1');
  }
  
  if(document.querySelector('.conversation2').classList.contains('active')){
    document.getElementById("conersation-message2").innerHTML='';
    document.getElementById('container2').appendChild(messageRow);
    console.log('2');
  }
  if(document.querySelector('.conversation3').classList.contains('active')){
    document.getElementById("conersation-message3").innerHTML='';
    document.getElementById('container3').appendChild(messageRow);
    console.log('3');
  }
  if(document.querySelector('.conversation4').classList.contains('active')){
    document.getElementById("conersation-message4").innerHTML='';
    document.getElementById('container4').appendChild(messageRow);
    console.log('4');
  }
  if(document.querySelector('.conversation5').classList.contains('active')){
    document.getElementById("conersation-message5").innerHTML='';
    document.getElementById('container5').appendChild(messageRow);
    console.log('5');
  }
  if(document.querySelector('.conversation6').classList.contains('active')){
    document.getElementById("conersation-message6").innerHTML='';
    document.getElementById('container6').appendChild(messageRow);
    console.log('6');
  }
  if(document.querySelector('.conversation7').classList.contains('active')){
    document.getElementById("conersation-message7").innerHTML='';
    document.getElementById('container7').appendChild(messageRow);
    console.log('7');
  }
  if(document.querySelector('.conversation8').classList.contains('active')){
    document.getElementById("conersation-message8").innerHTML='';
    document.getElementById('container8').appendChild(messageRow);
    console.log('8');
  }
  if(document.querySelector('.conversation9').classList.contains('active')){
    document.getElementById("conersation-message9").innerHTML='';
    document.getElementById('container9').appendChild(messageRow);
    console.log('9');
  }
  if(document.querySelector('.conversation10').classList.contains('active')){
    document.getElementById("conersation-message10").innerHTML='';
    document.getElementById('container10').appendChild(messageRow);
    console.log('10');
  }

}


function addMessageBotTimer1(classList, message) { 
  
  var messageRow = document.createElement('div');
  messageRow.classList.add(...classList);

  var messageContent = document.createElement('div');  
  messageContent.classList.add('message-content');
  messageRow.appendChild(messageContent); 
  var messageImage = document.createElement('img'); 
  var messageText = document.createElement('div');
   
  var messageImageText = document.createElement('img');
  var text=document.createElement('div');
  messageText.classList.add('message-text');

  messageContent.append(messageImage);
  messageContent.append(messageText);

  
   messageImageText.classList.add('message-text_img');   

   messageText.appendChild(text);
   messageText.appendChild(messageImageText);

   ///////////////////////Запис тексту в профіль...............

   document.getElementById("signalMessage1").style.opacity = 1;
      var conv1 = document.getElementById('conersation-message1'); 
      conv1.innerHTML = botMessageTimer[0];
      document.getElementById("conersation-message1").onclick=function(){
       document.getElementById("signalMessage1").style.opacity = 0;
       conv1.innerHTML='';    
      }
 
      if (document.querySelector('.conversation1').classList.contains('active')){
        document.getElementById("signalMessage1").style.opacity = 0;
        conv1.innerHTML='';   
      }
     clicks1 += 1;      
       document.getElementById('container1').appendChild(messageRow);
       text.innerText = "typing....";
       setTimeout(function(){
         text.innerText='';
         text.innerText = message[0];     
         messageImageText.classList.add('message-text_img');       
         messageImageText.src=picture;             
       },2000
       )
    
       var picture=document.images[0].src; 
       messageImage.classList.add('message_content_photo1'); 
       messageImage.src=picture;      

    
  
}

function addMessageBotTimer2(classList, message) { 
  
  var messageRow = document.createElement('div');
  messageRow.classList.add(...classList);

  var messageContent = document.createElement('div');  
  messageContent.classList.add('message-content');
  messageRow.appendChild(messageContent); 
  var messageImage = document.createElement('img'); 
  var messageText = document.createElement('div');
   
  var messageImageText = document.createElement('img');
  var text=document.createElement('div');
  messageText.classList.add('message-text');

  messageContent.append(messageImage);
  messageContent.append(messageText);

  
   messageImageText.classList.add('message-text_img');   

   messageText.appendChild(text);
   messageText.appendChild(messageImageText);

   ///////////////////////Запис тексту в профіль...............
    
    document.getElementById("signalMessage2").style.opacity = 1;
      var conv2 = document.getElementById('conersation-message2'); 
      conv2.innerHTML = botMessageTimer[1];
      document.getElementById("conersation-message2").onclick=function(){
       document.getElementById("signalMessage2").style.opacity = 0;
       conv2.innerHTML='';    
      }
      if (document.querySelector('.conversation2').classList.contains('active')){
        document.getElementById("signalMessage2").style.opacity = 0;
        conv2.innerHTML='';   
      }
    
      // clicks2 += 1;      
       document.getElementById('container2').appendChild(messageRow);
       text.innerText = "typing....";
       setTimeout(function(){
         text.innerText='';
                  text.innerText = message[1]; 
         messageImageText.classList.add('message-text_img');       
         messageImageText.src=picture;
        //  conv2.innerHTML='';  
        //  document.getElementById("signalMessage2").style.opacity = 0;        
       },2000
       )
    
       var picture=document.images[1].src; 
       messageImage.classList.add('message_content_photo2'); 
       messageImage.src=picture;      

    
  

}

function addMessageBotTimer3(classList, message) { 
  
  var messageRow = document.createElement('div');
  messageRow.classList.add(...classList);
  var messageContent = document.createElement('div');  
  messageContent.classList.add('message-content');
  messageRow.appendChild(messageContent); 
  var messageImage = document.createElement('img'); 
  var messageText = document.createElement('div');   
  var messageImageText = document.createElement('img');
  var text=document.createElement('div');
  messageText.classList.add('message-text');
  messageContent.append(messageImage);
  messageContent.append(messageText);
   messageImageText.classList.add('message-text_img');  
   messageText.appendChild(text);
   messageText.appendChild(messageImageText);

   ///////////////////////Запис тексту в профіль...............
    
    document.getElementById("signalMessage3").style.opacity = 1;
      var conv3 = document.getElementById('conersation-message3'); 
      conv3.innerHTML = botMessageTimer[0];
      document.getElementById("conersation-message3").onclick=function(){
       document.getElementById("signalMessage3").style.opacity = 0;
       conv3.innerHTML='';    
      }
      if (document.querySelector('.conversation3').classList.contains('active')){
        document.getElementById("signalMessage3").style.opacity = 0;
        conv3.innerHTML='';   
      }
         
       document.getElementById('container3').appendChild(messageRow);
       text.innerText = "typing....";
       setTimeout(function(){
         text.innerText='';
        text.innerText = message[2]; 
         messageImageText.classList.add('message-text_img');       
         messageImageText.src=picture;          
       },2000
       )
    
       var picture=document.images[2].src; 
       messageImage.classList.add('message_content_photo3'); 
       messageImage.src=picture;  

}

function addMessageBotTimer4(classList, message) { 
  
  var messageRow = document.createElement('div');
  messageRow.classList.add(...classList);
  var messageContent = document.createElement('div');  
  messageContent.classList.add('message-content');
  messageRow.appendChild(messageContent); 
  var messageImage = document.createElement('img'); 
  var messageText = document.createElement('div');   
  var messageImageText = document.createElement('img');
  var text=document.createElement('div');
  messageText.classList.add('message-text');
  messageContent.append(messageImage);
  messageContent.append(messageText);
   messageImageText.classList.add('message-text_img');  
   messageText.appendChild(text);
   messageText.appendChild(messageImageText);

   ///////////////////////Запис тексту в профіль...............
    
    document.getElementById("signalMessage4").style.opacity = 1;
      var conv4 = document.getElementById('conersation-message4'); 
      conv4.innerHTML = botMessageTimer[0];
      document.getElementById("conersation-message4").onclick=function(){
       document.getElementById("signalMessage4").style.opacity = 0;
       conv4.innerHTML='';    
      }
      if (document.querySelector('.conversation4').classList.contains('active')){
        document.getElementById("signalMessage4").style.opacity = 0;
        conv4.innerHTML='';   
      }
         
       document.getElementById('container4').appendChild(messageRow);
       text.innerText = "typing....";
       setTimeout(function(){
         text.innerText='';
        text.innerText = message[3]; 
         messageImageText.classList.add('message-text_img');       
         messageImageText.src=picture;        
       },2000
       )
    
       var picture=document.images[3].src; 
       messageImage.classList.add('message_content_photo4'); 
       messageImage.src=picture;  

}

function addMessageBotTimer5(classList, message) { 
  
  var messageRow = document.createElement('div');
  messageRow.classList.add(...classList);
  var messageContent = document.createElement('div');  
  messageContent.classList.add('message-content');
  messageRow.appendChild(messageContent); 
  var messageImage = document.createElement('img'); 
  var messageText = document.createElement('div');   
  var messageImageText = document.createElement('img');
  var text=document.createElement('div');
  messageText.classList.add('message-text');
  messageContent.append(messageImage);
  messageContent.append(messageText);
   messageImageText.classList.add('message-text_img');  
   messageText.appendChild(text);
   messageText.appendChild(messageImageText);

   ///////////////////////Запис тексту в профіль...............
    
    document.getElementById("signalMessage5").style.opacity = 1;
      var conv5 = document.getElementById('conersation-message5'); 
      conv5.innerHTML = botMessageTimer[0];
      document.getElementById("conersation-message5").onclick=function(){
       document.getElementById("signalMessage5").style.opacity = 0;
       conv5.innerHTML='';    
      }
      if (document.querySelector('.conversation5').classList.contains('active')){
        document.getElementById("signalMessage5").style.opacity = 0;
        conv5.innerHTML='';   
      }
         
       document.getElementById('container5').appendChild(messageRow);
       text.innerText = "typing....";
       setTimeout(function(){
         text.innerText='';
        text.innerText = message[4]; 
         messageImageText.classList.add('message-text_img');       
         messageImageText.src=picture;        
       },2000
       )
    
       var picture=document.images[4].src; 
       messageImage.classList.add('message_content_photo5'); 
       messageImage.src=picture;  

}

function addMessageBotTimer6(classList, message) { 
  
  var messageRow = document.createElement('div');
  messageRow.classList.add(...classList);
  var messageContent = document.createElement('div');  
  messageContent.classList.add('message-content');
  messageRow.appendChild(messageContent); 
  var messageImage = document.createElement('img'); 
  var messageText = document.createElement('div');   
  var messageImageText = document.createElement('img');
  var text=document.createElement('div');
  messageText.classList.add('message-text');
  messageContent.append(messageImage);
  messageContent.append(messageText);
   messageImageText.classList.add('message-text_img');  
   messageText.appendChild(text);
   messageText.appendChild(messageImageText);

   ///////////////////////Запис тексту в профіль...............
    
    document.getElementById("signalMessage6").style.opacity = 1;
      var conv6 = document.getElementById('conersation-message6'); 
      conv6.innerHTML = botMessageTimer[0];
      document.getElementById("conersation-message6").onclick=function(){
       document.getElementById("signalMessage6").style.opacity = 0;
       conv6.innerHTML='';    
      }
      if (document.querySelector('.conversation6').classList.contains('active')){
        document.getElementById("signalMessage6").style.opacity = 0;
        conv6.innerHTML='';   
      }
         
       document.getElementById('container6').appendChild(messageRow);
       text.innerText = "typing....";
       setTimeout(function(){
         text.innerText='';
        text.innerText = message[5]; 
         messageImageText.classList.add('message-text_img');       
         messageImageText.src=picture;        
       },2000
       )
    
       var picture=document.images[5].src; 
       messageImage.classList.add('message_content_photo6'); 
       messageImage.src=picture;  

}

function addMessageBotTimer7(classList, message) { 
  
  var messageRow = document.createElement('div');
  messageRow.classList.add(...classList);
  var messageContent = document.createElement('div');  
  messageContent.classList.add('message-content');
  messageRow.appendChild(messageContent); 
  var messageImage = document.createElement('img'); 
  var messageText = document.createElement('div');   
  var messageImageText = document.createElement('img');
  var text=document.createElement('div');
  messageText.classList.add('message-text');
  messageContent.append(messageImage);
  messageContent.append(messageText);
   messageImageText.classList.add('message-text_img');  
   messageText.appendChild(text);
   messageText.appendChild(messageImageText);

   ///////////////////////Запис тексту в профіль...............
    
    document.getElementById("signalMessage7").style.opacity = 1;
      var conv7 = document.getElementById('conersation-message7'); 
      conv7.innerHTML = botMessageTimer[0];
      document.getElementById("conersation-message7").onclick=function(){
       document.getElementById("signalMessage7").style.opacity = 0;
       conv7.innerHTML='';    
      }
      if (document.querySelector('.conversation7').classList.contains('active')){
        document.getElementById("signalMessage7").style.opacity = 0;
        conv7.innerHTML='';   
      }
         
       document.getElementById('container7').appendChild(messageRow);
       text.innerText = "typing....";
       setTimeout(function(){
         text.innerText='';
        text.innerText = message[6]; 
         messageImageText.classList.add('message-text_img');       
         messageImageText.src=picture;        
       },2000
       )
    
       var picture=document.images[6].src; 
       messageImage.classList.add('message_content_photo7'); 
       messageImage.src=picture;  

}

function addMessageBotTimer8(classList, message) { 
  
  var messageRow = document.createElement('div');
  messageRow.classList.add(...classList);
  var messageContent = document.createElement('div');  
  messageContent.classList.add('message-content');
  messageRow.appendChild(messageContent); 
  var messageImage = document.createElement('img'); 
  var messageText = document.createElement('div');   
  var messageImageText = document.createElement('img');
  var text=document.createElement('div');
  messageText.classList.add('message-text');
  messageContent.append(messageImage);
  messageContent.append(messageText);
   messageImageText.classList.add('message-text_img');  
   messageText.appendChild(text);
   messageText.appendChild(messageImageText);

   ///////////////////////Запис тексту в профіль...............
    
    document.getElementById("signalMessage8").style.opacity = 1;
      var conv8 = document.getElementById('conersation-message8'); 
      conv8.innerHTML = botMessageTimer[0];
      document.getElementById("conersation-message8").onclick=function(){
       document.getElementById("signalMessage8").style.opacity = 0;
       conv8.innerHTML='';    
      }
      if (document.querySelector('.conversation8').classList.contains('active')){
        document.getElementById("signalMessage8").style.opacity = 0;
        conv8.innerHTML='';   
      }
         
       document.getElementById('container8').appendChild(messageRow);
       text.innerText = "typing....";
       setTimeout(function(){
         text.innerText='';
        text.innerText = message[7]; 
         messageImageText.classList.add('message-text_img');       
         messageImageText.src=picture;        
       },2000
       )
    
       var picture=document.images[7].src; 
       messageImage.classList.add('message_content_photo8'); 
       messageImage.src=picture;  

}

function addMessageBotTimer9(classList, message) { 
  
  var messageRow = document.createElement('div');
  messageRow.classList.add(...classList);
  var messageContent = document.createElement('div');  
  messageContent.classList.add('message-content');
  messageRow.appendChild(messageContent); 
  var messageImage = document.createElement('img'); 
  var messageText = document.createElement('div');   
  var messageImageText = document.createElement('img');
  var text=document.createElement('div');
  messageText.classList.add('message-text');
  messageContent.append(messageImage);
  messageContent.append(messageText);
   messageImageText.classList.add('message-text_img');  
   messageText.appendChild(text);
   messageText.appendChild(messageImageText);

   ///////////////////////Запис тексту в профіль...............
    
    document.getElementById("signalMessage9").style.opacity = 1;
      var conv9= document.getElementById('conersation-message9'); 
      conv9.innerHTML = botMessageTimer[0];
      document.getElementById("conersation-message9").onclick=function(){
       document.getElementById("signalMessage9").style.opacity = 0;
       conv9.innerHTML='';    
      }
      if (document.querySelector('.conversation9').classList.contains('active')){
        document.getElementById("signalMessage9").style.opacity = 0;
        conv9.innerHTML='';   
      }
         
       document.getElementById('container9').appendChild(messageRow);
       text.innerText = "typing....";
       setTimeout(function(){
         text.innerText='';
        text.innerText = message[8]; 
         messageImageText.classList.add('message-text_img');       
         messageImageText.src=picture;        
       },2000
       )
    
       var picture=document.images[8].src; 
       messageImage.classList.add('message_content_photo9'); 
       messageImage.src=picture;  

}

function addMessageBotTimer10(classList, message) { 
  
  var messageRow = document.createElement('div');
  messageRow.classList.add(...classList);
  var messageContent = document.createElement('div');  
  messageContent.classList.add('message-content');
  messageRow.appendChild(messageContent); 
  var messageImage = document.createElement('img'); 
  var messageText = document.createElement('div');   
  var messageImageText = document.createElement('img');
  var text=document.createElement('div');
  messageText.classList.add('message-text');
  messageContent.append(messageImage);
  messageContent.append(messageText);
   messageImageText.classList.add('message-text_img');  
   messageText.appendChild(text);
   messageText.appendChild(messageImageText);

   ///////////////////////Запис тексту в профіль...............
    
    document.getElementById("signalMessage10").style.opacity = 1;
      var conv10= document.getElementById('conersation-message10'); 
      conv10.innerHTML = botMessageTimer[1];
      document.getElementById("conersation-message10").onclick=function(){
       document.getElementById("signalMessage10").style.opacity = 0;
       conv10.innerHTML='';    
      }
      if (document.querySelector('.conversation10').classList.contains('active')){
        document.getElementById("signalMessage10").style.opacity = 0;
        conv10.innerHTML='';   
      }
         
       document.getElementById('container10').appendChild(messageRow);
       text.innerText = "typing....";
       setTimeout(function(){
         text.innerText='';
        text.innerText = message[1]; 
         messageImageText.classList.add('message-text_img');       
         messageImageText.src=picture;        
       },2000
       )
    
       var picture=document.images[9].src; 
       messageImage.classList.add('message_content_photo10'); 
       messageImage.src=picture;  

}


//////////////Enter message on key//////////////

$('.enter_mes').on('keyup', function(e){
  if(e.which == 13) $('#id').click();
});