import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { config } from "../../utils/config";
import SettleBetsModal from "./SettleBetsModal";
import Notification from "../../components/Notification/Notification";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";

const AccountStatement = () => {
  const { register, handleSubmit } = useForm();
  const accountStatementApi = config?.result?.endpoint?.accountStatement;
  const settledBetsApi = config?.result?.endpoint?.settledBets;
  const token = localStorage.getItem("token");
  const [modalData, setModalData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [stateMentData, setStateMentData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");


  /*Get Account statement  */
  const onSubmit = ({ toDate, fromDate, reportType }) => {
    if (reportType == "none") {
      return setErrorMessage("Select Report Type !");
    }
    /* Generated random token */
    const generatedToken = UseTokenGenerator();
    /* Encryption post data */
    const encryptedData = UseEncryptData({
      from: fromDate,
      to: toDate,
      type: reportType,
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


  /* Settled bets */
  const getSettledBets = (marketId) => {
    /* Generated random token */
    const generatedToken = UseTokenGenerator();
    /* Encryption post data */
    const encryptedData = UseEncryptData(generatedToken);
    fetch(`${settledBetsApi}/${marketId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(encryptedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setModalData(data.result);
          setFilteredData(data.result);
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
  return (
    <>
      <div className="center-container">
        {errorMessage && (
          <Notification
            message={errorMessage}
            success={false}
            setMessage={setErrorMessage}
          />
        )}
        {showModal && (
          <SettleBetsModal
            showModal={showModal}
            setShowModal={setShowModal}
            data={filteredData}
            modalData={modalData}
            setFilteredData={setFilteredData}
          />
        )}
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Account Statement</h4>
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
                            new Date(
                              new Date().setDate(new Date().getDate() - 7)
                            )
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
                <div className="col-lg-3 col-md-4">
                  <div className="mb-2 input-group position-relative">
                    <select
                      className="form-select"
                      {...register("reportType", { required: true })}
                      name="reportType"
                    >
                      <option value="none" disabled="">
                        Select Report Type
                      </option>
                      <option value="ALL">All Reports</option>
                      <option value="DW">Deposite/Withdraw Reports</option>
                      <option value="GR">Game Reports</option>
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
                      <th
                        colSpan="1"
                        role="columnheader"
                        className="report-date"
                      >
                        Date
                      </th>
                      <th
                        colSpan="1"
                        role="columnheader"
                        className="report-sr text-end"
                      >
                        Sr no
                      </th>
                      <th
                        colSpan="1"
                        role="columnheader"
                        className="report-amount text-end"
                      >
                        Credit
                      </th>
                      <th
                        colSpan="1"
                        role="columnheader"
                        className="report-amount text-end"
                      >
                        Debit
                      </th>
                      <th
                        colSpan="1"
                        role="columnheader"
                        className="report-amount text-end"
                      >
                        Pts
                      </th>
                      <th colSpan="1" role="columnheader">
                        Remark
                      </th>
                    </tr>
                  </thead>
                  <tbody role="rowgroup">
                    {visibleData && visibleData.length > 0
                      ? visibleData.map(
                          (
                            {
                              balance,
                              marketId,
                              memberWin,
                              narration,
                              settledTime,
                            },
                            i
                          ) => {
                   
                            return (
                              <tr key={i} role="row">
                                <td role="cell" className="report-date">
                                  {settledTime}
                                </td>
                                <td role="cell" className="report-sr text-end">
                                  {i + 1}
                                </td>
                                <td
                                  role="cell"
                                  className="report-amount text-end"
                                >
                                  <span role="cell" className="text-success">
                                    {memberWin > 0 ? memberWin : null}
                                  </span>
                                </td>
                                <td
                                  role="cell"
                                  className="report-amount text-end"
                                >
                                  <span role="cell" className="text-danger">
                                    {memberWin < 0 ? memberWin : null}
                                  </span>
                                </td>

                                <td
                                  role="cell"
                                  className="report-amount text-end"
                                >
                                  <span role="cell" className="text-success">
                                    {balance}
                                  </span>
                                </td>
                                <td role="cell">
                                  <span
                                    style={{
                                      cursor: "pointer",
                                    }}
                                    onClick={() => {
                                      getSettledBets(marketId);
                                      setShowModal(!showModal);
                                    }}
                                  >
                                    {narration}
                                  </span>
                                </td>
                              </tr>
                            );
                          }
                        )
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
    </>
  );
};

export default AccountStatement;
