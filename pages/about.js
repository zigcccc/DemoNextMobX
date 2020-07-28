import React from 'react';

const About = () => {
	const [mail, setMail] = React.useState('');
	const handleInput = ({ target }) => setMail(target.value);
	return (
		<div>
			<h1>This is an about page!</h1>
			<input
				type="email"
				placeholder="Your email"
				className="newsletter-input"
				value={mail}
				onChange={handleInput}
			/>
		</div>
	);
};

export default About;
