import React, { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import Container from "../Components/Container";
import CustomInput from "../Components/CustomInput";

const Login = () => {
  var [data, setdata] = useState({
    user: "",
    pass: "",
  });

  function getData(e){
    var name = e.target.value
    var value = e.target.value;
    setdata((old) => {
      return {
        ...old,
        [name]:value
      }
    })
  }

  function postData(e){
    e.preventDefault()
    alert(`
    username:${data.username}
    password: ${data.password}
 `);
  }
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form onSubmit={postData} className="d-flex flex-column gap-15">
                <CustomInput type="text" onChange={getData} name="username" placeholder="Username:" />
                <CustomInput
                onChange={getData} 
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/signup" className="button signup">
                      SignUp
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
