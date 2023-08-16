function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()


// *************** gsap*************************

// let tl = gsap.timeline({
//   scrollTrigger:{
//     trigger:'#hero',
//     scroller:'#main',
//     start:'top 0%',
//     end:'400% top',
//     markers:true,
//     pin:true
//   }
// })
gsap.to('#hero',{
  scrollTrigger:{
        trigger:'#hero',
        scroller:'#main',
        start:'top 0%',
        end:'400% top',
        // markers:true,
        pin:true
      }
})


// page2
gsap.to('#inner-page2',{
  scrollTrigger:{
        trigger:'#inner-page2',
        scroller:'#main',
        start:'top 30%',
        end:'100% top',
        // markers:true,
        pin:true
      }
})
gsap.to('nav',{
  scrollTrigger:{
    trigger:'page2',
    scroller:'#main',
    start:'top top',
    end:'bottom 0',
    scrub:.15,
    markers:true
  },
  y:-200,
  duration:1
})

// let tl1 = gsap.timeline({
//   scrollTrigger:{
//             trigger:'#page2',
//             scroller:'#main',
//             start:'top 0%',
//             end:'100% top',
//             markers:true,
//             // pin:true,
//             scrub:.1
//           },
//           stagger:.1
// })
// tl1.to('nav',{
//   y:-100
// })