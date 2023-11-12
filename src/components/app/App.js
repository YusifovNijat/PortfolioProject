import React, {useState} from 'react';

import './App.css';

import Home from '../home/home';
import Tool from '../toolC/tool';
import Expertise from '../expertise/expertise';
import Experience from '../experience/experience';
import Projects from '../projects/projects';
import Header from '../header/Header';
import Info from '../projectInfo/info';

import netflix from "../../images/netflix.png";
import reserv from "../../images/reserv.png";
import quiz from "../../images/quiz.png";
import workers from "../../images/workers.png";

import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Contact from '../contact/contact';


function App() {
  
  const [lists] = useState([
    {
        id: 1,
        name: "Netflix Clone",
        description: "The Netflix Clone project is a testament to my skills in building a modern web application that emulates the functionality of the popular streaming platform, Netflix. This project combines a variety of technologies and features to create an immersive and user-friendly experience.",
        overview: "The application fetches a list of movies from the Netflix API, offering users a diverse range of options to explore. Users can create an account and log in securely using Firebase Authentication. This adds a layer of personalization to the experience, allowing users to save their preferences and history. Once logged in, users can curate their own list of favorite movies, providing a tailored experience based on their interests. The application utilizes the Netflix API and Axios to fetch real-time data, ensuring that users have access to the latest content. The project is built using the Tailwind CSS framework, ensuring a visually appealing and responsive design that adapts to various devices and screen sizes. The website is hosted on GitHub Pages, making it easily accessible for users and prospective employers. The Netflix Clone project is a showcase of my ability to build a modern web application with a rich user interface and dynamic features. It demonstrates my skills in integrating external data sources through APIs and providing a personalized user experience through user authentication and data storage. The use of React, Tailwind CSS, and Firebase showcases my proficiency in modern web development technologies. You can explore the project's code on GitHub and access the deployed website on GitHub Pages, providing a comprehensive view of my work.",
        image: netflix,
        tools: ["React","React Hooks", "HTML", "CSS", "Tailwind", "Firebase", "Netflix API", "Axios", "GitHub"],
        link: "https://yusifovnijat.github.io/netflix-clone/",
        github: "https://github.com/YusifovNijat/netflix-clone/tree/main"
    },
    {
        id: 2,
        name: "Reservation System",
        description: "The Reservation Hotel System is a full-stack project that showcases my skills in creating a sophisticated web application for managing hotel reservations. This project seamlessly integrates the front-end with the back-end, offering users a comprehensive experience with the ability to add, edit, and delete reservations.",
        overview: "Users can create new reservations, edit existing ones, and delete reservations, providing a flexible and user-friendly booking system. The project combines React for the front-end and Spring Boot for the back-end, demonstrating my proficiency in both front-end and back-end technologies. The application uses MySQL to store reservation data, allowing for efficient data management. The back-end of the project is hosted on Red Hat, ensuring reliable and scalable server capabilities. The project's database is hosted on FreeMySQLHosting, providing a secure and accessible data repository for reservation information. The website is deployed and hosted on Vercel, offering users easy access to the reservation system. The Reservation Hotel System project is a testament to my ability to build a complete, end-to-end web application. It showcases my skills in full-stack development, integrating front-end and back-end technologies, and efficient data management using a MySQL database. The project's hosting on Red Hat and FreeMySQLHosting ensures reliable data storage and retrieval, and Vercel provides easy access for users.",
        image: reserv,
        tools: ["React","React Hooks", "HTML", "CSS", "Spring Boot", "MySQL", "Red Hat", "FreeMySQLHosting", "Vercel"],
        link: "https://reservation-app-lac.vercel.app/",
        github: "https://github.com/YusifovNijat/ReservationApp"
    },
    {
        id: 3,
        name: "Quiz Game",
        description: "The Quiz Game project is a dynamic and engaging application that showcases my proficiency in building interactive quizzes using React and TypeScript. This project offers users a fun and educational experience with a variety of questions and real-time scoring.",
        overview: "The Quiz Game project is a demonstration of my ability to create engaging and interactive web applications using modern web development technologies. It highlights my proficiency in React and TypeScript, ensuring a robust and type-safe codebase. Users can click the 'Start' button to begin the quiz, initiating a series of 10 questions. The interactive start feature adds an element of engagement. As users progress through the quiz, they encounter a series of questions. After answering a question, they can click 'Next' to proceed to the next question. The application provides real-time feedback on answers. Correct answers are highlighted in green, while incorrect answers are marked in red. Users earn a point for each correct answer, allowing them to track their progress and challenge themselves. The project is built using React and TypeScript, showcasing my skills in building interactive and type-safe web applications. This project offers users an entertaining way to test their knowledge and learn new facts while providing a sense of achievement through the scoring system. The real-time feedback and dynamic question flow make it an excellent example of my development skills.",
        image: quiz,
        tools: ["React","React Hooks", "TypeScript", "JavaScript", "HTML", "CSS"],
        link: "https://yusifovnijat.github.io/QuizApp/",
        github: "https://github.com/YusifovNijat/QuizApp"
    },
    {
        id: 4,
        name: "Company Workers System",
        description: "I developed the Company Workers System Application as a showcase of my proficiency in building web applications with React. This project demonstrates my skills in creating a dynamic and feature-rich web application with a focus on the fundamental aspects of CRUD operations (Create, Read, Update, Delete).",
        overview: "The application displays a list of workers, each with their respective salaries, making it easy for users to view the workforce. Users have the ability to add new workers to the system and remove existing workers. This demonstrates my capability to manage data effectively. Workers can receive bonuses that can be added to their salary. This feature illustrates how data can be updated and the application's real-time responsiveness. Users can filter workers based on salary or bonuses, allowing for quick and efficient data retrieval. Additionally, a search function is provided to find a specific worker within the list. This project serves as a testament to my abilities as a React developer. By building this application without relying on an external database, I demonstrate my skills in managing and manipulating data on the client-side, which is a valuable skill for many modern web development projects. The application offers an intuitive user interface and various functionalities, making it a comprehensive example of my capabilities.",
        tools: ["React","React Hooks", "HTML", "CSS"],
        image: workers,
        link: "https://yusifovnijat.github.io/company-workers/",
        github: "https://github.com/YusifovNijat/company-workers"
    }
  ])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
          <>
            <Header/>
            <Home/>
            <Tool/>
            <Expertise/>
            <Experience/>
            <Projects lists={lists}/>
            <Contact/>
          </>
          }/>
          <Route path="/project/:id" element={<Info lists={lists}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
