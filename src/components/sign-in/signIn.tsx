import "./signIn.css";

export default function SignIn() {
  return (
    <>
      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-8 p-0">
            <div
              id="left"
              className="h-100 d-flex flex-column justify-content-evenly align-items-start ps-5"
            ></div>
          </div>
          <div className="col-4 p-0">
            <div id="right" className="h-100"></div>
          </div>
          <div id="board">
            <h1 className="text-center">Welcome back!</h1>
            <form>
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
            <p className="text-center">
              Don't have an account? Sign up for free!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
