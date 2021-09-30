import React from 'react'
import Card from './Card'
import retroDrawPreview from './img/retroDrawSampleTest.PNG'

export default function Home() {
    return (
        <>
        <Card 
        title="Retro Draw"
        previewImg={<img src={retroDrawPreview} alt="Project Preview" height="150px" width="200px"/>}
        body="A retro-style drawing platform. Let your imagination run wild and see what simple yet amazing art you can create!"
        techUsed="React"
        link="https://retro-draw-spicykiwi.netlify.app/"
        />
        </>
    )
}
