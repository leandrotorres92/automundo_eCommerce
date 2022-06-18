
const products = [
    {
        id:'1', name: 'Commander', marca: 'Jeep', img:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_525fea9bae5d4637b828b6a84b9e1adc.jpg', origen: 'Brasil', price: "$8.142.000", stock: '2', description: 'Naturalmente sofisticado, el nuevo Jeep® Commander te invita a descubrir nuevas aventuras, con mayor espacio interior y un nuevo nivel de sofisticación proyectado para proporcionar la máxima comodidad y versatilidad. Nuevos acabados y tecnología premium, se combinan con un diseño imponente especialmente desarrollado para la aventura con los mejores contenidos de serie en dos versiones: Limited y Overland.'
    },
    {
        id:'2', name: 'Grand Cherokee Limited', marca: 'Jeep',img:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_9c8c5e052e5247e4819c38d44f0737eb.jpg', origen: 'Brasil', price: "$14.112.000", stock: 1, description: 'Los modelos Limited tienen un estilo exclusivo y características de confort que incluyen una parrilla y manijas cromadas brillantes, sistema de memoria para el asiento del conductor, espejos exteriores, radio, puerta trasera levadiza eléctrica, arranque remoto del vehículo y más.'
    },
    {
        id:'3', name: 'Renegade', marca: 'Jeep', img:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_d93e1e4bba084532a792dd763bfdc7be.jpg', origen: 'Brasil', price: "$3.748.100", stock: 3, description: 'La clasica marca de vehículos todoterreno comenzó un camino hacia las nuevas tendencias, es decir de los SUV más on que off - road y también incursiona en el segmento B con el Renegade. Se destaca por su calidad general y de marcha, además de por su diseño.'
    },
    {
        id:'4', name: 'Tiggo2', marca: 'Chery', img:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_5d052c2a755a4a6fa9fa527573995979.jpg', origen: 'China', price: "$2.775.608", stock: 5, description: 'Es la segunda generación de la SUV / Crossover chica de Chery para el segmento B que reemplaza a la Tiggo2. Llega importada de China y se destaca por su estética fiel a la última moda de desdoblar ópticas entre DLR y faros principales.'
    },
    {
        id:'5', name: 'Tiggo4', marca: 'Chery', img:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_30426991b3454e38a2f9a80b97f39e6d.jpg', origen: 'China', price: "$2.926.388", stock: 3, description: 'La marca china apuesta por un SUV más moderno y refinado que el Tiggo 3, pero sin perder su posicionamiento de marca que ofrece mucho equipamiento por el menor precio posible. Se destaca la estética exterior, el espacio interior y "chiches" como el cuadro de instrumentos 100% digital. Los costos se mantiene bajos con un motor que en los papeles parece de vieja escuela. En seguridad solo ofrece dos airbags, pero viene con ESP.'
    },
    {
        id:'6', name: 'Tiggo5', marca: 'Chery', img:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_79203bc1dbc049179ec35aa730a7995f.jpg', origen: 'China', price: "$3.553.820", stock: 2, description: 'Esta SUV se posiciona por encima de la Tiggo 3 en la gama de Chery y muestra un gran salto adelante para la marca en calidad percibida, seguridad, equipamiento y comportamiento dinámico.'        
    },
    {
        id:'7', name: 'Range Rover Evoque', marca: 'Land Rover', img:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_55897b03354744f193ff33719069c4b6.jpg', origen: 'Gran Bretaña', price: "Consultar", stock: 1, description: 'El deseo por el lujo y los SUVs no sabe de tamaños y por eso Range Rover creó su modelo más pequeño, el Evoque. Este modelo se destaca por su perfil deportivo al punto que inclusive cuenta con una variante de solo tres puertas. Cuenta con un conocido 2.0L turbo que lleva sus 240 CV a las cuatro ruedas luego de ser procesados por una caja automática de 9 relaciones.'
    },
    {
        id:'8', name: 'Range Rover', marca: 'Land Rover', img:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_755cea0462dd46f899176d7511aeeab4.jpg', origen: 'Gran Bretaña', price: "Consultar", stock: 1, description: 'El iniciador de lo que hoy es una sub marca con una gama de varios modelos, el Range Rover es el encargado de llevar la elegancia y el lujo británico a cualquier terreno, no en vano es considerado como el Rolls Royce de los todoterreno. La lista de cualidades es interminable, desde su estructura en aluminio, suspensiones neumáticas y gruesos V8 sobrealimentados para tener tanto confort como capacidades off-road.'
    },
    {
        id:'9', name: 'Emgrand X7 Sport', marca: 'Geely', img:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_7ebea8a9d1364f5fb35206559fdc0b1b.jpg', origen: 'China', price: "Consultar", stock: 1, description: 'Geely, la dueña de Volvo, llegó al país para pelear palmo a plamo con las marcas reconocidas y el Emgrand X7 Sport demuestra todo lo que saben hacer. Mecánicamente el planteo responde un poco más a la vieja guardia del segmento como motores de aspiración natural, un 2.0L de 141 CV. Además del diseño moderno, la propuesta de la marca se hace notar en el nivel de equipamiento, especialmente en las versiones con el motor más grande.'
    },
]

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByMarca = (marcaId) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(products.filter (prod => prod.marca === marcaId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(products.find (prod => prod.id === id))
        }, 500)
    })
}