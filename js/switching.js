//////////////////////////////////////////////////////////////
var cont1 = document.querySelector('.container1');
var cont2 = document.querySelector('.container2');
var cont3 = document.querySelector('.container3');
var cont4 = document.querySelector('.container4');
var cont5 = document.querySelector('.container5');
var cont6 = document.querySelector('.container6');
var cont7 = document.querySelector('.container7');
var cont8 = document.querySelector('.container8');
var cont9 = document.querySelector('.container9');
var cont10 = document.querySelector('.container10');

var div1 = document.querySelector('.conversation1');
var div2 = document.querySelector('.conversation2');
var div3 = document.querySelector('.conversation3');
var div4 = document.querySelector('.conversation4');
var div5 = document.querySelector('.conversation5');
var div6 = document.querySelector('.conversation6');
var div7 = document.querySelector('.conversation7');
var div8 = document.querySelector('.conversation8');
var div9 = document.querySelector('.conversation9');
var div10 = document.querySelector('.conversation10');



var prof1 =document.querySelector('.chat-title1');
var prof2 =document.querySelector('.chat-title2');
var prof3 =document.querySelector('.chat-title3');
var prof4 =document.querySelector('.chat-title4');
var prof5 =document.querySelector('.chat-title5');
var prof6 =document.querySelector('.chat-title6');
var prof7 =document.querySelector('.chat-title7');
var prof8 =document.querySelector('.chat-title8');
var prof9 =document.querySelector('.chat-title9');
var prof10 =document.querySelector('.chat-title10');



var profImg1=document.querySelector('.image_profiles1');
var profImg2=document.querySelector('.image_profiles2');
var profImg3=document.querySelector('.image_profiles3');
var profImg4=document.querySelector('.image_profiles4');
var profImg5=document.querySelector('.image_profiles5');
var profImg6=document.querySelector('.image_profiles6');
var profImg7=document.querySelector('.image_profiles7');
var profImg8=document.querySelector('.image_profiles8');
var profImg9=document.querySelector('.image_profiles9');
var profImg10=document.querySelector('.image_profiles10');

var mesagContPhoto1=document.querySelector('.message_content_photo1');
var mesagContPhoto2=document.querySelector('.message_content_photo2');
var mesagContPhoto3=document.querySelector('.message_content_photo3');
var mesagContPhoto4=document.querySelector('.message_content_photo4');
var mesagContPhoto5=document.querySelector('.message_content_photo5');
var mesagContPhoto6=document.querySelector('.message_content_photo6');
var mesagContPhoto7=document.querySelector('.message_content_photo7');
var mesagContPhoto8=document.querySelector('.message_content_photo8');
var mesagContPhoto9=document.querySelector('.message_content_photo9');
var mesagContPhoto10=document.querySelector('.message_content_photo10');



div1.addEventListener("click", function() {  
cont2.style.display='none';
cont3.style.display='none';
cont4.style.display='none';
cont5.style.display='none';
cont6.style.display='none';
cont7.style.display='none';
cont8.style.display='none';
cont9.style.display='none';
cont10.style.display='none';

prof2.style.display='none';
prof3.style.display='none';
prof4.style.display='none';
prof5.style.display='none';
prof6.style.display='none';
prof7.style.display='none';
prof8.style.display='none';
prof9.style.display='none';
prof10.style.display='none';


profImg2.style.display='none';
profImg3.style.display='none';
profImg4.style.display='none';
profImg5.style.display='none';
profImg6.style.display='none';
profImg7.style.display='none';
profImg8.style.display='none';
profImg9.style.display='none';
profImg10.style.display='none';

   if(div1.className !=='active')  {
      cont1.style.display='block';
      prof1.style.display = 'block';
      prof1.style.display='block';
      profImg1.style.display='block';
   }      
      // var price = document.getElementById("title-text1");
      // alert (price.innerHTML);
     
});

div2.addEventListener("click", function() {
   cont1.style.display='none';
   cont3.style.display='none';
   cont4.style.display='none';
   cont5.style.display='none';
   cont6.style.display='none';
   cont7.style.display='none';
   cont8.style.display='none';
   cont9.style.display='none';
   cont10.style.display='none';
   
   prof1.style.display='none';
   prof3.style.display='none';
   prof4.style.display='none';
   prof5.style.display='none';
   prof6.style.display='none';
   prof7.style.display='none';
   prof8.style.display='none';
   prof9.style.display='none';
   prof10.style.display='none';


   profImg1.style.display='none';
   profImg3.style.display='none';
   profImg4.style.display='none';
   profImg5.style.display='none';
   profImg6.style.display='none';
   profImg7.style.display='none';
   profImg8.style.display='none';
   profImg9.style.display='none';
   profImg10.style.display='none';


if(div2.className !=='active')
{
   cont2.style.display='block';
   prof2.style.display='block';  
   profImg2.style.display='block';
}

});


div3.addEventListener("click", function() {
   cont1.style.display='none';
   cont2.style.display='none';
   cont4.style.display='none';
   cont5.style.display='none';
   cont6.style.display='none';
   cont7.style.display='none';
   cont8.style.display='none';
   cont9.style.display='none';
   cont10.style.display='none';

   prof1.style.display='none';
   prof2.style.display='none';
   prof4.style.display='none';
   prof5.style.display='none';
   prof6.style.display='none';
   prof7.style.display='none';
   prof8.style.display='none';
   prof9.style.display='none';
   prof10.style.display='none';

   profImg1.style.display='none';
   profImg2.style.display='none';
   profImg4.style.display='none';
   profImg5.style.display='none';
   profImg6.style.display='none';
   profImg7.style.display='none';
   profImg8.style.display='none';
   profImg9.style.display='none';
   profImg10.style.display='none';


 if(div3.className !=='active')    
   prof3.style.display='block';
   profImg3.style.display='block';
   cont3.style.display='block';

});

div4.addEventListener("click", function() {
   cont1.style.display='none';
   cont2.style.display='none';
   cont3.style.display='none';
   cont5.style.display='none';
   cont6.style.display='none';
   cont7.style.display='none';
   cont8.style.display='none';
   cont9.style.display='none';
   cont10.style.display='none';

   prof2.style.display='none';
   prof3.style.display='none';
   prof1.style.display='none';
   prof5.style.display='none';
   prof6.style.display='none';
   prof7.style.display='none';
   prof8.style.display='none';
   prof9.style.display='none';
   prof10.style.display='none';

   profImg1.style.display='none';
   profImg3.style.display='none';
   profImg2.style.display='none';
   profImg5.style.display='none';
   profImg6.style.display='none';
   profImg7.style.display='none';
   profImg8.style.display='none';
   profImg9.style.display='none';
   profImg10.style.display='none';



 if(div4.className !=='active')    
   prof4.style.display='block';
   profImg4.style.display='block';
   cont4.style.display='block';
});

div5.addEventListener("click", function() {
   cont1.style.display='none';
   cont2.style.display='none';
   cont3.style.display='none';
   cont4.style.display='none';
   cont6.style.display='none';
   cont7.style.display='none';
   cont8.style.display='none';
   cont9.style.display='none';
   cont10.style.display='none';

   prof2.style.display='none';
   prof3.style.display='none';
   prof4.style.display='none';
   prof1.style.display='none';
   prof6.style.display='none';
   prof7.style.display='none';
   prof8.style.display='none';
   prof9.style.display='none';
   prof10.style.display='none';

   profImg1.style.display='none';
   profImg3.style.display='none';
   profImg4.style.display='none';
   profImg2.style.display='none';
   profImg6.style.display='none';
   profImg7.style.display='none';
   profImg8.style.display='none';
   profImg9.style.display='none';
   profImg10.style.display='none';


 if(div5.className !=='active')  
   prof5.style.display='block';
   profImg5.style.display='block';
   cont5.style.display='block';
});

div6.addEventListener("click", function() {
   cont1.style.display='none';
   cont2.style.display='none';
   cont3.style.display='none';
   cont4.style.display='none';
   cont5.style.display='none';
   cont7.style.display='none';
   cont8.style.display='none';
   cont9.style.display='none';
   cont10.style.display='none';

   prof2.style.display='none';
   prof3.style.display='none';
   prof4.style.display='none';
   prof5.style.display='none';
   prof1.style.display='none';
   prof7.style.display='none';
   prof8.style.display='none';
   prof9.style.display='none';
   prof10.style.display='none';

   profImg1.style.display='none';
   profImg3.style.display='none';
   profImg4.style.display='none';
   profImg5.style.display='none';
   profImg2.style.display='none';
   profImg7.style.display='none';
   profImg8.style.display='none';
   profImg9.style.display='none';
   profImg10.style.display='none';


 if(div6.className !=='active')  
   prof6.style.display='block';
   profImg6.style.display='block';
   cont6.style.display='block';

});

div7.addEventListener("click", function() {
   cont1.style.display='none';
   cont2.style.display='none';
   cont3.style.display='none';
   cont4.style.display='none';
   cont5.style.display='none';
   cont6.style.display='none';
   cont8.style.display='none';
   cont9.style.display='none';
   cont10.style.display='none';

   prof2.style.display='none';
   prof3.style.display='none';
   prof4.style.display='none';
   prof5.style.display='none';
   prof1.style.display='none';
   prof6.style.display='none';
   prof8.style.display='none';
   prof9.style.display='none';
   prof10.style.display='none';

   profImg1.style.display='none';
   profImg3.style.display='none';
   profImg4.style.display='none';
   profImg5.style.display='none';
   profImg6.style.display='none';
   profImg2.style.display='none';
   profImg8.style.display='none';
   profImg9.style.display='none';
   profImg10.style.display='none';


 if(div7.className !=='active')  
   prof7.style.display='block';
   profImg7.style.display='block';
   cont7.style.display='block';
});

div8.addEventListener("click", function() {
   cont1.style.display='none';
   cont2.style.display='none';
   cont3.style.display='none';
   cont4.style.display='none';
   cont5.style.display='none';
   cont6.style.display='none';
   cont7.style.display='none';
   cont9.style.display='none';
   cont10.style.display='none';

   prof2.style.display='none';
   prof3.style.display='none';
   prof4.style.display='none';
   prof5.style.display='none';
   prof1.style.display='none';
   prof6.style.display='none';
   prof7.style.display='none';
   prof9.style.display='none';
   prof10.style.display='none';

   profImg1.style.display='none';
   profImg3.style.display='none';
   profImg4.style.display='none';
   profImg5.style.display='none';
   profImg6.style.display='none';
   profImg7.style.display='none';
   profImg2.style.display='none';
   profImg9.style.display='none';
   profImg10.style.display='none';

 if(div8.className !=='active')  
 prof8.style.display = 'block';
 profImg8.style.display='block';
 cont8.style.display='block';

});

div9.addEventListener("click", function() {
   cont1.style.display='none';
   cont2.style.display='none';
   cont3.style.display='none';
   cont4.style.display='none';
   cont5.style.display='none';
   cont6.style.display='none';
   cont7.style.display='none';
   cont8.style.display='none';
   cont10.style.display='none';

   prof2.style.display='none';
   prof3.style.display='none';
   prof4.style.display='none';
   prof5.style.display='none';
   prof1.style.display='none';
   prof6.style.display='none';
   prof7.style.display='none';
   prof8.style.display='none';
   prof10.style.display='none';

   profImg1.style.display='none';
   profImg3.style.display='none';
   profImg4.style.display='none';
   profImg5.style.display='none';
   profImg6.style.display='none';
   profImg7.style.display='none';
   profImg8.style.display='none';
   profImg2.style.display='none';
   profImg10.style.display='none';


   if(div9.className !=='active')  
   prof9.style.display = 'block';
   profImg9.style.display='block';
   cont9.style.display='block';

});

div10.addEventListener("click", function() {
   cont1.style.display='none';
   cont2.style.display='none';
   cont3.style.display='none';
   cont4.style.display='none';
   cont5.style.display='none';
   cont6.style.display='none';
   cont7.style.display='none';
   cont8.style.display='none';
   cont9.style.display='none';

   prof2.style.display='none';
   prof3.style.display='none';
   prof4.style.display='none';
   prof5.style.display='none';
   prof1.style.display='none';
   prof6.style.display='none';
   prof7.style.display='none';
   prof9.style.display='none';
   prof8.style.display='none';

   profImg1.style.display='none';
   profImg3.style.display='none';
   profImg4.style.display='none';
   profImg5.style.display='none';
   profImg6.style.display='none';
   profImg7.style.display='none';
   profImg8.style.display='none';
   profImg9.style.display='none';
   profImg2.style.display='none';

   if(div10.className !=='active')  
   
   prof10.style.display='block';
   profImg10.style.display='block';
   cont10.style.display='block';

});