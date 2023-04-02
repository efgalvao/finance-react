import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Acounts = () => {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const url = "/api/v1/accounts/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setAccounts(res))
      .catch(() => navigate("/"));
  }, []);

  const allAccounts = accounts.map((account, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img
          src={account.image}
          className="card-img-top"
          alt={`${account.name} image`}
        />
        <div className="card-body">
          <h5 className="card-title">{account.name}</h5>
          <Link to={`/recipe/${account.id}`} className="btn custom-button">
            View Account
          </Link>
        </div>
      </div>
    </div>
  ));
  const noAccount = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No accounts yet. Why not <Link to="/new_account">create one</Link>
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Accounts for every occasion</h1>
          <p className="lead text-muted">
            We’ve pulled together our most popular recipes, our latest
            additions, and our editor’s picks, so there’s sure to be something
            tempting for you to try.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-end mb-3">
            <Link to="/recipe" className="btn custom-button">
              Create New Account
            </Link>
          </div>
          <div className="row">
            {recipes.length > 0 ? allAccounts : noAccount}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );
};

export default Acounts;
