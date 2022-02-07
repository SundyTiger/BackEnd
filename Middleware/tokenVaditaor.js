const validateToken = async (req, res, next) => {
        const bearerHeader = req.headers.authorization;
        if (typeof (bearerHeader) == 'undefined') {
            res.json({
                message: "Header is Undefined"
            })

        }
        else {
            const bearerToken = bearerHeader.split(" ")[1];
            req.token = bearerToken
            next()
        }
    

}
module.exports = { validateToken }