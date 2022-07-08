const elements=document.querySelectorAll('.btn');

elements.forEach(element =>{
  element.addEventListener('click',()=>{
    let command = element.dataset['element'];

    if(command == 'createLink' || command == 'insertImage'){
      let url = prompt('Enter the Link here:','http://')
      document.execCommand(command,false,url);
    }else{
      document.execCommand(command,false,null);
    }


  });
})

const copy=document.querySelector('.sub');

copy.addEventListener('click',()=>{
  document.execCommand(copy,false,null);
});



const content=document.querySelector('.content');
var x=0;
content.addEventListener('click',function(){

  if(x===0)
  {
    alert("Don't Forget to SAVE before Turning In ");
    x++;
  }
  content.classList.add("opacity");
});

const crosspath1="M38.5215 2.81702L10.9164 49.2278L7.47853 47.183L35.0836 0.772202L38.5215 2.81702Z";
const crosspath2="M2.37577 6.99999L45.8192 39.0729L43.4434 42.2909L0 10.218L2.37577 6.99999Z";

const navmenu=document.querySelector(".navicon");
let toggle=false;
const home=document.querySelector(".home");
home.addEventListener('click',function(){
  navmenu.style.zIndex="1";
  navmenu.setAttribute('height','54');
  navmenu.setAttribute('width','27');
    document.querySelector(".menu").style.zIndex="-1";
    document.querySelector(".menu").style.opacity=0;
    for(let i=0;i<3;i++){
    document.querySelectorAll(".invisible")[i].style.opacity=1;
}




  const timeline =anime.timeline({
    duration:750,
    easing:"easeOutExpo"
  });

  timeline.add({
    targets: ".cross1",
    d:[
      {value:"M54 4H0V0H54V4Z"}
    ]
  })
  .add({
    targets:".cross3",
    d:[
      {value:"M54 49H0V45H54V49Z"}
    ]

  },"-=750")
  .add({
    targets:".cross2",
    opacity:1
  },"-=750")
  .add({
    targets:".navicon",
    rotate:360
  },"-=750");

  toggle=false;
})

navmenu.addEventListener('click',function(){
   if(toggle==false)
   {
     toggle=true;


       navmenu.style.zIndex="3";
       navmenu.setAttribute('height','40');
       navmenu.setAttribute('width','40');
         document.querySelector(".menu").style.zIndex="3";
         document.querySelector(".menu").style.opacity=0.9;
         for(let i=0;i<3;i++){
         document.querySelectorAll(".invisible")[i].style.opacity=0;
}



     const timeline =anime.timeline({
       duration:750,
       easing:"easeOutExpo"
     });

     timeline.add({
       targets: ".cross1",
       d:[
         {value:crosspath1}
       ]
     })
     .add({
       targets:".cross3",
       d:[
         {value:crosspath2}
       ]

     },"-=750")
     .add({
       targets:".cross2",
       opacity:0
     },"-=750")
     .add({
       targets:".navicon",
       rotate:370
     },"-=750");



   }
   else
   {
     toggle=false;
     navmenu.style.zIndex="1";
     navmenu.setAttribute('height','54');
     navmenu.setAttribute('width','27');
       document.querySelector(".menu").style.zIndex="-1";
       document.querySelector(".menu").style.opacity=0;
       for(let i=0;i<3;i++){
       document.querySelectorAll(".invisible")[i].style.opacity=1;
}




     const timeline =anime.timeline({
       duration:750,
       easing:"easeOutExpo"
     });

     timeline.add({
       targets: ".cross1",
       d:[
         {value:"M54 4H0V0H54V4Z"}
       ]
     })
     .add({
       targets:".cross3",
       d:[
         {value:"M54 49H0V45H54V49Z"}
       ]

     },"-=750")
     .add({
       targets:".cross2",
       opacity:1
     },"-=750")
     .add({
       targets:".navicon",
       rotate:360
     },"-=750");


   }

});


//div to textarea data transfer

function savedata(){
  var divHtml = document.querySelector(".content").innerHTML;
  var textArea= document.querySelector(".save");
  textArea.value= divHtml;
}

var save= document.querySelector(".savebtn");

save.addEventListener("click",function(){
  savedata();
});
