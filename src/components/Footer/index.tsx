import Link from "next/link";
import style from "./index.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.legal}>
          <p>ИП Тарасова Екатерина Дмитриевна</p>
          <p>ИНН 621901706667</p>
          <p>ОГРНИП 324620000039262</p>
          <p>Тел: +7 (930) 881-59-30</p>
        </div>
        <p className={style.copyright}>
          © 2025 Тарасова Екатерина Дмитриевна |{" "}
          <Link className={style.links} href="https://disk.yandex.ru/i/mk7TFe21ryycVQ">
            Политика конфиденциальности
          </Link>
        </p>
      </div>
    </footer>
  );
}
