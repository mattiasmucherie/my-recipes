const recipes = [
  {
    id: 0,
    title: "Classic Spaghetti Bolognese",
    description:
      "A classic Italian dish featuring spaghetti in a rich tomato sauce with ground beef and vegetables.",
    ingredients: [
      "1 lb spaghetti",
      "1 lb ground beef",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 can (28 oz) crushed tomatoes",
      "1 carrot, chopped",
      "1 stalk celery, chopped",
      "1 tbsp olive oil",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "1/2 tsp dried oregano",
      "1/2 tsp dried basil",
    ],
    instructions: [
      "Cook spaghetti according to package instructions.",
      "In a large skillet, heat olive oil over medium-high heat.",
      "Add ground beef and cook until browned, about 5 minutes.",
      "Add onion and garlic and cook until onion is translucent, about 3 minutes.",
      "Add carrot and celery and cook until vegetables are slightly softened, about 5 minutes.",
      "Add crushed tomatoes, salt, pepper, oregano, and basil and bring to a simmer.",
      "Reduce heat to low and let simmer for 15-20 minutes, until sauce has thickened.",
      "Serve sauce over spaghetti.",
    ],
  },
  {
    id: 1,
    title: "Roasted Chicken Thighs with Vegetables",
    description:
      "Juicy and flavorful roasted chicken thighs with vegetables, perfect for a weeknight dinner.",
    ingredients: [
      "8 bone-in, skin-on chicken thighs",
      "1 lb baby potatoes, halved",
      "1 lb baby carrots",
      "1 onion, chopped",
      "4 cloves garlic, minced",
      "2 tbsp olive oil",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "1 tsp dried thyme",
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "In a large bowl, combine potatoes, carrots, onion, garlic, olive oil, salt, pepper, and thyme.",
      "Arrange chicken thighs on a baking sheet, skin side up.",
      "Pour vegetable mixture around chicken.",
      "Bake for 40-45 minutes, until chicken is cooked through and vegetables are tender.",
      "Serve chicken and vegetables immediately.",
    ],
  },
  {
    id: 2,
    title: "Vegetarian Chili",
    description:
      "A hearty and flavorful vegetarian chili with beans, vegetables, and spices.",
    ingredients: [
      "2 tbsp olive oil",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "2 bell peppers, chopped",
      "2 carrots, chopped",
      "1 zucchini, chopped",
      "1 can (28 oz) diced tomatoes",
      "2 cans (15 oz each) kidney beans, drained and rinsed",
      "1 can (15 oz) corn, drained",
      "2 tbsp chili powder",
      "1 tsp cumin",
      "1 tsp smoked paprika",
      "1/2 tsp salt",
      "1/4 tsp black pepper",
    ],
    instructions: [
      "In a large pot or Dutch oven, heat olive oil over medium-high heat.",
      "Add onion and garlic and cook until onion is translucent, about 3 minutes.",
      "Add bell peppers, carrots, and zucchini and cook until vegetables are slightly softened, about 5 minutes.",
      "Add diced tomatoes, kidney beans, corn, chili powder, cumin, smoked paprika, salt, and black",
    ],
  },
  {
    id: 3,
    title: "Classic French Omelette",
    description:
      "A simple and delicious omelette that's perfect for breakfast or brunch.",
    ingredients: [
      "3 large eggs",
      "1 tablespoon unsalted butter",
      "Salt and freshly ground black pepper, to taste",
    ],
    instructions: [
      "Crack the eggs into a bowl and whisk them together until they're well combined.",
      "Heat a nonstick skillet over medium-high heat. Add the butter and let it melt, swirling the pan to coat the bottom and sides.",
      "Pour the beaten eggs into the skillet and use a spatula to gently stir and lift the eggs as they cook. When the eggs are mostly set but still slightly runny on top, use the spatula to fold the omelette in half.",
      "Let the omelette cook for another 30 seconds to a minute, or until it's fully set and the cheese is melted.",
      "Slide the omelette onto a plate and sprinkle with salt and pepper to taste. Serve immediately.",
    ],
  },
  {
    id: 4,
    title: "Classic Italian Tomato Sauce",
    description:
      "A rich and flavorful tomato sauce that's perfect for pasta or pizza.",
    ingredients: [
      "2 tablespoons olive oil",
      "1 onion, chopped",
      "4 garlic cloves, minced",
      "2 cans (28 ounces each) of whole peeled tomatoes",
      "1 teaspoon dried oregano",
      "1/2 teaspoon red pepper flakes",
      "Salt and freshly ground black pepper, to taste",
      "1/4 cup chopped fresh basil leaves",
    ],
    instructions: [
      "Heat the olive oil in a large saucepan over medium heat. Add the onion and garlic and sauté until the onion is translucent, about 5 minutes.",
      "Add the tomatoes, oregano, red pepper flakes, salt, and pepper to the pan. Break up the tomatoes with a wooden spoon.",
      "Bring the sauce to a simmer and cook for about 20 minutes, stirring occasionally, until the sauce has thickened.",
      "Stir in the chopped basil and cook for another minute or two.",
      "Remove the sauce from the heat and let it cool slightly. Use an immersion blender or transfer the sauce to a blender and puree until smooth.",
      "Return the sauce to the pan and heat through before serving with your favorite pasta or using as a pizza sauce.",
    ],
  },
  {
    id: 5,
    title: "Healthy Quinoa and Vegetable Salad",
    description:
      "A colorful and nutritious salad made with quinoa and a variety of fresh vegetables.",
    ingredients: [
      "1 cup quinoa, rinsed and drained",
      "2 cups water",
      "1 red bell pepper, diced",
      "1 yellow bell pepper, diced",
      "1 small cucumber, diced",
      "1 small red onion, diced",
      "1 cup cherry tomatoes, halved",
      "1/4 cup chopped fresh parsley leaves",
      "1/4 cup chopped fresh mint leaves",
      "1/4 cup extra-virgin olive oil",
      "2 tablespoons freshly squeezed lemon juice",
      "Salt and freshly ground black pepper, to taste",
    ],
    instructions: [
      " In a medium saucepan, combine the quinoa and water. Bring to a boil, then reduce the heat and simmer for about 15-20 minutes, or until the quinoa is tender and the water is absorbed.",
      " In a large mixing bowl, combine the cooked quinoa, bell peppers, cucumber, red onion, cherry tomatoes, parsley, and mint.",
      " In a small bowl, whisk together the olive oil, lemon juice, salt, and pepper to make the dressing.",
      " Pour the dressing over the salad and toss well to combine.",
      " Taste and adjust seasoning as needed.",
      " Chill the salad in the refrigerator for at least 30 minutes before serving.",
    ],
  },
];

export const getOneRecipe = (id) => {
  return recipes[id];
};
export const getAllRecipes = () => {
  return recipes.map((r) => ({ id: r.id, title: r.title }));
};
