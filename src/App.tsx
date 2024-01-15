import "./App.css";
import Chat from "./Chat/Chat";
import Conversation1 from "./[ConversaionId]/Conversation1";
import Link from "./AttachResult/LinkForMessage";
import { Fragment } from "react";
import Conversation2 from "./[ConversaionId]/Conversation2";
import { Router, Route, Routes } from "react-router-dom";
function App() {
	return (
		<Fragment>
			<div className="container mx-auto">
				<div className="min-w-full border rounded lg:grid lg:grid-cols-3">
					<Chat />
					<Routes>
						<Route
							path="/conver/1"
							element={<Conversation1 />}
						></Route>
						<Route
							path="/conver/2"
							element={<Conversation2 />}
						></Route>
					</Routes>
				</div>
			</div>
		</Fragment>
	);
}

export default App;

// can click link to move the conversation page and return to chat conversation
