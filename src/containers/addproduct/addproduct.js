import React, { Component } from 'react';
import '../../css/style.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import NavBar from '../navbar/navbar';
import gray from '../../img/products/product-grey-7.jpg';
import Input from '../../components/UI/Input/input';

class AddProduct extends Component {
    state = {
        productForm: {
            name: {
                elementName: 'name',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placholder: 'Product Name',
                    className: 'form-control'
                },
                value: ''
            },
            description: {
                elementName: 'description',
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placholder: 'Product Description',
                    className: 'form-control'
                },
                value: ''
            },
            price: {
                elementName: 'price',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placholder: 'Product Price',
                    className: 'form-control'
                },
                value: ''
            },
            sale: {
                elementName: 'sale',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                    name: 'status'
                },
                value: true,
            },
            discount: {
                elementName: 'discount',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placholder: 'Product Discount',
                    className: 'form-control'
                },
                value: ''
            },
            payment: {
                elementName: 'payment',
                elementType: 'input',
                elementConfig: {
                    type: 'checkbox',
                },
                checkBoxesArr: ['Direct Bank Transfare', 'Paypal', 'Mastercard', 'Cheque Payment', 'Visa', 'On Dilivery'],
                values: []
            },
            cateogry: {
                elementName: 'cateogry',
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'Arts&Crafts', displayValue: 'Arts&Crafts' },
                        { value: 'Automotive', displayValue: 'Automotive' },
                        { value: 'Baby', displayValue: 'Baby' },
                        { value: 'Books', displayValue: 'Books' },
                        { value: 'Eletronics', displayValue: 'Eletronics' },
                        { value: `Women's Fashion`, displayValue: `Women's Fashion` },
                        { value: `Men's Fashion`, displayValue: `Men's Fashion` },
                        { value: 'Health & Household', displayValue: 'Health & Household' },
                        { value: 'Home & Kitchen', displayValue: 'Home & Kitchen' },
                        { value: 'Military Accessories', displayValue: 'Military Accessories' },
                        { value: 'Movies & Television', displayValue: 'Movies & Television' },
                        { value: 'Sports & Outdoors', displayValue: 'Sports & Outdoors' },
                        { value: 'Tools & Home Improvement', displayValue: 'Tools & Home Improvement' },
                        { value: 'Toys & Games', displayValue: 'Toys & Games' },
                    ],
                    className: 'form-control'
                },
                value: ''
            }
        }
    }
    addButtonHandler(e){
            this.props.add(e,
            this.state.productForm.name.value,
            this.state.productForm.description.value,
            this.state.productForm.price.value,
            this.state.productForm.sale.value,
            this.state.productForm.discount.value,
            this.state.productForm.payment.values,
            this.state.productForm.cateogry.value
        )
        this.props.history.push('/list');
    }
    changeCheckboxHandler = (event, inputID) => {
        const updatedProductForm = {
            ...this.state.productForm
        }
        const updatedProductElement = {
            ...this.state.productForm[inputID]
        }
        updatedProductElement.values.push(event.target.value);
        updatedProductForm[inputID] = updatedProductElement;
        this.setState({
            productForm: updatedProductForm
        })
    }

    changeRadiobuttonHandler = (result, inputID) => {
        const updatedProductForm = {
            ...this.state.productForm
        }
        const updatedProductElement = {
            ...this.state.productForm[inputID]
        }
        updatedProductElement.value = result;
        updatedProductForm[inputID] = updatedProductElement;
        this.setState({
            productForm: updatedProductForm
        });
    }

    changeInputHandler = (event, inputID) => {
        console.log(event.target.value);
        console.log(inputID);
        const updatedProductForm = {
            ...this.state.productForm
        }
        const updatedProductElement = {
            ...this.state.productForm[inputID]
        }
        updatedProductElement.value = event.target.value;
        // console.log(updatedProductElement);
        updatedProductForm[inputID] = updatedProductElement;
        console.log(updatedProductForm);
        this.setState({
            productForm: updatedProductForm
        });
        console.log(this.state.productForm);
    }
    render() {
        let checkboxes;
        checkboxes = this.state.productForm.payment.checkBoxesArr.map((checkbox) => {
            return (
                <div className="form-group__checkbox" key={checkbox} >
                    <Input className="form-control"
                        elementType={this.state.productForm.payment.elementType}
                        elementConfig={this.state.productForm.payment.elementConfig}
                        value={checkbox}
                        changed={(event) => this.changeCheckboxHandler(event, this.state.productForm.payment.elementName)}
                    >{checkbox}</Input>
                    <span>{checkbox}</span>
                </div>
            )
        });
        return (
            <>
                <NavBar></NavBar>
                <div className="add-product container">
                    <form action="">
                        <div className="add-product__images slider">
                            <div className="add-product__image-actions">
                                <div className="add-product__image-action">
                                    <a href="#"><i className="fas fa-plus-square"></i></a>
                                    <a href="#"><i className="fas fa-edit"></i></a>
                                    <a href="#"><i className="fas fa-trash-alt"></i></a>
                                </div>
                            </div>
                            <div className="slider__items">
                                <div className="slider__item active" style={{ backgroundImage: `url(${gray})` }}></div>
                                <div className="slider__item" style={{ backgroundImage: `url(${gray})` }}></div>
                                <div className="slider__item" style={{ backgroundImage: `url(${gray})` }}></div>
                            </div>
                            <div className="slider__indicators">
                                <span className="slider__indicator active"></span>
                                <span className="slider__indicator"></span>
                                <span className="slider__indicator"></span>
                            </div>
                        </div>
                        <div className="add-product__data">
                            <div className="form-controls">
                                <section className="tabs">
                                    <div className="tabs__headers">
                                        <div className="tabs__header active">
                                            English
                            </div>
                                        <div className="tabs__header">
                                            Arabic
                            </div>
                                    </div>
                                    <div className="tabs__bodies">
                                        <div className="tabs__body active">
                                            <div className="form-group">
                                                <label for="">Name</label>
                                                <Input
                                                    elementType={this.state.productForm.name.elementType}
                                                    elementConfig={this.state.productForm.name.elementConfig}
                                                    value={this.state.productForm.name.value}
                                                    changed={(event) => this.changeInputHandler(event, this.state.productForm.name.elementName)} ></Input>
                                            </div>
                                            <div className="form-group">
                                                <label for="">Description</label>
                                                <Input className="form-control"
                                                    elementType={this.state.productForm.description.elementType}
                                                    elementConfig={this.state.productForm.description.elementConfig}
                                                    value={this.state.productForm.description.value}
                                                    changed={(event) => this.changeInputHandler(event, this.state.productForm.description.elementName)}>
                                                </Input>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="form-group">
                                    <label for="">Price</label>
                                    <Input className="form-control"
                                        elementType={this.state.productForm.price.elementType}
                                        elementConfig={this.state.productForm.price.elementConfig}
                                        value={this.state.productForm.price.value}
                                        changed={(event) => this.changeInputHandler(event, this.state.productForm.price.elementName)}
                                    >
                                    </Input>
                                </div>
                                <div className="add-product__discount">
                                    <div className="form-group">
                                        <label for="">Status</label>
                                        <div className="form-group__radios">
                                            <div className="form-group__radio">
                                                <Input className="form-control"
                                                    elementType={this.state.productForm.sale.elementType}
                                                    elementConfig={this.state.productForm.sale.elementConfig}
                                                    value={this.state.productForm.sale.value}
                                                    changed={(event) => this.changeRadiobuttonHandler(true, this.state.productForm.sale.elementName)}
                                                >
                                                </Input>
                                                <span>On Sale</span>
                                            </div>
                                            <div className="form-group__radio">
                                                <Input className="form-control"
                                                    elementType={this.state.productForm.sale.elementType}
                                                    elementConfig={this.state.productForm.sale.elementConfig}
                                                    value={this.state.productForm.sale.value}
                                                    changed={(event) => this.changeRadiobuttonHandler(false, this.state.productForm.sale.elementName)}
                                                >
                                                </Input>
                                                <span>Not On Sale</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="">Discount</label>
                                        <Input className="form-control"
                                            elementType={this.state.productForm.discount.elementType}
                                            elementConfig={this.state.productForm.discount.elementConfig}
                                            value={this.state.productForm.discount.value}
                                            changed={(event) => this.changeInputHandler(event, this.state.productForm.discount.elementName)}
                                        ></Input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="">Payment Types</label>
                                    <div className="form-group__checkboxs">
                                        {checkboxes}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="">Category</label>

                                    <Input className="form-control"
                                        elementType={this.state.productForm.cateogry.elementType}
                                        elementConfig={this.state.productForm.cateogry.elementConfig}
                                        value={this.state.productForm.cateogry.value}
                                        changed={(event) => this.changeInputHandler(event, this.state.productForm.cateogry.elementName)}
                                    ></Input>
                                </div>
                                <div className="add-product__actions">
                                    <button href="#" className="btn btn--gray">Cancel</button>
                                    
                                    <button 
                                        onClick={   
                                            e => this.addButtonHandler(e)
                                        }  className="btn btn--primary">Add</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        add: (e, name, description, price, sale, discount, payment, cateogry) => dispatch({ type: actionTypes.ADDPRODUCT, product: { name, description, price, sale, discount, payment, cateogry } }, e.preventDefault())
    }
}

export default connect(null, mapDispatchToProps)(AddProduct);