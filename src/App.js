import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const product = {
    title: "Product Title",
    description: "Product Description",
    image:
      "https://www.visily.ai/wp-content/uploads/2022/11/Visily-Water-Mark-Framed-Logo@4x-1200x1200.png",
    price: 300,
    sold: 3000,
  };
  return (
    <main>
      <ProductCard {...product} />
    </main>
  );
}

export default App;
