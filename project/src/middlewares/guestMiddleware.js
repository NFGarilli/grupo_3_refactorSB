function guestMiddleware (req, res, next) {
    if (req.session.userLogged) {
        return res.redrect('/user/profile');
    }
    next();
}

module.exports = guestMiddleware;