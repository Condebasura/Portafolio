type ButtonProps = {
    name: string;
    onClick: () => void;
    className?: string;
}

export default function Button({name , onClick , className}: ButtonProps){
    return(
        <button className={className} onClick={onClick}>{name}</button>
    )
}