import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-6.jpeg";

export const HERO_CONTENT = `I am a passionate frontend developer with a keen interest in building dynamic and responsive web applications. Currently, I am gaining valuable experience through an internship at Dimiour, where I am honing my skills in technologies like React.js, Redux.js, TailwindCSS, HTML, JavaScript, and CSS3. My goal is to utilize my expertise to create visually appealing and user-friendly interfaces that enhance user experiences and drive engagement`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. With 4 months of internship experience, I have honed my skills in React.js, Redux.js, TailwindCSS, HTML, JavaScript, and CSS3. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 Feb - Present",
    role: "Front-End Developer Intern",
    company: "Dimiour",
    description: `I worked with a team to develop dynamic UIs using React and JavaScript, pivotal for improving user experience. We implemented efficient state management through Redux and Redux Toolkit, ensuring smooth data handling. Styling and design were streamlined with TailwindCSS and Figma, enhancing both the visual appeal and functional effectiveness of interfaces. Git supported robust version control and collaboration, maintaining codebase integrity throughout the development process.`,
    technologies: ["Javascript", "React.js", "Redux.js", "HTML", "CSS"],
  },
  
];

export const PROJECTS = [
  {
    title: "Business website",
    image: project1,
    description:
      "A website for a Digital marketing agency",
    technologies: ["HTML", "React", "TailWind CSS","Emailjs"],
    githubLink: "https://glyphads.com/"
  },{
    title: "E-Commerce Website",
    image: project2,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and wishlist.",
    technologies: [ "React", "Redux-toolkit", "Tailwind CSS"],
    githubLink: "https://orebi-shopping-ojdb387tw-asif-maxs-projects.vercel.app"
  },
  
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "TailWind CSS"],
    githubLink: "https://github.com/asif-max"
  },
  {
    title: "Modern Blog Website",
    image: project4,
    description:
      "A modern Blog website with functionalities such as filtering,category, and search.",
    technologies: ["HTML", "Redux", "React", "TailWind CSS"],
    githubLink: "https://github.com/asif-max/blogRedux.git"
  },
  
];

export const CONTACT = {
  address: "Kerala,India ",
  phoneNo: "+91 8547296707 ",
  email: "aasifpty@gmail.com",
};
