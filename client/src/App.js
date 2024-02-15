import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./Pages/CreatePost";
import PostPage from "./Pages/PostPage";
import EditPost from "./Pages/EditPost";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <UserContextProvider>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/create"} element={<CreatePost />} />
          <Route path="post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
