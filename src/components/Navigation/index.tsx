"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import style from "./index.module.scss";

export default function Navigation() {
    const pathname = usePathname();
    const [open, setOpen] = useState<boolean>(false);

    const isActive = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <nav className={style.navigation}>
            <Link passHref href="https://t.me/tarasovamaths" className={style.title}>@tarasovamaths</Link>
            <div className={style.navigateBlock}>
                <button onClick={() => setOpen(prev => !prev)}><i className={`bx ${open ? 'bx-x' : 'bx-menu'}`} /></button>
                <div className={`${style.navigateLinks} ${open ? style.open : ""}`}>
                    <Link href="/" className={isActive("/") ? style.active : ""} onClick={() => setOpen(false)} style={{'--item-index': 0} as React.CSSProperties}>Главная</Link>
                    <Link href="/about" className={isActive("/about") ? style.active : ""} onClick={() => setOpen(false)} style={{'--item-index': 1} as React.CSSProperties}>Обо мне</Link>
                    <Link passHref href="https://t.me/tarasovareview" onClick={() => setOpen(false)} style={{ '--item-index': '3' } as React.CSSProperties}>Отзывы</Link>
                    <Link href="/services" className={isActive("/services") ? style.active : ""} onClick={() => setOpen(false)} style={{'--item-index': 2} as React.CSSProperties}>Форматы обучения</Link>
                </div>
            </div>
        </nav>
    );
}
