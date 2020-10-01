

var intialState = [
    {
        id: 1,
        name: 'IPhone 11 Pro Max 64GB',
        image: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-black-400x460.png',
        price: 1000,
        description: 'Sản phẩm do Apple sản xuất',
        rating: 3,
        inventory: 3
    },
    {
        id: 2,
        name: 'Realme 5 Pro (8GB/128GB)',
        image: 'https://cdn.tgdd.vn/Products/Images/42/209564/realme-5-pro-white-chi-tiet-400x460.png',
        price: 600,
        description: 'Sản phẩm do Trung Quốc sản xuất',
        rating: 3,
        inventory: 5
    },
    {
        id: 3,
        name: 'Samsung Galaxy A50 128GB',
        image: 'https://cdn.tgdd.vn/Products/Images/42/196963/samsung-galaxy-a50-blue-400x460.png',
        price: 700,
        description: 'Sản phẩm do Hàn Quốc sản xuất',
        rating: 4,
        inventory: 15
    },

]

const products = (state = intialState, action) => {
    switch (action.type){
        default:
            return [...state]
    }
        
}


export default products;