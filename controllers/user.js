module.exports = {
	greetUser: async (req, res, next) => {
		return res.status(200).send({ message: "hello world" });
	},
}
