// src/App.jsx
import React from 'react';
import RecipeInput from './components/RecipeInput.jsx';
import RecipeDisplay from './components/RecipeDisplay.jsx';
import Modal from './components/Modal.jsx';
import { testFunction } from './utils/test.js';

// Dummy data for the example recipe
const exampleRecipe = {
    title: 'Classic Chocolate Chip Cookies',
    description: 'The best chocolate chip cookie recipe you\'ll ever try! Perfectly soft, chewy, and loaded with chocolate chips.',
    ingredients: [
        '1 cup (2 sticks) unsalted butter, softened',
        '3/4 cup granulated sugar',
        '3/4 cup packed brown sugar',
        '2 large eggs',
        '1 teaspoon vanilla extract',
        '2 1/4 cups all-purpose flour',
        '1 teaspoon baking soda',
        '1/2 teaspoon salt',
        '2 cups semisweet chocolate chips'
    ],
    instructions: [
        'Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.',
        'In a large bowl, cream together the butter, granulated sugar, and brown sugar until light and fluffy.',
        'Beat in the eggs one at a time, then stir in the vanilla.',
        'In a separate bowl, whisk together the flour, baking soda, and salt.',
        'Gradually add the dry ingredients to the wet ingredients and mix until just combined.',
        'Stir in the chocolate chips.',
        'Drop rounded tablespoons of dough onto the prepared baking sheets.',
        'Bake for 9 to 11 minutes, or until golden brown. Let cool on the baking sheets for a few minutes before transferring to wire racks to cool completely.'
    ]
};

export default function App() {
    const [view, setView] = React.useState('input'); // 'input' or 'display'
    const [recipe, setRecipe] = React.useState(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    // State for individual form fields
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [ingredients, setIngredients] = React.useState('');
    const [instructions, setInstructions] = React.useState('');
    const [error, setError] = React.useState('');

    // Function to switch to display view
    const handleShowRecipe = () => {
        if (!title || !ingredients || !instructions) {
            setError("Please fill in the Title, Ingredients, and Instructions fields.");
            return;
        }

        const parsedRecipe = {
            title,
            description,
            ingredients: ingredients.split('\n').filter(line => line.trim() !== ''),
            instructions: instructions.split('\n').filter(line => line.trim() !== ''),
        };
        setRecipe(parsedRecipe);
        setError(''); // Clear error on success
        setView('display');
    };

    // Function to load the example recipe into the input fields
    const handleLoadExample = () => {
        setTitle(exampleRecipe.title);
        setDescription(exampleRecipe.description);
        setIngredients(exampleRecipe.ingredients.join('\n'));
        setInstructions(exampleRecipe.instructions.join('\n'));
        setError(''); // Clear any existing errors
    };

    // Function to clear the input fields
    const handleClear = () => {
        setTitle('');
        setDescription('');
        setIngredients('');
        setInstructions('');
        setError('');
    };

    // Function to switch back to input view
    const handleBack = () => {
        setView('input');
    };

    // Function to handle test button click
    const handleTestClick = () => {
        testFunction(ingredients);
    };

    // Function to handle suggest pairings modal
    const handleSuggestPairings = () => {
        setIsModalOpen(true);
    };

    // Function to handle suggest variations modal  
    const handleSuggestVariations = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Test Modal" isLoading={false}>
                <p>This is a test modal</p>
            </Modal>
            <div className="bg-gray-50 min-h-screen font-sans">
                {view === 'input' ? (
                    <RecipeInput
                        onShowRecipe={handleShowRecipe}
                        onLoadExample={handleLoadExample}
                        title={title} setTitle={setTitle}
                        description={description} setDescription={setDescription}
                        ingredients={ingredients} setIngredients={setIngredients}
                        instructions={instructions} setInstructions={setInstructions}
                        error={error}
                        onClear={handleClear}
                    />
                ) : (
                    <RecipeDisplay 
                        recipe={recipe} 
                        onBack={handleBack} 
                        onTest={handleTestClick}
                        onSuggestPairings={handleSuggestPairings}
                        onSuggestVariations={handleSuggestVariations} />
                )}
            </div>
            <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
                <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Test Modal</button>
            </div>
        </>
    );
}