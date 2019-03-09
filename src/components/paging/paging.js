import React from 'react';
import { connect } from 'react-redux';

const paging = (props) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.products.length / props.productsPerPage); i++) {
        pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
        let pagingStyle = ['paging__number'];
        if (props.currentPage === number) {
            pagingStyle.push('active');
        }
        return (
            <React.Fragment
                key={number}
            >
                <li onClick={props.clicked} className={pagingStyle.join(' ')}>{number}</li>
            </React.Fragment>
        )
    })
    return (
        <>
            {renderPageNumbers}
        </>
    )
}
const mapStateToProps = state => {
    return {
        products: state.products,
        productsPerPage: state.productsPerPage,
        currentPage: state.currentPage
    }
}
export default connect(mapStateToProps, null)(paging);