import Image from 'next/image';
import Link from 'next/link';
import SocialIcons from '@/components/SocialIcons';
import style from "./page.module.scss";

export default function Home() {
  return (
    <>
        <section className={style.greet} style={{"margin": "0"}}>
            <div>
                <header style={{"textAlign": "start"}}>Репетитор по математике</header>
                <h2 style={{"textAlign": "start"}}>Подготовка к ЕГЭ, ОГЭ и поступлению в профильные школы и вузы</h2>
            </div>
            <div style={{"margin": "10px 0"}}>
                <SocialIcons />
            </div>
            <div className="button-link">
                <Link href="https://wa.me/79308815930">Записаться на бесплатную консультацию</Link>
            </div>
        </section>

        <section className={style.canIHelp} style={{"padding": "0"}}>
            <header className={style.title}>Чем я могу помочь?</header>
            <div className={style.image}>
                <Image
                    src="/main/canIHelp.JPG"
                    alt="Фотография репетитора"
                    fill
                    loading="lazy"
                />
            </div>
            <article className={style.information}>
                <ul className={style.list}>
                    <li className="cell">
                        <h2><i className="bx bx-trending-up" /> Оценки вверх</h2>
                        <p>Помогаю подтянуть предмет и получать стабильные 4 и 5</p>
                    </li>
                    <li className="cell">
                        <h2><i className="bx bx-briefcase-alt" /> Поступление ≠ не стресс</h2>
                        <p>Готовлю к вступительным в лицеи, гимназии и профильные школы</p>
                    </li>
                    <li className="cell">
                        <h2><i className="bx bx-file" /> Экзамен на балл мечты</h2>
                        <p>ВПР, ОГЭ, ЕГЭ — всё по плану, без паники, с реальными результатами</p>
                    </li>
                    <li className="cell">
                        <h2><i className="bx bx-brain" /> Учиться с умом, не по шаблону</h2>
                        <p>Тренируем логику и понимание, а не механическое заучивание</p>
                    </li>
                </ul>
                <div className="button-link">
                    <Link href="/about" >Обо мне</Link>
                </div>
            </article>
        </section>

        <section>
            <header>Почему мне доверяют?</header>
            <ul className={style.list}>
                <li className="cell">
                    <h2><i className='bx bx-map-alt' /> Личный учебный план</h2>
                    <p>Пошаговая программа на неделю, месяц и год — всё чётко, без перегрузок и хаоса</p>
                </li>
                <li className="cell">
                    <h2><i className='bx bx-chat' /> Поддержка между занятиями</h2>
                    <p>Всегда на связи — помогаю с вопросами, домашкой и мотивацией в любое время недели</p>
                </li>
                <li className="cell">
                    <h2><i className='bx bx-edit' /> Проверка ДЗ и пробники</h2>
                    <p>Домашние задания проверяю вне уроков, а также даю регулярные пробники для уверенности на экзамене</p>
                </li>
                <li className="cell">
                    <h2><i className='bx bx-bar-chart-alt-2' /> Система контроля знаний</h2>
                    <p>Проводим зачёты, мини-тесты и мониторинги — чтобы отслеживать реальный прогресс</p>
                </li>
                <li className="cell">
                    <h2><i className='bx bx-book' /> Все материалы включены</h2>
                    <p>Необходимые задания, теория, тренажеры — всё даю сама (ничего покупать не нужно)</p>
                </li>
                <li className="cell">
                    <h2><i className='bx bx-target-lock' /> Фокус на результат</h2>
                    <p>Главная цель — ощутимый прогресс ученика: лучшее понимание, оценки, уверенность, поступление</p>
                </li>
            </ul>
            <div className="button-link animZoom">
                <Link href="https://disk.yandex.ru/i/-97daZ5ax_YSyg">Забирай подарок</Link>
            </div>
        </section>

        <section className={style.promo}>
            <header>Начните учиться уже сегодня</header>
            <h2>Покажу, как проходят занятия и чего мы сможем достичь</h2>
            <div className="button-link">
                <Link href="https://wa.me/79308815930">Начать вместе!</Link>
            </div>
        </section>
    </>
  );
}
