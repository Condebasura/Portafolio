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
  <div className="conteiner grid grid-cols-1 gap-2">

    <div className=" Nav flex flex-row justify-end p-2  ">
      
      <Nav className="text-white flex flex-row  bg-gray-200 w-max h-8 rounded-lg items-center gap-4 me-2 px-4" 
      Fonts={[{ url: "https://github.com/Condebasura", className: "fa-brands fa-github text-2xs text-gray-950", target: "_blank" },{
        url: "https://www.linkedin.com/in/pablo-césar-zabala-51055b1bb", className: "fa-brands fa-linkedin text-2xs text-gray-950", target: "_blank"
      }]}
      >
        <Copy className="fa-solid fa-envelope text-2xs text-gray-950 cursor-pointer" text="could_2032@outlook.com"/>
      </Nav>
    </div>

     <div className="flex flex-row justify-center md:justify-end p-2 ">
      <Seccion title="Pablo César Zabala"parraph="Full-Stack Web Developer" className=" flex md:flex-row gap-4 flex-col text-center items-center  md:text-start  w-1/2  shadow-xl p-4 m-4 bg-gray-200 rounded-lg  " title_2="I like to create complete projects, from the backend to the frontend" imagen={ImgProfile}/>
     </div>
    
    <div className=" flex flex-row justify-center md:justify-start">

      <Seccion title="About Me" className="About-Me bg-gray-200  shadow-xl wrap-anywhere rounded-lg flex flex-col w-1/2  gap-4 m-4 p-4 " parraph="I'm a developer with experience in HTML, CSS, Bootstrap, Tailwind, JavaScript, Node.js, Express, SQLite, and Git. I'm currently expanding my knowledge of React, Electron, TypeScript, cloud services, working with instances from CloudShell and PuTTY, as well as tools like Apache2 and Linux environments . I am a passionate  with a strong background in both frontend and backend development. I enjoy creating complete projects that encompass all aspects of web development, from designing user interfaces to implementing server-side logic. With a keen eye for detail and a commitment to delivering high-quality work, I strive to build seamless and efficient web applications that provide an exceptional user experience." 
      title_2="technologies I use" Fonts={[
        { title: "HTML", className: "devicon-html5-plain colored md:text-4xl" },
        { title: "CSS", className: "devicon-css3-plain colored md:text-4xl" },
        { title: "JavaScript", className: "devicon-javascript-plain colored md:text-4xl" },
        {title:"tipescript", className: "devicon-typescript-plain colored md:text-4xl"},
        {title:"bootstrap", className: "devicon-bootstrap-plain colored md:text-4xl"},
        {title:"tailwind", className: "devicon-tailwindcss-plain colored md:text-4xl"},
       {title:"nodejs", className: "devicon-nodejs-plain colored md:text-4xl"},
       {title:"express", className: "devicon-express-original colored md:text-4xl"},
       {title:"sqlite", className: "devicon-sqlite-plain colored md:text-4xl"},
       {title:"git", className: "devicon-git-plain colored md:text-4xl"},
       {title:"react", className: "devicon-react-original colored md:text-4xl"},
       {title:"electron", className: "devicon-electron-original colored md:text-4xl"},
       {title:"linux", className: "devicon-linux-plain colored md:text-4xl"},
       {title:"apache", className: "devicon-apache-plain colored md:text-4xl"},
       {title:"cloud", className: "fa-solid fa-cloud md:text-4xl text-gray-950"},
       {title:"puTTY", className: "devicon-putty-plain colored  md:text-4xl"},
      ]}
      />
      </div>
    
    <div className=" flex justify-center md:flex-row gap-4 md:justify-end p-2 ">

     
    <Card tipo="Proyectos"
    className="flex flex-col m-2  p-3 bg bg-gray-200 w-2/5  shadow-xl rounded-lg gap-4"
    Photo={ImgConsult}
    title="Management System for Medical Offices" description="A web application designed for managing appointments and clinical records in medical practices. The system allows for the administration of users, doctors, patients, appointments, and each patient's medical history within a local network."
    tecnologies={[
        { title: "HTML", className: "devicon-html5-plain colored text-4sm" },
        {title:"react", className: "devicon-react-original colored text-4sm"},
       { title: "CSS", className: "devicon-css3-plain colored text-4sm" },
       {title:"tailwind", className: "devicon-tailwindcss-plain colored text-4sm"},
       {title:"nodejs", className: "devicon-nodejs-plain colored text-4sm"},
        {title:"express", className: "devicon-express-original colored text-4sm"},
       {title:"sqlite", className: "devicon-sqlite-plain colored text-4sm"},
       { title: "JavaScript", className: "devicon-javascript-plain colored text-4sm" },
       {title:"tipescript", className: "devicon-typescript-plain colored text-4sm"},
    ]}
    >
  {<Button  name=" GitHub" className="fa-brands fa-github flex  flex-row flex-wrap md:flex-nowrap m-2  ms-2 gap-1 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-md text-xs md:text-sm  px-3 py-2  md:text-center  w-24" url="https://github.com/Condebasura/Consultorio" target="_blank"/>}
  
    </Card>

    </div>

     <div className="flex justify-center md:flex-row md:justify-start">

    <Card
    className="flex flex-col m-2 p-3  bg bg-gray-200 w-2/5  shadow-xl rounded-lg gap-4"
    Photo={ImgLoto}
    title="Loto Clothing store"
    description="This online clothing store allows users to create accounts, browse products, manage their profile, and make purchases simply and securely. It also includes an administrative panel with full control over the products."
    
    tecnologies={[
      { title: "HTML", className: "devicon-html5-plain colored text-4sm" },
      { title: "CSS", className: "devicon-css3-plain colored text-4sm" },
      {title:"bootstrap", className: "devicon-bootstrap-plain colored text-4sm"},
      { title: "JavaScript", className: "devicon-javascript-plain colored text-4sm" },
      {title:"nodejs", className: "devicon-nodejs-plain colored text-4sm"},
      {title:"express", className: "devicon-express-original colored text-4sm"},
      {title:"sqlite", className: "devicon-sqlite-plain colored text-4sm"},
      
    ]}
    >
      <div className="flex flex-col md:flex-row justify-center">

       { <Button  name=" GitHub" className="fa-brands fa-github flex flex-row gap-1 m-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-md text-xs md:text-sm  px-3 py-2 text-center ms-2 w-24" url="https://github.com/Condebasura/Loto_Indumentaria" target="_blank"/>}

       {<Button  name=" Demo" className="fa-solid fa-eye flex flex-row gap-1 m-2 text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 ms-2 rounded-md text-xs md:text-sm  px-3 py-2 text-center w-24" url="https://loto-indumentaria.hopto.org" target="_blank"/>}
      </div>
    </Card>
    </div>

    <div className=" flex justify-center md:flex-row gap-4 md:justify-end p-2">

    <Card
    className="flex flex-col m-2 p-3  bg bg-gray-200 w-2/5  shadow-xl rounded-lg gap-4"
    Photo={ImgSesion}
    title="Sessions Social Network"
    description="Web project that simulates the management of multiple social networks in mobile format, with complete authentication and user profile functionalities."
    
    tecnologies={[
      { title: "HTML", className: "devicon-html5-plain colored text-4sm" },
      { title: "CSS", className: "devicon-css3-plain colored text-4sm" },
      {title:"bootstrap", className: "devicon-bootstrap-plain colored text-4sm"},
      { title: "JavaScript", className: "devicon-javascript-plain colored text-4sm" },
      {title:"nodejs", className: "devicon-nodejs-plain colored text-4sm"},
      {title:"express", className: "devicon-express-original colored text-4sm"},
      {title:"sqlite", className: "devicon-sqlite-plain colored text-4sm"},
      {title:"pug", className: "devicon-pug-plain colored text-4sm"},
      
    ]}
    >
      <div className="flex flex-col md:flex-row md:justify-center">

       { <Button  name=" GitHub" className="fa-brands fa-github flex flex-row gap-1 m-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-md text-xs px-3 py-2 text-center ms-2 w-24" url="https://github.com/Condebasura/Login-Create" target="_blank"/>}

       {<Button  name=" Demo" className="fa-solid fa-eye flex flex-row gap-1 m-2 text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 ms-2 rounded-md text-xs md:text-sm  px-3 py-2 text-center w-24" url="https://sessions.hopto.org" target="_blank"/>}
      </div>
    </Card>
        </div>
    </div>
 )
}

export default App
