import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContiner';



function App() {
  return (
        <>
         <NavBar/>
        <ItemListContainer greeting={'Bienvenido'} />
        </>
  );
}


export default App ;