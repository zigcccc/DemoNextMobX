export default async (req, res) => {
	res.statusCode = 200;
	// Demo purpose for loading state
	await new Promise((resolve) => {
		setTimeout(() => resolve(), 2000);
	});
	res.json({
		name: req.query?.name || 'John Doe',
		id: Math.round(Math.random() * 100),
	});
};
