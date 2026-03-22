type tecg = {
    title:string;
    className:string;
}

type Content ={
    tipo?: string;
    title: string;
    Photo: string;
    description: string;
    tecnologies: tecg[];
 children?: React.ReactNode;
}

export default function Card({title , tipo, Photo, description, tecnologies , children }: Content){

    return(
        <>
          <h1>{tipo}</h1>
        <div>
            <h2>{title}</h2>
            <img src={Photo}className="size-64" alt="Photo"/>
            <p>{description}</p>

            <div className="flex flex-row gap-4 m-4"> 
            {tecnologies.map((tecg , index)=>(
             
                <span key={index} className={tecg.className} title={tecg.title}></span> 
             
                
            ))}
            </div>
            {children}
        </div>
            </>
    )
}