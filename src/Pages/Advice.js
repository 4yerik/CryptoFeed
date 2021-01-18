// import React from 'react';
import '../App.css';
import React, { Component } from 'react';
import Card from '../Components/Card.jsx';
import { isDeclareTypeAlias } from '@babel/types';

class Diets extends Component {
    render() {
        const diets = [
            {
                name: "Paleo",
                description: "Simple diet that focuses on eating whole foods like meat, fish, eggs, vegetables, fruits, and nuts while avoiding processed foods.",
                avoid: [
                    "dairy",
                    "pasta",
                    "bread",
                    "rice",
                    "oats",
                    "quinoa",
                    "soy",
                    "corn",
                    "refined sugar",
                    "potatoes",
                    "beans",
                    "vegetable oils"
                ]
            },
            {
                name: "Keto",
                description: "Low carbs, no sugars. cheese allowed",
                avoid: [
                    "peas",
                    "pasta",
                    "bread",
                    "milk",
                    "yogurt",
                    "rice",
                    "oats",
                    "quinoa",
                    "soy",
                    "corn",
                    "refined sugar",
                    "potatoes",
                    "vegetable oils"
                ]

            }
        ];

        return (
            <div>
                <h2>nutition basics</h2>
                <h2>popular diets</h2>
                {diets.map(diet => (
                    <Card
                        name={diet.name}
                        description={diet.description}
                        avoid={diet.avoid}
                    />
                ))
                }
            </div>
        );
    }
}

export default Diets;