export default (req, res) => {
	res.statusCode = 200;
	// Demo purpose for loading state
	setTimeout(() => {
		res.json({
			name: req.query?.name || 'John Doe',
			id: Math.round(Math.random() * 100),
		});
	}, 2000);
};
