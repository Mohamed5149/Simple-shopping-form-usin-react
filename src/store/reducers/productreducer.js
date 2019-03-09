import * as actionTypes from '../actions';
import image from '../../img/products/watch.jpg';

const initialState = {
    products: [{
        id: 1,
        name: 'Watch1',
        description: 'casio watch',
        image1: image,
        image2: image,
        image3: image,
        price: 2500,
        sale: true,
        discount: 10,
        get price_after_sale() { return this.price - this.discount },
        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's fashion`
    },
    {
        id: 2,
        name: 'Watch2',
        description: 'casio watch',
        image1: image,
        image2: image,
        image3: image,
        price: '2500',
        sale: false,
        discount: '',
        price_after_sale: '',
        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's fashion`
    },
    {
        id: 3,
        name: 'Watch3',
        description: 'casio watch',
        image1: image,
        image2: image,
        image3: image,
        price: 2500,
        sale: true,
        discount: 50,
        get price_after_sale() { return this.price - this.discount },
        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's fashion`
    },
    {
        id: 4,
        name: 'Watch4',
        description: 'casio watch',
        image1: image,
        image2: image,
        image3: image,
        price: 2500,
        sale: false,
        discount: '',
        price_after_sale: '',
        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's fashion`
    },
    {
        id: 5,
        name: 'Casio Watch5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh sed elimttis adipiscing. Fusce in hendrerit purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh sed elimttis adipiscing. Fusce in hendrerit purus.',
        image1: image,
        image2: image,
        image3: image,
        price: '2500',
        sale: true,
        discount: 50,
        get price_after_sale() { return this.price - this.discount },
        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's fashion`
    },
    {
        id: 6,
        name: 'Watch6',
        description: 'casio watch',
        image1: image,
        image2: image,
        image3: image,
        price: '2500',
        sale: false,
        discount: '',
        price_after_sale: '',
        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's fashion`
    },
    {
        id: 7,
        name: 'Watch7',
        description: 'casio watch',
        image1: image,
        image2: image,
        image3: image,
        price: 2500,
        sale: true,
        discount: 50,
        get price_after_sale() { return this.price - this.discount },
        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's fashion`
    },
    {
        id: 8,
        name: 'Watch8',
        description: 'casio watch',
        image1: image,
        image2: image,
        image3: image,
        price: '2500',
        sale: false,
        discount: '',
        price_after_sale: '',
        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's Fashion`
    },
    {
        id: 9,
        name: 'Watch9',
        description: 'casio watch',
        image1: image,
        image2: image,
        image3: image,
        price: 2500,
        sale: true,
        discount: 50,
        get price_after_sale() { return this.price - this.discount },
        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's Fashion`
    },
    {
        id: 10,
        name: 'Watch10',
        description: 'casio watch',
        image1: image,
        image2: image,
        image3: image,
        price: '2500',
        sale: false,
        discount: '',
        price_after_sale: '',
        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's Fashion`
    },
    {
        id: 11,
        name: 'Casio Watch11',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh sed elimttis adipiscing. Fusce in hendrerit purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh sed elimttis adipiscing. Fusce in hendrerit purus.',
        image1: image,
        image2: image,
        image3: image,
        price: 2500,
        sale: true,
        discount: 50,
        get price_after_sale() { return this.price - this.discount },
        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's Fashion`
    },
    {
        id: 12,
        name: 'Watch12',
        description: 'casio watch',
        image1: image,
        image2: image,
        image3: image,
        price: 2500,
        sale: false,
        discount: '',
        price_after_sale: '',
        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's Fashion`
    },
    {
        id: 13,
        name: 'Watch13',
        description: 'casio watch',
        image1: image,
        image2: image,
        image3: image,
        price: 2500,
        sale: true,
        discount: 50,
        get price_after_sale() { return this.price - this.discount },
        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's Fashion`
    },
    {
        id: 14,
        name: 'Watch14',
        description: 'casio watch',
        image1: image,
        image2: image,
        image3: image,
        price: 2500,
        sale: false,
        discount: '',
        price_after_sale: '',
        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's Fashion`
    },
    {
        id: 15,
        name: 'Watch15',
        description: 'casio watch',
        image1: image,
        image2: image,
        image3: image,
        price: 2500,
        sale: true,
        discount: 50,
        get price_after_sale() { return this.price - this.discount },



        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's Fashion`
    },
    {
        id: 16,
        name: 'Watch16',
        description: 'casio watch',
        image1: image,
        image2: image,
        image3: image,
        price: 2500,
        sale: false,
        discount: '',
        price_after_sale: '',
        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's Fashion`
    },
    {
        id: 17,
        name: 'Casio Watch17',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh sed elimttis adipiscing. Fusce in hendrerit purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh sed elimttis adipiscing. Fusce in hendrerit purus.',
        image1: image,
        image2: image,
        image3: image,
        price: 2500,
        sale: true,
        discount: 50,
        get price_after_sale() { return this.price - this.discount },
        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's fashion`
    },
    {
        id: 18,
        name: 'Watch18',
        description: 'casio watch',
        image1: image,
        image2: image,
        image3: image,
        price: '2500',
        sale: false,
        discount: '',
        price_after_sale: '',
        payement_types: ['Visa', 'on Dilivery'],
        cateogry: `Men's fashion`
    }
    ],
    product: {},
    currentPage: 1,
    productsPerPage: 6
}
const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.SHOWDETAILS:
            let productID = action.id;
            let productDetailsIndex = state.products.findIndex(po => po.id == productID);
            let productDetails = state.products[productDetailsIndex];
            return {
                ...state,
                product: productDetails
            }

        case actionTypes.ADDPRODUCT:
            let product = action.product;
            product.image1 = image;
            product.image2 = image;
            product.image3 = image;
            product.id = state.products.length + 1;
            product.price_after_sale = action.product.price - action.product.discount;
            console.log(product);
            let productsCopyList = [...state.products];
            productsCopyList.push(product);
            return {
                ...state,
                products: productsCopyList
            }

        case actionTypes.DELETEPRODUCT:
            let productsCopy = [...state.products];
            let productIndex = productsCopy.findIndex(po => po.id === action.id);
            productsCopy.splice(productIndex, 1);
            return {
                ...state,
                products: productsCopy
            }

        case actionTypes.CHANGEPAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case actionTypes.INCREASE:
            let currentPageCopyI = state.currentPage;
            if (currentPageCopyI < (Math.ceil(state.products.length / state.productsPerPage))) {
                currentPageCopyI += 1;
            }
            return {
                ...state,
                currentPage: currentPageCopyI
            }
        case actionTypes.DECREASE:
            let currentPageCopyD = state.currentPage;
            if (currentPageCopyD > 1) {
                currentPageCopyD -= 1;
            }
            return {
                ...state,
                currentPage: currentPageCopyD
            }

        default:
            return state;
    }
}
export default reducer;