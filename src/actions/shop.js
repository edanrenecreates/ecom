import {
  // SET_SHOP_CATEGORIES
  SET_NAVBAR_LINKS,
  SET_SHOP_PRODUCTS
} from './types';

export function fetchShopCategories() {
  return ({
    type: SET_NAVBAR_LINKS,
    payload: [
      {
        _id: 0,
        title: 'All'
      },
      {
        _id: 1,
        title: 'JavaScript'
      },
      {
        _id: 2,
        title: 'UI/UX'
      },
      {
        _id: 3,
        title: 'Linux'
      },
      {
        _id: 4,
        title: 'Python'
      },
      {
        _id: 5,
        title: 'UML'
      },
      {
        _id: 6,
        title: 'Ruby'
      },
    ]
  })
}


export function fetchShopProducts() {
  return({
    type: SET_SHOP_PRODUCTS, 
    payload: [
      {
        _id: 0,
        title: 'JavaScript in the Browswer',
        description: 'Messenger bag lo-fi chartreuse gluten-free fam distillery. Fixie swag tilde +1 lyft vape cloud bread vaporware in. Exercitation ipsum est, sartorial velit tumblr paleo hammock veniam pork belly',
        price: 1.99,
        belongsTo: [0, 1]
      },
      {
        _id: 1,
        title: 'Graph Database',
        description: 'Messenger bag lo-fi chartreuse gluten-free fam distillery. Fixie swag tilde +1 lyft vape cloud bread vaporware in. Exercitation ipsum est, sartorial velit tumblr paleo hammock veniam pork belly',
        price: 1.99,
        belongsTo: [0, 6]
      },
      {
        _id: 2,
        title: 'Fullstack Development',
        description: 'Messenger bag lo-fi chartreuse gluten-free fam distillery. Fixie swag tilde +1 lyft vape cloud bread vaporware in. Exercitation ipsum est, sartorial velit tumblr paleo hammock veniam pork belly',
        price: 1.99,
        belongsTo: [0,1,4]
      },
      {
        _id: 3,
        title: 'JavaScript Development',
        description: 'Messenger bag lo-fi chartreuse gluten-free fam distillery. Fixie swag tilde +1 lyft vape cloud bread vaporware in. Exercitation ipsum est, sartorial velit tumblr paleo hammock veniam pork belly',
        price: 1.99,
        belongsTo: [0, 1]
      },
      {
        _id: 4,
        title: 'User-Interface Design',
        description: 'Messenger bag lo-fi chartreuse gluten-free fam distillery. Fixie swag tilde +1 lyft vape cloud bread vaporware in. Exercitation ipsum est, sartorial velit tumblr paleo hammock veniam pork belly',
        price: 1.99,
        belongsTo: [0, 2]
      },
      {
        _id: 5,
        title: 'User-Experience Design',
        description: 'Messenger bag lo-fi chartreuse gluten-free fam distillery. Fixie swag tilde +1 lyft vape cloud bread vaporware in. Exercitation ipsum est, sartorial velit tumblr paleo hammock veniam pork belly',
        price: 1.99,
        belongsTo: [0, 2]
      },
      {
        _id: 6,
        title: 'Advanced OOP',
        description: 'Messenger bag lo-fi chartreuse gluten-free fam distillery. Fixie swag tilde +1 lyft vape cloud bread vaporware in. Exercitation ipsum est, sartorial velit tumblr paleo hammock veniam pork belly',
        price: 1.99,
        belongsTo: [0, 6]
      }
    ]
  })
}
