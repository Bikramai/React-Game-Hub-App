import { useEffect, useRef } from "react";
import ProductList from "./components/ProductList";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  // afterRender
  useEffect(() => {
    //Side effect
    if (ref.current) {
      ref.current.focus();
      }
    });
  
  useEffect(() => { 
    document.title = 'My App';
  })


  return (
    <div>
      <ProductList />
    </div>
  );
}

export default App;