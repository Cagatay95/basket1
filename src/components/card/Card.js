import React from 'react'
import CardImage from '../cardimage/CardImage'
import CardTitle from '../cardTitle/CardTitle'
import CardInfo from '../cardinfo/CardInfo'
import "./card.css"
function Card({ title, image, info, onClick }) {
    return (
        <div className='card' onClick={onClick}>
            <div className='card-body'>
                <CardTitle title={title} />
                <CardImage image={image} />
                <CardInfo info={info} />
            </div>
        </div>
    )
}
export default Card
