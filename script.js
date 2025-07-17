const images = document.querySelectorAll(".loc-img img");
const names = document.querySelectorAll(".loc-name h1");
const infos = document.querySelectorAll(".loc-info p");

images.forEach((img, i) => {
  const name = names[i];
  const info = infos[i];

  // Animate IN
  gsap.to(img, {
    width: "100%",
    opacity: 1,
    ease: "expo.inOut",
    duration: 1.5,
    delay: i * 6
  });

  gsap.to(name, {
    top: 0,
    opacity: 1,
    ease: "expo.inOut",
    duration: 1,
    delay: i * 6
  });

  gsap.to(info, {
    top: 0,
    opacity: 1,
    ease: "expo.inOut",
    duration: 1,
    delay: i * 6
  });

  // Animate OUT — only if NOT last
  if (i !== images.length - 1) {
    gsap.to(name, {
      top: "100%",
      opacity: 0,
      ease: "expo.inOut",
      duration: 1,
      delay: i * 6 + 4
    });

    gsap.to(info, {
      top: "-100%",
      opacity: 0,
      ease: "expo.inOut",
      duration: 1,
      delay: i * 6 + 4
    });

    gsap.to(img, {
      width: 0,
      opacity: 0,
      ease: "expo.inOut",
      duration: 1.5,
      delay: i * 6 + 4
    });
  }
});

// Old js that does not make last h1 and p stay

// gsap.to(".loc-img img", {
//   ease : Expo.easeInOut,
//   width : "100%",
//   duration : 5,
//   stagger : 5,
//   opacity: 1
// })

// gsap.to(".loc-name h1", {
//   ease : Expo.easeInOut,
//   stagger : 5,
//   top: 0,
//   opacity: 1

// })

// gsap.to(".loc-name h1", {
//   delay : 5,
//   ease : Expo.easeInOut,
//   stagger : 5,
//   top: "100%",
// })

// gsap.to(".loc-info p", {
//   ease : Expo.easeInOut,
//   stagger : 5,
//   top: 0,
//   opacity: 1

// })

// gsap.to(".loc-info p", {
//   delay : 5,
//   ease : Expo.easeInOut,
//   stagger : 5,
//   top: "-100%"
// })