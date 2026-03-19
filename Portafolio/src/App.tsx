import Nav from "./components/nav";

 function App() {
 return (
    <div className="flex flex-row justify-end p-2 ">
      
      <Nav className="text-white flex flex-row bg-gray-300 w-max h-10 rounded-lg items-center gap-4 px-4" 
      Fonts={[{ url: "https://github.com/Condebasura", className: "fa-brands fa-github text-2xs text-blue-800", target: "_blank" },{
        url: "https://www.linkedin.com/in/pablo-césar-zabala-51055b1bb", className: "fa-brands fa-linkedin text-2xs text-blue-800", target: "_blank"
      }]}
      />
    </div>
 )
}

export default App
