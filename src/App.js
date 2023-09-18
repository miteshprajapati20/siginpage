import React, { useState } from 'react';
import css from './LoginSignupPage.module.scss'

const LoginSignupPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className={`${css.container} ${isSignIn ? '' : `${css.right_panel_active}`}`} id="container">
      <div className={`${css.form_container} ${isSignIn ? `${css.sign_in_container}` : `${css.sign_up_container}`}`}>
        <form action="#">
          <h1>{isSignIn ? 'Sign in' : 'Create Account'}</h1>
          <div className={`${css.slider_container}`}>
            <div className={`${css.slider_button}`}>
              <div className={`${css.slider_option} ${isSignIn ? `${css.active}` : ''}`} onClick={toggleForm}>
                Gamers
              </div>
              <div className={`${css.slider_option} ${!isSignIn ? `${css.active}` : ''}`} onClick={toggleForm}>
                Organiser
              </div>
            </div>
          </div>
          <div className={`${css.social_container}`}>
            <a href="#" className={`${css.social}`}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={`${css.social}`}>
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className={`${css.social}`}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>{isSignIn ? 'or use your account' : 'or use your email for registration'}</span>
          {isSignIn ? (
            <>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
            </>
          ) : (
            <>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </>
          )}
          <button>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        </form>
      </div>
      <div className={`${css.overlay_container}`}>
        <div className={`${css.overlay}`}>
          <div className={`${css.overlay_panel} ${css.overlay_left} ${isSignIn ? `${css.overlay_active} ` : ''}`}>
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={toggleForm}>
              Sign Up
            </button>
          </div>
          <div className={`${css.overlay_panel} ${css.overlay_right} ${!isSignIn ? `${css.overlay_active} `: ''}`}>
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" onClick={toggleForm}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
