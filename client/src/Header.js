import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  async function logout() {
    try {
      await fetch("http://localhost:4000/logout", {
        credentials: "include",
        method: "POST",
      });
      setUserInfo(null);
      localStorage.clear();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        Quill
      </Link>
      <nav>
        {username && (
          <>
            <span>Hello, {username}</span>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
