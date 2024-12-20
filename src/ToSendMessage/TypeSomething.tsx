import { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

type textMessage = string;
type TextMessageProps = {
	textMessage: textMessage;
	setTextMessage: React.Dispatch<React.SetStateAction<textMessage>>;
};
const TypeSomething: React.FC<TextMessageProps> = ({ textMessage, setTextMessage }) => {
	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextMessage(event.target.value);
	};
	// const startListening = () => SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
	// const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
	// if (!browserSupportsSpeechRecognition) {
	// 	return null;
	// }

	return (
		<div className="block w-full py-2 pl-4 pr-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700 ">
			<label htmlFor="message">
				<div
					className="flex justify-between h-[1.5rem]"
					id="textarea1"
				>
					<textarea
						value={textMessage}
						onChange={handleChange}
						className="block w-full  bg-gray-100  outline-none focus:text-gray-700  resize-none rounded-md"
					/>

					<div className="flex items-center">
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
								/>
							</svg>
						</button>
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</label>

			<input
				type="text"
				placeholder="Message"
				name="message"
				id="message"
				className="hidden"
				// value={inputText}
				// onChange={(e) => setInputText(e.target.value)}
				required
			></input>
			<></>
		</div>
	);
};

export default TypeSomething;
