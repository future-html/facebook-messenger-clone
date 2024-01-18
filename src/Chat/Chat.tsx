import React from "react";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
type OpenChatProps = { openChat: boolean; setOpenChat: React.Dispatch<React.SetStateAction<boolean>> };
const Chat = ({ openChat, setOpenChat }: OpenChatProps) => {
	const chatLM = [
		{
			name: "Jhon Don",
			id: "1",
			time: "25 minutes",
			lastM: "bye",
			urlImage: "https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg",
		},
		{
			name: "Same",
			id: "2",
			time: "50 minutes",
			lastM: "Good night",
			urlImage: "https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128__340.png",
		},
		{
			name: "Emma",
			id: "3",
			time: "6 hour",
			lastM: "Good Morning",
			urlImage: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg",
		},
	];

	return (
		<div className="border-r border-gray-300 lg:col-span-1">
			<h2 className="my-2 mb-2 ml-2 text-lg text-gray-600 sticky ">Chats</h2>
			<Search />
			<ul className="overflow-auto h-[32rem] sm:h-[32rem] lg:h-[40rem]">
				<li>
					{chatLM.map((eachUser, idx) => {
						return (
							<Link
								className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none"
								key={idx}
								to={`/conver/${eachUser.id}`}
								onClick={() => setOpenChat((prev) => !prev)}
							>
								<img
									className="object-cover w-10 h-10 rounded-full"
									src={eachUser.urlImage}
									alt="username"
								/>
								<div className="w-full pb-2">
									<div className="flex justify-between">
										<span className="block ml-2 font-semibold text-gray-600">{eachUser.name}</span>
										<span className="block ml-2 text-sm text-gray-600">{eachUser.time}</span>
									</div>
									<span className="block ml-2 text-sm text-gray-600">{eachUser.lastM}</span>
								</div>
							</Link>
						);
					})}
				</li>
			</ul>
		</div>
	);
};

export default Chat;
