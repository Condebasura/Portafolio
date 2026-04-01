type ButtonProps = {
    name: string;
    className?: string;
    url?: string;
    target?: string
    
}

export default function Button({name , className , url , target}: ButtonProps){
    return(
        <div className={className}>
 <button>
      <a  href={url} target={target} >{name}</a></button>
        </div>
    )
}