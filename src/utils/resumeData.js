import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import CodeIcon from "@material-ui/icons/Code";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
// eslint-disable-next-line
import { YouTube } from "@material-ui/icons";

const data = {
  name: "Thirunaavukkarasu Murugesan",
  title: "Software Developer | Full Stack Developer",
  university: "Stevens Institute of Technology",
  place: "Jersey City, New Jersey",
  email: "tmuruges@stevens.edu",
  phone: "5517861733",
  social: [
    {
      link: "https://github.com/Thirunaa",
      text: "Github",
      icon: <GitHubIcon />,
    },
    {
      link: "https://www.linkedin.com/in/thirunaavukkarasu/",
      text: "LinkedIn",
      icon: <LinkedInIcon />,
    },
    {
      link: "https://leetcode.com/Thiru_Mv/",
      text: "Leetcode",
      icon: <CodeIcon />,
    },
    {
      link: "https://thirunaa.github.io/",
      text: "Website",
      icon: <LanguageIcon />,
    },
    {
      link: "https://twitter.com/Thirunaa04",
      text: "Twitter",
      icon: <TwitterIcon />,
    },
    {
      link: "https://www.youtube.com/@hashmap01",
      text: "Youtube",
      icon: <YouTube />,
    },
  ],

  aboutme:
    "Developer with a passion for solving challenging technical problems and building highly performant and scalable systems. Adaptable to new challenges and responsibilities. Passionate about technology, programming, and learning them. \n\n Thirunaavukkarasu is a highly motivated and ambitious graduate student who is currently pursuing his Master’s degree in Computer Science at Stevens Institute of Technology. He has a strong passion for problem-solving and has demonstrated exceptional skills in a range of technologies, including Node.js, Express.js, React, J2EE, and DB2. I have also gained practical experience as a Research Assistant and is currently working as a Teaching Assistant for courses in Applied Machine Learning and Web Mining. \n\n Additionally, I volunteer as a Data structure and algorithm interviewer at S30, where I mentor and train other students in programming skills, helping them build up their confidence technically. Also, I have developed a website to assist students in preparing for technical interviews, where I have taught approximately 90 important Leetcode problems with 75+ hours of video watch time.",

  experiences: [
    {
      title: "Teaching Assistant",
      date: "Aug 2022 - Present",
      description:
        "•	Worked as Graduate Teaching Assistant under Prof. Shucheng Yu for course Applied Machine Learning, holding office hours, clarifying students’ questions, and grading students’ mid-term exam and final project \n\n •	Working as Graduate Teaching Assistant under Prof. Jingyi Sun for course Web Mining, conducting office hours, clarifying students’ questions, and grading students’ mid-term and final project report and presentation",
    },
    {
      title: "Research Assistant",
      date: "May 2022 - Jul 2022",
      description:
        "•	Assisted Prof. Jingyi Sun in her research “US Fortune 500’s stakeholders engagement during the COVID-19 pandemic: Evidence for proactive approaches” scrapping and mining data from social media platforms \n\n •	Examined how U.S. Fortune 500 companies discussed their COVID-19 pandemic CSR actions on Facebook, Twitter, and other social media platforms over 15 months’ data and how the public responded to such messages",
    },
    {
      title: "Software Development Engineer",
      date: "Feb 2017 - Jul 2021",
      description:
        "•	Managed and worked in Tax applications with large DB2 tables (60-70 million records every month) to generate reports and send outbound files to different downstream areas, fetching data using IBM data studio by writing DB2 SQL queries \n\n •	Worked on transforming data intense application from Mainframe to AWS – changed large dataset and DB2 tables to change the job flow of the database operations, impacting up to 30+ teams at enterprise level \n\n •	Designed and implemented a dashboard utilizing Node.js and Express.js, with Postgres as the backend database. Integrated Chart.js and React.js for generating real-time graphs to monitor sensor data, resulting in a 72% reduction in manual workload and improved efficiency",
    },
  ],

  educations: [
    {
      title: "Masters in Computer Science",
      date: "Aug 2021 - May 2023",
      description:
        " Major: Computer Science\n\n Related Courses: CS546 - Web Development I, CS554 - Web Development II, EE695 - Applied Machine Learning, CS583 - Deep Learning, CS590 - Algorithms BIA678 - Big Data Technologies, BIA660 - Web Mining \n\n •	Worked as Graduate Teaching Assistant under Prof. Shucheng Yu for course Applied Machine Learning and currently Working as Graduate Teaching Assistant under Prof. Jingyi Sun for course Web Mining, conducting office hours, clarifying students’ questions, and grading students’ mid-term and final project report and presentation",
    },
    {
      title: "Bachelors in Computer Science and Engineering",
      date: "Aug 2012 - May 2016",
      description:
        " Major: Computer Science and Engineering\n\n •	Member of Computer Society of India. Active member of Confederation of Indian Industies and Young Indian [Trichy Chapter], took part in rallies to create awareness among the general public about Child Labour and its negative impact on society  \n\n •	Member of College football team, represented the college team in state tournament like TIES [Tamilnadu Inter Engineering colleges Sports] meet",
    },
    {
      title: "High School",
      date: "Jun 2010 - Mar 2012",
      description:
        " Major : Computer Science\n\n •	Demonstrated leadership and people management skills as the captain of the school football team, cultivating a culture of teamwork and motivation. \n\n •	Served as house captain of the school sports house team, showcasing discipline and leadership by leading the athletes during school sports day.",
    },
  ],

  recommendations: [
    {
      name: "Gopi",
      role: "Technology Education Team Lead at Accenture",
      date: "October 11 2020",
      imageUrl:
        "https://media.licdn.com/dms/image/C5603AQGObDglT_TCrg/profile-displayphoto-shrink_400_400/0/1589951074695?e=1687996800&v=beta&t=wuRQ16_hMOZJwBPPJITC1q-_B-ukSJ8oSXh2Nxmx1K4",
      detail:
        "A person to trust with a knowledge we can relay on. one of the fastest logical problem solving expert I came across. Best wishes for your future.",
    },
    {
      name: "Karthikeyan",
      role: "Service Delivery Lead at HTC Global Services",
      date: "October 4 2020",
      imageUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      detail:
        "I know Thirunaavukkarasu for last 3 years, he is willing to work on emerging technologies and ready to take any challenging task.Very good at logical thinking.",
    },
    {
      name: "Jaani Fransis",
      role: "Cloud Engineer at Jetstar Asia Airways",
      date: "June 14 2020",
      imageUrl:
        "https://media.licdn.com/dms/image/C5603AQH-WAk-Th29iw/profile-displayphoto-shrink_400_400/0/1600746278950?e=1687996800&v=beta&t=IeurPyU9oSvBrxRcYk1B6z6StUD17D-fin1471qI004",
      detail:
        "Thirunaavukkarasu is a self-motivated and hard-working person. I've known him for quite sometime - from the time he was my student to the time when he was one of the software developer in our initial startup. Fresh out of college, he showed a lot of interest in learning the android tech stack then. He would go lengths to explore a better solution. I would definitely recommend Thirunaavukkarasu as a capable and efficient developer. Also, would definitely reach out to him first when I plan to start any new ventures.",
    },
    {
      name: " Gowtham",
      role: "Sr. Data Scientist and MLOps Engineer at Great Learning",
      date: "July 6 2020",
      imageUrl:
        "https://media.licdn.com/dms/image/C5603AQFAFX_MfcAhlA/profile-displayphoto-shrink_400_400/0/1621874765265?e=1687996800&v=beta&t=JuPKQhp37OEWFjpfF4SvOAqgGyc6JgyYhSKx3p4K7OU",
      detail:
        "Thiru!! is a good programmer, fast interms of coding. Very good in understanding the concepts and a creative thinker. Had great time in studying Machine Learning course along with him and had lots of fun while doing projects together. Hope to see him become a great researcher in Data Science soon👍",
    },
  ],

  skills: [
    { title: "Front-End", description: ["ReactJS", "Javascript", "TypeScript", "Bootstrap", "Material UI"] },
    { title: "Back-End", description: ["NodeJS", "Java", "Python", "J2EE"] },
    { title: "Databases", description: ["PostgreSQL", "DB2", "MongoDB", "Firebase"] },
    { title: "Version Control", description: ["Git", "GitHub"] },
  ],

  projects: [
    {
      tag: "Data Analysis",
      caption: "A short Description about the project",
      imageUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg",
      title: "Employee retention data analysis",
      description:
        " The employee tenure and retention data of company was taken and was analysis using various data analysis techniques.",
      links: [
        // { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.github.com", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "Machine Learning",
      caption: "A short Description about the project",
      imageUrl:
        "https://techvidvan.com/tutorials/wp-content/uploads/sites/2/2021/06/machine-learning-project-movie-recommendation-system.jpg",
      title: "Recommendation System",
      description:
        " The employee tenure and retention data of company was taken and was analysis using various data analysis techniques.",
      links: [
        // { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.github.com", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "Python",
      caption: "A short Description about the project",
      imageUrl: "https://iq.opengenus.org/content/images/2019/12/download--2-.png",
      title: "Autocomplete system",
      description:
        " The employee tenure and retention data of company was taken and was analysis using various data analysis techniques.",
      links: [
        // { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.github.com", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "Python",
      caption: "A short Description about the project",
      imageUrl: "https://www.interviewbit.com/blog/wp-content/uploads/2021/07/Python-Projects-800x391.png",
      title: "Personal Assistant",
      description:
        " The employee tenure and retention data of company was taken and was analysis using various data analysis techniques.",
      links: [
        // { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.github.com", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "React",
      caption: "A short Description about the project",
      imageUrl: "https://www.interviewbit.com/blog/wp-content/uploads/2021/12/React-Projects.png",
      title: "Ticketify",
      description:
        " The employee tenure and retention data of company was taken and was analysis using various data analysis techniques.",
      links: [
        // { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.github.com", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "React",
      caption: "A short Description about the project",
      imageUrl: "https://yiipowered.com/img/project/110/159_full.png?1494691964",
      title: "TV Maze",
      description:
        " The employee tenure and retention data of company was taken and was analysis using various data analysis techniques.",
      links: [
        // { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.github.com", icon: <LanguageIcon /> },
      ],
    },
  ],
};

let exportVariable = { data };

export default exportVariable;
