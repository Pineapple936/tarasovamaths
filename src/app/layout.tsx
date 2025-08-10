import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.scss";

export const metadata: Metadata = {
    title: "Репетитор по математике — Тарасова Екатерина | Подготовка к ЕГЭ, ОГЭ и поступлению в профильные школы",
    description:"Онлайн-занятия по математике с опытным репетитором. Индивидуальный подход, подготовка к ЕГЭ, ОГЭ, помощь ученикам 5–11 классов.",
    keywords: [
      "tarasovamaths",
      "репетитор по математике",
      "подготовка к ЕГЭ по математике",
      "подготовка к ОГЭ",
      "ЕГЭ математика профиль",
      "ОГЭ математика",
      "уроки по математике онлайн",
      "Тарасова Екатерина",
      "математика 5-11 класс",
      "онлайн репетитор",
      "репетитор онлайн"
    ],
    authors: [{ name: "Тарасова Екатерина" }],
    openGraph: {
      title: "Тарасова Екатерина | Репетитор по математике",
      description:
        "Занятия по математике онлайн: ЕГЭ, ОГЭ, подготовка к поступлению в профильные школы",
      url: "https://tarasovamaths.ru",
      locale: "ru_RU",
      type: "website",
      images: [
        {
          url: "https://tarasovamaths.ru/openGraph.jpg",
          width: 1200,
          height: 630,
          alt: "Онлайн занятия по математике — Тарасова Екатерина",
        },
      ],
    },
    category: "Education",
    icons: {
        icon: "/icon.ico"
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body>
        <div className="wrapper">
            <Navigation />
            {children}
            <Footer />
        </div>
      </body>
    </html>
  );
}
