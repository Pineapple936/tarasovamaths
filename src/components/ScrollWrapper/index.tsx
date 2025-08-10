"use client"
import React from "react";
import { useState, useRef, useEffect } from "react";
import style from "./index.module.scss";

export default function ScrollWrapper({ children, countItems }: { children: React.ReactNode, countItems: number }) {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [currentX, setCurrentX] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const buttons = Array.from({ length: countItems }, (_, index) => (
        <label key={index} className={style.button}>
            <input type="radio" name="scroll" id={`r${index}`} checked={activeIndex === index} onChange={() => setActiveIndex(index)} />
        </label>
    ));

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
        setCurrentX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        setCurrentX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!isDragging) return;

        const diff = startX - currentX;
        const threshold = 50;

        if (Math.abs(diff) > threshold) {
            if (diff > 0 && activeIndex < countItems - 1) {
                setActiveIndex(activeIndex + 1);
            } else if (diff < 0 && activeIndex > 0) {
                setActiveIndex(activeIndex - 1);
            }
        }

        setIsDragging(false);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setCurrentX(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        setCurrentX(e.clientX);
    };

    const handleMouseUp = () => {
        if (!isDragging) return;

        const diff = startX - currentX;
        const threshold = 50;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) setActiveIndex((prev) => (prev + 1) % countItems);
            else setActiveIndex((prev) => (prev - 1 + countItems) % countItems);
        }

        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            document.body.style.userSelect = 'none';
        } else {
            document.body.style.userSelect = 'auto';
        }

        return () => {
            document.body.style.userSelect = 'auto';
        };
    }, [isDragging]);

    return (
        <div className={style.wrapper}>
            <div
                className={style.container}
                ref={containerRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
                <div className={style.lenta} style={{ transform: `translateX(calc(-${activeIndex} * (var(--widthBlock) + var(--gap))))` }}>
                    {children}
                </div>
            </div>
            <div className={style.buttonsWrapper}>
                <button onClick={() => setActiveIndex((prev) => (prev - 1 + countItems) % countItems)}><i className='bx bx-chevron-left'/></button>
                <div className={style.lineButton}>
                    {buttons}
                </div>
                <button className={style.buttonright} onClick={() => setActiveIndex((prev) => (prev + 1) % countItems)}><i className='bx bx-chevron-right'/></button>
            </div>
        </div>
    );
}
