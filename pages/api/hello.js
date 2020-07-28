export default (req, res) => {
	res.statusCode = 200;
	res.json({
		name: req.query?.name || 'John Doe',
		id: Math.round(Math.random() * 100),
	});
};
