import { useState } from "react";

type Props = {
    text: string;
    className?:string;
    
}

export default function Copy({text, className }: Props) {
   const [copied, setCopied] = useState(false);
   const [hover , setHover] = useState(false);
  
   const tooltipStyle: React.CSSProperties = {
  position: "absolute",
  bottom: "-25px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "#3981ee",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: "4px",
  fontSize: "12px",
  whiteSpace: "nowrap",
};
    const CopyClipBoard = async () =>{
       try {
           await navigator.clipboard.writeText(text);
           setCopied(true)
           setTimeout(() => setCopied(false), 2000)
       }catch (error) {
           console.error("Error al copiar al portapapeles: ", error)
       }

    }

    return(
        <div
        style={{position:"relative" , display: "inline-block"}}
        onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=> setHover(false)}
        >

        <button className={className} onClick={CopyClipBoard}></button>
        {(hover || copied)&&(<span style={tooltipStyle}>
            {copied ? "Copiado!" : "Copiar Email"}
        </span>)}
        </div>
    )
}