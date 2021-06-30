const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

const petOwnerAuth = (req, res, next) => {
    if (!req.session.petOwnerId) {
        res.redirect('/dashboard');
    } else {
        next();
    }
};

module.exports = { withAuth, petOwnerAuth };