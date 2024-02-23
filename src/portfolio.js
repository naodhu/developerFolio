/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

// Summary and Greeting Section
const greeting = {
  username: "Naod Hunde",
  title: "Hi all, I'm Naod",
  subTitle: emoji(
    "A motivated Software Engineer 🚀 with experience in mobile and web application development using React Native, Flutter, JavaScript, and Firebase. I'm passionate about building user-centric interfaces and optimizing application performance and security."
  ),
  resumeLink: "https://drive.google.com/file/d/1D41U5BltPcusW8G_rhDeXH-H5Qp97dcD/view?usp=drive_link", // Assuming you'll add your resume link here
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/naodhu",
  linkedin: "https://www.linkedin.com/in/naod-hunde/",
  gmail: "naodhunde@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle:
    "FULL STACK SOFTWARE ENGINEER WHO LOVES TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop interactive front-end applications using React.js, Next.js, Vue.js, and manage application state with Redux."
    ),
    emoji(
      "⚡ Build responsive and dynamic web applications with modern back-end technologies like Node.js, Express.js, MongoDB, and MySQL."
    ),
    emoji(
      "⚡ Implement DevOps and cloud solutions with AWS, Docker, and leverage CI/CD pipelines for efficient deployment and management."
    )
  ],
  softwareSkills: [
    {skillName: "html-5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "reactjs", fontAwesomeClassname: "fab fa-react"},
    {skillName: "nodejs", fontAwesomeClassname: "fab fa-node"},
    {skillName: "aws", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "docker", fontAwesomeClassname: "fab fa-docker"}
    // Add other skills as needed
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Western Sydney University",
      logo: require("./assets/images/WSU.jpg"),
      subHeader: "Bachelor of Information and Communications Technology",
      duration: "2022 - present",
      desc: "Currently pursuing my Bachelor's degree in Information and Communications Technology. I have taken courses about Software Engineering, Web Development, and Database Management.",
      descBullets: [
        "Acquired a solid foundation in both theoretical and practical aspects of Information and Communications Technology, with a focus on developing critical skills in software engineering, data management, and network security. Engaged in collaborative projects and coursework that simulated real-world IT challenges, fostering a problem-solving mindset and technical proficiency in emerging technologies.",
        "Excelled in a project-based learning environment that emphasized the integration of technology solutions in business settings. Gained expertise in full stack development methodologies, mastering front-end and back-end technologies, and leveraging this knowledge to design and implement efficient, scalable web applications. This experience cultivated a deep understanding of the software development lifecycle and agile methodologies."
      ]
    },
    {
      schoolName: "University of Sydney",
      logo: require("./assets/images/UOS.png"),
      subHeader: "Certification in Full Stack Development",
      duration: "2022 - 2023",
      desc: "Intensive program covering modern web development technologies.",
      descBullets: [
        "Completed a comprehensive curriculum encompassing the latest in web development technologies, with a strong emphasis on hands-on learning through coding bootcamps and workshops. This program equipped me with advanced skills in full stack technologies, including React, Node.js, and MongoDB, enabling me to build and deploy robust, scalable web applications from scratch.",
        "Demonstrated exceptional ability to quickly grasp complex concepts in software development, resulting in the successful completion of multiple projects that required the integration of front-end and back-end technologies. This experience honed my skills in coding, debugging, and deploying applications, as well as collaborating effectively in team settings to meet project deadlines and objectives."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile Application Developer Intern",
      company: "Stomble",
      companylogo: require("./assets/images/Stomble.jpeg"),
      date: "Jun 2023 – Sep 2023",
      desc: "Led the development of responsive UI components in Flutter, implemented a scalable Firestore database, and integrated Firebase Authentication."
    },
    {
      role: "Software Engineer Intern",
      company: "AML Cloud",
      companylogo: require("./assets/images/AML Cloud.jpeg"),
      date: "May 2023 – Jun 2023",
      desc: "Led the development of responsive UI components in Flutter, implemented a scalable Firestore database, and integrated Firebase Authentication."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "IMPACTFUL TECHNOLOGY SOLUTIONS I'VE CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/EazyMart.png"), // Placeholder image, replace with actual path
      projectName: "EazyMart",
      projectDesc:
        "Contributed to EazyMart, a MERN stack application enhancing the electronic goods shopping experience. It allows users to search, compare, and purchase electronics with ease. Key features include search functionality, favorites list, product comparison, user accounts, and integration with external APIs for real-time data. Aimed at providing a seamless user experience, EazyMart stands out for its user-centric design and innovative approach to online shopping.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://productstore-zmxj.onrender.com/"
        }
      ]
    },
    {
      image: require("./assets/images/project2.png"), // Placeholder image, replace with actual path
      projectName: "Chat Support System",
      projectDesc:
        "Played a key role in developing a Chat Support system, enabling real-time communication between users and support staff. Utilizing EJS, CSS, JavaScript, and a suite of technologies like Node.js, MySQL, Sequelize, and socket.io, the system offers live chat support, ticket creation, and access to historical tickets. This MVP project focuses on enhancing customer support services, ensuring users receive timely assistance and resolutions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/naodhu/chat-support1"
        }
      ]
    },
    {
      image: require("./assets/images/Nike.png"), // Placeholder image, ensure to replace with actual path
      projectName: "Nike UI/UX Design",
      projectDesc:
        "Spearheaded the UI/UX design for a Nike digital experience, focusing on user engagement and brand interaction. Leveraged design principles to create intuitive and visually appealing interfaces, enhancing the online presence and customer journey.",
      footerLink: [
        {
          name: "View Design",
          url: "https://nike-clone1.netlify.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Contact Information
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+61-414-252-751", // Your phone number
  email_address: "naodhunde@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
