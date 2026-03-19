import Nav from "./components/nav";

 function App() {
 return (
    <div className="flex flex-row justify-end p-4 bg-gray-200">
      
      <Nav className="text-white hover:text-gray-300" 
      Fonts={[{ url: "/", className: "fa-brands fa-github text-2xl bg-blue-500"},]}
      />
    </div>
 )
}

export default App
