import { useContext, useEffect,  useState } from "react";
import {
  loadCaptchaEnginge,LoadCanvasTemplate,validateCaptcha,} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
//   const captchRef = useRef(null);
    const [desabled, setDesabled] = useState(true);
    const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
    

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
      console.log(email, password);
      
      signIn(email, password)
          .then(result => {
              const user = result.user;
              console.log(user);
              Swal.fire({
                title: "User Logged in Successfully",
                showClass: {
                  popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
                },
                hideClass: {
                  popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
                },
              });
                navigate(from, {replace: true})
          })
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);

    if (validateCaptcha(user_captcha_value)) {
      setDesabled(false);
    } else {
      setDesabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title> Bistro Boss | LogIn</title>
      </Helmet>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col  md:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm md:w-1/2 shadow-2xl">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={handleValidateCaptcha}
                    
                    name="captcha"
                    // ref={captchRef}
                    placeholder="type the captcha above"
                    className="input input-bordered"
                    required
                  />
                  <button type="button" className="btn btn-outline btn-xs mt-2">
                    Validate
                  </button>
                </div>
                <div className="form-control mt-6">
                  <input
                    disabled={desabled}
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
                <p>
                  <small>
                    New Here?<Link to="/signup"> Create An Account</Link>
                  </small>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
