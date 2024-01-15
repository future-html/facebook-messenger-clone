import { useState } from "react";
import VoiceFile from "./ToSendMessage/VoiceFile";
import TypeSomething from "./ToSendMessage/TypeSomething";
import Attach from "./ToSendMessage/Attach";

type ConverItem = {
	isYou: boolean;
	userSay: any;
};

type ChatListType = {
	username: string;
	conver: ConverItem[];
};

type SendMessageProps = {
	chatList: ChatListType;
	setChatList: React.Dispatch<React.SetStateAction<ChatListType>>;
};

const SendMessage: React.FC<SendMessageProps> = ({ chatList, setChatList }) => {
	const [speechToText, setSpeechToText] = useState<string>("");

	const [textMessage, setTextMessage] = useState<string>("");

	const handleSubmit = (event: any) => {
		setChatList((prevChatList) => {
			return {
				...prevChatList,
				conver: [...prevChatList.conver, { isYou: true, userSay: textMessage }],
			};
		});
		setTextMessage("");
	};

	return (
		<div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6 text-gray-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</button>

			<Attach />

			<TypeSomething
				textMessage={textMessage}
				setTextMessage={setTextMessage}
			/>

			<VoiceFile />

			<button
				type="submit"
				onClick={handleSubmit}
			>
				<svg
					className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
				</svg>
			</button>
		</div>
	);
};

export default SendMessage;
