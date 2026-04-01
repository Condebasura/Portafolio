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
    className?: string;
 children?: React.ReactNode;
}

export default function Card({title , Photo, description, tecnologies ,className, children }: Content){

    return(
        <>
          
        <div className={className} >
            <h2 className=" text-xl m-2">{title}</h2>
            <div className="flex flex-col  md:grid md:grid-cols-2 gap-4">
            <img src={Photo}className="aspect-[3/2] object-cover" alt="Photo"/>
            <div>

            <p className="text-xs md:text-sm font-medium ">{description}</p>
            <div className="flex flex-row  flex-wrap gap-4 mt-4"> 
            {tecnologies.map((tecg , index)=>(
             
                <span key={index} className={tecg.className} title={tecg.title}></span> 
             
                
            ))}
            </div>
            </div>

            </div>
                
            {children}
        </div>
            </>
    )
}