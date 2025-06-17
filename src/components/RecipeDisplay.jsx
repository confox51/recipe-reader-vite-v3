// src/components/RecipeDisplay.jsx
import React from 'react';

export default function RecipeDisplay({ recipe, onBack, onTest, onSuggestPairings, onSuggestVariations }) {
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
                        <div className="md:col-span-1">
                            <button 
                                onClick={onSuggestPairings}
                                className="mb-4 bg-purple-100 text-purple-700 font-semibold py-2 px-4 rounded-full hover:bg-purple-200 transition-colors flex items-center gap-2"
                            >
                                <span>✨</span>
                                Suggest Pairings
                            </button>
                            <div className="bg-blue-50 p-6 rounded-xl">
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
                        </div>

                        {/* Instructions Section */}
                        <div className="md:col-span-2">
                            <button 
                                onClick={onSuggestVariations}
                                className="mb-4 bg-teal-100 text-teal-700 font-semibold py-2 px-4 rounded-full hover:bg-teal-200 transition-colors flex items-center gap-2"
                            >
                                <span>✨</span>
                                Suggest Variations
                            </button>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-semibold text-gray-800">Instructions</h2>

                            </div>
                            <ol className="space-y-4">
                                {recipe.instructions.map((step, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">{i + 1}</span>
                                        <p className="text-gray-700 leading-relaxed">{step}</p>
                                    </li>
                                ))}
                            </ol>
                            <div className="flex items-center gap-3">
                                    {/* Audio Player */}
                                    <div className="bg-green-100 p-2 rounded-lg">
                                        <audio controls className="h-8">
                                            <source src="/recipe_ingredients_0.wav" type="audio/wav" />
                                            Your browser does not support the audio element.
                                        </audio>
                                    </div>
                                    {/* The "Read Aloud" button from the reference is disabled for simplicity. */}
                                    <button onClick={onTest} className="bg-blue-100 text-blue-800 font-semibold py-2 px-4 rounded-full flex items-center gap-2 cursor-pointer" >
                                        Read Aloud
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}