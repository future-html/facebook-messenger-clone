import "./App.css";
import Chat from "./Chat/Chat";
import Conversation1 from "./[ConversaionId]/Conversation1";
import LinkForMessage from "./AttachResult/LinkForMessage";
import { Fragment, useState, useEffect } from "react";
import Conversation2 from "./[ConversaionId]/Conversation2";
import { Router, Route, Routes } from "react-router-dom";
function App() {
	const [width, setWidth] = useState(window.innerWidth);

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

	console.log(width);
	const [openChat, setOpenChat] = useState(false);

	return (
		<Fragment>
			<div className="container mx-auto">
				{width > 1024 && (
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
								element={<Conversation2 />}
							></Route>
						</Routes>
					</div>
				)}
				{width <= 1024 && (
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
									element={<Conversation2 />}
								></Route>
							</Routes>
						)}
					</div>
				)}
			</div>
		</Fragment>
	);
}

export default App;

// can click link to move the conversation page and return to chat conversation
