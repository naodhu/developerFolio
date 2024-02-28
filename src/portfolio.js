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
  resumeLink:
    "https://drive.google.com/file/d/1D41U5BltPcusW8G_rhDeXH-H5Qp97dcD/view?usp=drive_link", // Assuming you'll add your resume link here
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
    ),
    emoji(
      "⚡ Enhance application security, ensure responsive design, and enable real-time communication with Websockets."
    ),
    emoji(
      "⚡ Produce comprehensive technical documentation and manage version control with Git."
    )
  ],
  softwareSkills: [
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js-square"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "PHP", fontAwesomeClassname: "fab fa-php"},
    {skillName: "C++", fontAwesomeClassname: "fas fa-code"},
    {skillName: "React.js", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Next.js", fontAwesomeClassname: "fas fa-forward"},
    {skillName: "Vue.js", fontAwesomeClassname: "fab fa-vuejs"},
    {skillName: "Redux", fontAwesomeClassname: "fas fa-undo-alt"},
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "Tailwind CSS", fontAwesomeClassname: "fas fa-wind"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "Express.js", fontAwesomeClassname: "fas fa-rocket"},
    {skillName: "MySQL & MONGODB", fontAwesomeClassname: "fas fa-database"},
    {skillName: "RESTful APIs", fontAwesomeClassname: "fas fa-cogs"},
    {skillName: "GraphQL", fontAwesomeClassname: "fas fa-project-diagram"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "CI/CD", fontAwesomeClassname: "fas fa-stream"},
    {skillName: "Serverless", fontAwesomeClassname: "fas fa-cloud"},
    {skillName: "Microservices", fontAwesomeClassname: "fas fa-network-wired"},
    {skillName: "Nginx", fontAwesomeClassname: "fas fa-server"},
    {skillName: "Web Security", fontAwesomeClassname: "fas fa-shield-alt"},
    {skillName: "Responsive Design", fontAwesomeClassname: "fas fa-mobile-alt"},
    {skillName: "Websockets", fontAwesomeClassname: "fas fa-plug"},
    {skillName: "Version Control", fontAwesomeClassname: "fas fa-code-branch"},
    {
      skillName: "Technical Documentation",
      fontAwesomeClassname: "fas fa-file-alt"
    },
    {skillName: "Operating Systems", fontAwesomeClassname: "fab fa-linux"} // Using Linux as a placeholder for general OS knowledge
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
      desc: "Developed and maintained mobile applications for both Android and iOS platforms using React Native. Worked closely with the development team to design, develop, and test new features, ensuring high performance and responsiveness across devices. Contributed to the optimization of application performance, security, and user experience, resulting in a 20% increase in user engagement and retention."
    },
    {
      role: "Software Engineer Intern",
      company: "AML Cloud",
      companylogo: require("./assets/images/AML Cloud.jpeg"),
      date: "May 2023 – Jun 2023",
      desc: "Spearheaded the development of responsive UI components in Flutter, architected a scalable Firestore database with real-time updates, integrated Firebase Authentication for secure logins, optimized state management with Flutter Riverpod, streamlined data retrieval with custom Firestore queries, and extended app functionality with Flutter plugins."
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
      image: require("./assets/images/DreamScape Realty.png"), // Placeholder image, replace with actual path
      projectName: "Real Estate Management System",
      projectDesc:
        "Led the development of a Real Estate Management System, a full-stack application designed to streamline property management and sales. The system features a user-friendly interface, property search, listing management, and user accounts. Leveraging React, Node.js, Express.js, and MongoDB, the system provides a comprehensive solution for real estate agents and property owners, enabling efficient property management and sales.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://statehousing.onrender.com/"
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
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      subtitle:
        "Completed an extensive React.js course covering from basics to advanced concepts, including Hooks, Redux, React Router, and Next.js. Engaged in hands-on learning with over 68.5 hours of video content, coding exercises, and multiple demo projects to build a solid foundation and advanced knowledge in React development.",
      image: require("./assets/images/ReactCourse.png"), // Placeholder image, replace with actual path
      imageAlt: "React Course Completion",
      footerLink: [
        {
          name: "Course",
          url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
        }
      ]
    },

    {
      title: "The Coding Boot Camp at the University of Sydney",
      subtitle:
        "Successfully completed a comprehensive 240-hour course in collaboration with the University of Sydney and edX, covering full-stack development.",
      image: require("./assets/images/UOS.png"), // Placeholder image, replace with actual path
      imageAlt: "University of Sydney Logo",
      footerLink: [
        // You can include a link to the course or a related showcase if available
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1QhwKer6Jz0PHiLxBq2jPsA-HaWPkrW0l/view?usp=drive_link"
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
