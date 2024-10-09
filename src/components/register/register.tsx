import "./register.css";

export default function Register() {
  return (
    <>
      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-12 p-0">
            <div className="wrap w-100 h-100 d-flex justify-content-center align-items-center">
              <div id="register-board">
                <h1 className="text-center">Sign up for free!</h1>
                <form>
                  <div>
                    <label htmlFor="name">Full name</label>
                    <input type="text" id="name" />
                  </div>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" />
                  </div>
                  <button type="submit">Sign up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
