import React from "react";
import ButtonBack from "../ButtonBack";

export default function CourseLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <ButtonBack />
        </>
    );
}
