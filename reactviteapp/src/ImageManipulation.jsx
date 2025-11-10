import React, { useState } from 'react'
import image from './components/image1.jpg'

function ImageManipulation() {
    const [tHeight, setTHeight] = useState(200)
    const [tWidth, setTWidth] = useState(200)
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    const [imgAngle, setImgAngle] = useState(0)

    function setColor() {
        setRed(Math.random() * 255)
        setGreen(Math.random() * 255)
        setBlue(Math.random() * 255)
    }

    function imgRotate() {
        // alert("hello")
        setImgAngle(imgAngle + 30)
    }

    return (
        <>
            <div>
                Image Manipulation
            </div>

            <img src={image} height={tHeight} width={tWidth} border={2} alt="image" style ={{transform: `rotate(${imgAngle}deg)`, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
            <div>
                <button onClick={() => setTHeight(tHeight + 50)}>increase height</button>

                <button onClick={() => setTHeight(tHeight - 50)}>decrease height</button>
                
                <button onClick={() => setTWidth(tWidth + 50)}>increase width</button>

                <button onClick={() => setTWidth(tWidth - 50)}>decrease width</button>

            </div>

            <div>
                <button onClick={setColor}>Change background Color</button>
            </div>
            <div>
                <button onClick={imgRotate}>Rotate img</button>
            </div>



        </>
    )
}

export default ImageManipulation
