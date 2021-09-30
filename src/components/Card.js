import React from 'react'
import './Card.css'

export default function Card({title, previewImg, body, techUsed, link}) {
    return (
        <div className="card-container">

            <div className="card-title">
                {title}
            </div>

            <div className="card-body">
                {body}
            </div>

            <div className="card-image">
                {previewImg}
            </div>

            <div className="card-tech">
                    Technologies used: {techUsed}
            </div>

            <div className="card-link">
                <a href={link} className="card-btn" target="_blank" rel="noreferrer">Link</a>
            </div>

        </div>
    )
}
