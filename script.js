const imgs =  [

'1.jpg' ,
'2.jpg'  ,
'3.jpg' ,
'4.jpg' ,
'5.jpg' 
]
 const pic = document.querySelector('section');

function showImage()
{
   let p1 = Math.floor(Math.random() * imgs.length);
   let pic = imgs[p1];
   document.getElementById("img").src=pic;
}