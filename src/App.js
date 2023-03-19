import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Signup } from "./Signup";
import { Profile } from "./Profile";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/chat-demo/" element={<Home />} />
      <Route path="/signup/" element={<Signup />} />
      <Route path="/chat-demo/profile/" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// https://console.firebase.google.com/u/0/project/fire-to-bbf9f/firestore/data/~2Fmessages~2FfOcmEaygr4uqQyZwXfEv
// https://github.com/Shin-sibainu/Line-Clone-with-react-firebase/blob/main/src/components/SendMessage.js
// https://github.com/LogicismX/React-Firebase-Auth/blob/Part-1/src/firebase.js
