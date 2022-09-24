import React from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";

export default function Button() {
  return (
    <div id="page-top">
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        <Sidebar />
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            <Navbar />
            {/*                
                <!-- End of Topbar -->

                <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <h1 className="h3 mb-4 text-gray-800">Buttons</h1>

              <div className="row">
                <div className="col-lg-6">
                  {/* <!-- Circle Buttons --> */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Circle Buttons
                      </h6>
                    </div>
                    <div className="card-body">
                      <p>
                        Use Font Awesome Icons (included with this theme
                        package) along with the circle buttons as shown in the
                        examples below!
                      </p>
                      {/* <!-- Circle Buttons (Default) --> */}
                      <div className="mb-2">
                        <code>.btn-circle</code>
                      </div>
                      <a href="#" className="btn btn-primary btn-circle">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="btn btn-success btn-circle">
                        <i className="fas fa-check"></i>
                      </a>
                      <a href="#" className="btn btn-info btn-circle">
                        <i className="fas fa-info-circle"></i>
                      </a>
                      <a href="#" className="btn btn-warning btn-circle">
                        <i className="fas fa-exclamation-triangle"></i>
                      </a>
                      <a href="#" className="btn btn-danger btn-circle">
                        <i className="fas fa-trash"></i>
                      </a>
                      {/* <!-- Circle Buttons (Small) --> */}
                      <div className="mt-4 mb-2">
                        <code>.btn-circle .btn-sm</code>
                      </div>
                      <a href="#" className="btn btn-primary btn-circle btn-sm">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="btn btn-success btn-circle btn-sm">
                        <i className="fas fa-check"></i>
                      </a>
                      <a href="#" className="btn btn-info btn-circle btn-sm">
                        <i className="fas fa-info-circle"></i>
                      </a>
                      <a href="#" className="btn btn-warning btn-circle btn-sm">
                        <i className="fas fa-exclamation-triangle"></i>
                      </a>
                      <a href="#" className="btn btn-danger btn-circle btn-sm">
                        <i className="fas fa-trash"></i>
                      </a>
                      {/* <!-- Circle Buttons (Large) --> */}
                      <div className="mt-4 mb-2">
                        <code>.btn-circle .btn-lg</code>
                      </div>
                      <a href="#" className="btn btn-primary btn-circle btn-lg">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="btn btn-success btn-circle btn-lg">
                        <i className="fas fa-check"></i>
                      </a>
                      <a href="#" className="btn btn-info btn-circle btn-lg">
                        <i className="fas fa-info-circle"></i>
                      </a>
                      <a href="#" className="btn btn-warning btn-circle btn-lg">
                        <i className="fas fa-exclamation-triangle"></i>
                      </a>
                      <a href="#" className="btn btn-danger btn-circle btn-lg">
                        <i className="fas fa-trash"></i>
                      </a>
                    </div>
                  </div>

                  {/* <!-- Brand Buttons --> */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Brand Buttons
                      </h6>
                    </div>
                    <div className="card-body">
                      <p>
                        Google and Facebook buttons are available featuring each
                        company's respective brand color. They are used on the
                        user login and registration pages.
                      </p>
                      <p>
                        You can create more custom buttons by adding a new color
                        variable in the
                        <code>_variables.scss</code> file and then using the
                        Bootstrap button variant mixin to create a new style, as
                        demonstrated in the <code>_buttons.scss</code>
                        file.
                      </p>
                      <a href="#" className="btn btn-google btn-block">
                        <i className="fab fa-google fa-fw"></i>
                        .btn-google
                      </a>
                      <a href="#" className="btn btn-facebook btn-block">
                        <i className="fab fa-facebook-f fa-fw"></i>{" "}
                        .btn-facebook
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Split Buttons with Icon
                      </h6>
                    </div>
                    <div className="card-body">
                      <p>
                        Works with any button colors, just use the{" "}
                        <code>.btn-icon-split</code> className and the markup in
                        the examples below. The examples below also use the
                        <code>.text-white-50</code> helper className on the
                        icons for additional styling, but it is not required.
                      </p>
                      <a href="#" className="btn btn-primary btn-icon-split">
                        <span className="icon text-white-50">
                          <i className="fas fa-flag"></i>
                        </span>
                        <span className="text">Split Button Primary</span>
                      </a>
                      <div className="my-2"></div>
                      <a href="#" className="btn btn-success btn-icon-split">
                        <span className="icon text-white-50">
                          <i className="fas fa-check"></i>
                        </span>
                        <span className="text">Split Button Success</span>
                      </a>
                      <div className="my-2"></div>
                      <a href="#" className="btn btn-info btn-icon-split">
                        <span className="icon text-white-50">
                          <i className="fas fa-info-circle"></i>
                        </span>
                        <span className="text">Split Button Info</span>
                      </a>
                      <div className="my-2"></div>
                      <a href="#" className="btn btn-warning btn-icon-split">
                        <span className="icon text-white-50">
                          <i className="fas fa-exclamation-triangle"></i>
                        </span>
                        <span className="text">Split Button Warning</span>
                      </a>
                      <div className="my-2"></div>
                      <a href="#" className="btn btn-danger btn-icon-split">
                        <span className="icon text-white-50">
                          <i className="fas fa-trash"></i>
                        </span>
                        <span className="text">Split Button Danger</span>
                      </a>
                      <div className="my-2"></div>
                      <a href="#" className="btn btn-secondary btn-icon-split">
                        <span className="icon text-white-50">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                        <span className="text">Split Button Secondary</span>
                      </a>
                      <div className="my-2"></div>
                      <a href="#" className="btn btn-light btn-icon-split">
                        <span className="icon text-gray-600">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                        <span className="text">Split Button Light</span>
                      </a>
                      <div className="mb-4"></div>
                      <p>Also works with small and large button classNamees!</p>
                      <a
                        href="#"
                        className="btn btn-primary btn-icon-split btn-sm"
                      >
                        <span className="icon text-white-50">
                          <i className="fas fa-flag"></i>
                        </span>
                        <span className="text">Split Button Small</span>
                      </a>
                      <div className="my-2"></div>
                      <a
                        href="#"
                        className="btn btn-primary btn-icon-split btn-lg"
                      >
                        <span className="icon text-white-50">
                          <i className="fas fa-flag"></i>
                        </span>
                        <span className="text">Split Button Large</span>
                      </a>
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
      {/* <!-- End of Page Wrapper --> */}

      {/* <!-- Scroll to Top Button--> */}
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
