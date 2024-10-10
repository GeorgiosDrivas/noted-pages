import "../../styles/auth.css";
import { addUserUrl } from "../../url";
import BacktoHome from "../backToHome";
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(addUserUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        fullname: fullname,
      }),
    });
  };

  return (
    <>
      <main className="h-100 w-100">
        <BacktoHome />
        <div className="container-fluid">
          <div className="row h-100">
            <div className="col-12 p-0">
              <div className="wrap w-100 h-100 d-flex justify-content-center align-items-center">
                <div
                  id="board"
                  className="d-flex justify-content-center flex-column"
                >
                  <h1 className="text-center">Sign up for free!</h1>
                  <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <div>
                      <label htmlFor="name">Full name</label>
                      <input
                        type="text"
                        id="name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="password">Password</label>
                      <input
                        type="text"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button type="submit">Sign up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
