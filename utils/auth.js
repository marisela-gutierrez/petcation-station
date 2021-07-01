const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/signup');
    } else {
        next();
    }
};

const petOwnerAuth = (req, res, next) => {
    if (!req.session.petOwnerId) {
        console.log(req.session);
        res.redirect('/dashboard');
    } else {
        next();
    }
};

module.exports = { withAuth, petOwnerAuth };