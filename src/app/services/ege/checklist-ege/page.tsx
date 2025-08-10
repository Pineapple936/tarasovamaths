import CourseLayout from "@/components/CourseLayout";
import Link from "next/link";
import Image from "next/image";
import style from "@/app/services/learningTools.module.scss";

export default function ChecklistEge() {
    return (
        <CourseLayout>
            <section style={{"display": "flex", "flexDirection": "column", "margin": "0"}}>
                    <header>Чек-лист по всей теории ЕГЭ (1 часть)</header>
                    <h3>Полный сборник всей теории, необходимой для решения первой части ЕГЭ профиль (с разбором конкретных заданий)</h3>
            </section>

            <p style={{"textAlign": "center", "margin": "20px 0", "fontSize": "1.5rem"}}>Стоимость: <b>990₽</b></p>

            <section>
                <h2>Пример чек-листа</h2>
                <div style={{"display": "flex", "justifyContent": "center"}}>
                    <div className={style.image} style={{"aspectRatio": "917 / 1280"}}>
                        <Image
                            src="/courses/ege/checklist/checklist.jpg"
                            alt="Пример чек - листа"
                            fill
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>


            <div className={style.wrapperButton}>
                    <div className="button-link">
                        <Link href="https://wa.me/79308815930">Приобрести чек-лист</Link>
                    </div>
                </div>
        </CourseLayout>
    );
}
