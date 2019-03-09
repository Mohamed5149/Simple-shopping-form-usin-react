import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import ProductDetails from './productdetails/productdetails';
import AddProduct from './addproduct/addproduct';
import ProductList from './productlist/productlist';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/list" component={ProductList} ></Route>
            <Route path={'/details' + '/:id'} component={ProductDetails} />
            <Route path="/addproduct" component={AddProduct} ></Route>
            <Redirect from="" to="/list"></Redirect>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
