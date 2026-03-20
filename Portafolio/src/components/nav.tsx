type font = {
    url: string;
    className?: string;
    target?: string;
}
type props = {
Fonts : font[];
className?: string;
children?: React.ReactNode;
}

export default function Nav({ Fonts, className, children }: props) {
    return(
        <nav className={className}>
            {Fonts.map((font, index) => (
                <a key={index} href={font.url} target={font.target} >
                    <i className={font.className}></i>
                </a>
            ))}
            {children}
        </nav>
    )
}