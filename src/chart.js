import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + "").replace(",", "").replace(" ", "");
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
    dec = typeof dec_point === "undefined" ? "." : dec_point,
    s = "",
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return "" + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}
export default function Charts() {
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
            {/* <!-- End of Topbar -->

                <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <h1 className="h3 mb-2 text-gray-800">Charts</h1>
              <p className="mb-4">
                Chart.js is a third party plugin that is used to generate the
                charts in this theme. The charts below have been customized -
                for further customization options, please visit the
                <a target="_blank" href="https://www.chartjs.org/docs/latest/">
                  official Chart.js documentation
                </a>
                .
              </p>

              {/* <!-- Content Row --> */}
              <div className="row">
                <div className="col-xl-8 col-lg-7">
                  {/* 
                            <!-- Area Chart --> */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Area Chart
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="chart-area">
                        <Line
                          options={{
                            maintainAspectRatio: false,
                            layout: {
                              padding: {
                                left: 10,
                                right: 25,
                                top: 25,
                                bottom: 0,
                              },
                            },
                            scales: {
                              xAxes: [
                                {
                                  time: {
                                    unit: "date",
                                  },
                                  gridLines: {
                                    display: false,
                                    drawBorder: false,
                                  },
                                  ticks: {
                                    maxTicksLimit: 7,
                                  },
                                },
                              ],

                              yAxes: [
                                {
                                  ticks: {
                                    maxTicksLimit: 5,
                                    padding: 10,
                                    // Include a dollar sign in the ticks
                                    callback: function (value, index, values) {
                                      return "$" + number_format(value);
                                    },
                                  },
                                  gridLines: {
                                    color: "rgb(234, 236, 244)",
                                    zeroLineColor: "rgb(234, 236, 244)",
                                    drawBorder: false,
                                    borderDash: [2],
                                    zeroLineBorderDash: [2],
                                  },
                                },
                              ],
                            },
                            legend: {
                              display: false,
                            },
                            tooltips: {
                              backgroundColor: "rgb(255,255,255)",
                              bodyFontColor: "#858796",
                              titleMarginBottom: 10,
                              titleFontColor: "#6e707e",
                              titleFontSize: 14,
                              borderColor: "#dddfeb",
                              borderWidth: 1,
                              xPadding: 15,
                              yPadding: 15,
                              displayColors: false,
                              intersect: false,
                              mode: "index",
                              caretPadding: 10,
                              callbacks: {
                                label: function (tooltipItem, chart) {
                                  var datasetLabel =
                                    chart.datasets[tooltipItem.datasetIndex]
                                      .label || "";
                                  return (
                                    datasetLabel +
                                    ": $" +
                                    number_format(tooltipItem.yLabel)
                                  );
                                },
                              },
                            },
                          }}
                          data={{
                            labels: [
                              "Jan",
                              "Feb",
                              "Mar",
                              "Apr",
                              "May",
                              "Jun",
                              "Jul",
                              "Aug",
                              "Sep",
                              "Oct",
                              "Nov",
                              "Dec",
                            ],
                            datasets: [
                              {
                                label: "Earnings",
                                lineTension: 0.3,
                                backgroundColor: "rgba(78, 115, 223, 0.05)",
                                borderColor: "rgba(78, 115, 223, 1)",
                                pointRadius: 3,
                                pointBackgroundColor: "rgba(78, 115, 223, 1)",
                                pointBorderColor: "rgba(78, 115, 223, 1)",
                                pointHoverRadius: 3,
                                pointHoverBackgroundColor:
                                  "rgba(78, 115, 223, 1)",
                                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                                pointHitRadius: 10,
                                pointBorderWidth: 2,
                                data: [
                                  0, 10000, 5000, 15000, 10000, 20000, 15000,
                                  25000, 20000, 30000, 25000, 40000,
                                ],
                              },
                            ],
                          }}
                        />
                      </div>
                      <hr />
                      Styling for the area chart can be found in the
                      <code>/js/demo/chart-area-demo.js</code> file.
                    </div>
                  </div>

                  {/* <!-- Bar Chart --> */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Bar Chart
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="chart-bar">
                        <Bar
                          data={{
                            labels: [
                              "January",
                              "February",
                              "March",
                              "April",
                              "May",
                              "June",
                            ],
                            datasets: [
                              {
                                label: "Revenue",
                                backgroundColor: "#4e73df",
                                hoverBackgroundColor: "#2e59d9",
                                borderColor: "#4e73df",
                                data: [4215, 5312, 6251, 7841, 9821, 14984],
                              },
                            ],
                          }}
                          options={{
                            maintainAspectRatio: false,
                            layout: {
                              padding: {
                                left: 10,
                                right: 25,
                                top: 25,
                                bottom: 0,
                              },
                            },
                            scales: {
                              xAxes: [
                                {
                                  time: {
                                    unit: "month",
                                  },
                                  gridLines: {
                                    display: false,
                                    drawBorder: false,
                                  },
                                  ticks: {
                                    maxTicksLimit: 6,
                                  },
                                  maxBarThickness: 25,
                                },
                              ],
                              yAxes: [
                                {
                                  ticks: {
                                    min: 0,
                                    max: 15000,
                                    maxTicksLimit: 5,
                                    padding: 10,
                                    // Include a dollar sign in the ticks
                                    callback: function (value, index, values) {
                                      return "$" + number_format(value);
                                    },
                                  },
                                  gridLines: {
                                    color: "rgb(234, 236, 244)",
                                    zeroLineColor: "rgb(234, 236, 244)",
                                    drawBorder: false,
                                    borderDash: [2],
                                    zeroLineBorderDash: [2],
                                  },
                                },
                              ],
                            },
                            legend: {
                              display: false,
                            },
                            tooltips: {
                              titleMarginBottom: 10,
                              titleFontColor: "#6e707e",
                              titleFontSize: 14,
                              backgroundColor: "rgb(255,255,255)",
                              bodyFontColor: "#858796",
                              borderColor: "#dddfeb",
                              borderWidth: 1,
                              xPadding: 15,
                              yPadding: 15,
                              displayColors: false,
                              caretPadding: 10,
                              callbacks: {
                                label: function (tooltipItem, chart) {
                                  var datasetLabel =
                                    chart.datasets[tooltipItem.datasetIndex]
                                      .label || "";
                                  return (
                                    datasetLabel +
                                    ": $" +
                                    number_format(tooltipItem.yLabel)
                                  );
                                },
                              },
                            },
                          }}
                        />
                      </div>
                      <hr />
                      Styling for the bar chart can be found in the
                      <code>/js/demo/chart-bar-demo.js</code> file.
                    </div>
                  </div>
                </div>

                {/* <!-- Donut Chart --> */}
                <div className="col-xl-4 col-lg-5">
                  <div className="card shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Donut Chart
                      </h6>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div className="card-body">
                      <div className="chart-pie pt-4">
                        <Doughnut
                          options={{
                            maintainAspectRatio: false,
                            tooltips: {
                              backgroundColor: "rgb(255,255,255)",
                              bodyFontColor: "#858796",
                              borderColor: "#dddfeb",
                              borderWidth: 1,
                              xPadding: 15,
                              yPadding: 15,
                              displayColors: false,
                              caretPadding: 10,
                            },
                            legend: {
                              display: false,
                            },
                            cutoutPercentage: 80,
                          }}
                          data={{
                            labels: ["Direct", "Referral", "Social"],
                            datasets: [
                              {
                                data: [55, 30, 15],
                                backgroundColor: [
                                  "#4e73df",
                                  "#1cc88a",
                                  "#36b9cc",
                                ],
                                hoverBackgroundColor: [
                                  "#2e59d9",
                                  "#17a673",
                                  "#2c9faf",
                                ],
                                hoverBorderColor: "rgba(234, 236, 244, 1)",
                              },
                            ],
                          }}
                        />
                      </div>
                      <hr />
                      Styling for the donut chart can be found in the
                      <code>/js/demo/chart-pie-demo.js</code> file.
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
