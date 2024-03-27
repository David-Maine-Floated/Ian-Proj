import { Vids } from './components/Vids/Vids.jsx';
import {FilterBar} from './components/Bars/FilterBar.jsx'
import "./App.css";
import { FilterProvider } from "./contexts/filterContext.js";




function App() {
 
  return (
    <FilterProvider>
      <div className="App">
      <div className="body">
        <FilterBar/>
        <Vids/>
      </div>
    </div>
    </FilterProvider>
  );
}

export default App;
