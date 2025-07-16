const locations = [
  {
    name: "Varanasi",
    info: "Walk the ghats of the Ganges, witness the Ganga Aarti, and explore ancient traditions.",
    img: "https://images.unsplash.com/photo-1706186839147-0d708602587b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Jaipur",
    info: "Known as the Pink City. Discover royal palaces and bustling Rajasthani markets.",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Kerala Backwaters",
    info: "Houseboat rides, Ayurvedic therapies, and the calm of God's Own Country.",
    img: "https://plus.unsplash.com/premium_photo-1697729600773-5b039ef17f3b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Amritsar",
    info: "Home to the Golden Temple and the soul of Sikh devotion and service.",
    img: "https://plus.unsplash.com/premium_photo-1697730426305-113c62434f97?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Rishikesh & Haridwar",
    info: "Yoga capital of the world, with spiritual Aartis and serene Ganga views.",
    img: "https://plus.unsplash.com/premium_photo-1661963369594-9b25cd53be4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Hampi",
    info: "Ancient ruins of Vijayanagara Empire scattered across boulder-laden hills.",
    img: "https://images.unsplash.com/photo-1722934804353-0d9f6a55ab5e?q=80&w=2045&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Kolkata",
    info: "Cultural capital with colonial charm, art, and grand Durga Puja celebrations.",
    img: "https://images.unsplash.com/photo-1558431382-9b06d0507edc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Mysore",
    info: "Famous for palaces, yoga, and the grand Dussehra festival.",
    img: "https://images.unsplash.com/photo-1600112356915-089abb8fc71a?q=80&w=1594&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Khajuraho",
    info: "UNESCO temples with intricate carvings showing divine and earthly art.",
    img: "https://images.unsplash.com/photo-1708627664712-85087ba123bc?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Leh-Ladakh",
    info: "A Himalayan wonderland of monasteries, lakes, and Tibetan culture.",
    img: "https://plus.unsplash.com/premium_photo-1697730277839-440df1a4415f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Raigad Fort",
    info: "Shivaji Maharaj’s capital fort and symbol of Swarajya and Maratha pride.",
    img: "https://jugyah-dev-property-photos.s3.ap-south-1.amazonaws.com/Screenshot_2024_11_19_114049_81389867b5.webp"
  },
  {
    name: "Ajanta & Ellora",
    info: "Rock-cut marvels depicting Hindu, Buddhist, and Jain faiths through sculpture.",
    img: "https://plus.unsplash.com/premium_photo-1697729588019-20a1f5a325d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

let current = 0;

const nameEl = document.querySelector('.loc-name');
const infoEl = document.querySelector('.loc-info');
const imgEl = document.querySelector('.loc-img');

function showLocation(index) {
  nameEl.textContent = locations[index].name;
  infoEl.textContent = locations[index].info;
  imgEl.innerHTML = `<img src=\"${locations[index].img}\" alt=\"${locations[index].name}\" />`;

  // Animate In
  gsap.set([nameEl, infoEl, imgEl], { opacity: 0, y: 0, x: 0 });
  gsap.to(nameEl, { duration: 1, opacity: 1, y: -20 });
  gsap.to(infoEl, { duration: 1, opacity: 1, y: 20 });
  gsap.to(imgEl, { duration: 1, opacity: 1, x: 30 });

  // Animate Out after 5s
  setTimeout(() => {
    gsap.to(nameEl, { duration: 1, opacity: 0, y: -100 });
    gsap.to(infoEl, { duration: 1, opacity: 0, y: 100 });
    gsap.to(imgEl, { duration: 1, opacity: 0, x: 300 });
  }, 4500);
}

function cycleLocations() {
  showLocation(current);
  current = (current + 1) % locations.length;
}

cycleLocations();
setInterval(cycleLocations, 5500);
