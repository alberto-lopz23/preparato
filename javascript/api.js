const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'ca37cd1b9fmsh620051dbbe45734p118189jsn0a22a3341219',
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
};

async function fetchRecipe() {
    try {
        const response = await fetch(url, options);

        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convertir la respuesta en JSON
        const result = await response.json();
        console.log('Resultado:', result);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

// Llamar a la función para obtener las recetas
fetchRecipe();
