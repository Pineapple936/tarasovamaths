import Link from "next/link";
import style from "./index.module.scss";

export default function SocialIcons() {
    return (
        <div className={style.links}>
            <Link style={{'--color': '#0088cc'} as React.CSSProperties} href="https://t.me/tarasovamaths"><i className='bx bxl-telegram' /></Link>
            <Link style={{'--color': '#25D366'} as React.CSSProperties} href="https://wa.me/79308815930"><i className='bx bxl-whatsapp' /></Link>
            <Link style={{'--color': '#355C7D'} as React.CSSProperties} href="https://vk.com/tarasova_maths"><i className='bx bxl-vk' /></Link>
            <Link style={{'--color': '#FF0000'} as React.CSSProperties} href="https://www.youtube.com/@tarasova_maths"><i className='bx bxl-youtube' /></Link>
        </div>
    );
}
