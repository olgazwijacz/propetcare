

// ANIMATIONS

const img = document.querySelectorAll(".img-slide");
const textSlideLeft = document.querySelectorAll(".flex-text")


TweenMax.from(".pattern", 1.5, {
    delay: 1.6,
    width: 0,
    opacity: 0,
    ease: Expo.easeInOut
    }, 0.08);
    

TweenMax.from(".nav-list-item", 1.5, {
    delay: 1.6,
    opacity: 0,
    x:-500,
    ease: Expo.easeInOut,
    }, 0.08);


          
  
const tl = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from(".revealOnScroll",.6, { y: -50, scale: 0.5, opacity: 0})
tl.from(".revealOnScroll2", .5, {x: 200, opacity:0})
tl.from(".imgRedDog", .5, {x:-300, opacity:0}, "-=0.4")

const scene = new ScrollMagic.Scene({
triggerElement: ".scroll",
offset: -250,

})
.setTween(tl)
.addTo(controller)

const tl2 = new TimelineMax();
const controller2 = new ScrollMagic.Controller();

tl2.from("#a", 0.4, {y:-70, opacity:0})
tl2.from("#b", 0.4, {y:-70, opacity:0})
tl2.from("#c", 0.4, {y:-70, opacity:0})
tl2.from("#d", 0.4, {y:-70, opacity:0})


const scene2 = new ScrollMagic.Scene({
    triggerElement:".container-stuff"
})

.setTween(tl2)
.addTo(controller)

const tl3 = new TimelineMax();
const controller3 = new ScrollMagic.Controller();

tl3.from(img[0], 0.5,{y: -200, opacity:0})
.from(img[2], 0.5,{y: -200, opacity:0}, "-=.5")
.from(img[1], 0.5,{y: -200, opacity:0}, "-=.5")   
.from(img[3], 0.5,{y: -200, opacity:0}, "-=.6")  
.fromTo(".description", 1,{x:-100, rotation: 360, opacity:0},{opacity:1, x:-10, ease:Power4.easeOut}, "=.6")
.fromTo(".dot", 1.2,{scale:0 }, { scale:1.1,  ease: Elastic.easeOut},"-=1")
.from(".acronim", { rotationY: 180, scale: 0.7, opacity: 0,}, "-=.5" )
.to(".acronim", 0.3, {rotationY: 360, scale: 0.7, opacity:1, backgroundColor: "rgba(242, 249, 252, 0.7" },"-=.1")
.from(".pattern2", 1.3, { opacity: 0, rotationX: 180,ease: Expo.easeInOut}, "-=0.90");
; 


const scene3 = new ScrollMagic.Scene({
    triggerElement:".rec yellow",
    offset: 300,
})
.setTween(tl3)
.addTo(controller3)

const tl4 = new TimelineMax();
const controller4 = new ScrollMagic.Controller();

tl4.from(".wrapper", .7,  {opacity:0, ease: Expo.easeInOut},"=0.90" )

const scene4 = new ScrollMagic.Scene({
    triggerElement:"#d",
    offset: 400,
})
.setTween(tl4)
.addTo(controller4)


const tl5 = new TimelineMax();
const controller5 = new ScrollMagic.Controller();

tl5.from(".flex .quotation h3 ", 1.5, { delay: .5, opacity: 0, x:-500, ease: Expo.easeInOut}, 0.08)
.from(".flex .adress h4 ", 1.5, { delay:  .5, opacity: 0, x:-500, ease: Expo.easeInOut}, 0.08)
.from(".flex .site h4 ", 1.5, { delay:  .5, opacity: 0, x:-500, ease: Expo.easeInOut}, 0.08)
.from(".flex .follow h4 ", 1.5, { delay:  .5, opacity: 0, x:-500, ease: Expo.easeInOut}, 0.08)
const scene5 = new ScrollMagic.Scene({
    triggerElement:"#name",
    offset: 100,
})
.setTween(tl5)
.addTo(controller5)
