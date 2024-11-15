import { useState, useEffect } from 'react'

function Color() {

    function randomizeBackground() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            randomizeBackground
        }, 1000)

        return () => clearInterval(interval)
    }, [])
}

export default Color