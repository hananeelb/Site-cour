import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ showSearch = false, searchTerm = '', onSearchChange }) => {
  const handleSearchChange = (e) => {
    if (onSearchChange) {
      onSearchChange(e.target.value);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 className="m-0 text-primary">
            <i className="fa fa-book me-3" />
            FrFacile
          </h2>
        </Link>

        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link active">
              Accueil
            </Link>

            <Link to="/Apprendre" className="nav-item nav-link">
              Cours
            </Link>

           

            {showSearch && (
              <div className="d-lg-none mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Rechercher un cours..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            )}
          </div>

          {showSearch && (
            <div className="d-none d-lg-flex align-items-center px-4">
              <input
                type="text"
                className="form-control"
                placeholder="Rechercher un cours..."
                style={{ height: '45px', width: '250px' }}
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Menu;
