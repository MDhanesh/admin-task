import React from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";

export default function Animation() {
  return (
    <div id="page-top">
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        <Sidebar />
        {/* <!-- Content Wrapper -->  */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <Navbar />
            {/* <!-- End of Topbar -->

                <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <h1 className="h3 mb-1 text-gray-800">Animation Utilities</h1>
              <p className="mb-4">
                Bootstrap's default utility classNamees can be found on the
                official{" "}
                <a href="https://getbootstrap.com/docs">
                  Bootstrap Documentation
                </a>{" "}
                page. The custom utilities below were created to extend this
                theme past the default utility classNamees built into
                Bootstrap's framework.
              </p>

              {/* <!-- Content Row --> */}
              <div className="row">
                {/* <!-- Grow In Utility --> */}
                <div className="col-lg-6">
                  <div className="card position-relative">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Grow In Animation Utilty
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="mb-3">
                        <code>.animated--grow-in</code>
                      </div>
                      <div className="small mb-1">Navbar Dropdown Example:</div>
                      <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                        <a className="navbar-brand" href="#">
                          Navbar
                        </a>
                        <ul className="navbar-nav ml-auto">
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              id="navbarDropdown"
                              role="button"
                              data-toggle="dropdown"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown
                            </a>
                            <div
                              className="dropdown-menu dropdown-menu-right animated--grow-in"
                              aria-labelledby="navbarDropdown"
                            >
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </li>
                        </ul>
                      </nav>
                      <p className="mb-0 small">
                        Note: This utility animates the CSS transform property,
                        meaning it will override any existing transforms on an
                        element being animated! In this theme, the grow in
                        animation is only being used on dropdowns within the
                        navbar.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <!-- Fade In Utility --> */}
                <div className="col-lg-6">
                  <div className="card position-relative">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Fade In Animation Utilty
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="mb-3">
                        <code>.animated--fade-in</code>
                      </div>
                      <div className="small mb-1">Navbar Dropdown Example:</div>
                      <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                        <a className="navbar-brand" href="#">
                          Navbar
                        </a>
                        <ul className="navbar-nav ml-auto">
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              id="navbarDropdown"
                              role="button"
                              data-toggle="dropdown"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown
                            </a>
                            <div
                              className="dropdown-menu dropdown-menu-right animated--fade-in"
                              aria-labelledby="navbarDropdown"
                            >
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </li>
                        </ul>
                      </nav>
                      <div className="small mb-1">Dropdown Button Example:</div>
                      <div className="dropdown mb-4">
                        <button
                          className="btn btn-primary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown
                        </button>
                        <div
                          className="dropdown-menu animated--fade-in"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                      <p className="mb-0 small">
                        Note: This utility animates the CSS opacity property,
                        meaning it will override any existing opacity on an
                        element being animated!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}

          {/* <!-- Footer --> */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2020</span>
              </div>
            </div>
          </footer>
          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
      {/* <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded d-inline" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      {/* <!-- Logout Modal--> */}
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
