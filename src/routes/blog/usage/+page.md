---
title: Usage
description: Refer to this post for customising your SvelteKit site.
image: https://picsum.photos/id/60/500/300
layout: blog
---

All the changes are done on one file - `src/lib/settings.js`

### Change name, designation etc.

```js
export const sidebar = {
  name: "John Owens",
  // this will show up as typed one after the other
  designations: ["Teacher", "Freelancer", "Blogger", "Programmer"],
  //this image can be found inside /static/images directory
  // add your own image and update the file name here
  image: "/images/profile.jpg",

  social: [
    {
      title: "LinkedIn",
      link: "#",
      //these are fontawesome image codes https://fontawesome.com/v5/icons/linkedin?s=brands
      icon: "fab fa-linkedin",
    },
    {
      title: "Facebook",
      link: "#",
      icon: "fab fa-facebook-square",
    },
    {
      title: "Twitter",
      link: "#",
      icon: "fab fa-twitter-square",
    },
    {
      title: "Github",
      link: "#",
      icon: "fab fa-github-square",
    },
    {
      title: "StackOverflow",
      link: "#",
      icon: "fab fa-stack-overflow",
    },
    // comment out any platform you do not want to show
    // {
    //   title: "Platform",
    //   link: "#",
    //   icon: "fab fa-platform",
    // },
  ],

  sidebarLinks: [
    {
      title: "Download CV",
      link: "/docs/resume.pdf",
      downloadable: true,
    },
    {
      title: "Contact me",
      link: "/contact/",
    },
  ],
};
```

### Change about section

```js
export const about = {
  description:
    "Hello! I’m John Owens. I'm a programmer living in California. I code in Python.",
  details: {
    age: 28,
    residence: "USA",
    availability: "9AM - 5PM PST",
    address: "California, USA",
  },
};
```

### Change clients

```js
export const clients = [
  {
    name: "AutoSpeed",
    image: "/images/customers/auto-speed.svg",
    link: "#",
  },
  {
    name: "BeautyBox",
    image: "/images/customers/beauty-box.svg",
    link: "#",
  },
  {
    name: "The Dance Studio",
    image: "/images/customers/the-dance-studio.svg",
    link: "#",
  },
  {
    name: "FastBanana",
    image: "/images/customers/fast-banana.svg",
    link: "#",
  },
];
```

### Change hobbies

```js
export const hobbies = [
  {
    hobby: "Reading Novels",
    color: "bg-green-500",
  },
  {
    hobby: "Playing Chess",
    color: "bg-blue-500",
  },
  {
    hobby: "Automating Tasks",
    color: "bg-indigo-500",
  },
  {
    hobby: "Coding Personal Projects",
    color: "bg-gray-500",
  },
  {
    hobby: "Yoga",
    color: "bg-purple-500",
  },
  {
    hobby: "Riding Bike",
    color: "bg-red-500",
  },
];
```

You can change all sections using this one settings file. 
