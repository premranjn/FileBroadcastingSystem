import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
      <a className="navbar-brand" href="/">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
      Bootstrap
      </a>
      <Button variant="danger" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      </nav>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2 mt-3">
            <Button variant="primary" type="button">
              Option 1
            </Button>
      </div>
      <div className="d-grid gap-2 mt-3">
            <Button variant="primary" type="button">
              Option 2
            </Button>
      </div>
      <div className="d-grid gap-2 mt-3">
            <Button variant="primary" type="button">
              Option 2
            </Button>
      </div>
    </>
  );
};

export default Home;