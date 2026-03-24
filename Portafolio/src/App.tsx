import Nav from "./components/nav";
import Copy from "./components/copy";
import Seccion from "./components/seccion";
import ImgProfile from "./assets/foto_perfil.jpg";
import ImgConsult from "./assets/Consult-1.png";
import ImgLoto from "./assets/PortadaLoto.jpeg";
import ImgSesion from "./assets/PortadaSessions.jpeg";
import Card from "./components/cards";
import Button from "./components/button";

 function App() {
 return (
  <div className="conteiner">

    <div className=" Nav flex flex-row justify-end p-2 ">
      
      <Nav className="text-white flex flex-row bg-gray-200 w-max h-8 rounded-lg items-center gap-4 me-2 px-4" 
      Fonts={[{ url: "https://github.com/Condebasura", className: "fa-brands fa-github text-2xs text-gray-950", target: "_blank" },{
        url: "https://www.linkedin.com/in/pablo-césar-zabala-51055b1bb", className: "fa-brands fa-linkedin text-2xs text-gray-950", target: "_blank"
      }]}
      >
        <Copy className="fa-solid fa-envelope text-2xs text-gray-950 cursor-pointer" text="could_2032@outlook.com"/>
      </Nav>
    </div>
    
      <Seccion title="Pablo César Zabala"parraph="Full-Stack Web Developer" className="text-start p-2 m-4 bg-gray-100 rounded-lg flex flex-row gap-4 " title_2="I like to create complete projects, from the backend to the frontend" imagen={ImgProfile}/>
    
    <div className="About-Me bg-gray-100 rounded-lg  aspect-3/2 object-cover">
      <Seccion title="About Me" parraph="I'm a developer with experience in HTML, CSS, Bootstrap, Tailwind, JavaScript, Node.js, Express, SQLite, and Git. I'm currently expanding my knowledge of React, Electron, TypeScript, cloud services, working with instances from CloudShell and PuTTY, as well as tools like Apache2 and Linux environments . I am a passionate  with a strong background in both frontend and backend development. I enjoy creating complete projects that encompass all aspects of web development, from designing user interfaces to implementing server-side logic. With a keen eye for detail and a commitment to delivering high-quality work, I strive to build seamless and efficient web applications that provide an exceptional user experience." 
      title_2="technologies I use" Fonts={[
       { title: "HTML", className: "devicon-html5-plain colored text-4xl" },
       { title: "CSS", className: "devicon-css3-plain colored text-4xl" },
       { title: "JavaScript", className: "devicon-javascript-plain colored text-4xl" },
       {title:"tipescript", className: "devicon-typescript-plain colored text-4xl"},
       {title:"bootstrap", className: "devicon-bootstrap-plain colored text-4xl"},
       {title:"tailwind", className: "devicon-tailwindcss-plain colored text-4xl"},
       {title:"nodejs", className: "devicon-nodejs-plain colored text-4xl"},
       {title:"express", className: "devicon-express-original colored text-4xl"},
       {title:"sqlite", className: "devicon-sqlite-plain colored text-4xl"},
       {title:"git", className: "devicon-git-plain colored text-4xl"},
        {title:"react", className: "devicon-react-original colored text-4xl"},
        {title:"electron", className: "devicon-electron-original colored text-4xl"},
        {title:"linux", className: "devicon-linux-plain colored text-4xl"},
        {title:"apache", className: "devicon-apache-plain colored text-4xl"},
        {title:"cloud", className: "fa-solid fa-cloud text-4xl text-gray-950"},
        {title:"puTTY", className: "devicon-putty-plain colored text-4xl"},
      ]}
      />
    </div>
    <div className="proyects ">

    </div>
    <Card tipo="Proyectos"
    Photo={ImgConsult}
    title="Management System for Medical Offices" description="A web application designed for managing appointments and clinical records in medical practices. The system allows for the administration of users, doctors, patients, appointments, and each patient's medical history within a local network."
    tecnologies={[
        { title: "HTML", className: "devicon-html5-plain colored text-4xl" },
        {title:"react", className: "devicon-react-original colored text-4xl"},
       { title: "CSS", className: "devicon-css3-plain colored text-4xl" },
       {title:"tailwind", className: "devicon-tailwindcss-plain colored text-4xl"},
       {title:"nodejs", className: "devicon-nodejs-plain colored text-4xl"},
        {title:"express", className: "devicon-express-original colored text-4xl"},
       {title:"sqlite", className: "devicon-sqlite-plain colored text-4xl"},
       { title: "JavaScript", className: "devicon-javascript-plain colored text-4xl" },
       {title:"tipescript", className: "devicon-typescript-plain colored text-4xl"},
    ]}
    >
  {<Button  name=" GitHub" className="fa-brands fa-github flex flex-row gap-1 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-md text-xs px-3 py-2 text-center" url="https://github.com/Condebasura/Consultorio" target="_blank"/>}
  
    </Card>
    <Card
    Photo={ImgLoto}
    title="Loto Clothing store"
    description="This online clothing store allows users to create accounts, browse products, manage their profile, and make purchases simply and securely. It also includes an administrative panel with full control over the products."
    
    tecnologies={[
       { title: "HTML", className: "devicon-html5-plain colored text-4xl" },
       { title: "CSS", className: "devicon-css3-plain colored text-4xl" },
       {title:"bootstrap", className: "devicon-bootstrap-plain colored text-4xl"},
       { title: "JavaScript", className: "devicon-javascript-plain colored text-4xl" },
       {title:"nodejs", className: "devicon-nodejs-plain colored text-4xl"},
        {title:"express", className: "devicon-express-original colored text-4xl"},
       {title:"sqlite", className: "devicon-sqlite-plain colored text-4xl"},

    ]}
    >
       {<Button  name=" GitHub" className="fa-brands fa-github flex flex-row gap-1 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-md text-xs px-3 py-2 text-center" url="https://github.com/Condebasura/Loto_Indumentaria" target="_blank"/>}

       {<Button  name=" Demo" className="fa-solid fa-eye flex flex-row gap-1 text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 ms-2 rounded-md text-xs px-3 py-2 text-center" url="https://loto-indumentaria.hopto.org" target="_blank"/>}
    </Card>
        </div>
 )
}

export default App
