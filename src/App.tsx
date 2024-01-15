import "./App.css";
import Chat from "./Chat/Chat";
import Conversation from "./Conversation";
import Link from "./AttachResult/Link";
function App() {
	return (
		<>
			<div className="container mx-auto">
				<div className="min-w-full border rounded lg:grid lg:grid-cols-3">
					<Chat />
					<Conversation />
				</div>
			</div>
		</>
	);
}

export default App;
