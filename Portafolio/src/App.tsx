import Nav from "./components/nav";
import Copy from "./components/copy";

 function App() {
 return (
    <div className="flex flex-row justify-end p-2 ">
      
      <Nav className="text-white flex flex-row bg-gray-200 w-max h-8 rounded-lg items-center gap-4 me-2 px-4" 
      Fonts={[{ url: "https://github.com/Condebasura", className: "fa-brands fa-github text-2xs text-gray-950", target: "_blank" },{
        url: "https://www.linkedin.com/in/pablo-césar-zabala-51055b1bb", className: "fa-brands fa-linkedin text-2xs text-gray-950", target: "_blank"
      }]}
      >
        <Copy className="fa-solid fa-envelope text-2xs text-gray-950 cursor-pointer" text="could_2032@outlook.com"/>
      </Nav>
    </div>
 )
}

export default App
