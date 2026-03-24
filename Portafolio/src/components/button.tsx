type ButtonProps = {
    name: string;
    className?: string;
    url?: string;
    target?: string
}

export default function Button({name , className , url , target}: ButtonProps){
    return(
      <button className={className}> <a  href={url} target={target} ></a> <p>{name}</p> </button>
    )
}