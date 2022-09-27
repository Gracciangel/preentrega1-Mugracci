import CartWidget from './CartWidget.js'

function NavBar(){
    return(
        <header className='App-header'>
            <Lista />
            <CartWidget/>

        </header>
    )
}


function Lista(){
    return(
        <ul className="NavBar">
        <li><a href="#">Pedales</a></li>
        <li><a href="#">Guitarras</a></li>
        <li><a href="#">Audio Profesional</a></li>
       
    </ul>
    )
}

export default NavBar  ;