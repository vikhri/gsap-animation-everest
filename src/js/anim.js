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
  y: -150,
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
    end: "30% 90%",
    scrub: 1,
    // markers: true
  },
  y: 100,
  opacity: 0,
});


let sections = gsap.utils.toArray(".slide");

let scrollTween = gsap.to(sections, {
  xPercent: -108 * (sections.length - 1),
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: "#slides",
    pin: false,
    scrub: 0.1,
    // snap: directionalSnap(1 / (sections.length - 1)),
    start: "40% center",
    end: "bottom center",
  }
});

gsap.to(".mounts__wrapper", {
  scrollTrigger: {
    trigger: ".mounts",
    start: "90% 60%",
    end: "bottom 60%",
    scrub: 1,
  },
  y: -100,
  opacity: 0,
});

gsap.from(".guides", {
  scrollTrigger: {
    trigger: ".mounts",
    start: "90% 60%",
    end: "bottom 60%",
    scrub: 1,
  },
  y: 300,
  opacity: 0,
});


gsap.from(".guides__list-item", {
  scrollTrigger: {
    trigger: ".guides__list",
    start: "top center",
    end: "bottom center",
    scrub: 1,
    // markers: true
  },
  y: 100,
  opacity: 0,
  stagger: 0.5,
});

gsap.to(".guides__wrapper", {
  scrollTrigger: {
    trigger: ".guides",
    start: "90% 60%",
    end: "bottom 60%",
    scrub: 1,
  },
  y: -100,
  opacity: 0,
});

gsap.from(".pricing__wrapper", {
  scrollTrigger: {
    trigger: ".guides",
    start: "90% 60%",
    end: "bottom 60%",
    scrub: 1,
  },
  y: 300,
  opacity: 0,
});


gsap.from(".pricing__card", {
  scrollTrigger: {
    trigger: ".pricing",
    start: "20% center",
    end: "70% center",
    scrub: 1,
  },
  opacity: 0,
  scale: 0.7,
  stagger: 0.2,
  ease: "elastic"
},
);
