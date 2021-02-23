let productList = [
    P1 = {
        id: 1,
        nombre: "Giovanni Vianna Pro Tamarin Deck",
        precio: 6300.00,
        img: 1,
    },
    P2 = {
        id: 2,
        nombre: "Rueda Rosa",
        precio: 2500.00,
        img: 2,
    },
    P3 = {
        id: 3,
        nombre: "Truth Hood",
        precio: 7350.00,
        img: 3,
    },
    P4 = {
        id: 4,
        nombre: "Vans New Era",
        precio: 5500.00,
        img: 4,
    },
    P5 = {
        id: 5,
        nombre: "Wolverine Strapback",
        precio: 3750.00,
        img: 5,
    },
    P6 = {
        id: 6,
        nombre: "Hilton S/S Woven",
        precio: 5300.00,
        img: 6,
    },
    P7 = {
        id: 7,
        nombre: "Tailwind Jacket",
        precio: 12800.00,
        img: 7,
    },
    P8 = {
        id: 8,
        nombre: "Midtown Jacket",
        precio: 8500.00,
        img: 8,
    },    
];

let productosController = {
    productDetail: (req, res) => {
        let idProducto = req.params.id;
        res.render('product-detail', {productList:productList, idProducto:idProducto});
    },
    productList: (req, res) => {
        res.render('product-all', {productList:productList});
    }
}

module.exports = productosController;