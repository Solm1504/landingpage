import React from "react";

const Navbar = () => {
    return (
        <>
        <div className="class">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="class">container</div>
                <a className="navbar-brand" href="#" style={{marginLeft: '150px'}}>Travel</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> 
        
                <div className="class">container</div>
                <ul className="nav justify-content-end" style={{marginLeft: '500px'}}>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" href="#">Services</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled">Contact</a>
                </li>
                </ul>
            </nav> 
        </div> 

        </>
    )
    }

    export default Navbar;