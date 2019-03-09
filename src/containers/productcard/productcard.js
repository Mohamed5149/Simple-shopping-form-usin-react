import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
    render() {
        let sale;
        let prices;
        if (this.props.productSale === true) {
            sale = <div className="item-medium-1__alert" >Sale</div>
            prices = <>
                <del>${this.props.productPrice}}</del>
                <span className="lable">${this.props.productPriceAfterSale}</span>
            </>
        }
        else {
            prices = <>
                <span className="lable">${this.props.productPrice}</span>
            </>
        }
        return (
            <>
                <div className="item-medium-1" >
                    {sale}
                    <div className="item-medium-1__image image" style={{ backgroundImage: `url(${this.props.productImage})` }}>
                    </div>
                    <a href="#">
                        <h4>{this.props.productName}</h4>
                        <div className="flex-row">
                            <div>
                                {prices}
                            </div>
                        </div>
                    </a>
                    <div className="crud-actions">
                        <Link to={'/details/' + this.props.productID}><i className="far fa-eye"></i></Link>
                        <a href="#"><i className="fas fa-edit"></i></a>
                        <a onClick={this.props.deleted} href="#"><i className="fas fa-trash-alt"></i></a>
                    </div>
                </div>
            </>
        );
    }
}
export default ProductCard;