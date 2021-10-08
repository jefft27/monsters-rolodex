import './card-list.styles.css'

import { Card } from '../card/card.component'
import React from 'react'

export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.monsters.map((monster) => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    )
}
