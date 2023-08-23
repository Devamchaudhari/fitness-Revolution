import React, { FC } from 'react';

interface IProps {
	className?: string;
	onClick?: () => void;
}

export const HidePasswordIcon: FC<IProps> = (props) => (
	<svg viewBox='0 0 40 40' fill='none' className={props.className || ''}>
		<g opacity='0.3'>
			<path d='M19.8437 24.375C21.0041 24.375 22.1169 23.9141 22.9373 23.0936C23.7578 22.2731 24.2187 21.1603 24.2187 20C24.2187 19.8719 24.2129 19.7449 24.2019 19.6196L19.4633 24.3582C19.5887 24.3692 19.7152 24.375 19.8437 24.375ZM34.325 6.4672L32.6562 4.80001C32.5976 4.74145 32.5182 4.70856 32.4353 4.70856C32.3525 4.70856 32.273 4.74145 32.2144 4.80001L27.9441 9.0715C25.5884 7.86759 22.9404 7.26564 20 7.26564C12.4922 7.26564 6.89061 11.1758 3.19529 18.9961C3.04676 19.3106 2.96973 19.6541 2.96973 20.002C2.96973 20.3498 3.04676 20.6933 3.19529 21.0078C4.67186 24.118 6.44985 26.6108 8.52928 28.4864L4.39686 32.6172C4.3383 32.6758 4.3054 32.7553 4.3054 32.8381C4.3054 32.921 4.3383 33.0004 4.39686 33.059L6.06444 34.7266C6.12303 34.7851 6.20249 34.818 6.28533 34.818C6.36818 34.818 6.44763 34.7851 6.50623 34.7266L34.325 6.90939C34.354 6.88037 34.3771 6.8459 34.3928 6.80796C34.4086 6.77003 34.4166 6.72936 34.4166 6.6883C34.4166 6.64723 34.4086 6.60656 34.3928 6.56863C34.3771 6.53069 34.354 6.49622 34.325 6.4672ZM12.9687 20C12.9686 18.8125 13.2761 17.6453 13.8612 16.612C14.4463 15.5786 15.289 14.7145 16.3074 14.1036C17.3257 13.4928 18.4849 13.1562 19.672 13.1265C20.8591 13.0969 22.0337 13.3752 23.0812 13.9344L21.182 15.8336C20.4161 15.5884 19.5974 15.5588 18.8158 15.7482C18.0341 15.9377 17.3198 16.3387 16.7511 16.9074C16.1824 17.4761 15.7814 18.1904 15.592 18.9721C15.4025 19.7537 15.4321 20.5724 15.6773 21.3383L13.7781 23.2375C13.2451 22.2417 12.9671 21.1295 12.9687 20Z' />
			<path d='M36.8047 18.9922C35.4297 16.0964 33.7931 13.735 31.8949 11.9082L26.2645 17.5391C26.7391 18.7797 26.8443 20.1313 26.5674 21.4305C26.2904 22.7297 25.6432 23.9209 24.7039 24.8602C23.7646 25.7995 22.5735 26.4467 21.2743 26.7236C19.9751 27.0005 18.6235 26.8953 17.3828 26.4207L12.6071 31.1965C14.8227 32.2218 17.287 32.7344 20 32.7344C27.5078 32.7344 33.1094 28.8242 36.8047 21.0039C36.9533 20.6894 37.0303 20.3459 37.0303 19.9981C37.0303 19.6502 36.9533 19.3067 36.8047 18.9922Z' />
		</g>
	</svg>
);

export const ShowPasswordIcon: FC<IProps> = (props) => (
	<svg viewBox='0 0 40 40' fill='none' className={props.className || ''}>
		<path d='M19.9955 13.6332C16.9871 13.6332 14.5422 16.0781 14.5422 19.0865C14.5422 22.095 16.9871 24.5398 19.9955 24.5398C23.004 24.5398 25.4488 22.095 25.4488 19.0865C25.4488 16.0781 23.0039 13.6332 19.9955 13.6332Z' />
		<path d='M19.9955 5.45331C10.9066 5.45331 3.14477 11.1065 0 19.0866C3.14477 27.0665 10.9066 32.7198 19.9955 32.7198C29.0934 32.7198 36.8462 27.0665 39.991 19.0866C36.8462 11.1065 29.0934 5.45331 19.9955 5.45331ZM19.9955 28.1754C14.9784 28.1754 10.9066 24.1035 10.9066 19.0865C10.9066 14.0694 14.9784 9.9977 19.9955 9.9977C25.0125 9.9977 29.0844 14.0695 29.0844 19.0866C29.0844 24.1036 25.0125 28.1754 19.9955 28.1754Z' />
	</svg>
);

export const HumanBodyIcon: FC<IProps> = (props) => (
	<svg width='34' height='34' viewBox='0 0 34 34' fill='none' className={props.className || ''}>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M17 9.20834C18.7604 9.20834 20.1875 7.78126 20.1875 6.02084C20.1875 4.26043 18.7604 2.83334 17 2.83334C15.2396 2.83334 13.8125 4.26043 13.8125 6.02084C13.8125 7.78126 15.2396 9.20834 17 9.20834ZM26.8601 10.937C27.079 11.6881 26.6476 12.4745 25.8964 12.6934C24.2138 13.1838 22.6935 13.553 21.25 13.7992V21.9544V21.9583V29.75C21.25 30.5074 20.6542 31.1309 19.8975 31.1653C19.1409 31.1995 18.491 30.6326 18.4225 29.8783L17.7141 22.0866C17.7103 22.0438 17.7083 22.001 17.7083 21.9583H16.2917C16.2917 22.001 16.2898 22.0438 16.2859 22.0866L15.5775 29.8783C15.509 30.6326 14.8591 31.1995 14.1025 31.1653C13.3459 31.1309 12.75 30.5074 12.75 29.75V13.773C11.3102 13.5248 9.7954 13.163 8.12126 12.6984C7.36731 12.4893 6.92573 11.7085 7.1349 10.9546C7.34415 10.2006 8.12487 9.75906 8.87882 9.96824C12.143 10.874 14.5958 11.3224 17.0062 11.3331C19.4117 11.3439 21.8583 10.9191 25.1036 9.97326C25.8548 9.75432 26.6412 10.1858 26.8601 10.937Z'
			fill='white'
		/>
	</svg>
);
export const LocationPinIcon: FC<IProps> = (props) => (
	<svg width='40' height='40' viewBox='0 0 30 30' fill='none' className={props.className || ''}>
		<path
			d='M14 22.7598C14.3604 22.7598 14.9141 21.292 14.9141 18.9189V10.6396C16.3994 10.2354 17.4805 8.87305 17.4805 7.26465C17.4805 5.33105 15.9336 3.75781 14 3.75781C12.0576 3.75781 10.5107 5.33105 10.5107 7.26465C10.5107 8.86426 11.583 10.2266 13.0684 10.6309V18.9189C13.0684 21.2744 13.6309 22.7598 14 22.7598ZM12.998 7.45801C12.3652 7.45801 11.8115 6.9043 11.8115 6.25391C11.8115 5.6123 12.3652 5.06738 12.998 5.06738C13.6572 5.06738 14.1934 5.6123 14.1934 6.25391C14.1934 6.9043 13.6572 7.45801 12.998 7.45801Z'
			fill='#EDFF64'
		/>
	</svg>
);

export const HumanWalkIcon: FC<IProps> = (props) => (
	<svg width='154' height='154' viewBox='0 0 154 154' fill='none' className={props.className || ''}>
		<path
			d='M76.8066 36.5718C83.2358 36.5718 88.4565 31.2544 88.4565 25.0669C88.4565 18.5894 83.2358 13.3687 76.8066 13.3687C70.3774 13.3687 65.3018 18.5894 65.3018 25.0669C65.3018 31.2544 70.3774 36.5718 76.8066 36.5718ZM93.2905 128.659C96.0459 128.659 98.5112 126.629 98.5112 123.245C98.5112 121.988 98.1729 120.828 97.4961 119.475L87.1514 98.4951C86.2329 96.6099 85.1694 94.918 84.2026 93.5645L77.8701 84.5732L78.2568 83.3647C79.9971 77.8057 80.6738 74.4219 81.0605 69.1045L82.124 54.1675C82.6558 46.8198 78.4019 40.8257 70.7158 40.8257C65.1084 40.8257 61.0479 43.8711 55.8271 48.9468L47.8994 56.8262C45.1924 59.4849 44.3223 61.6602 44.0806 65.0439L43.0654 77.3223C42.8237 80.6577 44.709 82.833 47.7061 83.0264C50.5581 83.2197 52.6851 81.5278 53.0234 77.9507L54.1353 64.5122L58.8242 60.355C59.6943 59.5815 60.9512 60.0166 60.8545 61.3218L59.9844 73.4067C59.5493 79.2559 62.1113 83.5098 65.0117 87.1353L75.3564 100.139C76.3716 101.396 76.5166 101.879 77 102.797L88.0215 125.179C89.3267 127.789 91.2603 128.659 93.2905 128.659ZM95.5625 71.5698H107.261C110.645 71.5698 112.771 69.5879 112.771 66.5908C112.771 63.5938 110.596 61.6118 107.212 61.6118H94.9824L86.4746 52.3789L85.5562 65.6724L89.1816 69.2979C90.9219 71.0381 92.5654 71.5698 95.5625 71.5698ZM46.4009 128.659C48.0928 128.659 49.5913 127.886 50.6548 126.629L66.2202 108.115C67.8154 106.181 68.0088 105.698 68.6855 103.812C69.0723 102.556 69.4106 101.347 69.7007 100.187L60.8062 89.0688L58.1958 101.202L43.4521 118.701C42.0986 120.248 41.1802 121.602 41.1802 123.535C41.1802 126.532 43.4521 128.659 46.4009 128.659Z'
			fill='#EDFF64'
		/>
	</svg>
);

export const RedirectIcon: FC<IProps> = (props) => (
	<svg width='28' height='28' viewBox='0 0 28 28' fill='none' className={props.className || ''}>
		<path
			d='M15.1689 21.8369C15.6523 21.8369 16.0303 21.6523 16.4961 21.2129L23.457 14.6826C23.7998 14.3574 23.9316 13.9795 23.9316 13.6543C23.9316 13.3203 23.7998 12.9512 23.457 12.626L16.4961 6.13965C15.9863 5.66504 15.6523 5.47168 15.1865 5.47168C14.4834 5.47168 13.9824 6.0166 13.9824 6.70215V9.83105H13.7627C7.69824 9.83105 4.88574 13.7246 4.88574 20.1055C4.88574 21.2217 5.36035 21.8018 5.97559 21.8018C6.44141 21.8018 6.87207 21.6523 7.21484 21.0107C8.59473 18.4443 10.5547 17.5039 13.7627 17.5039H13.9824V20.6504C13.9824 21.3359 14.4834 21.8369 15.1689 21.8369ZM15.7314 19.5693C15.6523 19.5693 15.5996 19.5166 15.5996 19.4287V16.1855C15.5996 15.9834 15.5117 15.8955 15.3096 15.8955H14.1846C10.1592 15.8955 7.59277 17.1699 6.53809 19.3672C6.51172 19.4199 6.48535 19.4463 6.4502 19.4463C6.41504 19.4463 6.38867 19.4199 6.38867 19.3584C6.5293 15.166 8.52441 11.4307 14.1846 11.4307H15.3096C15.5117 11.4307 15.5996 11.3428 15.5996 11.1406V7.81836C15.5996 7.73926 15.6523 7.68652 15.7314 7.68652C15.7842 7.68652 15.8369 7.71289 15.8809 7.75684L21.8838 13.4873C21.9453 13.5576 21.9717 13.6016 21.9717 13.6543C21.9717 13.707 21.9541 13.751 21.8838 13.8213L15.8721 19.499C15.8281 19.543 15.7754 19.5693 15.7314 19.5693Z'
			fill='#1D1D1F'
		/>
	</svg>
);

export const HumanCycleIcon: FC<IProps> = (props) => (
	<svg
		width='154'
		height='154'
		viewBox='0 0 154 154'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		className={props.className || ''}
	>
		<g>
			<path
				d='M99.83,67.01c12.72,0,23.05,10.32,23.05,23.05c0,12.72-10.32,23.05-23.05,23.05s-23.05-10.32-23.05-23.05 c0-8.21,3.56-14.68,10.02-18.76l-5.69-9.56h-15c1.52-3.28,2.47-6.09,2.28-7.7h15.32c0.63,0,1.22,0.17,1.74,0.47l1.61-3.35 l0.36-0.04l0,0c0.14-0.02,0.29-0.04,0.44-0.06c4.12-0.77,6.58-3.37,7.6-6.5c0.46-1.41,0.58-2.92,0.39-4.39 c-0.18-1.43-0.67-2.83-1.42-4.07c-0.33-0.54-0.71-1.05-1.13-1.53h3.83v0.02c0.49,0,0.99,0.11,1.47,0.33 c1.74,0.81,2.49,2.88,1.67,4.62L90.1,60.96l3.9,6.8C95.9,67.25,97.86,67.01,99.83,67.01L99.83,67.01z M34.14,30.59l21.03-15.38 c2.47-1.54,5.13-2.57,7.28-2.29c1.79,0.24,3.44,1.21,4.94,3.11c4.56,5.69,6.82,13.5,9.34,22.11l8.87-1.04 c5.07-0.23,6.4,7.22,1.19,8.2l-9.14,1.01c-4.08,0.46-7.06,1.59-9.28-3.01l-4.96-12.44l-14.27,9.92c-0.88,0.92-1.01,1.83-0.13,2.75 l10.71,7.79c1.41,0.95,2.6,1.62,2.89,3.51c0.44,2.84-11.58,21.71-13.68,25.35c-3.69,4.1-10.69,0.39-7.78-4.58l8.14-17.15 c-2.42-1.44-4.77-2.88-7.03-4.32C34.72,49.35,24.69,38.38,34.14,30.59L34.14,30.59z M81.6,0c5.49,0,9.94,4.45,9.94,9.94 c0,5.49-4.45,9.94-9.94,9.94c-5.49,0-9.94-4.45-9.94-9.94C71.66,4.45,76.11,0,81.6,0L81.6,0z M41.25,61.73h-4.77l-2.83,8.23 c1.03,0.49,2,1.04,2.91,1.64l-0.68,1.44c-1.09,2.03-1.45,4.03-1.24,5.88c-1.3-1.35-2.83-2.48-4.54-3.31l0,0l-5.76,13.02 c-0.77,1.76-2.83,2.56-4.59,1.79c-1.76-0.77-2.56-2.83-1.78-4.59l5.24-11.84c-0.05,0-0.11,0-0.16,0c-8.88,0-16.07,7.2-16.07,16.08 c0,8.87,7.2,16.07,16.07,16.07c8.88,0,16.07-7.2,16.07-16.07c0-1.56-0.22-3.06-0.63-4.49c0.15,0.11,0.3,0.22,0.46,0.33 c1.28,0.87,2.76,1.47,4.3,1.72c0.9,0.15,1.82,0.19,2.75,0.12c0.07,0.76,0.1,1.53,0.1,2.32c0,12.72-10.32,23.05-23.05,23.05 C10.32,113.11,0,102.78,0,90.06c0-12.73,10.32-23.05,23.05-23.05c1.07,0,2.12,0.07,3.16,0.21l4.09-11.11 c0.47-1.08,1.43-1.8,2.51-2.01c2.06,1.97,4.27,3.67,6.31,4.96c0.62,0.39,1.5,0.94,2.62,1.63L41.25,61.73L41.25,61.73z M22.13,38.32 h2.32c0.04,1.14,0.2,2.29,0.49,3.43c0.6,2.43,1.75,4.76,3.23,6.93h-6.03l0,0l0,0c-1.13,0-2.17-0.47-2.93-1.22 c-0.77-0.77-1.24-1.82-1.24-2.98l0,0l0,0v-1.94l0,0l0,0c0-1.17,0.47-2.23,1.24-2.98C19.95,38.79,20.99,38.33,22.13,38.32 L22.13,38.32L22.13,38.32L22.13,38.32L22.13,38.32z M98.1,74.07l5.59,8.61c1.05,1.61,0.59,3.76-1.02,4.81 c-1.61,1.05-3.76,0.59-4.81-1.02l-6.53-10.06c-4.55,2.84-7.58,7.89-7.58,13.65c0,8.87,7.2,16.07,16.08,16.07 c8.88,0,16.08-7.2,16.08-16.07c0-8.88-7.2-16.08-16.08-16.08C99.25,73.97,98.67,74.01,98.1,74.07L98.1,74.07L98.1,74.07z'
				fill='#EDFF64'
			/>
		</g>
	</svg>
);

export const StrengthIcon: FC<IProps> = (props) => (
	<svg width='150' height='200' viewBox='0 0 100 100' className={props.className || ''}>
		<g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'>
			<path
				d='M226 816 c-101 -61 -98 -204 4 -256 l40 -20 0 -100 c0 -146 -11 -140
					245 -140 l204 0 6 -33 c3 -17 11 -63 18 -102 11 -65 14 -70 37 -70 l25 0 3
					127 c3 159 2 160 -124 178 -49 7 -118 21 -154 31 -36 11 -88 19 -116 19 l-51
					0 -7 38 c-9 57 -8 60 23 78 37 22 71 82 71 124 0 47 -39 109 -82 131 -50 25
					-95 24 -142 -5z m99 -126 c0 -18 -6 -26 -23 -28 -24 -4 -38 18 -28 44 3 9 15
					14 28 12 17 -2 23 -10 23 -28z'
				fill='#EDFF64'
			/>
			<path
				d='M59 451 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47 90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z'
				fill='#EDFF64'
			/>
			<path
				d='M64 225 c-4 -8 -4 -22 0 -30 5 -13 46 -15 313 -13 l308 3 0 25 0 25 -308 3 c-267 2 -308 0 -313 -13z'
				fill='#EDFF64'
			/>
		</g>
	</svg>
);

export const SwimmingIcon: FC<IProps> = (props) => (
	<svg width='150' height='200' viewBox='0 0 100 100' className={props.className || ''}>
		<g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'>
			<path
				d='M604 656 c-47 -47 -47 -95 0 -142 47 -47 95 -47 142 0 26 26 34 42
34 71 0 52 -53 105 -105 105 -29 0 -45 -8 -71 -34z'
				fill='#EDFF64'
			/>
			<path
				d='M218 610 c-96 -49 -107 -60 -89 -89 8 -12 23 -10 98 11 98 28 86 32
131 -43 l21 -35 -104 -60 c-58 -32 -105 -62 -105 -66 0 -10 60 -28 97 -28 19
0 83 20 143 45 60 25 118 45 129 45 58 0 52 11 -71 139 -67 69 -129 127 -137
128 -9 1 -60 -20 -113 -47z'
				fill='#EDFF64'
			/>
			<path
				d='M530 326 c-25 -7 -78 -27 -119 -45 -91 -41 -162 -49 -227 -27 -26 9
-55 23 -65 32 -25 23 -54 14 -54 -16 0 -20 11 -30 59 -55 52 -26 70 -30 140
-30 72 1 91 5 176 42 52 22 110 44 127 48 44 9 137 -11 195 -42 51 -28 78 -25
78 7 0 35 -162 102 -243 99 -12 0 -42 -6 -67 -13z'
				fill='#EDFF64'
			/>
		</g>
	</svg>
);

export const HikingIcon: FC<IProps> = (props) => (
	<svg width='130' height='150' viewBox='0 0 384 512' className={props.className || ''}>
		<path
			d='M80.95 472.23c-4.28 17.16 6.14 34.53 23.28 38.81 2.61.66 5.22.95 7.8.95 14.33 0 27.37-9.7 31.02-24.23l25.24-100.97-52.78-52.78-34.56 138.22zm14.89-196.12L137 117c2.19-8.42-3.14-16.95-11.92-19.06-43.88-10.52-88.35 15.07-99.32 57.17L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06l63.56 15.25c8.79 2.1 17.68-3.02 19.87-11.44zM368 160h-16c-8.84 0-16 7.16-16 16v16h-34.75l-46.78-46.78C243.38 134.11 228.61 128 212.91 128c-27.02 0-50.47 18.3-57.03 44.52l-26.92 107.72a32.012 32.012 0 0 0 8.42 30.39L224 397.25V480c0 17.67 14.33 32 32 32s32-14.33 32-32v-82.75c0-17.09-6.66-33.16-18.75-45.25l-46.82-46.82c.15-.5.49-.89.62-1.41l19.89-79.57 22.43 22.43c6 6 14.14 9.38 22.62 9.38h48v240c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V176c.01-8.84-7.15-16-15.99-16zM240 96c26.51 0 48-21.49 48-48S266.51 0 240 0s-48 21.49-48 48 21.49 48 48 48z'
			fill='#EDFF64'
		/>
	</svg>
);

export const MedicationIcon: FC<IProps> = (props) => (
	<svg width='150' height='120' viewBox='0 0 512.000000 512.000000' className={props.className || ''}>
		<g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'>
			<path
				d='M2448 5110 c-79 -13 -188 -52 -256 -92 -83 -48 -221 -189 -267 -271
				-159 -288 -112 -645 115 -867 37 -36 90 -85 118 -110 l52 -46 0 -131 c0 -72
				-3 -139 -6 -148 -15 -37 -56 -45 -234 -45 -146 0 -179 -3 -232 -21 -68 -23
				-127 -60 -174 -111 -17 -18 -251 -338 -519 -711 -395 -549 -495 -682 -524
				-696 -27 -14 -66 -20 -156 -23 -142 -5 -194 -24 -267 -95 -67 -66 -92 -128
				-93 -228 0 -68 4 -89 28 -137 30 -62 83 -115 149 -150 40 -21 59 -23 246 -28
				l202 -5 -70 -53 c-405 -309 -294 -944 193 -1109 l82 -28 1404 -3 c773 -1 1403
				-1 1400 2 -2 2 -418 233 -924 514 -506 280 -981 543 -1056 585 -190 105 -400
				167 -568 167 -31 0 -65 3 -77 6 -20 5 -20 6 6 34 14 15 163 232 330 481 l305
				454 3 -396 2 -396 448 -248 c246 -136 452 -248 458 -248 5 0 196 111 422 247
				l412 247 2 401 3 401 299 -439 c164 -241 316 -460 337 -485 l38 -46 -87 -6
				c-167 -11 -376 -68 -529 -145 -43 -22 -194 -109 -335 -194 l-258 -155 413
				-228 c226 -126 535 -297 686 -381 l274 -152 51 15 c171 50 314 170 391 328 48
				96 65 173 65 285 0 112 -17 188 -65 286 -39 79 -139 194 -204 234 -22 14 -41
				28 -41 32 0 4 102 8 228 10 214 3 229 4 270 26 66 35 119 88 149 150 39 80 40
				192 2 272 -33 70 -89 126 -159 159 -49 23 -71 26 -205 31 -126 4 -155 8 -184
				25 -25 15 -173 211 -533 705 -273 377 -514 700 -535 719 -21 18 -67 48 -103
				65 -63 30 -70 31 -225 34 -88 2 -172 8 -186 13 -44 17 -51 43 -47 189 l3 133
				45 36 c79 63 194 186 229 244 18 31 47 96 64 144 29 82 31 98 32 223 0 153
				-18 229 -83 353 -65 125 -215 264 -347 322 -116 52 -284 74 -407 55z'
				fill='#EDFF64'
			/>
		</g>
	</svg>
);

export const EllipticalIcon: FC<IProps> = (props) => (
	<svg width='150' height='200' viewBox='0 0 100 100' className={props.className || ''}>
		<g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'>
			<path
				d='M385 815 c-14 -13 -25 -36 -25 -50 0 -33 42 -75 75 -75 33 0 75 42 75 75 0 33 -42 75 -75 75 -14 0 -37 -11 -50 -25z'
				fill='#EDFF64'
			/>
			<path
				d='M205 624 c-34 -24 -50 -42 -50 -57 0 -33 28 -32 76 2 36 27 79 41 79
				26 0 -2 -9 -28 -21 -57 -11 -29 -18 -62 -14 -75 3 -13 28 -37 60 -58 30 -19
				55 -38 55 -42 0 -5 -8 -38 -19 -74 -12 -41 -15 -72 -10 -81 7 -13 -8 -16 -112
				-23 -99 -6 -124 -10 -140 -26 -25 -25 -24 -54 1 -79 19 -19 33 -20 320 -20
				l301 0 24 25 c31 31 32 69 1 100 l-23 23 39 197 c22 108 37 203 34 211 -3 8
				-14 14 -24 14 -23 0 -122 -100 -122 -123 0 -24 28 -33 52 -18 17 11 19 10 15
				-6 -3 -10 -15 -67 -27 -128 -12 -60 -23 -118 -26 -127 -5 -17 -39 -22 -200
				-31 l-71 -4 34 85 c18 47 33 91 33 97 0 6 -16 33 -37 59 l-36 47 17 35 16 36
				18 -22 c15 -18 26 -21 82 -18 62 3 65 4 65 28 0 23 -4 25 -50 28 -45 3 -54 8
				-91 47 l-42 45 -78 0 c-74 0 -82 -2 -129 -36z'
				fill='#EDFF64'
			/>
			<path
				d='M240 382 c0 -6 -33 -14 -72 -19 -69 -8 -73 -9 -73 -33 0 -25 2 -25
				89 -28 72 -2 92 0 107 14 32 29 27 38 -43 72 -5 2 -8 -1 -8 -6z'
				fill='#EDFF64'
			/>
		</g>
	</svg>
);

export const BasketBallIcon: FC<IProps> = (props) => (
	<svg width='150' height='200' viewBox='0 0 100 100' className={props.className || ''}>
		<g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'>
			<path
				d='M445 785 c-14 -13 -25 -36 -25 -50 0 -33 42 -75 75 -75 33 0 75 42 75 75 0 33 -42 75 -75 75 -14 0 -37 -11 -50 -25z'
				fill='#EDFF64'
			/>
			<path
				d='M343 595 c-71 -33 -73 -35 -103 -101 -34 -76 -35 -98 -3 -102 19 -3
				27 6 47 52 22 49 48 77 61 65 2 -3 -1 -26 -7 -52 -5 -27 -7 -59 -4 -71 3 -13
				36 -48 74 -78 66 -54 68 -56 88 -134 17 -66 24 -80 42 -82 13 -2 25 3 28 12
				10 26 -26 173 -57 230 l-30 56 15 76 c21 100 20 111 -9 139 -32 32 -55 31
				-142 -10z'
				fill='#EDFF64'
			/>
			<path
				d='M560 496 c0 -8 -3 -22 -6 -31 -6 -14 2 -16 62 -13 66 3 69 4 69 28 0 24 -3 25 -62 28 -50 2 -63 0 -63 -12z'
				fill='#EDFF64'
			/>
			<path
				d='M625 395 c-14 -13 -25 -36 -25 -50 0 -33 42 -75 75 -75 33 0 75 42 75 75 0 33 -42 75 -75 75 -14 0 -37 -11 -50 -25z'
				fill='#EDFF64'
			/>
			<path
				d='M320 285 c0 -9 -18 -48 -40 -87 -44 -76 -47 -101 -14 -106 16 -2 32 14 74 78 l53 81 -23 24 c-26 28 -50 33 -50 10z'
				fill='#EDFF64'
			/>
		</g>
	</svg>
);

export const PilatesIcon: FC<IProps> = (props) => (
	<svg width='150' height='200' viewBox='0 0 100 100' className={props.className || ''}>
		<g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'>
			<path
				d='M179 781 c-39 -40 -39 -82 0 -122 20 -20 39 -29 61 -29 22 0 41 9 61 29 39 40 39 82 0 122 -40 39 -82 39 -122 0z'
				fill='#EDFF64'
			/>
			<path
				d='M375 610 c-146 -40 -184 -54 -202 -75 -29 -33 -29 -74 -1 -111 54
					-70 200 -234 211 -236 7 -1 -62 -5 -153 -8 l-165 -5 0 -25 0 -25 385 0 385 0
					0 25 0 25 -195 5 c-107 3 -188 8 -180 11 36 16 345 273 348 290 7 39 -30 31
					-182 -40 -83 -39 -157 -71 -163 -71 -12 0 -118 118 -112 124 2 2 58 28 124 59
					103 48 120 59 120 79 0 16 -6 24 -20 25 -11 1 -101 -20 -200 -47z'
				fill='#EDFF64'
			/>
		</g>
	</svg>
);

export const RowingIcon: FC<IProps> = (props) => (
	<svg width='150' height='200' viewBox='0 0 100 100' className={props.className || ''}>
		<g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'>
			<path
				d='M595 785 c-14 -13 -25 -36 -25 -50 0 -33 42 -75 75 -75 14 0 37 11
				50 25 14 13 25 36 25 50 0 14 -11 37 -25 50 -13 14 -36 25 -50 25 -14 0 -37
				-11 -50 -25z'
				fill='#EDFF64'
			/>
			<path
				d='M260 670 c-11 -11 -20 -29 -20 -40 0 -26 34 -60 60 -60 26 0 60 34
				60 60 0 11 -9 29 -20 40 -11 11 -29 20 -40 20 -11 0 -29 -9 -40 -20z'
				fill='#EDFF64'
			/>
			<path
				d='M782 630 c-38 -27 -49 -30 -120 -30 -47 0 -85 -5 -96 -13 -9 -7 -37
				-55 -60 -107 -37 -80 -48 -95 -69 -98 -33 -4 -43 -17 -66 -86 -19 -52 -19 -56
				-3 -65 39 -21 92 -23 147 -6 52 17 59 17 106 1 28 -9 57 -16 64 -16 7 0 26 47
				44 112 37 127 35 131 -41 125 -27 -2 -48 -2 -48 0 0 2 7 17 15 33 10 19 30 34
				62 46 27 9 57 25 67 33 17 14 19 14 14 1 -21 -59 -31 -121 -21 -131 15 -15 85
				201 71 219 -15 17 -20 16 -66 -18z'
				fill='#EDFF64'
			/>
			<path
				d='M410 565 c-28 -20 -45 -25 -96 -25 -41 0 -68 -5 -77 -14 -7 -8 -29
				-48 -48 -90 -30 -68 -37 -76 -62 -76 -15 0 -36 -9 -47 -20 -31 -31 -25 -100 9
				-100 9 0 36 -7 61 -16 46 -16 98 -14 144 7 16 8 31 30 45 66 28 74 28 77 -19
				70 -22 -3 -40 -3 -40 -1 0 2 10 23 21 47 17 35 30 47 57 55 20 6 38 9 40 7 3
				-2 -3 -22 -12 -45 -20 -50 -20 -60 -2 -60 9 0 23 26 36 64 12 36 30 76 41 90
				23 29 22 59 -1 64 -9 1 -31 -9 -50 -23z'
				fill='#EDFF64'
			/>
			<path
				d='M758 317 c-14 -50 -25 -93 -23 -95 1 -2 22 3 45 10 49 15 64 43 57
				101 -5 34 -30 77 -46 77 -3 0 -18 -42 -33 -93z'
				fill='#EDFF64'
			/>
			<path
				d='M64 166 c-11 -28 2 -42 56 -59 62 -20 121 -21 173 -3 31 11 43 11 75
				0 20 -7 57 -13 82 -13 25 0 62 6 82 13 32 11 44 11 75 0 52 -18 119 -17 178 5
				41 14 50 21 50 42 0 28 -17 29 -97 8 -39 -10 -57 -10 -95 0 -27 7 -59 13 -73
				13 -14 0 -46 -6 -72 -13 -39 -10 -57 -10 -95 0 -27 7 -59 13 -73 13 -14 0 -46
				-6 -72 -13 -38 -10 -58 -10 -95 0 -27 7 -58 15 -70 18 -15 3 -25 0 -29 -11z'
				fill='#EDFF64'
			/>
		</g>
	</svg>
);

export const KickboxingIcon: FC<IProps> = (props) => (
	<svg
		width='154'
		height='154'
		viewBox='0 0 512 512'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		className={props.className || ''}
	>
		<g>
			<path
				fill='#EDFF64'
				d='M 189.5,-0.5 C 196.5,-0.5 203.5,-0.5 210.5,-0.5C 239.697,8.8851 252.53,28.8851 249,59.5C 248.767,61.7801 247.934,63.7801 246.5,65.5C 225.027,54.7167 208.527,59.7167 197,80.5C 194.456,86.2965 192.623,92.2965 191.5,98.5C 165.112,92.6055 151.112,76.1055 149.5,49C 151.722,23.2991 165.055,6.79915 189.5,-0.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 390.5,60.5 C 397.241,60.1712 403.908,60.6712 410.5,62C 418.244,68.0699 424.077,75.5699 428,84.5C 431.927,95.298 430.927,105.631 425,115.5C 420.996,121.252 415.496,123.919 408.5,123.5C 400.581,122.77 392.914,120.937 385.5,118C 381.304,117.336 377.138,117.503 373,118.5C 369.718,117.885 367.718,115.885 367,112.5C 364.084,101.332 362.75,89.999 363,78.5C 370.55,69.8225 379.716,63.8225 390.5,60.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 219.5,63.5 C 231.39,63.0556 242.39,65.8889 252.5,72C 265.691,83.068 268.358,96.068 260.5,111C 252.172,116.664 243.172,120.997 233.5,124C 230.604,126.975 227.604,129.808 224.5,132.5C 212.732,126.575 202.899,118.242 195,107.5C 194.105,87.6112 202.271,72.9445 219.5,63.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 239.5,511.5 C 234.5,511.5 229.5,511.5 224.5,511.5C 208.687,505.222 202.187,493.555 205,476.5C 213.751,445.741 217.084,414.407 215,382.5C 213.255,353.557 202.089,329.057 181.5,309C 178.337,306.584 175.004,304.418 171.5,302.5C 174.931,370.895 162.097,436.228 133,498.5C 128.834,504.65 123.334,508.983 116.5,511.5C 111.5,511.5 106.5,511.5 101.5,511.5C 84.5337,504.908 78.0337,492.575 82,474.5C 119.311,393.82 125.311,310.82 100,225.5C 93.6312,194.95 92.9645,164.283 98,133.5C 98.414,133.043 98.914,132.709 99.5,132.5C 104.614,139.117 110.281,145.283 116.5,151C 131.613,162.778 147.28,173.778 163.5,184C 173.217,186.694 181.384,184.194 188,176.5C 198.644,163.022 209.477,149.688 220.5,136.5C 222.766,135.686 225.1,135.186 227.5,135C 230.069,132.521 232.402,129.854 234.5,127C 245.423,123.79 255.257,118.623 264,111.5C 265.366,109.63 266.533,107.63 267.5,105.5C 298.085,97.5204 328.752,89.8537 359.5,82.5C 359.422,94.3803 361.422,105.88 365.5,117C 365.167,117.5 364.833,118 364.5,118.5C 319.548,129.821 274.548,140.988 229.5,152C 220.35,165.467 213.184,179.967 208,195.5C 202.813,217.093 203.813,238.426 211,259.5C 247.061,289.949 267.061,328.949 271,376.5C 273.621,411.961 270.621,446.961 262,481.5C 260.567,496.388 253.067,506.388 239.5,511.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 123.5,102.5 C 143.835,104.467 163.835,108.3 183.5,114C 178.022,120.979 172.355,127.813 166.5,134.5C 159.815,130.491 153.482,125.991 147.5,121C 145.598,119.699 143.598,119.032 141.5,119C 149.711,126.213 158.211,133.046 167,139.5C 174.978,129.355 183.144,119.355 191.5,109.5C 200.051,118.221 209.051,126.388 218.5,134C 206.5,148.667 194.5,163.333 182.5,178C 176.922,181.301 170.922,182.301 164.5,181C 143.285,168.782 124.119,153.949 107,136.5C 99.41,118.682 104.91,107.348 123.5,102.5 Z'
			/>
		</g>
	</svg>
);

export const SoccerIcon: FC<IProps> = (props) => (
	<svg
		width='150'
		height='200'
		viewBox='0 0 100 100'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		className={props.className || ''}
	>
		<g>
			<path
				fill='#EDFF64'
				d='M 44.5,5.5 C 56.8184,4.65751 59.8184,9.49084 53.5,20C 43.6667,22.1667 39.8333,18.3333 42,8.5C 43.045,7.62656 43.8783,6.62656 44.5,5.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 33.5,23.5 C 40.4431,23.0689 47.1097,24.2355 53.5,27C 61.7384,31.581 69.0717,37.2476 75.5,44C 74.5309,47.0748 72.5309,48.0748 69.5,47C 64.2972,43.6342 58.9639,40.4676 53.5,37.5C 48.3065,50.412 43.3065,63.412 38.5,76.5C 36.604,77.4656 34.604,77.7989 32.5,77.5C 33.0181,69.4118 33.8515,61.4118 35,53.5C 32.3758,57.985 28.5425,59.985 23.5,59.5C 25.1157,50.2528 28.449,41.5862 33.5,33.5C 33.3333,33.1667 33.1667,32.8333 33,32.5C 31.9326,33.1905 30.7659,33.6905 29.5,34C 26.9204,37.1584 24.5871,40.4918 22.5,44C 17.9167,44.9337 16.4167,43.1004 18,38.5C 20.4722,30.5248 25.6388,25.5248 33.5,23.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 11.5,62.5 C 23.8184,61.6575 26.8184,66.4908 20.5,77C 10.6667,79.1667 6.83333,75.3333 9,65.5C 10.045,64.6266 10.8783,63.6266 11.5,62.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 50.5,68.5 C 53.7654,68.2082 56.7654,68.8749 59.5,70.5C 63.4293,67.9406 67.4293,67.9406 71.5,70.5C 74.2346,68.8749 77.2346,68.2082 80.5,68.5C 81.0396,74.7718 78.0396,77.7718 71.5,77.5C 62.4665,77.5318 53.4665,77.1985 44.5,76.5C 43.1667,75.1667 43.1667,73.8333 44.5,72.5C 46.9009,71.6424 48.9009,70.309 50.5,68.5 Z'
			/>
		</g>
	</svg>
);

export const CrossFitIcon: FC<IProps> = (props) => (
	<svg
		width='150'
		height='150'
		viewBox='0 0 100 100'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		className={props.className || ''}
	>
		<g>
			<path
				fill='#EDFF64'
				d='M 44.5,5.5 C 54.6591,4.15811 58.8257,8.49144 57,18.5C 54.1034,23.1549 49.9367,24.6549 44.5,23C 39.8451,20.1034 38.3451,15.9367 40,10.5C 41.025,8.31305 42.525,6.64638 44.5,5.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 35.5,27.5 C 44.1731,27.3336 52.8397,27.5002 61.5,28C 63.286,28.7845 64.786,29.9512 66,31.5C 67.6232,43.0697 67.9566,54.7364 67,66.5C 64.6667,67.8333 62.3333,67.8333 60,66.5C 59.8166,58.5876 59.3166,50.7543 58.5,43C 57.5509,42.3828 56.7175,42.5494 56,43.5C 55.5006,48.8229 55.334,54.1563 55.5,59.5C 50.8333,59.5 46.1667,59.5 41.5,59.5C 41.666,54.1563 41.4994,48.8229 41,43.5C 40.2825,42.5494 39.4491,42.3828 38.5,43C 37.6834,50.7543 37.1834,58.5876 37,66.5C 34.6667,67.8333 32.3333,67.8333 30,66.5C 29.3333,55.5 29.3333,44.5 30,33.5C 31.3597,30.9774 33.193,28.9774 35.5,27.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 9.5,45.5 C 10.8333,45.5 12.1667,45.5 13.5,45.5C 13.5,56.1667 13.5,66.8333 13.5,77.5C 12.1667,77.5 10.8333,77.5 9.5,77.5C 9.5,72.8333 9.5,68.1667 9.5,63.5C 8.16667,63.5 6.83333,63.5 5.5,63.5C 5.5,62.1667 5.5,60.8333 5.5,59.5C 6.83333,59.5 8.16667,59.5 9.5,59.5C 9.5,54.8333 9.5,50.1667 9.5,45.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 17.5,45.5 C 18.8333,45.5 20.1667,45.5 21.5,45.5C 21.5,50.1667 21.5,54.8333 21.5,59.5C 22.8333,59.5 24.1667,59.5 25.5,59.5C 25.5,60.8333 25.5,62.1667 25.5,63.5C 24.1667,63.5 22.8333,63.5 21.5,63.5C 21.5,68.1667 21.5,72.8333 21.5,77.5C 20.1667,77.5 18.8333,77.5 17.5,77.5C 17.5,66.8333 17.5,56.1667 17.5,45.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 75.5,45.5 C 76.8333,45.5 78.1667,45.5 79.5,45.5C 79.5,56.1667 79.5,66.8333 79.5,77.5C 78.1667,77.5 76.8333,77.5 75.5,77.5C 75.5,72.8333 75.5,68.1667 75.5,63.5C 74.1667,63.5 72.8333,63.5 71.5,63.5C 71.5,62.1667 71.5,60.8333 71.5,59.5C 72.8333,59.5 74.1667,59.5 75.5,59.5C 75.5,54.8333 75.5,50.1667 75.5,45.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 83.5,45.5 C 84.8333,45.5 86.1667,45.5 87.5,45.5C 87.5,50.1667 87.5,54.8333 87.5,59.5C 88.8333,59.5 90.1667,59.5 91.5,59.5C 91.5,60.8333 91.5,62.1667 91.5,63.5C 90.1667,63.5 88.8333,63.5 87.5,63.5C 87.5,68.1667 87.5,72.8333 87.5,77.5C 86.1667,77.5 84.8333,77.5 83.5,77.5C 83.5,66.8333 83.5,56.1667 83.5,45.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 40.5,63.5 C 45.8333,63.5 51.1667,63.5 56.5,63.5C 56.4524,67.0753 58.119,69.4086 61.5,70.5C 63.5336,75.8018 64.8669,81.3018 65.5,87C 65.7386,92.7545 63.0719,94.7545 57.5,93C 57,92.5 56.5,92 56,91.5C 53.5939,83.6372 51.7606,75.6372 50.5,67.5C 49.1667,67.5 47.8333,67.5 46.5,67.5C 45.2394,75.6372 43.4061,83.6372 41,91.5C 38.8471,93.4439 36.3471,93.9439 33.5,93C 31.9716,91.3523 31.3049,89.3523 31.5,87C 32.1331,81.3018 33.4664,75.8018 35.5,70.5C 38.881,69.4086 40.5476,67.0753 40.5,63.5 Z'
			/>
		</g>
	</svg>
);

export const TennisIcon: FC<IProps> = (props) => (
	<svg
		width='150'
		height='150'
		viewBox='0 0 100 100'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		className={props.className || ''}
	>
		<g>
			<path
				fill='#EDFF64'
				d='M 35.5,8.5 C 47.8184,7.65751 50.8184,12.4908 44.5,23C 34.6667,25.1667 30.8333,21.3333 33,11.5C 34.045,10.6266 34.8783,9.62656 35.5,8.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 70.5,17.5 C 83.461,16.9969 86.961,22.6636 81,34.5C 76.4707,37.9163 71.304,39.4163 65.5,39C 62.93,41.0673 60.93,43.5673 59.5,46.5C 53.1928,47.6639 46.8595,47.8306 40.5,47C 39.2343,45.0173 37.5676,44.0173 35.5,44C 27.7649,49.8491 24.2649,57.6824 25,67.5C 21.5,71.6667 18,75.8333 14.5,80C 12.5273,80.4955 10.5273,80.6621 8.5,80.5C 8.33788,78.4727 8.50454,76.4727 9,74.5C 11.6979,70.633 14.1979,66.633 16.5,62.5C 14.841,55.591 14.341,48.591 15,41.5C 19.8333,36.6667 24.6667,31.8333 29.5,27C 33.9094,25.7382 37.7428,26.5715 41,29.5C 42.4323,33.5311 44.2657,37.3645 46.5,41C 58.0517,42.4517 63.5517,37.285 63,25.5C 64.3532,21.6499 66.8532,18.9832 70.5,17.5 Z M 71.5,21.5 C 79.3771,20.9766 81.5438,24.3099 78,31.5C 75.3466,34.1941 72.1799,35.0274 68.5,34C 65.3831,28.8769 66.3831,24.7102 71.5,21.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 74.5,47.5 C 76.5,47.5 78.5,47.5 80.5,47.5C 80.5,49.5 80.5,51.5 80.5,53.5C 78.5,53.5 76.5,53.5 74.5,53.5C 74.5,51.5 74.5,49.5 74.5,47.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 32.5,53.5 C 35.9039,55.5769 38.4039,58.5769 40,62.5C 42.4426,68.3159 43.9426,74.3159 44.5,80.5C 42.396,80.7989 40.396,80.4656 38.5,79.5C 36.0902,73.6818 33.4235,68.0151 30.5,62.5C 31.1686,59.4701 31.8353,56.4701 32.5,53.5 Z'
			/>
		</g>
	</svg>
);

export const DancingIcon: FC<IProps> = (props) => (
	<svg
		width='150'
		height='150'
		viewBox='0 0 100 100'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		className={props.className || ''}
	>
		<g>
			<path
				fill='#EDFF64'
				d='M 74.5,8.5 C 76.5,8.5 78.5,8.5 80.5,8.5C 80.4334,18.8777 76.6001,27.5443 69,34.5C 67.2848,43.2095 68.9514,51.2095 74,58.5C 74.4997,65.8258 74.6663,73.1591 74.5,80.5C 72.5,80.5 70.5,80.5 68.5,80.5C 68.4575,71.5402 66.2908,63.2069 62,55.5C 59.4454,63.607 56.6121,71.607 53.5,79.5C 51.604,80.4656 49.604,80.7989 47.5,80.5C 48.3715,70.3426 50.2048,60.3426 53,50.5C 53.6667,47.1667 53.6667,43.8333 53,40.5C 51.6152,41.5505 50.6152,42.8839 50,44.5C 49.3562,48.2206 48.5228,51.8872 47.5,55.5C 45.604,56.4656 43.604,56.7989 41.5,56.5C 39.8685,45.6868 43.2019,36.8535 51.5,30C 64.4484,28.5534 72.1151,21.3867 74.5,8.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 5.5,11.5 C 7.5,11.5 9.5,11.5 11.5,11.5C 8.24569,23.2222 12.579,29.2222 24.5,29.5C 26.5,29.3333 28.5,29.1667 30.5,29C 32,27.5 33.5,26 35,24.5C 35.499,20.1794 35.6657,15.8461 35.5,11.5C 37.5,11.5 39.5,11.5 41.5,11.5C 41.6662,17.5092 41.4995,23.5092 41,29.5C 35.1275,34.7681 31.2942,41.2681 29.5,49C 31.4579,51.7482 33.2912,54.5815 35,57.5C 35.4997,65.1594 35.6664,72.8261 35.5,80.5C 33.5,80.5 31.5,80.5 29.5,80.5C 28.9416,74.1358 28.1083,67.8025 27,61.5C 25.3149,59.9825 23.8149,58.3159 22.5,56.5C 21.5016,64.4758 20.8349,72.4758 20.5,80.5C 18.5,80.5 16.5,80.5 14.5,80.5C 13.0989,71.3901 12.0989,62.2235 11.5,53C 11.3091,47.5978 12.3091,42.4312 14.5,37.5C 11.8369,35.0077 9.00361,32.6744 6,30.5C 5.50046,24.1754 5.33379,17.8421 5.5,11.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 52.5,11.5 C 62.4874,10.3319 65.154,14.1653 60.5,23C 50.4338,24.4671 47.7671,20.6338 52.5,11.5 Z'
			/>
		</g>
		<g>
			<path
				fill='#EDFF64'
				d='M 19.5,14.5 C 29.4874,13.3319 32.154,17.1653 27.5,26C 17.4338,27.4671 14.7671,23.6338 19.5,14.5 Z'
			/>
		</g>
	</svg>
);

export const PulseIcon: FC<IProps> = (props) => (
	<svg width='46' height='37' viewBox='0 0 46 37' fill='none' className={props.className || ''}>
		<path
			d='M9.57156 20.4357H15.9826C16.719 20.4357 17.1666 20.1686 17.3254 19.6459L19.3036 12.3174L22.9422 29.9709C23.1444 30.9581 25.0215 30.9465 25.2669 29.9825L28.7612 16.7192L29.4543 19.5414C29.6131 20.1453 30.0463 20.4357 30.8116 20.4357H36.4429C37.1071 20.4357 37.6413 20.0176 37.6413 19.4833C37.6413 18.9375 37.1215 18.5194 36.4429 18.5194H31.4325L29.8153 12.7123C29.5554 11.7716 27.7938 11.7716 27.5195 12.7472L24.0974 25.093L20.4443 7.25368C20.2566 6.28971 18.5094 6.26648 18.2495 7.24206L15.2173 18.5194H9.57156C8.89292 18.5194 8.35867 18.9491 8.35867 19.4833C8.35867 20.0176 8.89292 20.4357 9.57156 20.4357Z'
			fill='white'
		/>
	</svg>
);

export const BedIcon: FC<IProps> = (props) => (
	<svg width='40' height='40' viewBox='0 0 28 28' fill='none' className={props.className || ''}>
		<path
			d='M4.8418 11.0967H7.14453V9.88379C7.14453 9.03125 7.61035 8.57422 8.47168 8.57422H11.7236C12.585 8.57422 13.0508 9.03125 13.0508 9.88379V11.0967H15.0283V9.88379C15.0283 9.03125 15.4941 8.57422 16.3906 8.57422H19.4756C20.3809 8.57422 20.8467 9.03125 20.8467 9.88379V11.0967H23.1494V8.57422C23.1494 6.9043 22.2529 6.03418 20.6182 6.03418H7.37305C5.73828 6.03418 4.8418 6.9043 4.8418 8.57422V11.0967ZM2.6709 20.4922C2.6709 20.9668 2.97852 21.2656 3.44434 21.2656H3.98926C4.45508 21.2656 4.7627 20.9668 4.7627 20.4922V19.2266C4.86816 19.2529 5.17578 19.2705 5.39551 19.2705H22.5957C22.8154 19.2705 23.123 19.2529 23.2285 19.2266V20.4922C23.2285 20.9668 23.5361 21.2656 24.002 21.2656H24.5469C25.0127 21.2656 25.3203 20.9668 25.3203 20.4922V15.1484C25.3203 13.3994 24.3535 12.4414 22.5957 12.4414H5.39551C3.6377 12.4414 2.6709 13.3994 2.6709 15.1484V20.4922Z'
			fill='white'
		/>
	</svg>
);