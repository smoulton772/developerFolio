
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sean Moulton",
  title: "Hi all, I'm Sean Moulton",
  subTitle: emoji("A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1MFog036jCTh1zcJLJxrvMk15HUgOBxUm/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/smoulton772",
  linkedin: "https://www.linkedin.com/in/sean-moulton-73a2733a/",
  gmail: "hello@seanmoulton.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    /*{
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },*/
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    /*{
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },*/
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Bootstrap",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "React",
      progressPercentage: "70%"
    },
    {
      Stack: "React-Native",
      progressPercentage: "60%"
    },
    {
      Stack: "Mongo.Db",
      progressPercentage: "90%"
    },
    {
      Stack: "React-Native",
      progressPercentage: "90%"
    },
    {
      Stack: "Express.js",
      progressPercentage: "90%"
    },
    {
      Stack: "Node.js",
      progressPercentage: "90%"
    },
    
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",  
      company: "Facebook",
      companylogo:  require("./assests/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Front-End Developer",   
      company: "Quora",
      companylogo: "https://www.referralcandy.com/wp-content/uploads/2017/06/quora-featured-image-2-740x740.png",
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",  
      company: "Airbnb",
      companylogo: require("./assests/images/airbnbLogo.jpg"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username",
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
      link: "http://saayahealth.com/"
    },
    {
      image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image:
        "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "Full Stack Web & Mobile Developer",
      subtitle: "Completed Certifcation from NUCAMP Coding Bootcamp for Full Stack Web & Mobile Developer",
      image: "https://lh3.googleusercontent.com/qUSfXa_vqRWrlM24Y5MSVTShkv4vrNeLY1QuI6K-zCfOhhC5i7e9juJ-cmI0WO1NnKsZ9MDJ6yxG8W4AynvTSXf9Znr5KLqW25Oh5xv2LdAoL7x0CVL8jc6qrqaiBGGhc_E3vfq4-5-AyEtg4y3xIE8Anr0EPsGkM0LS7dSFE50tVvBvAWNNtzPjizhoYkYoxeajisOyuDo61HX5uZRQv6v2MldAYUUvvkskvNuKgdnA-qdcW30xDzjvs8PM73OebF9oBEFT-RiA_b36oKN6Sds8LUYLCoCaL8vaR6CcLmuB7YXfUyQPRNwpr59AF_v1957nJcrNEBeO8jp_C3W2--w-NzFwRt-dQqAX5qtwcO0LTyG-3I0oZHmdgr0nYrhUiugnlAKowTgIe26nkn2eMVkfriSPZTnpgZw2yF-MgfIFyNI6nC8adCQo-GhfJa4zGGjd36i4iT9joF_CtwkN4uNAT2DFXegVcOLt6e2AjB851krw_YMZH-V1Daz_J6JJ4FfOe80ePU1J-IDSobJao3Nf-JGfLTFTGbK9LMEQkjBKae4BDFE9bC0FcQ6TQBlUviEp6omfbYORXbDtmrIluEvQ5-7qxBnSjXREpENdRO9IAYgmLcZeL5fzgWXbRpOTy4xCgaYwlJ2Hd4ys3cEU351J8x26sU7uNSr_s6vuGKZTGZsoifw0GtfwAtU=s100-no?authuser=2",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1HatAATD_xq5SBNpT5dpt1M7IPtQLPRHx/view?usp=sharing" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" } //add link to finshed project here
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  
};

// Podcast Section

const podcastSection = {
  
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "hello@seanmoulton.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
