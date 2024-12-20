import React from "react";

const Attach = () => {
	return (
		<div className="flex items-center">
			<button>
				<label
					htmlFor="file-attach"
					className="cursor-pointer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-5 h-5 text-gray-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
						/>
					</svg>
				</label>
			</button>
			<input
				type="file"
				id="file-attach"
				className="hidden"
			></input>
		</div>
	);
};

export default Attach;
