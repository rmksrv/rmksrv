export const mainSettings = {
  title: "Roman Kosarev Page",
  description:
    "Hi friend! My name is Roman and I'm software developer.",
  favicon: "/images/figs-32.png",
  colorScheme: "bg-blue-500",
  textColorScheme: "text-blue-500",
  colorAccent: "bg-blue-700",
  touchIcon: "/images/figs-180.png",
  footer: {
    showFooter:true,
    footerText: "Copyrights by &copy; Figs",
  },
  // google analytics
  // analytics: "UA-92266803-7",
  analytics: null,
  // using Disqus for comments, get a shortcode @ https://disqus.com
  disqusShortname: "rmksrv",
  // contact form at /contact uses formspree, create your own @ https://formspree.io/
  formspreeAction: "https://formspree.io/f/xpznnqbn",
  // set it to false if you do not use math formulas in your articles
  math: true,
  numberOfWorksToShow: 0,
  numberOfBlogPostsToShow: 0,
  showBuyButton: true,
};

export const sidebar = {
  name: "Roman Kosarev",
  designations: ["Software Developer",],
  image: "/images/profile.jpg", //this image can be found inside /static/images directory
  social: [
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/roman-kosarev/",
      //these are fontawesome image codes https://fontawesome.com/v5/icons/linkedin?s=brands
      icon: "fab fa-linkedin", 
    },
    {
      title: "Github",
      link: "https://github.com/rmksrv",
      icon: "fab fa-github-square",
    },
    {
      title: "Telegram",
      link: "https://t.me/itsuken",
      icon: "fab fa-telegram",
    },
  ],
  sidebarLinks: [
    {
      title: "Download CV",
      link: "/docs/cv.pdf",
      downloadable: true,
    },
    {
      title: "Contact me",
      link: "/contact/",
    },
  ],
};

export const about = {
  description:
    "Hi friend! My name is Roman and I'm software developer.",
  details: {
    age: 25,
    residence: "Russian Federation",
    availability: "9:00 - 17:00 MSK",
    address: "Nizhny Novgorod",
  },
};

export const clients = [
  {
    name: "Intel",
    image: "https://www.intel.com/content/dam/logos/intel-footer-logo.svg",
    link: "https://www.intel.com",
  },
  {
    name: "OZON",
    image: "https://upload.wikimedia.org/wikipedia/ru/e/ec/OZON_2019.svg",
    link: "https://ozon.ru",
  },
  {
    name: "Auriga",
    image: "https://auriga.com/wp-content/themes/auriga/assets/img/logo_auriga.svg?x59329&v=2",
    link: "https://auriga.com/",
  },
];

export const hobbies = [
  {
    hobby: "Pet-projects",
    color: "bg-red-500",
  },
  {
    hobby: "Snowboarding",
    color: "bg-green-500",
  },
  {
    hobby: "Board Games",
    color: "bg-blue-500",
  },
  {
    hobby: "Automating Tasks",
    color: "bg-indigo-500",
  },
];

export const services = [
  // {
  //   title: "Python",
  //   description: "I teach python on Udemy.",
  //   icon: "fab fa-python",
  // },
];

export const skills = [
  {
    name: "Java",
    skillLevel: 70,
    color: "text-red-400",
  },
  {
    name: "Spring",
    skillLevel: 60,
    color: "text-green-400",
  },
  {
    name: "JavaScript",
    skillLevel: 40,
    color: "text-yellow-400",
  },
  {
    name: "Python",
    skillLevel: 85,
    color: "text-indigo-400",
  },
  {
    name: "Flask",
    skillLevel: 70,
    color: "text-blue-400",
  },
  {
    name: "Svelte",
    skillLevel: 50,
    color: "text-purple-400",
  },
];

export const testimonials = [
  // {
  //   name: "Savion Lowery",
  //   social: "@savion.lowery",
  //   image: "https://randomuser.me/api/portraits/men/44.jpg",
  //   review:
  //     "The good thing about science is that it's true whether or not you believe in it.",
  // },
];
