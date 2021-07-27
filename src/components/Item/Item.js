import React from 'react'
import './Item.css'
export default function Item(props) {
    const clickHandler = () => {
        if(props.isClient){
            const clients = props.clients;
            props.setClients(clients.filter(item => {return item.id !== props.id}))
        }else if(props.isApartment){
            const apartments = props.apartments;
            props.setApartments(apartments.filter(item => {return item.id !== props.id}))
        }

    };
    
    return (
        <div className='item'>
            {props.isClient && <div className='client'><i class="fas fa-angle-double-right"></i><p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.budget.toFixed(3)}</p>
            <p>{props.city}</p>
            <p>{props.situation}</p><i onClick={clickHandler}class="fas fa-minus-square"></i></div>}

            {props.isApartment && <div className='apartment'><i class="fas fa-angle-double-right"></i><p>{props.id}</p>
            <p>{props.net}</p>
            <p>{props.room} + {props.extra}</p>
            <p>{props.rent ? props.price + '(' + props.rentTime + ')' : props.price.toFixed(3)}</p>
            <p>{props.rent ? 'Kiralık' : 'Satılık'}</p>
            <p>{props.situation}</p><i onClick={clickHandler}class="fas fa-minus-square"></i></div>}         
        </div>
    )
}
