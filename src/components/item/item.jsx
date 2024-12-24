import React from 'react';
import './item.css';
import { Cover } from '../cover/cover';
import { Buy } from '../buy';
import '../../App.css';

export const Item = ({ item }) => {
    return (
        <div className="item">
            <Cover image={item.image} /> 
            <div className="item_details">
                <span className="item_title">{item.title}</span>
                <p className="item_description">{item.description}</p>
            </div>
            <div className="buy">
                <span className="price">{item.price} ₽</span>
                <Buy item={item} />
            </div>
        </div>
    );
};

export default Item;
