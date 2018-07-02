const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

router
	.route('/test')
	.get((req, res) => res.send('hi'));

module.exports = router;
