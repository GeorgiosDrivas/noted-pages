import { Link } from "react-router-dom";
import "../App.css";

export default function Landing() {
  return (
    <>
      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-8 p-0">
            <div
              id="left"
              className="h-100 d-flex flex-column justify-content-evenly align-items-start ps-5"
            >
              <div
                id="left-upper"
                className="d-flex flex-column justify-content-center align-items-start"
              >
                <h1>NotedPages</h1>
                <p className="subtitle">
                  A place to gather your thoughts about your favourite books...
                </p>
              </div>
              <div id="left-down" className="w-100">
                <p>Now you can keep notes about your favorite books</p>
                <ul>
                  <li>Write the title</li>
                  <li>Write the author</li>
                  <li>Provide an image</li>
                  <li>Provide a specific page if you want to</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4 p-0">
            <div id="right" className="h-100">
              <div className="mt-3 me-4 d-flex justify-content-end">
                <Link to="/sign-in" className="me-4">
                  Sign in
                </Link>
                <Link to="/sign-up">Register</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute" id="img">
          <img src="src\image.png" alt="" />
        </div>
      </div>
    </>
  );
}
