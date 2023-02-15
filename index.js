

var isBold = false;

document.getElementById('bold').addEventListener('click',function(){
   
   const textarea=  document.getElementById('text');

   isBold = !isBold;
  if (isBold) {
   textarea.style.fontWeight = "700";
  } else {
   textarea.style.fontWeight = "400";
  }
   
   // textarea.style.fontWeight = "900";

})


let isItalic = false;
document.getElementById('italic').addEventListener('click',function(){
   const textarea=  document.getElementById('text');
   isItalic = !isItalic
   if (isItalic){

      textarea.style.fontStyle = "italic";
   }
   else {
      textarea.style.fontStyle = "normal";
   }
  
})


let isUnderline = false;

document.getElementById('underline').addEventListener('click',function(){
   const textarea=  document.getElementById('text');
   isUnderline = !isUnderline
   if(isUnderline){

      textarea.style.textDecoration = "underline";
   } else{
      textarea.style.textDecoration = "none";
   }

  

})

document.getElementById('favcolor').addEventListener('click',function(){
   const textarea=  document.getElementById('text');
   var color = document.getElementById("favcolor").value;
   textarea.style.color = color;

})

document.getElementById('fontSize').addEventListener('click',function(){
   const textarea=  document.getElementById('text');
   var size = document.getElementById("fontSize").value;
   textarea.style.fontSize = size + "px";
   

})
// document.getElementById('center').addEventListener('click',function(){
//    const textarea=  document.getElementById('text');
//    // var size = document.getElementById("fontSize").value;
//    textarea.style.textAlign = "center";
// })

function align(val){
   const textarea=  document.getElementById('text');
   textarea.style.textAlign = val;
}

document.getElementById('center').addEventListener('click', function(){
   align("center")
});
document.getElementById('right').addEventListener('click', function(){
   align("right")
});
document.getElementById('left').addEventListener('click', function(){
   align("left")
});










   