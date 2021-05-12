import React, {useEffect} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import 'materialize-css'
import './scss/app.scss';

import {Route} from "react-router-dom";
import {Header} from "./components";
import {Home, Cart} from "./pages";
import {setPizzas} from "./redux/actions/pizzas";




function App() {
    const dispatch = useDispatch();


    window.test = () => axios.get('http://localhost:3000/db.json')
        .then(({data}) => {
            //Hook useDispatch
            console.log('GET DATAS!')
            dispatch(setPizzas(data.pizzas))
        })



    // First loading app for empty array dependence []
    // for example: componentDidMount for classes components
    useEffect(() => {
        // Geting datas from server
        axios.get('http://localhost:3000/db.json')
            .then(({data}) => {
                //Hook useDispatch
                dispatch(setPizzas(data.pizzas))
            })
    }, [])


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                {/*<Route path={'/'} render={() => <Home items={items}/>} exact/>*/}
                <Route path={'/'} component={Home} exact/>
                <Route path={'/cart'} component={Cart} exact/>
            </div>
        </div>
    );
}


export default App;
