gsap.to(".loc-img img", {
  ease : Expo.easeInOut,
  width : "100%",
  duration : 5,
  stagger : 5,
})

gsap.to(".loc-name h1", {
  ease : Expo.easeInOut,
  stagger : 5,
  top: 0
})

gsap.to(".loc-name h1", {
  delay : 5,
  ease : Expo.easeInOut,
  stagger : 5,
  top: "100%"
})

gsap.to(".loc-info p", {
  ease : Expo.easeInOut,
  stagger : 5,
  top: 0
})

gsap.to(".loc-info p", {
  delay : 5,
  ease : Expo.easeInOut,
  stagger : 5,
  top: "-100%"
})