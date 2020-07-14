import React from 'react'
import './card-list.css'
import Card from '../card/Card'

const CardList = (props) => {
    return (
        <div className='card-list'>
        {
          props.monsters.map(monster => (
          <Card key={monster.id} monster={monster}></Card>
          ))
        }
            
        </div>
    )
}

export default CardList
