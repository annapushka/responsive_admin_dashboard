import React, { useRef, useEffect } from 'react';
// import { Application } from '@splinetool/runtime';

const Avatar = props => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.fillStyle = 'white'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        // if (canvasRef) {
        //     const app = new Application(canvasRef);
        //     app.load('https://prod.spline.design/t3uW7iIRYrlZCOsy/scene.splinecode');
        // }
    }, [])

    return <canvas ref={canvasRef} {...props} />
}


export default Avatar