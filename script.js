// Select all images inside elements with class .loc-img
const images = document.querySelectorAll(".loc-img img");

// Select all h1 tags inside elements with class .loc-name
const names = document.querySelectorAll(".loc-name h1");

// Select all p tags inside elements with class .loc-info
const infos = document.querySelectorAll(".loc-info p");

// Iterate over all images (and associated name/info elements)
images.forEach((img, i) => {
  // Get the corresponding name and info elements by index
  const name = names[i];
  const info = infos[i];

  // Animate IN: Image expands, name and info appear
  gsap.to(img, {
    width: "100%",           // Expand image to full width
    opacity: 1,              // Make image visible
    ease: "expo.inOut",      // Smooth easing
    duration: 1.5,           // Animation duration
    delay: i * 6             // Delay increases per item
  });

  gsap.to(name, {
    top: 0,                  // Slide name to original position
    opacity: 1,              // Fade in name
    ease: "expo.inOut",
    duration: 1,
    delay: i * 6
  });

  gsap.to(info, {
    top: 0,                  // Slide info to original position
    opacity: 1,              // Fade in info
    ease: "expo.inOut",
    duration: 1,
    delay: i * 6
  });

  // Animate OUT: Only if not the last element
  if (i !== images.length - 1) {
    gsap.to(name, {
      top: "100%",           // Move name down out of view
      opacity: 0,            // Fade out name
      ease: "expo.inOut",
      duration: 1,
      delay: i * 6 + 4       // Animate out after 4 seconds
    });

    gsap.to(info, {
      top: "-100%",          // Move info up out of view
      opacity: 0,            // Fade out info
      ease: "expo.inOut",
      duration: 1,
      delay: i * 6 + 4
    });

    gsap.to(img, {
      width: 0,              // Shrink image to zero width
      opacity: 0,            // Fade out image
      ease: "expo.inOut",
      duration: 1.5,
      delay: i * 6 + 4
    });
  }
});

// Old animation attempt (commented out) —
// It made all elements animate in and out with stagger,
// but didn't make the last h1 and p persist on screen

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
