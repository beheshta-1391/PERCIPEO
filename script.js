// =================================
// RECIPEO - MAIN JAVASCRIPT
// =================================

// 1. RECIPES DATA

const recipes = [
  {
    id: 1,
    name: "Italian Pizza",
    time: "30 min",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
  },
  {
    id: 2,
    name: "Fresh Salad",
    time: "15 min",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
  },
  {
    id: 3,
    name: "Chocolate Cake",
    time: "45 min",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
  },
  {
    id: 4,
    name: "Pancakes",
    time: "20 min",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600",
  },
  {
    id: 5,
    name: "Chicken Pasta",
    time: "35 min",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
  },
  {
    id: 6,
    name: "Cheese Burger",
    time: "25 min",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
  },
  {
    id: 7,
    name: "Fruit Smoothie",
    time: "10 min",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600",
  },
  {
    id: 8,
    name: "Strawberry Dessert",
    time: "25 min",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600",
  },
  {
    id: 9,
    name: "Grilled Chicken",
    time: "40 min",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600",
  },
  {
    id: 10,
    name: "Sushi Rolls",
    time: "30 min",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600",
  },
];
// 2. CATEGORIES DATA
const categories = [
  {
    name: "All Recipes",
    image: recipes[0].image,
  },
  {
    name: "Breakfast",
    image: recipes[3].image,
  },
  {
    name: "Lunch",
    image: recipes[0].image,
  },
  {
    name: "Dinner",
    image: recipes[4].image,
  },
  {
    name: "Desserts",
    image: recipes[2].image,
  },
  {
    name: "Pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
  },
  {
    name: "Pasta",
    image: recipes[4].image,
  },
  {
    name: "Salads",
    image: recipes[1].image,
  },
  {
    name: "Burgers",
    image: recipes[5].image,
  },
  {
    name: "Seafood",
    image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400",
  },
  {
    name: "Drinks",
    image: recipes[6].image,
  },
  {
    name: "Vegetarian",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400",
  },
  {
    name: "Chicken",
    image: recipes[8].image,
  },
  {
    name: "Soups",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400",
  },
  {
    name: "Snacks",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400",
  },
];
