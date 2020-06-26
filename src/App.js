import React, {useState} from 'react';
import './App.css';
import ListProducts from "./ListProducts";
import ProductForm from "./ProductForm";
import {Link, BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to={'/'}>
                                Danh sách sản phẩm <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/them-san-pham'}>Thêm sản phẩm</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className={'container'}>
                <Switch>
                    <Route exact path="/">
                        <ListProducts />
                    </Route>
                    <Route path="/them-san-pham">
                        <ProductForm />
                    </Route>

                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;
