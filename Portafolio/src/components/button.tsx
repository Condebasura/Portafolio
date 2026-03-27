type ButtonProps = {
    name: string;
    className?: string;
    url?: string;
    target?: string
}

export default function Button({name , className , url , target}: ButtonProps){
    return(
        <div className={className}>

      <a  href={url} target={target} ></a> <button>{name}</button>
        </div>
    )
}