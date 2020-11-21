import {
  SET_USER_PURCHASES
} from './types';

export function setPurchaseDetail() {
  return ({
    type: SET_PURCHASE_DETAIL,
    payload: _id
  })
}

export function fetchUserPurchases() {
  return({
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 1,
        total: 19.40,
        orderNumber: "a0098977",
        orderDate: new Date(),
        creditCard: '-0010',
        user: {
          name: 'Tom Thumb',
          shippingAddress: '123 Main St'
        }      
      },
      {
        _id: 2,
        total: 15.40,
        orderNumber: "BC88988d",
        orderDate: new Date(),
        creditCard: '-0020',
        user: {
          name: 'Tony Roma',
          shippingAddress: '123 State St'
        }      
      },
      {
        _id: 3,
        total: 11.40,
        orderNumber: "AD87800199",
        orderDate: new Date(),
        creditCard: '-0030',
        user: {
          name: 'Nancy Hudgens',
          shippingAddress: '123 Apple St'
        }      
      },
      {
        _id: 4,
        total: 29.40,
        orderNumber: "HNG77808",
        orderDate: new Date(),
        creditCard: '-0040',
        user: {
          name: 'Cindy Rella',
          shippingAddress: '456 Main St'
        }      
      },
      {
        _id: 5,
        total: 19.45,
        orderNumber: "a0098977",
        orderDate: new Date(),
        creditCard: '-005-',
        user: {
          name: 'Lit Upp',
          shippingAddress: '123 Sunrise St'
        }      
      },
      {
        _id: 6,
        total: 349.40,
        orderNumber: "IYYY89900i",
        orderDate: new Date(),
        creditCard: '-0060',
        user: {
          name: 'Tom Yummy',
          shippingAddress: '123 That St'
        }      
      },
      {
        _id: 7,
        total: 9.99,
        orderNumber: "UHY774421",
        orderDate: new Date(),
        creditCard: '-0070',
        user: {
          name: 'You Sougle',
          shippingAddress: '123 Iforgot St'
        }      
      },
      {
        _id: 8,
        total: 59.40,
        orderNumber: "HYHY77644",
        orderDate: new Date(),
        creditCard: '-0080',
        user: {
          name: 'Suk Much',
          shippingAddress: '1 Pain St'
        }      
      }
    ]
  })
}
 