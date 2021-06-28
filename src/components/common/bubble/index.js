import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Goo } from '@components/common';
import { useTheme, useMenu } from '@hooks';
import * as S from '@components/common/bubble/styling';

function Bubble() {
    const [particles, setParticles] = useState([]);
    const numberOfParticles = 100;
    const position = useRef();
    const contextRef = useRef(null);
    const canvasRef = useRef(null);
    const colorRef = useRef(null);
    const animationFrameId = useRef(null);
    const { currentTheme } = useTheme();
    const { isMenuOpen } = useMenu();

    useEffect(() => {
        colorRef.current =
            currentTheme === 'light'
                ? isMenuOpen
                    ? '#ffffff'
                    : '#000000'
                : isMenuOpen
                ? '#000000'
                : '#ffffff';
    }, [isMenuOpen, currentTheme]);

    class Particle {
        constructor(x, y, size, weight) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.color = colorRef.current;
            this.weight = weight;
        }
        draw() {
            contextRef.current.beginPath();
            contextRef.current.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2,
                false,
            );
            contextRef.current.fillStyle = colorRef.current;
            contextRef.current.fill();
        }
        update() {
            this.size -= 0.1;
            if (this.size < 0) {
                this.x = position.current.x + Math.random() * 20;
                this.y = position.current.y + Math.random() * 20;
                this.size = Math.random() * 30 + 15;
                this.weight = Math.random() * 2 - 0.5;
            }
            this.y += this.weight;
            this.weight += 0.2;

            if (this.y > window?.innerHeight - this.size) {
                this.weight *= -0.2;
            }
        }
    }

    const init = (canvas) => {
        let particleArray = [];

        for (let i = 0; i < numberOfParticles; i++) {
            let color = colorRef.current;
            let weight = 1;
            particleArray.push(new Particle(0, 0, 1, color, weight));
        }
        setParticles(particleArray);
    };

    const animate = () => {
        contextRef.current.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height,
        );
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        animationFrameId.current = requestAnimationFrame(animate);
    };

    const resized = () => {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
    };

    const handleMousePosition = (event) => {
        position.current = {
            x: event.pageX,
            y: event.pageY,
        };
    };

    const onMouseDown = (event) => {
        handleMousePosition(event);
        window.addEventListener('mousemove', handleMousePosition);
    };

    const removeMouse = () => {
        position.current = {
            x: undefined,
            y: undefined,
        };

        window.removeEventListener('mousemove', handleMousePosition);
    };

    useEffect(() => {
        if (!canvasRef) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        contextRef.current = context;
    }, [canvasRef]);

    useEffect(() => {
        if (!contextRef) return;
        init(canvasRef.current);

        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', removeMouse);
        return () => {
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', removeMouse);
        };
    }, [contextRef]);

    useEffect(() => {
        if (!canvasRef || !particles.length) return;

        animate(canvasRef.current);

        return () => cancelAnimationFrame(animationFrameId.current);
    }, [particles]);

    useEffect(() => {
        const canvas = canvasRef.current;

        resized();
        window.addEventListener('resize', resized);

        gsap.delayedCall(
            0.2,
            () => (position.current = { x: undefined, y: undefined }),
        );

        return () => {
            cancelAnimationFrame(animationFrameId.current);
            window.removeEventListener('resize', resized);
        };
    }, []);

    return (
        <S.Container>
            <Goo intensity="strong">
                <S.Canvas ref={canvasRef} />
            </Goo>
        </S.Container>
    );
}

export default Bubble;
