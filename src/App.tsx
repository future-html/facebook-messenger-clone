import "./App.css";
import Chat from "./Chat/Chat";
import Conversation1 from "./[ConversaionId]/Conversation1";
import LinkForMessage from "./AttachResult/LinkForMessage";
import { Fragment, useState, useEffect, useRef } from "react";
import Conversation2 from "./[ConversaionId]/Conversation2";
import { Router, Route, Routes, useParams } from "react-router-dom";
function App() {
	const [width, setWidth] = useState(window.innerWidth);
	const linkRef = useRef();
	console.log(linkRef, "link");
	const { username } = useParams();
	console.log(username, "user");
	useEffect(() => {
		// Function to update the width state
		const updateWidth = () => {
			setWidth(window.innerWidth);
		};

		// Attach the event listener
		window.addEventListener("resize", updateWidth);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("resize", updateWidth);
		};
	}, []); // Empty dependency array means this effect runs once after the initial render

	const [openChat, setOpenChat] = useState(false);

	return (
		<Fragment>
			{width > 1024 && (
				<div className="container mx-auto  ">
					<div className="min-w-full border rounded lg:grid lg:grid-cols-3">
						<Chat
							openChat={openChat}
							setOpenChat={setOpenChat}
						/>
						<Routes>
							<Route
								path="/conver/1"
								element={
									<Conversation1
										openChat={openChat}
										setOpenChat={setOpenChat}
									/>
								}
							></Route>
							<Route
								path="/conver/2"
								element={
									<Conversation2
										openChat={openChat}
										setOpenChat={setOpenChat}
										width={width}
									/>
								}
							></Route>
						</Routes>
					</div>
				</div>
			)}
			{width <= 1024 && (
				<div
					className="container mx-auto"
					id={!openChat ? "" : "leftToRight"}
				>
					<div className="min-w-full border rounded">
						{!openChat && (
							<Chat
								openChat={openChat}
								setOpenChat={setOpenChat}
							/>
						)}
						{openChat && (
							<Routes>
								<Route
									path="/conver/1"
									element={
										<Conversation1
											openChat={openChat}
											setOpenChat={setOpenChat}
										/>
									}
								></Route>
								<Route
									path="/conver/2"
									element={
										<Conversation2
											openChat={openChat}
											setOpenChat={setOpenChat}
											width={width}
										/>
									}
								></Route>
							</Routes>
						)}
					</div>
				</div>
			)}
		</Fragment>
	);
}

export default App;

// can click link to move the conversation page and return to chat conversation
// use Params to navigate the username
