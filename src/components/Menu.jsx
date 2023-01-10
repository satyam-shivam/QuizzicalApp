import React from "react";
import { homePageData } from "../Data";

export default function MenuPage(props) {

    const categoryInputElements = homePageData.cateories.map( category => (
        <label key={category.value } className="category">
            <input 
                type="radio" 
                name="category"
                onChange={ props.handleOnChange }
                value={ category.value }
                checked={ props.menu.category === category.value } 
            />
            { category.type }
        </label>

    ))
    
    const difficultyInputElements = homePageData.diffculties.map( range => (
        <label key={ range.value } className="category">
            <input 
                type="radio"
                name="difficulty"
                value={ range.value }
                onChange={ props.handleOnChange }
                checked={ props.menu.difficulty === range.value }
            />
            {range.type}
        </label>
    ))
    
    const typeInputElements = homePageData.questionType.map( data => (
        <label key={ data.value } className="category">
            <input 
                type="radio"
                name="type"
                value={ data.value }
                onChange={ props.handleOnChange }
                checked={ props.menu.type === data.value }
            />
            { data.type }
        </label>
    ))
    
    return (
        <>
            <h1 className="title">Quizzical</h1>
            <fieldset className="form-category">
                <legend className="category-title">Select Category</legend>
                {categoryInputElements}
            </fieldset>

            <fieldset className="form-difficulty">
                <legend className="category-title">Select Difficulty</legend>
                {difficultyInputElements}
            </fieldset>

            <fieldset className="form-type">
                <legend className="category-title">Select Type</legend>
                {typeInputElements}
            </fieldset>

            <div className="start-btn-container">
                <button 
                    id="menu" 
                    className="start-btn"
                    onClick={ (event) => props.togglePlay(event) }
                >
                    Start Quiz
                </button>
            </div>    
        </>
    )
}