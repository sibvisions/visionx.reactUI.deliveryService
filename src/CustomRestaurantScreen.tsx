/** React imports */
import React, { FC, useEffect, useState } from "react"
import "./CustomRestaurantScreen.scss"
import { ListBox } from 'primereact/listbox';
import { Galleria } from 'primereact/galleria';

import burger from "./stock-photos/stock-burger.jpg";
//import burgerThb from "./stock-photos/stock-burger-thumb.jpg";
import burgerKitchen from "./stock-photos/stock-burger-kitchen.jpg";
//import burgerKitchenThb from "./stock-photos/stock-burger-kitchen-thumb.jpg";
import burgerRestaurant from "./stock-photos/stock-burger-restaurant.jpg";
//import burgerRestaurantThb from "./stock-photos/stock-burger-restaurant-thumb.jpg";

import pizza from "./stock-photos/stock-pizza.jpg";
//import pizzaThb from "./stock-photos/stock-pizza-thumb.jpg";
import pizzaKitchen from "./stock-photos/stock-pizza-kitchen.jpg";
//import pizzaKitchenThb from "./stock-photos/stock-pizza-kitchen-thumb.jpg";
import pizzaRestaurant from "./stock-photos/stock-pizza-restaurant.jpg";
//import pizzaRestaurantThb from "./stock-photos/stock-pizza-restaurant-thumb.jpg";

import steak from "./stock-photos/stock-steak.jpg";
//import steakThb from "./stock-photos/stock-steak-thumb.jpg";
import steakKitchen from "./stock-photos/stock-steak-kitchen.jpg";
//import steakKitchenThb from "./stock-photos/stock-steak-kitchen-thumb.jpg";
import steakRestaurant from "./stock-photos/stock-steak-restaurant.jpg";
//import steakRestaurantThb from "./stock-photos/stock-steak-restaurant-thumb.jpg";

const CustomRestaurantScreen:FC<{}> = () => {
    const burgerImages:any[] = [
        {id: '1', image: burger, alt: 'burger-image', thumbnail: burger},
        {id: '2', image: burgerKitchen, alt: 'burger-kitchen-image', thumbnail: burgerKitchen},
        {id: '3', image: burgerRestaurant, alt: 'burger-restaurant-image', thumbnail: burgerRestaurant}
    ];

    const pizzaImages:any[] = [
        {id: '1', image: pizza, alt: 'pizza-image', thumbnail: pizza},
        {id: '2', image: pizzaKitchen, alt: 'pizza-kitchen-image', thumbnail: pizzaKitchen},
        {id: '3', image: pizzaRestaurant, alt: 'pizza-restaurant-image', thumbnail: pizzaRestaurant}
    ];

    const steakImages:any[] = [
        {id: '1', image: steak, alt: 'steak-image', thumbnail: steak},
        {id: '2', image: steakKitchen, alt: 'steak-kitchen-image', thumbnail: steakKitchen},
        {id: '3', image: steakRestaurant, alt: 'steak-restaurant-image', thumbnail: steakRestaurant}
    ];

    const [selectedRestaurant, setSelectedRestaurant] = useState<"Burger"|"Pizza"|"Steak">("Burger");

    const [selectedImages, setSelectedImages] = useState<any[]>(burgerImages)

    const restaurants = [
        { label: "John's Burger", value: 'Burger' },
        { label: 'Pizza Pepe', value: 'Pizza' },
        { label: 'Steak Kings', value: 'Steak' },
    ];

    useEffect(() => {
        switch (selectedRestaurant) {
            case "Burger":
                setSelectedImages(burgerImages);
                break;
            case "Pizza":
                setSelectedImages(pizzaImages);
                break;
            case "Steak":
                setSelectedImages(steakImages);
                break;
        }
    }, [selectedRestaurant])

    const itemTemplate = (item:any) => {
        return <img src={item.image} alt={item.alt} style={{ width: '100%', maxHeight: "100%" }} />
    }

    const thumbnailTemplate = (item:any) => {
        return <img src={item.thumbnail} style={{ maxWidth: "80px", maxHeight: "60px" }} alt={item.alt} />
    }

    return (
        <div className="projects-screen-wrap">
            <ListBox 
                value={selectedRestaurant} 
                options={restaurants} 
                onChange={(e) => setSelectedRestaurant(e.value)} 
                optionLabel="label" />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", width: "100%" }}>
                <span style={{ position: "absolute", right: "0px", color: "#d4d8dc", zIndex: "1" }} >source: https://www.pexels.com/ </span>
                <Galleria value={selectedImages} numVisible={3} item={itemTemplate} thumbnail={thumbnailTemplate} style={{ width: "100%", flex: "1" }} /> 
            </div>
            
            
        </div>
        
    )
}
export default CustomRestaurantScreen