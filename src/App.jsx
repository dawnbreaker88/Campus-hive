import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Discussions from "./pages/Discussions";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import News from "./pages/News";
import Profile from "./pages/profile";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import Results from "./components/Results";
import Blogs from "./pages/Blogs";
import Contribute from "./pages/Contribute";
import Lost from "./pages/Lost";
import Dashboard from "./pages/Dashboard";
import Submit from "./pages/Submit";
import Post from "./pages/Post";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Events />} />
        <Route path="/results" element={<Results />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/opensource" element={<Contribute />} />
        <Route path="/lost-found" element={<Lost />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path= "/submit" element={< Submit />} />
        <Route path="/post" element={<Post />} />




        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
