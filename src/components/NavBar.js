import Widget from './Widget.js'

function NavBar(){
    return(
        <>
            <ul className="NavBar">
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
                <Widget/>
            </ul>
        </>
    )
}

export default NavBar  ;