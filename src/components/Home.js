import React from 'react'
import Card from './Card'
import retroDrawPreview from './img/RetroDrawPreviewImg.PNG'
import calculatorPreview from './img/CalculatorPreviewImg.PNG'
import retroDrawHTML from './img/RetroDrawHTML.PNG'
import arcadeSnake from './img/ArcadeSnakePreview.PNG'
import netflixClone from './img/NetflixClonePreview.PNG'
import artCollector from './img/ArtCollectorPreview.PNG'
import personalSite from './img/PersonalSitePreview.PNG'

export default function Home() {
    return (
        <>

        <div className="TitleName">
            <h1>Farhan's Projects</h1>
        </div>

        <div className="mainPage1">

            <Card
            title="Arcade - Snake Game"
            previewImg={<img src={arcadeSnake} alt="Arcade Preview" height="150px" width="200px"/>}
            body="Full Arcade is still under construction. Currently the only available game is classic Snake. More games may be added at a later date!"
            techUsed="Html/Css/Javascript"
            link="https://musing-thompson-44564c.netlify.app/"/>

            <Card 
            title="Retro Draw (React)"
            previewImg={<img src={retroDrawPreview} alt="Retro Draw project made with React preview" height="150px" width="200px"/>}
            body="A retro-style drawing platform. Let your imagination run wild and see what simple yet amazing art you can create! (This time, made with React)"
            techUsed="React"
            link="https://retro-draw-spicykiwi.netlify.app/"
            />

            <Card 
            title="Calculator"
            previewImg={<img src={calculatorPreview} alt="Calulator Project Preview" height="150px" width="200px"/>}
            body="Fully functioning calculator app. One of my earliest projects!"
            techUsed="Pure Html and Css"
            link="https://calculator-spicykiwi.netlify.app/"
            />

        </div>

        <br />

        <div className="mainPage2">

            <Card 
            title="Retro Draw (HTML/CSS)"
            previewImg={<img src={retroDrawHTML} alt="Retro Draw made with HTML and CSS preview" height="150px" width="200px" />}
            body="This is the first version of the retro-style drawing platform. "
            techUsed="Html and Css"
            link="https://retro-draw-html-css-spicykiwi.netlify.app/"
            />

            <Card
            title="Netflix Clone"
            previewImg={<img src={netflixClone} alt="Preview of netflix clone" height="150px" width="200px" />}
            body="This is a clone of netflix, looks very similar to the netflix page just without the ability to watch movies."
            techUsed="React, AstraDB, GraphQL"
            link="https://competent-bohr-554cf6.netlify.app/"
            />

            <Card
            title="The Art Collector"
            previewImg={<img src={artCollector} alt="Preview of the Art Collector" height="150px" width="200px" />}
            body="Fascinating pieces of art and history, made accessible by the Harvard Art Museums private collections. This is a front end application accessing an API."
            techUsed="Html, Css, Asynchronous Javascript"
            link="https://blissful-wilson-dcebc8.netlify.app/"
            />

        </div>

        <br />

        <div className="mainPage3">

            <Card
            title='"Personal Site"'
            previewImg={<img src={personalSite} alt="Preview of personal website" height="150px" width="200px" />}
            body="This is a template for a personal website. One of my earliest projects."
            techUsed="HTML and CSS"
            link="https://priceless-khorana-ae292d.netlify.app/"
            />

        </div>

        </>
    )
}
