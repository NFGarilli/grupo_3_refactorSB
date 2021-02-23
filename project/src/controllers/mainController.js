let mainController = {
    index: (req, res) => {
        res.render('index');
    },
    cart: (req, res) => {
        res.render('product-cart')
    }  
}

module.exports = mainController;