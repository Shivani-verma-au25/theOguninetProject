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
gsap.to('#page1',{
  scrollTrigger:{
        trigger:'#hero',
        scroller:'#main',
        start:'top 18%',
        end:'600% top',
        // markers:true,
        pin:true
      }
})

gsap.to('#page2',{
  scrollTrigger:{
        trigger:'#inner-page2',
        scroller:'#main',
        start:'top 19%',
        end:'400% top',
        // markers:true,
        pin:true
      },
})
gsap.to('nav',{
  scrollTrigger:{
    trigger:'#page2',
    scroller:'#main',
    start:'top 80%',
    end:'bottom top',
    // markers:true,
    scrub:.15
  },
  y:-200,
  duration:1
})
gsap.to('#page3',{
  scrollTrigger:{
        trigger:'#inner-page3',
        scroller:'#main',
        start:'top 19%',
        end:'500% top',
        // markers:true,
        pin:true
      }
})
gsap.to('#page4',{
  scrollTrigger:{
        trigger:'#inner-page4',
        scroller:'#main',
        start:'top 19%',
        end:'0% top',
        // markers:true,
        pin:true
      }
})


// page5 lines

gsap.to('.line',{
  scrollTrigger:{
    trigger:'.line',
    scroller:'#main',
    start:'top 50%',
    end:'bottom 0%',
    // markers:true,
    scrub:3
  },
  width:'100%',
  opacity:1,
  duration:1,
  stagger:.25
})

// ************** page 6 a****************
let touch = document.querySelector('#inner-p6 a')
let img1 = document.querySelector('#p-6-img1')
let img2 = document.querySelector('#p-6-img2')
let img3 = document.querySelector('#p-6-img3')
console.log(img1);
// pic1
touch.addEventListener('mouseenter',function(){
  img1.style.top = '45%';
  img1.style.left = '30%';
  // img1.style.rotate = '15deg';
  // gsap.to('img1',{
  //   y:'20%',
  //   duration:1,
  //   stagger:.25
  // })
  
})
touch.addEventListener('mouseleave',function(){
  img1.style.top = '110%'
  img1.style.left = '-5%';

})
// pic2
touch.addEventListener('mouseenter',function(){
  img2.style.top = '40%';
  // img3.style.rotate = '-10deg';
})
touch.addEventListener('mouseleave',function(){
  img2.style.top = '110%'
})
// pic3
touch.addEventListener('mouseenter',function(){
  img3.style.top = '40%';
  img3.style.left = '30%';
  img3.style.rotate = '-15deg';
  
})
touch.addEventListener('mouseleave',function(){
  img3.style.top = '110%'
  img3.style.left = '80%';

})




// // page2
// gsap.to('#inner-page2',{
//   scrollTrigger:{
//         trigger:'#inner-page2',
//         scroller:'#main',
//         start:'top 18%',
//         end:'bottom top',
//         // markers:true,
//         pin:true,
//         scrub:.15
//       }
// })
// gsap.to('nav',{
//   scrollTrigger:{
//     trigger:'page2',
//     scroller:'#main',
//     start:'top top',
//     end:'bottom 0',
//     scrub:.15,
//     markers:true
//   },
//   y:-200,
//   duration:1
// })

// *************** nav animation img**********

let imgNav = document.querySelector('#circle-img-2')
// console.log(imgNav);
imgNav.addEventListener('mouseover',function(){
  imgNav.style.rotate = '0deg'
})
imgNav.addEventListener('mouseleave',function(){
  imgNav.style.rotate = '10deg'
})

// lines page-5



