import { Link } from "react-router-dom";
import "../../styles/auth.css";
import BacktoHome from "../backToHome";

export default function SignIn() {
  return (
    <>
      <main className="h-100 w-100">
        <BacktoHome />
        <div className="container-fluid">
          <div className="row h-100">
            <div className="col-12 p-0">
              <div className="wrap h-100 w-100 d-flex justify-content-center align-items-center">
                <div
                  id="board"
                  className="d-flex justify-content-center flex-column"
                >
                  <h1 className="text-center">Welcome back!</h1>
                  <form className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                      <label htmlFor="username">Username</label>
                      <input type="text" id="username" />
                    </div>
                    <div>
                      <label htmlFor="password">Password</label>
                      <input type="text" id="password" />
                    </div>
                    <button type="submit">Sign in</button>
                  </form>
                  <p className="text-center mt-2">
                    Don't have an account? <Link to="/sign-up">Sign up</Link>{" "}
                    for free!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
