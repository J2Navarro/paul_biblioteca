export default defineEventHandler(async (event) => {
    const products = [
        {
            id: 1,
            title: 'Producto 1',
            price: 100,
            description: 'Descripción del producto 1'
        },
        {
            id: 2,
            title: 'Producto 2',
            price: 200,
            description: 'Descripción del producto 2'
        },
        {
            id: 3,
            title: 'Producto 3',
            price: 300,
            description: 'Descripción del producto 3'
        }
    ]

        return products
  })