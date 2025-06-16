// src/components/RecipeInput.jsx
import React from 'react';

// This component is responsible for the recipe input form.
export default function RecipeInput({
    onShowRecipe,
    onLoadExample,
    title,
    setTitle,
    description,
    setDescription,
    ingredients,
    setIngredients,
    instructions,
    setInstructions,
    error,
    onClear
}) {
    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Recipe Reader</h1>
                <p className="text-gray-500 mb-8">Enter your recipe details below.</p>

                {/* Manual Form Inputs */}
                <div className="space-y-6">
                    <div>
                        <label htmlFor="title-input" className="block text-sm font-medium text-gray-700 mb-2">Recipe Title</label>
                        <input type="text" id="title-input" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" placeholder="e.g., World's Best Lasagna" />
                    </div>
                    <div>
                        <label htmlFor="description-textarea" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <textarea id="description-textarea" rows="3" value={description} onChange={e => setDescription(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" placeholder="A short and sweet description... (optional)."></textarea>
                    </div>
                    <div>
                        <label htmlFor="ingredients-textarea" className="block text-sm font-medium text-gray-700 mb-2">Ingredients</label>
                        <textarea id="ingredients-textarea" rows="8" value={ingredients} onChange={e => setIngredients(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" placeholder="Enter each ingredient on a new line."></textarea>
                    </div>
                    <div>
                        <label htmlFor="instructions-textarea" className="block text-sm font-medium text-gray-700 mb-2">Instructions</label>
                        <textarea id="instructions-textarea" rows="10" value={instructions} onChange={e => setInstructions(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" placeholder="Enter each step on a new line."></textarea>
                    </div>
                </div>

                {error && (<div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md my-6"><p>{error}</p></div>)}

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
                    <button onClick={onLoadExample} className="w-full sm:w-auto text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors">Load Example Recipe</button>
                    <button onClick={onClear} className='w-full sm:w-auto bg-red-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-600 transition-colors shadow-md transform hover:scale-105'>Clear</button>
                    <button onClick={onShowRecipe} className="w-full sm:w-auto bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors shadow-md transform hover:scale-105">View Recipe</button>
                </div>
            </div>
        </div>
    );
}