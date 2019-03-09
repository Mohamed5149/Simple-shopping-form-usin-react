import React, { Component } from 'react';
import { connect } from 'react-redux'
import ProductCard from '../productcard/productcard';
import Cateogry from '../../components/cateogry/cateogry';
import NavBar from '../navbar/navbar';
import Paging from '../../components/paging/paging';
import * as actionTypes from '../../store/actions';

class ProductList extends Component {
    render() {
        const indexOfLastProduct = this.props.currentPage * this.props.productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - this.props.productsPerPage;
        const currentProducts = this.props.products.slice(indexOfFirstProduct, indexOfLastProduct);

        let cards;
        cards = currentProducts.map((product) => {
            return (
                <React.Fragment key={product.id}>
                    <ProductCard
                        deleted={() => {this.props.delete(product.id)}}
                        productID={product.id}
                        productName={product.name}
                        productImage={product.image1}
                        productPrice={product.price}
                        productSale={product.sale}
                        productPriceAfterSale={product.price_after_sale}
                    ></ProductCard>
                </React.Fragment>
            )
        })
        return (
            <>
                <NavBar></NavBar>
                <div className="container">
                    <Cateogry></Cateogry>
                    <section className="item-listing">
                        <div className="item-listing__tools">
                            <select className="form-control" name="" id="">
                                <option value="1">Featured</option>
                                <option value="2">Price low to high</option>
                                <option value="3">Price high to low</option>
                                <option value="4">Name</option>
                            </select>
                            <a className="action-btn" href="#">
                                <i className="fas fa-plus"></i>
                            </a>
                        </div>
                        <div className="item-listing__items item-listing--3items" style={{width:"100%"}}>
                            {cards}
                        </div>
                        <div className="paging">
                            <div className="paging__arrow">
                                <i onClick={() => this.props.decrease()} className="fas fa-angle-left"></i>
                            </div>
                            <Paging
                                clicked={(event) => {this.props.change(Number(event.target.textContent))}}>
                            </Paging>
                            <div className="paging__arrow">
                                <i onClick={() => this.props.increase()} className="fas fa-angle-right"></i>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        products: state.products,
        currentPage: state.currentPage,
        productsPerPage: state.productsPerPage
    }
}
const mapDispatchToProps = dispatch => {
    return {
        delete: (id) => dispatch({ type: actionTypes.DELETEPRODUCT, id: id }),
        change: (page) => dispatch({ type: actionTypes.CHANGEPAGE, currentPage: page }),
        increase: () => dispatch({ type: actionTypes.INCREASE }),
        decrease: () => dispatch({ type: actionTypes.DECREASE }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);