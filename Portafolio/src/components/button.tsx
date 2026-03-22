type ButtonProps = {
    name: string;
    className?: string;
    url?: string;
}

export default function Button({name , className , url}: ButtonProps){
    return(
        <button className={className} url={url} >{name}</button>
    )
}