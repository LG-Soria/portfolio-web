import React from 'react'

function Navigation() {
    return (
        <div className='navigation'>
            <div className='logo'><p>LS</p></div>
            <div className='menu'>
                <ul className='flex flex-row gap-20 '>
                    <li>Inicio</li>
                    <li>Portafolio</li>
                    <li>Contacto</li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation