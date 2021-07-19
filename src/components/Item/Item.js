import React from 'react'
import './Item.css'
export default function Item(props) {
    return (
        <div className='item'>
            {props.isClient && <div className='client'><i class="fas fa-angle-double-right"></i><p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.budget.toFixed(3)}</p>
            <p>{props.city}</p>
            <p>{props.situation}</p></div>}

            {props.isApartment && <div className='apartment'><i class="fas fa-angle-double-right"></i><p>{props.id}</p>
            <p>{props.net}</p>
            <p>{props.room} + {props.extra}</p>
            <p>{props.rent ? props.price + '(' + props.rentTime + ')' : props.price.toFixed(3)}</p>
            <p>{props.rent ? 'Kiralık' : 'Satılık'}</p>
            <p>{props.situation}</p></div>}         
        </div>
    )
}
