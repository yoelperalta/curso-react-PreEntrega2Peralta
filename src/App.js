import { BrowserRouter, Route, Routes } from "react-router-dom";
//import "bulma/css/bulma.css";
import "./styles.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Layout from "./components/pages/Layout";
//import Canas from "./components/pages/Canas";
//import Reels from "./components/pages/Reels";
//import Lineas from "./components/pages/Lineas";
//import Waders from "./components/pages/Waders";
//import Moscas from "./components/pages/Moscas";

function App (){
    //const greeting = "Bienvenido a Chimehuin FlyShop";
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          </Route>
          <Route path ="*" element={<h1>404 no encontrado</h1>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;