import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
import CustomInput from "../Components/CustomInput";
const Signup = () => {
  var [data, setData] = useState({
    name: "",
    email: "",
    mob: "",
    pass: "",
  });

  function getData(e) {
    var name = e.target.name;
    var value = e.target.value;
    setData((old) => {
      return {
        ...old,
        [name]:value,
      };
    });
  }

  function postData(e) {
    e.preventDefault();
    alert(`
    Name: ${data.name}
    emeil: ${data.email}
    mob : ${data.mob}
    pass: ${data.pass}
    `);
  }
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-2">Sign Up</h3>
              <form
                onSubmit={postData}
                action=""
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  onChange={getData}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <CustomInput
                  onChange={getData}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button onSubmit={postData} className="button border-0">Sign Up</button>
                    <Link className="button border-0 text-light" to="/login">
                      Cancel
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

export default Signup;
