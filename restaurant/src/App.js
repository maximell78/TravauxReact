import "./App.css";
import MenuList from "./components/MenuList";

const foodItems = [
  {
    id: 1,
    itemName: "Caesar's Salad",
    description: "The original Caesar's Salad recipe",
    foodImage: "https://bit.ly/2GJFu5W",
    price: 12,
    isFavorite: false,
  },
  {
    id: 2,
    itemName: "Spaghetti Carbonara",
    description: "Better than your nonna's! All local and fresh ingredients",
    foodImage: "https://bit.ly/2GBnz1n",
    price: 15,
    isFavorite: false,
  },
  {
    id: 3,
    itemName: "Grilled Whole Fish",
    description: "Fish of the day, grilled whole with a side of vegetables",
    foodImage: "https://bit.ly/3d6iKsJ",
    price: 20,
    isFavorite: false,
  },
  {
    id: 4,
    itemName: "Steak Florentine",
    description: "Meat!",
    foodImage: "https://bit.ly/3ddiSH1",
    price: 30,
    isFavorite: false,
  },
];

function App() {
  return (
    <div className="App">
      <MenuList menuItems={foodItems} />
    </div>
  );
}

export default App;
