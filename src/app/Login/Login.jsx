import React from "react";

import "./Login.scss";

function Login() {
  return (
    <div className="login">
      {/* <section className="fxt-template-animation fxt-template-layout34">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="fxt-column-wrap justify-content-center">
                        <div className="fxt-form">
                            <form method="POST">
                                <div className="form-group">
                                    <label for="email" className="fxt-label">Email or Mobile Number</label>
                                    <input type="email" id="email" className="form-control" name="email" placeholder="Enter Email or Mobile Number" required="required" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="fxt-btn-fill">Sign In</button>
                                </div>
                            </form>
                            <div className="fxt-switcher-description3">Return to?<a href="login-34.html" class="fxt-switcher-text ms-1">Log in</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
     <section className="fxt-template-animation fxt-template-layout34" data-bg-image="img/elements/bg1.png">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="fxt-column-wrap justify-content-center">
                        <div className="fxt-form">
                            <form method="POST">
                                <div className="form-group">
                                    <input type="email" id="email" className="form-control" name="email" placeholder="Enter Email or Mobile Number" required="required" />
                                </div>
                                <div className="form-group">
                                    <input id="password" type="password" className="form-control" name="password" placeholder="********" required="required" />
                                    <i toggle="#password" className="fa fa-fw fa-eye toggle-password field-icon"></i>
                                </div>
                                <div className="form-group">
                                    <div className="fxt-switcher-description2 text-right">
                                        <a href="forgot-password-34.html" className="fxt-switcher-text">Recovery Password</a>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="fxt-btn-fill">Sign In</button>
                                </div>
                            </form>
                        </div>
                        <div className="fxt-style-line">
                            <span>Or Continus with</span>
                        </div>
                        <ul className="fxt-socials">
                            <li className="fxt-google">
                                <a href="#" title="google"><i className="fab fa-google-plus-g"></i></a>
                            </li>
                            <li className="fxt-apple">
                                <a href="#" title="apple"><i className="fab fa-apple"></i></a>
                            </li>
                            <li className="fxt-facebook">
                                <a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Login;