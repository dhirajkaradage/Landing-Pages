gsap.from(".navbar", {
  y: -100,
  duration: 1,
});

gsap.from(".main-heading", {
  y: -100,
  delay: 0.5,
  duration: 1,
  opacity: 0,
});

gsap.from(".img", {
  delay: 1,
  duration: 1,
  opacity: 0,
});

gsap.to("#img1", {
  delay: 1,
  duration: 1,
  rotation: -30,
});
gsap.to("#img2", {
  delay: 1,
  duration: 1,
  rotation: -20,
});
gsap.to("#img3", {
  delay: 1,
  duration: 1,
  rotation: -10,
});
gsap.to("#img4", {
  delay: 1,
  duration: 1,
  rotation: 0,
});


gsap.from(".footer", {
    y: -100,
    delay: 0.9,
    duration: 1,
    opacity: 0,
})