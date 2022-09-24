import React from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";

export default function Border() {
  return (
    <div id="page-top">
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        <Sidebar />
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <Navbar />
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <h1 className="h3 mb-1 text-gray-800">Border Utilities</h1>
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
                {/* 
                        <!-- Border Left Utilities --> */}
                <div className="col-lg-6">
                  <div className="card mb-4 py-3 border-left-primary">
                    <div className="card-body">.border-left-primary</div>
                  </div>

                  <div className="card mb-4 py-3 border-left-secondary">
                    <div className="card-body">.border-left-secondary</div>
                  </div>

                  <div className="card mb-4 py-3 border-left-success">
                    <div className="card-body">.border-left-success</div>
                  </div>

                  <div className="card mb-4 py-3 border-left-info">
                    <div className="card-body">.border-left-info</div>
                  </div>

                  <div className="card mb-4 py-3 border-left-warning">
                    <div className="card-body">.border-left-warning</div>
                  </div>

                  <div className="card mb-4 py-3 border-left-danger">
                    <div className="card-body">.border-left-danger</div>
                  </div>

                  <div className="card mb-4 py-3 border-left-dark">
                    <div className="card-body">.border-left-dark</div>
                  </div>
                </div>

                {/* <!-- Border Bottom Utilities --> */}
                <div className="col-lg-6">
                  <div className="card mb-4 py-3 border-bottom-primary">
                    <div className="card-body">.border-bottom-primary</div>
                  </div>

                  <div className="card mb-4 py-3 border-bottom-secondary">
                    <div className="card-body">.border-bottom-secondary</div>
                  </div>

                  <div className="card mb-4 py-3 border-bottom-success">
                    <div className="card-body">.border-bottom-success</div>
                  </div>

                  <div className="card mb-4 py-3 border-bottom-info">
                    <div className="card-body">.border-bottom-info</div>
                  </div>

                  <div className="card mb-4 py-3 border-bottom-warning">
                    <div className="card-body">.border-bottom-warning</div>
                  </div>

                  <div className="card mb-4 py-3 border-bottom-danger">
                    <div className="card-body">.border-bottom-danger</div>
                  </div>

                  <div className="card mb-4 py-3 border-bottom-dark">
                    <div className="card-body">.border-bottom-dark</div>
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
