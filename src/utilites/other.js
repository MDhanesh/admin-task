import React from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";

export default function Others() {
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
              <h1 className="h3 mb-1 text-gray-800">Other Utilities</h1>
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
                <div className="col-lg-6">
                  {/* <!-- Overflow Hidden --> */}
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Overflow Hidden Utilty
                      </h6>
                    </div>
                    <div className="card-body">
                      Use <code>.o-hidden</code> to set the overflow property of
                      any element to hidden.
                    </div>
                  </div>

                  {/* <!-- Progress Small --> */}
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Progress Small Utility
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="mb-1 small">Normal Progress Bar</div>
                      <div className="progress mb-4">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: " 75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="mb-1 small">Small Progress Bar</div>
                      <div className="progress progress-sm mb-2">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      Use the <code>.progress-sm</code> className along with{" "}
                      <code>.progress</code>
                    </div>
                  </div>

                  {/* <!-- Dropdown No Arrow --> */}
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Dropdown - No Arrow
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="dropdown no-arrow mb-4">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown (no arrow)
                        </button>
                        <div
                          className="dropdown-menu"
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
                      Add the <code>.no-arrow</code> className alongside the{" "}
                      <code>.dropdown</code>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  {/* <!-- Roitation Utilities --> */}
                  <div className="card">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Rotation Utilities
                      </h6>
                    </div>
                    <div className="card-body text-center">
                      <div className="bg-primary text-white p-3 rotate-15 d-inline-block my-4">
                        .rotate-15
                      </div>
                      <hr />
                      <div className="bg-primary text-white p-3 rotate-n-15 d-inline-block my-4">
                        .rotate-n-15
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content -->

            <!-- Footer --> */}
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
      <a className="scroll-to-top rounded" href="#page-top">
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
