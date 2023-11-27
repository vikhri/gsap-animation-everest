import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Observer} from "gsap/Observer";
// import {ScrollSmoother} from "gsap/ScrollSmoother";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);
// gsap.registerPlugin(ScrollSmoother);


gsap.to(".mount-layer", {
  scrollTrigger: {
    trigger: ".hero",
    start: "52% center",
    end: "center top",
    scrub: true,
  },
  y: -200,
});

gsap.to(".bg-layer", {
  scrollTrigger: {
    trigger: ".hero",
    start: "center center",
    end: "center top",
    scrub: true,
  },
  x: -150,
  y: -100,
});


gsap.from(".mounts-intro", {
  scrollTrigger: {
    trigger: ".mounts",
    start: "5% 90%",
    end: "15% 90%",
    scrub: true,
  },
  y: 100,
  opacity: 0,
});



let sections = gsap.utils.toArray(".slide");

let scrollTween = gsap.to(sections, {
  xPercent: -112 * (sections.length - 1),
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: "#slides",
    pin: false,
    scrub: 0.1,
    //snap: directionalSnap(1 / (sections.length - 1)),
    start: "top center",
    end: "center center",
    markers: true,
  }
});
