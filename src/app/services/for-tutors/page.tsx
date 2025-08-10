import CourseLayout from "@/components/CourseLayout";
import Link from "next/link";
import style from "@/app/services/learningTools.module.scss"

export default function ForTutors() {
    return(
        <CourseLayout>
            <header>Онлайн консультация для преподавателей</header>
            <section>
                <h2>Как проходит?</h2>
                <ol>
                    <li>Вы предварительно заполняете бриф </li>
                    <li>Назначаем время консультации</li>
                    <li>Отвечаю на все ваши вопросы на онлайн созвоне (консультация занимает 1,5−2 часа)</li>
                    <li>Поддержка и помощь во внедрении обсуждаемой информации в течение недели</li>
                </ol>
                <p style={{"textAlign": "center", "marginTop": "25px", "fontSize": "1.5rem"}}>Стоимость: <b>10.000₽</b></p>
            </section>
            <div className={style.wrapperButton}>
                <div className="button-link">
                    <Link href="https://wa.me/79308815930">Записаться на консультацию</Link>
                </div>
            </div>
        </CourseLayout>
    );
}
