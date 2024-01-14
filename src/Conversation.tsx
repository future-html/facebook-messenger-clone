import { useState } from "react";
import SendMessage from "./SendMessage";
const Conversation = () => {
	const [chatList, setChatList] = useState<{ username: string; conver: { isYou: boolean; userSay: any }[] }>({
		username: "Emma",
		conver: [
			{ isYou: false, userSay: "Hello" },
			{ isYou: true, userSay: "How are you" },
			{ isYou: false, userSay: "How are you" },
			{ isYou: true, userSay: "Lorem ipsum dolor sit amet," },
			{ isYou: true, userSay: "Lorem ipsum dolor sit amet," },
			{ isYou: true, userSay: "Lorem ipsum dolor sit amet," },
			{ isYou: true, userSay: "Lorem ipsum dolor sit amet," },
			{ isYou: true, userSay: "Lorem ipsum dolor sit amet," },
			{ isYou: true, userSay: "Lorem ipsum dolor sit amet," },
			{ isYou: true, userSay: "Lorem ipsum dolor sit amet," },
		],
	});

	return (
		<div className="hidden lg:col-span-2 lg:block">
			<div className="w-full ">
				<div className="relative flex items-center p-3 border-b border-gray-300 justify-between">
					<div className="flex items-center">
						<img
							className="object-cover w-10 h-10 rounded-full"
							src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
							alt="username"
						/>
						<span className="block ml-2 font-bold text-gray-600">{chatList.username}</span>
						<span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
					</div>
					<div>
						<div>
							<p className="text-lg font-large text-gray-900 pr-2">...</p>
						</div>
					</div>
				</div>

				<div className="relative w-full p-6 overflow-y-auto h-[40rem]">
					<ul className="space-y-2">
						{chatList.conver.map((each, index) => {
							return (
								<li
									className={each.isYou ? "flex justify-end" : "flex justify-start"}
									key={index}
								>
									<div
										className={
											each.isYou
												? "relative max-w-xl px-4 py-2 text-gray-700 rounded shadow"
												: "relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow"
										}
									>
										<span className="block">{each.userSay}</span>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
				<SendMessage
					chatList={chatList}
					setChatList={setChatList}
				/>
			</div>
		</div>
	);
};

export default Conversation;
