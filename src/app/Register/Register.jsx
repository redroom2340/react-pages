import React from "react";
import './Register.scss'
function Register() {
  return (
    <div className="Register">
      <div className="col-lg-12">
                    <div className="fxt-column-wrap justify-content-center">
                        <div className="fxt-form">
                            <form method="POST">
                                <div className="form-group">
                                    <input type="text" id="f_name" className="form-control" name="f_name" placeholder="Fast Name" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="text" id="l_name" className="form-control" name="l_name" placeholder="Last Name" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="email" id="email" className="form-control" name="email" placeholder="E-mail Address" required="required" />
                                </div>
                                <div className="form-group">
                                    <input id="password" type="password" className="form-control" name="password" placeholder="********" required="required" />
                                    <i toggle="#password" className="fa fa-fw fa-eye toggle-password field-icon"></i>
                                </div>
                                <div className="form-group">
                                    <div className="fxt-checkbox-box">
                                        <input id="checkbox1" type="checkbox" />
                                        <label for="checkbox1" className="ps-4">I agree with <a className="terms-link" href="#">Terms</a> and <a className="terms-link" href="#">Privacy Policy</a></label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="fxt-btn-fill">Sign Up</button>
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
  );
}

export default Register;