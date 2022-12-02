function Navbar(){
    const navstyle = {
        wheight: "100%",
        backgroundColor: "black",
        color: "white",
        display: "flex",
    };

    return (
        <nav className='nav-element' style={navstyle}>
            <ul>
                <li>prueba</li>
                <li>Contacto</li>
                <li>Ubicacion</li>
            </ul>
        </nav>
    );
}

export default Navbar; 