import { useEffect, useRef } from 'react';

// style:
import './Drops.scss';

const Drops = () => {

    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    // data:
    const fadeOutOpacity = 0.025;
    const radiusIncrementMax = 0.9;
    const velocityIncrementMax = 1;
    const randRadiusMax = 10;
    const amtParticles = 2;

    let mousePos = {
        x: -500,
        y: -500
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const context = canvas.getContext('2d');
        context.scale(2, 2);
        contextRef.current = context;

        animate();

    }, []);

    const dropsArray = [];

    class Drop {
        constructor(x, y, radius) {
            this.posOrNeg = Math.random() + 0.1 > 0.5 ? '+' : '-';
            this.randNumX = `${this.posOrNeg}${Math.random() * velocityIncrementMax + 0.5}`;
            this.randNumY = `${this.posOrNeg}${Math.random() * velocityIncrementMax + 0.5}`;
            this.radiusIncrement = Math.random() * radiusIncrementMax;
            this.radius = radius;
            this.x = x;
            this.y = y;
            this.startAngle = 0;
            this.endAngle = 2 * Math.PI;
            this.arcVal = Math.PI * 2;
            this.antiClockwise = Math.random() > 0.5;
            this.opacity = 1;
            this.xVel = parseInt(this.randNumX);
            this.yVel = parseInt(this.randNumY);
        }

        draw() {
            this.opacity -= fadeOutOpacity;
            this.x += this.xVel;
            this.y += this.yVel;
            this.radius += this.radiusIncrement;

            if (this.radius <= 0) this.radius = 0.01;

            contextRef.current.beginPath();
            contextRef.current.arc(this.x, this.y, this.radius, this.startAngle, this.arcVal, this.antiClockwise);
            contextRef.current.strokeStyle = `rgba(162,182,162, ${this.opacity})`;
            contextRef.current.stroke();

            if (this.opacity <= 0) {
                let index = dropsArray.indexOf(this);
                dropsArray.splice(index, 1);
            }
        }

    };

    const startDraw = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        mousePos = {
            x: offsetX,
            y: offsetY
        };

        for (let i = 0; i < amtParticles; i++) {
            let randRadius = Math.floor(Math.random() * randRadiusMax);
            dropsArray.push(new Drop(mousePos.x, mousePos.y, randRadius));
        }
    };

    const animate = () => {
        contextRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
        dropsArray.forEach(drop => drop.draw());
        requestAnimationFrame(animate);
    };

    return (
        <div className="drops__wrap">
            <canvas
                onMouseMove={startDraw}
                ref={canvasRef}
            />
        </div>
    );
}

export default Drops;
