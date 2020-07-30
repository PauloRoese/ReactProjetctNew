import React from 'react';
import '../Header/Header.css'
import'./Header.css';
import { NavLink }  from 'react-router-dom';
import ButtonNav from '../Button/ButtonNav';


const Header = () => {


    return (
        <nav className="  navbar navbar-expand-lg navbar-light bg-secondary mb-5">
            <NavLink className="font-custom navbar-brand col-2" to="/">WsWork</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse justify-content-between col-10 collapse" id="navbarSupportedContent">
                <ul className="navbar-nav col-xl-8 col-md-6 justify-content-between">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/links'>Link</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Serviços
                            </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li className="dropdown-item link-custom-li"><NavLink className="link-custom" to='/analize'>Analize</NavLink></li>
                            <li className="dropdown-item link-custom-li"><NavLink className="link-custom" to='/portifolio'>Portifolio de Ferramentas</NavLink></li>
                            <li className="dropdown-item link-custom-li"><NavLink className="link-custom" to='/desenvolvimento'>Desenvolvilmento</NavLink></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contato">Contato</NavLink>
                    </li>
                </ul>
                <form className="form-inline p-0 d-flex justify-content-between col-lg-3 col-sm-6 col-12">
                    <input className="form-control mr-sm-2 col-7" type="search" placeholder="Search" aria-label="Search" />
                    <ButtonNav className="btn btn-header my-2 my-sm-0 col-sm-3 col-4 text-center" type="button">Search</ButtonNav>
                </form>
            </div>
        </nav>
    );
}

export default Header;