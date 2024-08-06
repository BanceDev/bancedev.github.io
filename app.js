// Wait for alpine to be instantiated before processing
document.addEventListener("alpine:init", () => {
  Alpine.data("portfolio", () => ({
    title: "Lance Borden",
    projects: [
      {
        id: 1,
        img: "./assets/spense.png",
        imgAlt: "quake prism",
        title: "Quake Prism",
        body: "Quake Prism is an open source game engine editor for the Quake engine made by iD Software. This tool is an all in one suite for developers to make mods and games.",
      },
      {
        id: 2,
        img: "./assets/yelp-camp.png",
        imgAlt: "linux mint xed",
        title: "Linux Mint Xed",
        body: "Xed is an open source text editor written in C and part of the Linux Mint xapps software suite. I have contributed to the development of this software mostly through the fixing of bugs and memory/performance issues as a way to improve at C.",
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
