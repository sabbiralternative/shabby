import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { config } from "../../utils/config";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";

const WithdrawStatement = () => {
  const { register, handleSubmit } = useForm();
  const accountStatementApi = config?.result?.endpoint?.accountStatement;
  //   const settledBetsApi = config?.result?.endpoint?.settledBets;
  const token = localStorage.getItem("token");
  //   const [modalData, setModalData] = useState([]);
  //   const [showModal, setShowModal] = useState(false);
  const [stateMentData, setStateMentData] = useState([]);
  //   const [filteredData, setFilteredData] = useState([]);

  /* Account statement */
  const onSubmit = ({ toDate, fromDate }) => {
    /* Random token */
    const generatedToken = UseTokenGenerator();
    /* Encrypt data */
    const encryptedData = UseEncryptData({
      from: fromDate,
      to: toDate,
      type: "WITHDRAW",

      token: generatedToken,
    });
    fetch(accountStatementApi, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(encryptedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStateMentData(data.result);
        }
      });
  };

  /* Pagination  start*/
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    setTotalPages(Math.ceil(stateMentData.length / pageSize));
    updateVisibleData();
  }, [pageSize, currentPage, stateMentData]);

  const updateVisibleData = () => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setVisibleData(stateMentData.slice(start, end));
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

  /* Pagination  end*/

  console.log(stateMentData);
  return (
    <div className="center-container">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Withdraw Statement</h4>
        </div>
        <div className="card-body">
          <div className="report-form">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="row row10"
              data-gtm-form-interact-id="3"
            >
              <div className="col-lg-2 col-md-3">
                <div className="react-datepicker-wrapper">
                  <div className="react-datepicker__input-container">
                    <div className="mb-2 custom-datepicker">
                      <input
                        {...register("fromDate", { required: true })}
                        type="date"
                        className="form-control"
                        defaultValue={
                          new Date(new Date().setDate(new Date().getDate() - 7))
                            .toISOString()
                            .split("T")[0]
                        }
                        name="fromDate"
                      />
                      {/* <i className="far fa-calendar"></i> */}
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
                        defaultValue={new Date().toISOString().split("T")[0]}
                      />
                      {/* <i className="far fa-calendar"></i> */}
                    </div>
                  </div>
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
                      Amount
                    </th>
                    <th colSpan="1" role="columnheader">
                      Status
                    </th>
                    <th colSpan="1" role="columnheader">
                      Account
                    </th>
                    <th colSpan="1" role="columnheader">
                      Date
                    </th>
                    <th colSpan="1" role="columnheader">
                      Remark
                    </th>
                  </tr>
                </thead>
                <tbody role="rowgroup">
                  {visibleData &&
                    visibleData?.length > 0 &&
                    visibleData?.map((data, i) => {
                      return (
                        <tr key={i} role="row">
                          <td role="cell">{data?.amount}</td>
                          <td role="cell">
                            <span
                              className={`
                             ${data?.status === "REJECTED" ? "text-danger" : ""}
                             ${
                               data?.status === "APPROVED" ? "text-success" : ""
                             }
                             
                             `}
                            >
                              {data?.status}
                            </span>
                          </td>
                          <td role="cell">{data?.account}</td>
                          <td role="cell">{data?.date}</td>
                          <td role="cell">{data?.remark}</td>
                        </tr>
                      );
                    })}
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

export default WithdrawStatement;
