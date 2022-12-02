function Navbar(){
    const navstyle = {
        width: "100%",
        height: "3rem",
        padding: "0",
        margin: "0",
        backgroundColor: "black",
    };

    const ul_nav_style = {
        height: "100%",
        display: "flex",
        padding: "0",
        margin: "0",
        listStyle: 'none',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }

    const li_nav_style = {
        padding: '0.2rem',
        border: '1.5px solid white'
    }

    const a_nav_style = {
        color: 'white',
        fontWeight: 'bolder',
    }

    return (
        <nav className='nav-element' style={navstyle}>
            <ul className='ul-nav' style={ul_nav_style}>
                <li className='li-element-nav' style={li_nav_style}><a href='#' style={a_nav_style}>Inicio</a></li>
                <li className='li-element-nav' style={li_nav_style}><a href='#' style={a_nav_style}>Contacto</a></li>
                <li className='li-element-nav' style={li_nav_style}><a href='#' style={a_nav_style}>Ubicacion</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;