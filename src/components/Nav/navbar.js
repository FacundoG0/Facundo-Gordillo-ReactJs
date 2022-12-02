function Navbar(){
    const navstyle = {
        width: "100%",
        height: "3rem",
        padding: "0",
        margin: "0",
        backgroundColor: "black",
        color: "white",
    };

    const ul_nav_style = {
        height: "100%",
        display: "flex",
        padding: "0",
        margin: "0",
        listStyle: 'none',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }

    const li_nav_style = {
        paddingLeft: '1rem',
    }

    return (
        <nav className='nav-element' style={navstyle}>
            <ul className='ul-nav' style={ul_nav_style}>
                <li className='li-element-nav' style={li_nav_style}>Inicio</li>
                <li className='li-element-nav' style={li_nav_style}>Contacto</li>
                <li className='li-element-nav' style={li_nav_style}>Ubicacion</li>
            </ul>
        </nav>
    );
}

export default Navbar;