import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState('');


  return (
    <div>
      <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
        <option value="Electronics">Electronics</option>
      </select>
      <ProductList />
    </div>
  );
}

export default App;