function navbar(){
    const navstyle = {
        padding: "100%",
        backgroundColor: "black",
        color: "white"
    };

    return (
        <nav classname='nav-element' style={navstyle}>
            <ul>
                <li>Inicio</li>
                <li>Contacto</li>
                <li>Ubicacion</li>
            </ul>
        </nav>
    );
}

export default navbar; 