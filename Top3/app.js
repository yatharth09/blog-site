

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





















function init(){
  const slides = document.querySelectorAll(".slide");
  const pages = document.querySelectorAll(".page");
  const backgrounds = [
    `radial-gradient(#2b3760, #0b1023)`,
    `radial-gradient(#995c00, #1a0f00)`,
    `radial-gradient(#5c5c8a, #1a0013)`
  ];
  let current=0;
  let scrollSlide=0;


  slides.forEach((slide,index) => {
    slide.addEventListener('click', function(){
      changeDots(this);
      nextSlide(index);
      scrollSlide=current;
    });
  });

  function changeDots(dot){
    slides.forEach(slide =>{
      slide.classList.remove("active");

    });
    dot.classList.add("active");
  }

  function nextSlide(pageNumber){
    const nextPage = pages[pageNumber];
    const currentPage = pages[current];
    const nextLeft = nextPage.querySelector(".hero .modelleft");
    const nextRight = nextPage.querySelector(".hero .modelright");
    const currentLeft = currentPage.querySelector(".hero .modelleft");
    const currentRight = currentPage.querySelector(".hero .modelright");
    const nextText = nextPage.querySelector(".details");
    const blog=document.querySelector(".blog");

    const tl = new TimelineMax();

    tl.fromTo(currentLeft,
      0.3,
      {y: '-10%'},
      {y:'-100%'})
    .fromTo(currentRight,
      0.3,
      {y: '10%'},
      {y:'-100%'},
      '-=0.2'
    )
    .to(blog,0.3,{backgroundImage: backgrounds[pageNumber]})
    .fromTo(currentPage,
       0.3 ,
      {opacity:1, pointerEvents: 'all'},
      {opacity:0, pointerEvents: 'none'} )
    .fromTo(nextPage,
      0.3,
      {opacity:0, pointerEvents: 'none'},
      {opacity:1, pointerEvents: 'all'},'-=0.6' )
    .fromTo(nextLeft,
      0.3,
      {y: '-100%'},
      {y:'-10%'},'-=0.6')
    .fromTo(nextRight,
      0.3,
      {y: '-100%'},
      {y:'10%'},'-=0.8')
      .fromTo(nextText,
        0.6,
        {opacity: 0 , y: '-100%'},
        {opacity:1 , y:'0%'},'-=0.6')

      .set(nextLeft, {clearProps: 'all'})
      .set(nextRight, {clearProps: 'all'});


      current=pageNumber;
  }

document.addEventListener('wheel',throttle(scrollChange ,1500));
document.addEventListener('touchmove',throttle(scrollChange ,1500));

function switchDots(dotNumber){
  const activeDot = document.querySelectorAll('.slide')[dotNumber];
  slides.forEach(slide => {
    slide.classList.remove("active");
  })
  activeDot.classList.add("active");
}

function scrollChange(event){
  if(event.deltaY>0){
    scrollSlide +=1;
  }
  else{
    scrollSlide -=1;
  }

  if(scrollSlide >2){
    scrollSlide =0;
  }
  if(scrollSlide <0){
    scrollSlide =2 ;
  }
  switchDots(scrollSlide);
  nextSlide(scrollSlide);

}

}

function throttle(func, limit){
  let inThrottle;
  return function(){
    const args =arguments;
    const context = this ;
    if(!inThrottle){
      func.apply(context,args);
      inThrottle=true;
      setTimeout(() => (inThrottle =false), limit);
    }
  };
}
init();
