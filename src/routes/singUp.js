import { SignForm, SignUpMain } from "./signIn";
import {
  faGoogle,
  faFacebookSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";

function SignUp() {
  const navigate = useNavigate();
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    <>
      {loading && <Loading />}
      <SignUpMain>
        <SignForm>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Verify password" />
          <button type="submit" className="submit">
            Sign Up
          </button>
          <div>OR</div>
          <button className="google">
            <FontAwesomeIcon icon={faGoogle} className="google-icon" />
            Sign up with Google
          </button>
          <button className="facebook">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="facebook-icon"
            />
            Sign up with Facebook
          </button>
          <button className="github">
            <FontAwesomeIcon icon={faGithub} className="github-icon" />
            Sign up with GitHub
          </button>
          <div className="account-text">
            <span
              className="have-or-not-account"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Already have an account?
              <span className="sign-in-up-arrow"> Sign In →</span>
            </span>
          </div>
        </SignForm>
      </SignUpMain>
    </>
  );
}
export default SignUp;
