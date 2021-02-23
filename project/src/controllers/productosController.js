let listaProductos = [
    P1 = {
        nombre: "Giovanni Vianna Pro Tamarin Deck",
        precio: 6300.00,
        img: 1,
    },
    P2 = {
        nombre: "Rueda Rosa",
        precio: 2500.00,
        img: 2,
    },
    P3 = {
        nombre: "Truth Hood",
        precio: 7350.00,
        img: 3,
    },
    P4 = {
        nombre: "Vans New Era",
        precio: 5500.00,
        img: 4,
    },
];

let productosController = {
    productDetail: (req, res) => {
        res.render('product-detail', {listaProductos:listaProductos});
    },
    productList: (req, res) => {
        res.send(listaProductos);
    }
}

module.exports = productosController;