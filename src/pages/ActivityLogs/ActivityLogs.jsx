import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { config } from "../../utils/config";
import ActivityTable from "./ActivityTable";
import Notification from "../../components/Notification/Notification";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
const ActivityLogs = () => {
  const [activityLogs, setActivityLogs] = useState([]);
  const { register, handleSubmit } = useForm();
  const activityLogApi = config?.result?.endpoint?.activityLogs;
  const token = localStorage.getItem("token");
  const [errorMessage, setErrorMessage] = useState("");
 

  const onSubmit = ({ toDate, fromDate, logType }) => {
    const generatedToken = UseTokenGenerator();
    const encryptedData = UseEncryptData({
      from: fromDate,
      to: toDate,
      type: logType,
      token: generatedToken,
    });
    if (logType == "none") {
      return setErrorMessage("Select Log Type !");
    }
    fetch(activityLogApi, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(encryptedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setActivityLogs(data.result);
        }
      });
  };
  /* Pagination start */
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    setTotalPages(Math.ceil(activityLogs.length / pageSize));
    updateVisibleData();
  }, [pageSize, currentPage, activityLogs.length]);

  const updateVisibleData = () => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setVisibleData(activityLogs?.slice(start, end));
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handlePageSizeChange = (newSize) => {
    setCurrentPage(1);
    setPageSize(newSize);
  };
  const getLastPage = () => {
    return totalPages;
  };

  const isLastPage = currentPage === getLastPage();
  const hasNextPage = currentPage < getLastPage();
  /* Pagination end */
  return (
    <div className="center-container">
      {errorMessage && (
        <Notification
          message={errorMessage}
          success={false}
          setMessage={setErrorMessage}
        />
      )}
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Activity Log</h4>
        </div>
        <div className="card-body">
          <div className="report-form">
            <form onSubmit={handleSubmit(onSubmit)} className="row row10">
              <div className="col-lg-2 col-md-3">
                <div className="react-datepicker-wrapper">
                  <div className="react-datepicker__input-container">
                    <div className="mb-2 custom-datepicker">
                      <input
                        {...register("fromDate", { required: true })}
                        type="date"
                        defaultValue={
                          new Date(new Date().setDate(new Date().getDate() - 7))
                            .toISOString()
                            .split("T")[0]
                        }
                        name="fromDate"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3">
                <div className="react-datepicker-wrapper">
                  <div className="react-datepicker__input-container">
                    <div className="mb-2 custom-datepicker">
                      <input
                        {...register("toDate", { required: true })}
                        type="date"
                        name="toDate"
                        className="form-control"
                        disabled=""
                        defaultValue={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3">
                <div className="mb-2 input-group position-relative">
                  <select
                    {...register("logType", { required: true })}
                    className="form-select"
                    name="logType"
                  >
                    <option value="none">Select Log Type</option>
                    <option value="login">Login</option>
                    <option value="password">Change Password</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 d-grid">
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </div>
            </form>
            <div className="row row10 mt-2 justify-content-between">
              <div className="col-lg-2 col-6">
                <div className="mb-2 input-group position-relative">
                  <span className="me-2">Show</span>
                  <select
                    onChange={(e) => handlePageSizeChange(e.target.value)}
                    className="form-select"
                  >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                  </select>
                  <span className="ms-2">Entries</span>
                </div>
              </div>
              <div className="col-lg-2 col-6">
                <div className="mb-2 input-group position-relative">
                  <span className="me-2">Search:</span>
                  <input
                    type="search"
                    className="form-control"
                    placeholder={`${visibleData.length} records...`}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 table-responsive">
              <table
                role="table"
                className="table table-bordered table-striped"
              >
                <thead>
                  <tr role="row">
                    <th colSpan="1" role="columnheader">
                      Username
                    </th>
                    <th colSpan="1" role="columnheader">
                      Date
                    </th>
                    <th colSpan="1" role="columnheader">
                      Ip Address
                    </th>
                    <th colSpan="1" role="columnheader">
                      Browser Detail
                    </th>
                  </tr>
                </thead>
                <tbody role="rowgroup">
                  {visibleData && visibleData.length > 0
                    ? visibleData.map((activityLog, i) => (
                        <ActivityTable key={i} data={activityLog} />
                      ))
                    : null}
                </tbody>
              </table>
            </div>
            {visibleData.length > 0 && (
              <div className="custom-pagination mt-2">
                <div
                  style={{
                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  }}
                  onClick={() => handlePageChange(1)}
                >
                  First
                </div>
                <div
                  style={{
                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  }}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </div>
                <div
                  style={{
                    cursor: !hasNextPage ? "not-allowed" : "pointer",
                  }}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </div>
                <div
                  style={{
                    cursor: isLastPage ? "not-allowed" : "pointer",
                  }}
                  onClick={() => handlePageChange(getLastPage())}
                >
                  Last
                </div>
                <div>
                  <span className="me-2">
                    {`Page ${currentPage} of ${totalPages}`}
                  </span>
                  <span className="me-2">| Go to Page</span>
                  <input
                    onChange={(e) => handlePageChange(e.target.value)}
                    className="form-control"
                    type="number"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLogs;
