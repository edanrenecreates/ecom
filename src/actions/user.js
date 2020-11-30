import { 
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'Messenger bag lo-fi chartreuse gluten-free fam distillery. Fixie swag tilde +1 lyft vape cloud bread vaporware in. Exercitation ipsum est, sartorial velit tumblr paleo hammock veniam pork belly',
                    price: 1.99,
                    belongsTo: [0, 1]
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'Messenger bag lo-fi chartreuse gluten-free fam distillery. Fixie swag tilde +1 lyft vape cloud bread vaporware in. Exercitation ipsum est, sartorial velit tumblr paleo hammock veniam pork belly',
                    price: 1.99,
                    belongsTo: [0, 6]
                },
                quantity: 3
            }
        ]
    })
}


export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 1.30,
                orderNumber: '24343sdfkjh72',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Maxwell Nelson',
                    shippingAddress: '1337 West State Street'
                }
            },
            {
                _id: 2,
                total: 1.30,
                orderNumber: 'B0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 3,
                total: 16.40,
                orderNumber: 'ADFasdlfkjwe',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Max Asher Nelson',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 4,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 5,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 6,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 7,
                total: 3.20,
                orderNumber: '5UFISHDFJASUSHI298',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Andrew Wold',
                    shippingAddress: '348 Yo State Street'
                }
            },
          
        ]
    })
}