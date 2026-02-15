import jollof from "./assets/images/jollof.jpg";
import lamb from "./assets/images/lamb.jpg";
import sunrise from "./assets/images/sunrise-platter.jpg";
import tilapia from "./assets/images/tilapia.jpg";
import velvet from "./assets/images/velvet.jpg";

// Breakfast
import pancakes from "./assets/images/pancakes.jpg";
import omelette from "./assets/images/omelette.jpg";
import avocadoToast from "./assets/images/avocado-toast.jpg";
import frenchToast from "./assets/images/french-toast.jpg";
import burrito from "./assets/images/burrito.jpg";
import fruitParfait from "./assets/images/fruit-parfait.jpg";

// Main Dishes
import grilledSteak from "./assets/images/grilled-steak.jpg";
import creamyPasta from "./assets/images/creamy-pasta.jpg";
import roastedChicken from "./assets/images/roasted-chicken.jpg";
import seafoodPlatter from "./assets/images/seafood-platter.jpg";
import beefBurger from "./assets/images/beef-burger.jpg";
import vegStirfry from "./assets/images/vegetable-stirfry.jpg";

// Sides
import fries from "./assets/images/fries.jpg";
import onionRings from "./assets/images/onion-rings.jpg";
import garlicBread from "./assets/images/garlic-bread.jpg";
import mashedPotatoes from "./assets/images/mashed-potatoes.jpg";
import coleslaw from "./assets/images/coleslaw.jpg";
import sideSalad from "./assets/images/side-salad.jpg";

// Desserts
import lavaCake from "./assets/images/chocolate-lava-cake.jpg";
import cheesecake from "./assets/images/cheesecake.jpg";
import tiramisu from "./assets/images/tiramisu.jpg";
import applePie from "./assets/images/apple-pie.jpg";
import iceCreamSundae from "./assets/images/ice-cream-sundae.jpg";
import brownie from "./assets/images/brownie-delight.jpg";

// Soft Beverages
import orangeJuice from "./assets/images/orange-juice.jpg";
import lemonade from "./assets/images/lemonade.jpg";
import icedTea from "./assets/images/iced-tea.jpg";
import milkshake from "./assets/images/milkshake.jpg";
import sparklingWater from "./assets/images/sparkling-water.jpg";
import smoothie from "./assets/images/smoothie.jpg";

// Hard Beverages
import redWine from "./assets/images/red-wine.jpg";
import whiteWine from "./assets/images/white-wine.jpg";
import craftBeer from "./assets/images/craft-beer.jpg";
import whiskey from "./assets/images/whiskey.jpg";
import vodkaCocktail from "./assets/images/vodka-cocktail.jpg";
import champagne from "./assets/images/champagne.jpg";

// Kids Meals
import chickenNuggets from "./assets/images/chicken-nuggets.jpg";
import miniBurger from "./assets/images/mini-burger.jpg";
import macCheese from "./assets/images/mac-cheese.jpg";
import kidsPancakes from "./assets/images/kids-pancakes.jpg";
import grilledCheese from "./assets/images/grilled-cheese.jpg";
import kidsPizza from "./assets/images/kids-pizza.jpg";

const menuData = [
  {
    category: "Breakfast",
    items: [
      { title: "Golden Pancakes", description: "Fluffy pancakes with maple syrup and fresh berries.", price: "$8.99", image: pancakes },
      { title: "Classic Omelette", description: "Three eggs with cheese and herbs.", price: "$7.50", image: omelette },
      { title: "Avocado Toast", description: "Sourdough topped with smashed avocado.", price: "$9.25", image: avocadoToast },
      { title: "French Toast", description: "Brioche toast with cinnamon.", price: "$8.75", image: frenchToast },
      { title: "Breakfast Burrito", description: "Eggs, sausage, and cheese wrap.", price: "$9.99", image: burrito },
      { title: "Fruit Parfait", description: "Greek yogurt and fresh fruits.", price: "$6.50", image: fruitParfait }
    ]
  },
  // Main Dishes
  {
    category: "Main Dishes",
    items: [
      { title: "Grilled Steak", description: "Premium steak with herb butter.", price: "$24.99", image: grilledSteak },
      { title: "Creamy Pasta", description: "Parmesan cream sauce.", price: "$16.50", image: creamyPasta },
      { title: "Roasted Chicken", description: "Herb roasted chicken.", price: "$18.75", image: roastedChicken },
      { title: "Seafood Platter", description: "Shrimp and fish selection.", price: "$27.99", image: seafoodPlatter },
      { title: "Beef Burger", description: "Juicy beef burger with fries.", price: "$13.50", image: beefBurger },
      { title: "Vegetable Stir Fry", description: "Seasonal vegetables.", price: "$14.25", image: vegStirfry }
    ]
  },
  // Sides
  {
    category: "Sides",
    items: [
      { title: "Crispy Fries", description: "Golden and lightly salted.", price: "$4.99", image: fries },
      { title: "Onion Rings", description: "Beer battered crispy rings.", price: "$5.50", image: onionRings },
      { title: "Garlic Bread", description: "Toasted bread with garlic butter.", price: "$3.75", image: garlicBread },
      { title: "Mashed Potatoes", description: "Creamy and smooth.", price: "$4.50", image: mashedPotatoes },
      { title: "Coleslaw", description: "Fresh cabbage with creamy dressing.", price: "$3.99", image: coleslaw },
      { title: "Side Salad", description: "Mixed greens with vinaigrette.", price: "$4.25", image: sideSalad }
    ]
  },
  // Desserts
  {
    category: "Desserts",
    items: [
      { title: "Chocolate Lava Cake", description: "Warm cake with molten center.", price: "$7.99", image: lavaCake },
      { title: "Cheesecake", description: "Classic baked cheesecake.", price: "$6.99", image: cheesecake },
      { title: "Tiramisu", description: "Coffee infused Italian dessert.", price: "$7.50", image: tiramisu },
      { title: "Apple Pie", description: "Traditional pie with cinnamon apples.", price: "$6.25", image: applePie },
      { title: "Ice Cream Sundae", description: "Vanilla ice cream with chocolate drizzle.", price: "$5.99", image: iceCreamSundae },
      { title: "Brownie Delight", description: "Rich chocolate brownie.", price: "$6.75", image: brownie }
    ]
  },
  // Soft Beverages
  {
    category: "Soft Beverages",
    items: [
      { title: "Fresh Orange Juice", description: "Freshly squeezed.", price: "$3.99", image: orangeJuice },
      { title: "Lemonade", description: "House made lemonade.", price: "$3.50", image: lemonade },
      { title: "Iced Tea", description: "Chilled tea with lemon.", price: "$3.25", image: icedTea },
      { title: "Milkshake", description: "Vanilla or chocolate.", price: "$4.75", image: milkshake },
      { title: "Sparkling Water", description: "Premium sparkling water.", price: "$2.99", image: sparklingWater },
      { title: "Smoothie", description: "Mixed berry smoothie.", price: "$5.50", image: smoothie }
    ]
  },
  // Hard Beverages
  {
    category: "Hard Beverages",
    items: [
      { title: "Red Wine", description: "Smooth and bold.", price: "$9.99", image: redWine },
      { title: "White Wine", description: "Crisp and refreshing.", price: "$8.99", image: whiteWine },
      { title: "Craft Beer", description: "Locally brewed selection.", price: "$6.50", image: craftBeer },
      { title: "Whiskey", description: "Premium aged whiskey.", price: "$11.99", image: whiskey },
      { title: "Vodka Cocktail", description: "Classic vodka mix.", price: "$10.50", image: vodkaCocktail },
      { title: "Champagne", description: "Sparkling celebration bottle.", price: "$12.99", image: champagne }
    ]
  },
  // Kids Meals
  {
    category: "Kids Meals",
    items: [
      { title: "Chicken Nuggets", description: "Served with fries and juice.", price: "$6.99", image: chickenNuggets },
      { title: "Mini Burger", description: "Small beef burger.", price: "$6.50", image: miniBurger },
      { title: "Mac and Cheese", description: "Creamy cheesy pasta.", price: "$5.99", image: macCheese },
      { title: "Kids Pancakes", description: "Small stack with syrup.", price: "$5.75", image: kidsPancakes },
      { title: "Grilled Cheese", description: "Toasted cheese sandwich.", price: "$5.50", image: grilledCheese },
      { title: "Kids Pizza", description: "Mini cheese pizza.", price: "$6.75", image: kidsPizza }
    ]
  }
];

export default menuData;
