

// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true
// });







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




const opener = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".opnner",
      scroller:"#main",
      start: "70% 70%",
      end: "90% 20%",
      // markers:true,
      scrub: 5,
      pin: true,
    },
  });

  tl.to(
    ".top",
    {
      y: "-118%",
      duration:2.5,
      ease: "power1.out",
      // duration:3,
    },
    "a"
  );
  tl.to(
    ".bottom",
    {
      y: "110%",
      ease: "power1.out",
      duration:2.5,
      // duration:3,
    },
    "a"
  );

  tl.to(
    ".top_heading",
    {
      y: "15%",
    },
    "a"
  );
  tl.to(
    ".bottom_heading",
    {
      y: "10%",
    },
    "a"
  );

  tl.to(".parents_img", {
    left: "0px",
    duration: 8,
    stagger: 6,
  },"kk");

  tl.to(".para_bar",{
    width:"100%",
    duration:8,
  },"kk")



 
};

opener();

// circleMove function

const circleMove = () => {
  let head_text = document.querySelector(".head_text");

  head_text.addEventListener("mousemove", (dets) => {
    gsap.to(".inner_circle", {
      x: dets.x - head_text.getBoundingClientRect().x - 50,
      y: dets.y - head_text.getBoundingClientRect().y - 100,
      opacity: 1,
      ease: "back.out(1.0)",
      scale: 1,
    });
  });

  head_text.addEventListener("mouseleave", () => {
    gsap.to(".inner_circle", {
      opacity: 0,
      scale: 0,
    });
  });
};

circleMove();

const navLogo = () => {
  let nav_logo = document.querySelector(".nav_logo");

  nav_logo.addEventListener("mousemove", (dets) => {
    gsap.to(".logo_circle", {
      x: dets.x - nav_logo.getBoundingClientRect().x - 25,
      y: dets.y - nav_logo.getBoundingClientRect().y - 30,
      opacity: 1,
      scale: 1,
    });

    nav_logo.addEventListener("mouseleave", () => {
      gsap.to(".logo_circle", {
        opacity: 0,
        scale: 0,
      });
    });
  });
};
navLogo();

const Bars = () => {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main_2",
      scroller:"#main",
      start: "20% 70%",
      end: "50% 70%",
      // markers:true,
      // pin: true,
      scrub: 3,
    },
  });

  tl2.to(".bars", {
    left: "0%",
    stagger: 2,
  });

  let bars = document.querySelectorAll(".bars");

  bars.forEach((eelm) => {
    eelm.addEventListener("mouseenter", () => {
      console.log(eelm.childNodes[7].childNodes[1]);
      gsap.to(eelm.childNodes[5], {
        scale: 1,
        opacity: 1,
        rotate: 10,
      });
      gsap.to(eelm.childNodes[1], {
        width: "100%",
      });
      gsap.to(eelm.childNodes[3], {
        color: "black",
      });
      gsap.to(eelm.childNodes[7], {
        color: "black",
      });
      gsap.to(eelm.childNodes[7].childNodes[1], {
        rotate: 90,
      });
    });
    eelm.addEventListener("mouseleave", () => {
      gsap.to(eelm.childNodes[5], {
        scale: 0,
        opacity: 0,
      });
      gsap.to(eelm.childNodes[1], {
        width: 0,
      });
      gsap.to(eelm.childNodes[3], {
        color: "white",
      });
      gsap.to(eelm.childNodes[7], {
        color: "white",
      });
      gsap.to(eelm.childNodes[7].childNodes[1], {
        rotate: -45,
      });
    });
    eelm.addEventListener("mousemove", (dets) => {
      gsap.to(eelm.childNodes[5], {
        x: dets.x - eelm.getBoundingClientRect().x - 250,
        // y :dets.y - eelm.getBoundingClientRect().y
      });
    });
  });

  // eelm.childNodes[5].style.opacity=0;
};
Bars();

const childCard = () => {

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main_3",
      scroller:"#main",
      start: "50% 90%",
      end: "70% 90%",
      // markers:true,
      scrub: 4,
      // pin: true,
    },
  });
tl3.to(".upper_heading",{
  width:"100%", 
},"m")
tl3.to(".main3_right > i",{
 rotate:90,
},"m")

tl3.to(".top_shutter",{
  top:"-50%",
  stagger:.5,
},"m")

tl3.to(".bottom_shutter",{
bottom:"-50%",
stagger:.5,
},"m")

  let childCards = document.querySelectorAll(".child_main");

  childCards.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      console.log("mouse entered....");
      console.log(el.childNodes[3].childNodes[1]);
      gsap.to(el.childNodes[3].childNodes[1], {
        scale: 1,
        opacity: 1,
      });
    });

    el.addEventListener("mouseleave", () => {
      console.log("mouse leave....");
      console.log(el.childNodes[3].childNodes[1]);
      gsap.to(el.childNodes[3].childNodes[1], {
        scale: 0,
        opacity: 0,
      });
    });

    el.addEventListener("mousemove", (de) => {
      console.log(de.x, de.y);
      gsap.to(el.childNodes[3].childNodes[1], {
        x: de.x - el.getBoundingClientRect().x - 250,
        y: de.y - el.getBoundingClientRect().y - 400,
      });
    });
  });

};

childCard();


const review=()=>{

  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main_4",
      scroller:"#main",
      start: "20% 90%",
      end: "70% 90%",
      // markers:true,
      scrub: 4,
      // pin: true,
    },
  });


  tl4.to(".top4_upper",{
    width:"100%",
  },"rr")
  tl4.to(".top4_right > i",{
    rotate:90,
  },"rr")

    tl4.to(".upper_layer",{
     left:"0px",
     
    },'aa')
    tl4.to(".top_layer",{
      width:"50%"  ,
      delay:.5,
      },'aa')
      tl4.to(".base_para",{
      color:"black",
      delay:.5,
      },'aa')
    tl4.to(".base_child > i",{
      color:"black",
      delay:.5,
      },'aa')

      tl4.to(".child_top",{
        width:"100%"  ,
        delay:.5,
        },'aa')
  


        let upper=document.querySelectorAll(".upper_layer");
    
        upper.forEach((elll)=>{
          elll.addEventListener("mouseenter",()=>{
            console.log(elll.childNodes[1])
            gsap.to(elll.childNodes[1],{
              scale:1,
              opacity:1,
            })
          })
          elll.addEventListener("mouseleave",()=>{
            console.log(elll.childNodes[1])
            gsap.to(elll.childNodes[1],{
              scale:0,
              opacity:0,
            })
          })

elll.addEventListener("mousemove",(dee)=>{

gsap.to(elll.childNodes[1],{
  x: dee.x - elll.getBoundingClientRect().x-50 ,
  y: dee.y - elll.getBoundingClientRect().y -50,
})

})

        })





}

review();


const barMove=()=>{

  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main5",
      scroller:"#main",
      start: "20% 22%",
      end: "70% 22%",
      // markers:true,
      scrub: 4,
      pin: true,
    },
  });
  tl5.to(".odd",{
    transform:"translateX(-40%) rotate(5deg)",
    delay:2,
    duration:5,
  },"asd")
  
  tl5.to(".even",{
    transform:"translateX(-40%) rotate(5deg)",
    delay:2,
    duration:5,
  },"asd")
}
barMove();

