// src/components/RecipeDisplay.jsx
import React from 'react';

export default function RecipeDisplay({ recipe, onBack }) {
    if (!recipe) {
        return (
            <div className="max-w-4xl mx-auto p-8 text-center">
                <p className="text-red-500">No recipe data available.</p>
                <button onClick={onBack} className="mt-4 bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg">Back</button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">{recipe.title}</h1>
                            {recipe.description && <p className="text-gray-600 mt-2">{recipe.description}</p>}
                        </div>
                        <button onClick={onBack} className="ml-4 flex-shrink-0 bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">Back</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                        {/* Ingredients Section */}
                        <div className="md:col-span-1 bg-blue-50 p-6 rounded-xl">
                            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Ingredients</h2>
                            <ul className="space-y-3">
                                {recipe.ingredients.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-blue-500 font-bold mr-3">&#8226;</span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Instructions Section */}
                        <div className="md:col-span-2">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-semibold text-gray-800">Instructions</h2>
                                {/* The "Read Aloud" button from the reference is disabled for simplicity. */}
                                <button className="bg-blue-100 text-blue-800 font-semibold py-2 px-4 rounded-full flex items-center gap-2 cursor-not-allowed opacity-50" disabled>
                                    Read Aloud
                                </button>
                            </div>
                            <ol className="space-y-4">
                                {recipe.instructions.map((step, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">{i + 1}</span>
                                        <p className="text-gray-700 leading-relaxed">{step}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}