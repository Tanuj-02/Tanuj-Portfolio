// Skills Section Logo's
import htmlLogo from './tech_logo/html.png';
import cssLogo from './tech_logo/css.png';
import swiperlogo from './tech_logo/swiperlogo.svg';
import javascriptLogo from './tech_logo/javascript.png';
import reactjsLogo from './tech_logo/reactjs.png';
import tailwindcssLogo from './tech_logo/tailwindcss.png';
import cLogo from './tech_logo/c.png';
import cppLogo from './tech_logo/cpp.png';
import javaLogo from './tech_logo/java.png';
import pythonLogo from './tech_logo/python.png';
import gitLogo from './tech_logo/git.png';
import githubLogo from './tech_logo/github.png';
import vscodeLogo from './tech_logo/vscode.png';
import netlifyLogo from './tech_logo/netlify.png';
import vercelLogo from './tech_logo/vercel.png';
import springbootLogo from './tech_logo/springboot.png';
import postmanLogo from './tech_logo/postman.png';
import springsecurityLogo from './tech_logo/springsecurity.jpg';
import websockets from './tech_logo/websockets.png';
import hibernate from './tech_logo/hibernate.jpg';
import mysql from './tech_logo/mysql.png';
import jwt from './tech_logo/jwt.png';
import aws from './tech_logo/aws.svg';

// Education Section Logo's
import JecrcU from './education_logo/JECRC_University__.png';
import StAnselm from './education_logo/st_anselm.png';

// Project Section Logo's
import skillswap from './work_logo/skillswap.png';
import ecommerce from './work_logo/ecommerce.png'
import moviezone from './work_logo/moviezone.png';
import mealdb from './work_logo/mealdb.png';
import pixabay from './work_logo/pixabay.png'

// Certification Section Logo's
import awsCloudQuest from './certifications_logo/cloudquest.png';
import googleCloudLogo from './certifications_logo/gccf.png';
import nptelLogo from './certifications_logo/nptel.png';
import cloudquestImage from './certifications_logo/cloudquestImage.png';
import softskillImage from './certifications_logo/softskillImage.png';
import leadershipImage from './certifications_logo/leadership.png';
import essentials from './certifications_logo/essentials.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Swiper', logo: swiperlogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'JSON Web Tokens', logo: jwt },
      { name: 'Spring Security', logo: springsecurityLogo },
      { name: 'Hibernate', logo: hibernate },
      { name: 'Web Sockets', logo: websockets },
      { name: 'MySQL', logo: mysql },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo }
    ],
  },
];

  // export const experiences = [
  //   {
  //     id: 0,
  //     img: webverseLogo,
  //     role: "Fullstack Developer",
  //     company: "Webverse Digital",
  //     date: "April 2024 - Present",
  //     desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
  //     skills: [
  //       "HTML",
  //       "CSS",
  //       "JavaScript",
  //       "React JS",
  //       "TypeScript",
  //       "Node JS",
  //       "Tailwind CSS",
  //       "MongoDb",
  //       "Redux",
  //       " Next Js",
  //     ],
  //   },
  //   {
  //     id: 1,
  //     img: agcLogo,
  //     role: "Fullstack Engineer",
  //     company: "Agumentik Group of Companies",
  //     date: "July 2023 - March 2024",
  //     desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
  //     skills: [
  //       "ReactJS",
  //       "Redux",
  //       "JavaScript",
  //       "Tailwind CSS",
  //       "HTML",
  //       "CSS",
  //       "SQL",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     img: newtonschoolLogo,
  //     role: "Frontend Intern",
  //     company: "Newton School",
  //     date: "September 2021 - August 2022",
  //     desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //     skills: [
  //       "HTML",
  //       "CSS",
  //       "Javascript",
  //       "Bootstrap",
  //       "Figma",
  //       "Material UI",
  //     ],
  //   },
  // ];
  
  export const education = [
    {
      id: 1,
      img: JecrcU,
      school: "Jecrc University",
      date: "July 23 - July 27",
      grade: "8 CGPA",
      desc: "Pursuing undergraduate studies in Computer Science and Engineering under Jecrc University.",
      degree: "Bachelor of Technology - B.Tech",
    },
    {
      id: 2,
      img: StAnselm,
      school: "St. Anselm North City School, Jaipur",
      date: "Mar 2022 - Mar 2023",
      grade: "81%",
      desc: "I completed my class 12 education under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: StAnselm,
      school: "St. Anselm North City School, Jaipur",
      date: "Apr 2020 - March 2021",
      grade: "91%",
      desc: "Completed my Class 10 education under the CBSE board, where I studied Science with Computer (Information Practices).",
      degree: "CBSE(X) with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Skill Swap",
      description:
        "Built a full-stack peer-to-peer skill exchange platform with real-time chat using WebSockets, JWT au-thentication, Redux Toolkit for state management, and Amazon RDS for database management. Developed the frontend with React.js and Tailwind CSS, and the backend with Spring Boot and REST APIs.",
      image: skillswap,
      tags: ["SpringBoot", "React JS", "WebSockets","Amazon RDS", "Redux Toolkit", "Tailwind CSS"],
      github: "https://github.com/Tanuj-02/peerskillexchange",
      webapp: "https://skill-swap-ptp.vercel.app/",
    },
    {
      id: 1,
      title: "Amazon Ecommerce",
      description:
        "Built a responsive eCommerce site with product listings, cart system, and global state management using React JS, Router DOM, and Context API.",
      image: ecommerce,
      tags: ["JavaScript", "React JS", "React-Router-DOM","Context API"],
      github: "https://github.com/Tanuj-02/ecommerce-react",
      webapp: "https://ecommerce-react-gilt-tau.vercel.app/",
    },
    {
      id: 1,
      title: "Movie Zone",
      description:
        "Built a movie discovery app with React JS and Tailwind CSS, featuring trending movies, responsive design, and smooth navigation for better user engagement.",
      image: moviezone ,
      tags: ["React JS","HTML", "Tailwind CSS", "JavaScript"],
      webapp: "https://movie-zone-liart-eta.vercel.app/",
      github: "https://github.com/tanuj0202/MovieZone",
    },
    {
      id: 2,
      title: "Meal DB",
      description:
        "Created a recipe search app using TheMealDB API with React JS and Tailwind CSS, enabling users to explore meals and view detailed recipes in a clean interface.",
      image:mealdb,
      tags: ["React JS", "API", "HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/tanuj0202/MealDB",
      webapp: "https://meal-db-tawny.vercel.app/",
    },
    {
      id: 3,
      title: "PixaBay",
      description:
        "Designed an image search platform powered by the Pixabay API with React JS and Tailwind CSS, offering fast search functionality and responsive UI.",
      image: pixabay,
      tags: ["React JS", "Javascript" , "Html", "Tailwind CSS" ,"API"],
      github: "https://github.com/Tanuj-02/PixabayClone",
      webapp: "https://pixabay-clone-three-indol.vercel.app/",
    },
  ];  

export  const navdata = [
      { id: "about", name: "About" },
      { id: "skills", name: "Skills" },
      { id: "projects", name: "Projects" },
      { id: "certificate", name: "Certificate" },
      { id: "education", name: "Education" },
      { id: "contact", name: "Contact" },
    ];

export const Certifications = [
  {
    id: 1,
    title: "AWS Cloud Quest: Cloud Practitioner",
    description:
      "Completed hands-on cloud learning through AWS Cloud Quest, covering core AWS services, cloud concepts, security, networking, and deployment fundamentals.",
    logo: awsCloudQuest,
    image : cloudquestImage,
    verifyCredential: "https://www.credly.com/badges/8c229171-d4cd-4b7e-8fa6-53ea2f69f3b5/public_url",
  },
  {
    id: 2,
    title: "Google Cloud Computing Foundations",
    description:
      "Completed foundational training in Google Cloud Platform, including cloud infrastructure, compute, storage, networking, and core cloud services.",
    logo: googleCloudLogo,
    image: googleCloudLogo,
    verifyCredential: "https://www.credly.com/badges/99c54514-896c-4cde-9c1c-a2bb2af5f98a/public_url",
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner Essentials",
    description:
      "Completed the AWS Cloud Practitioner Essentials course, gaining foundational knowledge of AWS Cloud concepts, core services, security, networking, pricing, billing, and the AWS Well-Architected Framework. Developed an understanding of cloud computing fundamentals and best practices for deploying and managing applications on AWS.",
    logo: aws,
    image: essentials,
    verifyCredential: "https://drive.google.com/file/d/1WKxBVc8iScfvxwSlloZcpvwDZxwimF4a/view?usp=drivesdk",
  },
  {
    id: 4,
    title: "NPTEL – Soft Skills",
    description:
      "Successfully completed the NPTEL Soft Skills course, focusing on effective communication, teamwork, interpersonal skills, and professional development.",
    logo: nptelLogo,
    image: softskillImage,
    verifyCredential: "https://drive.google.com/file/d/12BsWzzUjmWZcBCf7_noOOS-Xlf_z397q/view",
  },
  {
    id: 5,
    title: "NPTEL – Leadership and Team Effectiveness",
    description:
      "Completed the NPTEL course on Leadership and Team Effectiveness, covering leadership principles, team collaboration, motivation, and organizational behavior.",
    logo: nptelLogo,
    image: leadershipImage,
    verifyCredential: "https://drive.google.com/file/d/1D3tYu7uv2P0dbyDKeFJmkwibj8mugPKu/view",
  },
];