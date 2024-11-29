import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import '../estilos/nav.css'
/*pagina principal */
import { HomePage } from './HomePage';
/*Futbol*/
import {AppMultiple as CamisaF} from '../futbol/Camisas/futbol'
import {AppMultiple as PantalonetasF} from '../futbol/pantaloneta/futbol'
import {AppMultiple as ZapatosF} from '../futbol/zapatos/futbol'
/*Basquet */
import {AppMultiple as PetosB} from '../basquet/petos/basquet'
import {AppMultiple as PantalonetasB} from '../basquet/pantaloneta/basquet'
import {AppMultiple as ZapatosB} from '../basquet/zapatos/basquet'


export function AppPrincipal() {
    return (
        <Router>
            <nav className="navbar">

                <div className="logo"></div>
                <Link to="/" className="nav-link">Inicio</Link>
                <a href="#">Quienes Somos</a>

                <div className="dropdown">
                <button className="dropbtn" >Fútbol</button>
                <div className="dropdown-content">
                <Link to="/Camisas/futbol" className="nav-link">Camisas</Link>
                <Link to="/Pantalonetas/futbol" className="nav-link">Pantaloneta</Link>
                <Link to="/Zapatos/futbol" className="nav-link">Zapatos</Link>
                </div>
                </div>


                <div className="dropdown">
                <button className="dropbtn">Baloncesto</button>
                <div className="dropdown-content">
                <Link to="/Petos/basquet" className="nav-link">Petos</Link>
                <Link to="/Pantalonetas/basquet" className="nav-link">Pantaloneta</Link>
                <Link to="/Zapatos/basquet" className="nav-link">Zapatos</Link>
                </div>
                </div>

                <div className="right-icons">
                <a href="../../sesion/inicio.html"> iniciar sesion</a>
                <a className="cart-icon">🛒</a>
                <div className="profile-icon">"foto de perfil"</div>
                </div>
                </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                /*futbol*/
                <Route path="/Camisas/futbol" element={<CamisaF />} />
                <Route path="/Pantalonetas/futbol" element={<PantalonetasF />} />
                <Route path="/Zapatos/futbol" element={<ZapatosF />} />
                /*basketball*/
                <Route path="/Petos/basquet" element={<PetosB />} />
                <Route path="/Pantalonetas/basquet" element={<PantalonetasB />} />
                <Route path="/Zapatos/basquet" element={<ZapatosB />} />
            </Routes>
        </Router>
    );
}