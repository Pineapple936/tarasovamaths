import Link from "next/link";
import style from "./index.module.scss";

export default function Footer() {
    return (
        <p className={style.footer}>
            © 2025 Тарасова Екатерина Дмитриевна | <Link href="https://disk.yandex.ru/i/mk7TFe21ryycVQ">Политика конфиденциальности</Link>
        </p>
    );
}
