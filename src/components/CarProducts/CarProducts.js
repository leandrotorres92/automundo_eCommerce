
const products = [
    {
        id:'1', name: 'Commander', marca: 'Jeep', img:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_525fea9bae5d4637b828b6a84b9e1adc.jpg', origen: 'Brasil', precio: "$8.142.000", unidad: 3, descripcion: 'SUV'
    },
    {
        id:'2', name: 'Grand Cherokee', marca: 'Jeep',img:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_9c8c5e052e5247e4819c38d44f0737eb.jpg', origen: 'Brasil', precio: "$14.112.000", unidad: 3, descripcion: 'SUV'
    },
    {
        id:'3', name: 'Renegade', marca: 'Jeep', img:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_d93e1e4bba084532a792dd763bfdc7be.jpg', origen: 'Brasil', precio: "$3.748.100", unidad: 3, descripcion: 'SUV'
    },
    {
        id:'4', name: 'Tiggo2', marca: 'Chery', img:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_5d052c2a755a4a6fa9fa527573995979.jpg', origen: 'China', precio: "$2.775.608", unidad: 3, descripcion: 'SUV'
    },
    {
        id:'5', name: 'Tiggo4', marca: 'Chery', img:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_30426991b3454e38a2f9a80b97f39e6d.jpg', origen: 'China', precio: "$2.926.388", unidad: 3, descripcion: 'SUV'
    },
    {
        id:'6', name: 'Tiggo5', marca: 'Chery', img:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_79203bc1dbc049179ec35aa730a7995f.jpg', origen: 'China', precio: "$3.553.820", unidad: 3, descripcion: 'SUV'
    },
]

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(products)
        }, 2000)
    })
}