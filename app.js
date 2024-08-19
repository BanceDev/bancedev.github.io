// Wait for alpine to be instantiated before processing
document.addEventListener("alpine:init", () => {
  Alpine.data("portfolio", () => ({
    title: "Lance Borden",
    projects: [
      {
        id: 1,
        img: "./assets/quakeprism.png",
        imgAlt: "quake prism",
        title: "Quake Prism",
        link: "https://github.com/BanceDev/QuakePrism",
        body: "Quake Prism is an open source game engine editor for iD Software's Quake engine. Solo devloped using OpenGL and C++; this tool is an all in one suite for developers to make mods and games. Featuring texture and model tools along with the first ever real time linter for the QuakeC programming language.",
      },
      {
        id: 2,
        img: "./assets/xed.png",
        imgAlt: "linux mint xed",
        title: "Linux Mint Xed",
        link: "https://github.com/linuxmint/xed",
        body: "Xed is an open source text editor written in C and part of the Linux Mint xapps software suite. Contributed to the development of this software mostly through the fixing of bugs and memory/performance issues as a way to improve at C.",
      },
      {
        id: 3,
        img: "./assets/lunabotics.jpg",
        imgAlt: "lunabotics",
        title: "Lunabotics",
        link: "https://org.osu.edu/firstrobotics/lunabotics/",
        body: "Developed the driver station and networked controls for the rookie year OSU Lunabotics robot. We received the Nova Award for Stellar Systems Engineering Performance by a First Year Team.",
      },
      {
        id: 4,
        img: "./assets/landelver.png",
        imgAlt: "landelver",
        title: "LANdelver",
        link: "https://github.com/LANdelver/landelver",
        body: "LANdelver is a virtual tabletop for the in person Dungeons & Dragons expereince. Designed to enhance the possibilities of using a screen table with a fully custom Lua to C API for scripting enemy AI along with an intuitive web interface for players to connect from."
      },
      // will add back in after completion of project
      /*{
        id: 5,
        img: "./assets/alua.png",
        imgAlt: "alua",
        title: "aLua",
        link: "https://alua.bance.dev",
        body: "aLua is a Lua inspired programming language desined to be compiled for arduino. This means that even lower spec arduino boards can take advantage of the minimalist syntax and easy to understand programming."
      }*/
    ],
    work: [
      {
        id: 1,
        img: "./assets/enable.jpg",
        imgAlt: "enable injections",
        title: "Enable Injections",
        body: "Aided in product development of vial transfer system through design, implementation, and data analysis of product validation tests. Developed manufacturing and mechanical design skills.",
      },
      {
        id: 2,
        img: "./assets/osueed.jpg",
        imgAlt: "osu engineering education department",
        title: "OSU Engineering Education Department",
        body: "Supported first year students in machining robots for engineering courses. Assisted departure from an old proprietary microcontroller to a new arduino based system by porting firmware libraries.",
      },
      {
        id: 3,
        img: "./assets/letsstartcoding.png",
        imgAlt: "lets start coding",
        title: "Let's Start Coding",
        body: "Developed Arduino code used as projects for new and repurposed STEM kits. Created instructional content to teach various coding concepts related to the projects. Helped develop a new chapter of challenging content to expand current content base.",
      }
    ],
    logos: [
      {
        id: 1,
        src: "./assets/logos/osu.svg",
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
