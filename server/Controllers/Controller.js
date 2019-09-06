module.exports = {
    addProduct: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { image_url, name, price} = req.body;

        dbInstance.add_product([image_url, name, price])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "You dun Ducked up A A RON" });
                console.log(err)
            });
    },

    getInventory: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory()
            .then(products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({ errorMessage: "You dun Ducked up A A RON" });
                console.log(err)
            });
    },

}
