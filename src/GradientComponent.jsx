'use client';
import { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

const GradientComponent = () => {
    const canvasRef = useRef(null);
    const gradientRef = useRef(null);

    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = `a { display: none !important; }`;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;

        const config = {
            colors: [
                { color: '#FFFFFF', enabled: true },
                { color: '#F9FAFB', enabled: true },
                { color: '#F7F7FF', enabled: true },
                { color: '#F8F9F9', enabled: true },
                { color: '#F5F6FA', enabled: true },
            ],
            speed: 5,
            horizontalPressure: 3,
            verticalPressure: 5,
            waveFrequencyX: 1,
            waveFrequencyY: 3,
            waveAmplitude: 8,
            shadows: 4,
            highlights: 5,
            colorBrightness: 1,
            colorSaturation: 2,
            wireframe: false,
            colorBlending: 7,
            backgroundColor: '#FFFFFF',
            backgroundAlpha: 1,
            grainScale: 1,
            grainSparsity: 0,
            grainIntensity: 0.175,
            grainSpeed: 1,
            resolution: 2,
            yOffset: 0,
        };

        gradientRef.current = new NeatGradient({
            ref: canvasRef.current,
            ...config,
        });

        return () => {
            gradientRef.current?.destroy();
        };
    }, []);

    return (
        <canvas
            id="gradientCanvas"
            style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}
            ref={canvasRef}
        />
    );
};

export default GradientComponent;
