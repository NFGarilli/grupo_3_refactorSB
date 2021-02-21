let mainController = {
    index: (req, res) => {
        res.render('index');
    },
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },
    productdetail: (req, res) => {
        res.render('product-detail');
    }   
}

module.exports = mainController;