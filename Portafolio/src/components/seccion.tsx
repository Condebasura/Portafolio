type SeccionProps = {
    title: string;
    parraph: string;
    title_2?:string;
    className?: string;
    imagen?: string;
}

export default function Seccion({title , parraph , title_2 , className, imagen}: SeccionProps){
    return(
        <div className={className}>
            <div className="flex flex-col m-2">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <p className="text-gray-700 mb-4">{parraph}</p>
            {title_2 && <h3 className="text-xl font-semibold mb-2">{title_2}</h3>}
            </div>
            {imagen && <img src={imagen} alt="Profile" className="rounded-lg size-56" />}
        </div>
    )
}