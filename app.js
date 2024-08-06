// Wait for alpine to be instantiated before processing
document.addEventListener("alpine:init", () => {
  Alpine.data("portfolio", () => ({
    title: "Lance Borden",
    projects: [
      {
        id: 1,
        img: "./assets/spense.png",
        imgAlt: "spense",
        title: "Spense.com",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint facilis vero ipsum, officia doloremque reiciendis quia provident Tenetur dolorem nisi aut iste minima non error cum quod! Totam, quisquam molestiae?",
      },
      {
        id: 2,
        img: "./assets/yelp-camp.png",
        imgAlt: "yelp-camp",
        title: "YelpCamp.com",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint facilis vero ipsum, officia doloremque reiciendis quia provident Tenetur dolorem nisi aut iste minima non error cum quod! Totam, quisquam molestiae?",
      },
    ],
    logos: [
      {
        id: 1,
        src: "./assets/logos/ohio_state.svg",
        alt: "ohio state",
      },
      {
        id: 2,
        src: "./assets/logos/enable.svg",
        alt: "enable injections",
      },
      {
        id: 3,
        src: "./assets/logos/first.svg",
        alt: "first robotics competition",
      },
      {
        id: 4,
        src: "./assets/logos/nasa.svg",
        alt: "nasa lunabotics",
      }
    ],
    showNav: false,
    init() {
      console.log("hello world");
    },
    handleNav() {
      this.showNav = !this.showNav;
    },
  }));
});
