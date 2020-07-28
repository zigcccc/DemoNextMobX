import React from 'react';

const Logo = (props) => {
	return (
		<svg width={63} height={63} viewBox="0 0 63 63" fill="none" {...props}>
			<circle cx={31.5} cy={31.5} r={31.5} fill="#CDFFB6" />
			<g filter="url(#prefix__filter0_i)">
				<path
					d="M27.701 44.15c-1.16 0-2.47-.1-3.93-.3-.8-.1-1.35-.31-1.65-.63-.3-.32-.43-.84-.39-1.56.14-1.98.47-4.42.99-7.32.52-2.92 1.15-5.73 1.89-8.43.14-.5.42-.85.84-1.05.42-.2.97-.3 1.65-.3 1.22 0 1.83.34 1.83 1.02 0 .28-.06.6-.18.96-.52 1.6-1.04 3.75-1.56 6.45-.52 2.68-.89 5.24-1.11 7.68.6.06 1.28.09 2.04.09 3.5 0 6.11-1.06 7.83-3.18 1.74-2.12 2.61-4.95 2.61-8.49 0-2.38-.68-4.22-2.04-5.52-1.36-1.3-3.28-1.95-5.76-1.95-1.6 0-3.19.25-4.77.75-1.56.5-2.97 1.16-4.23 1.98-.26.18-.54.27-.84.27-.34 0-.61-.14-.81-.42-.2-.3-.3-.66-.3-1.08 0-.48.08-.87.24-1.17.16-.32.43-.61.81-.87 1.38-.94 3-1.65 4.86-2.13 1.86-.5 3.65-.75 5.37-.75 2.44 0 4.55.43 6.33 1.29 1.78.84 3.15 2.08 4.11 3.72.96 1.64 1.44 3.62 1.44 5.94 0 3.02-.6 5.66-1.8 7.92-1.2 2.24-2.95 3.98-5.25 5.22-2.3 1.24-5.04 1.86-8.22 1.86z"
					fill="#8C33FF"
				/>
			</g>
			<defs>
				<filter
					id="prefix__filter0_i"
					x={19.811}
					y={18.2}
					width={23.16}
					height={29.95}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy={10} />
					<feGaussianBlur stdDeviation={2} />
					<feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
					<feColorMatrix values="0 0 0 0 0.414416 0 0 0 0 0.0676215 0 0 0 0 0.854167 0 0 0 0.4 0" />
					<feBlend in2="shape" result="effect1_innerShadow" />
				</filter>
			</defs>
		</svg>
	);
};

export default Logo;
