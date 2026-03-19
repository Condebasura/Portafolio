type font = {
    url: string;
    className?: string;
}
type props = {
Fonts : font[];
className?: string;
}

export default function Nav({ Fonts, className }: props) {
    return(
        <nav className={className}>
            {Fonts.map((font, index) => (
                <a key={index} href={font.url} >
                    <i className={font.className}></i>
                </a>
            ))}
        </nav>
    )
}