import { useForm } from "react-hook-form";
import BetTable from "./BetTable";
import { useEffect, useState } from "react";
import Notification from "../../components/Notification/Notification";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import { API } from "../../utils";
const CurrentBet = () => {
  const { register, handleSubmit } = useForm();
  const token = localStorage.getItem("token");
  const [sports, setSports] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sportsRef, setSportsRef] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  /* Current bet api */
  const onSubmit = ({ sportsType }) => {
    if (sportsType == "none") {
      setErrorMessage("Select Report Type !");
    }
    /* Generate random token */
    const generatedToken = UseTokenGenerator();
    /* Encrypt post data */
    const encryptedData = UseEncryptData(generatedToken);
    if (sportsType) {
      fetch(`${API.currentBets}/${sportsType}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(encryptedData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.result) {
            setSports(data.result);
            setFilteredData(data.result);
          }
        });
    }
  };

  /* Filter sports */
  useEffect(() => {
    if (sportsRef !== "all" && sportsRef !== "") {
      const filterLayBack = sports.filter((game) => game.betType === sportsRef);
      setFilteredData(filterLayBack);
    } else if (sportsRef === "all") {
      setFilteredData(sports);
    }
  }, [sportsRef, sports]);

  /* Get total amount */
  let totalAmount = 0;
  for (const sport of filteredData) {
    totalAmount = totalAmount + sport.amount;
  }
  /* Pagination start */
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredData.length / pageSize));
    updateVisibleData();
  }, [pageSize, currentPage, filteredData.length]);

  const updateVisibleData = () => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setVisibleData(filteredData.slice(start, end));
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
          message="Select Report Type !"
          success={false}
          setMessage={setErrorMessage}
        />
      )}
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Current Bets</h4>
        </div>
        <div className="card-body">
          <div className="report-form">
            <form onSubmit={handleSubmit(onSubmit)} className="row row10">
              <div className="col-lg-2 col-md-3">
                <div className="mb-4 input-group position-relative">
                  <select
                    {...register("sportsType", { required: true })}
                    className="form-select"
                    name="sportsType"
                  >
                    <option value="none" disabled="">
                      Select Report Type
                    </option>
                    <option value="sports">Sports</option>
                    <option value="casino">Casino</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 d-grid">
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </div>
            </form>
            <div className="row row10 mt-2 justify-content-between align-items-center">
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
              <div className="col-lg-4 col-md-6 text-center">
                <div className="form-check form-check-inline">
                  <input
                    onClick={(e) => setSportsRef(e.target.value)}
                    type="radio"
                    className="form-check-input"
                    id="all"
                    name="filter"
                    value="all"
                  />
                  All<label className="form-check-label" htmlFor="all"></label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    onClick={(e) => setSportsRef(e.target.value)}
                    type="radio"
                    className="form-check-input"
                    id="back"
                    name="filter"
                    value="Back"
                  />
                  Back
                  <label className="form-check-label" htmlFor="back"></label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    onClick={(e) => setSportsRef(e.target.value)}
                    type="radio"
                    className="form-check-input"
                    id="lay"
                    name="filter"
                    value="Lay"
                  />
                  Lay<label className="form-check-label" htmlFor="lay"></label>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div>
                  Total Bets: <span className="me-2">{visibleData.length}</span>{" "}
                  Total Amount: <span className="me-2">{totalAmount}</span>
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
                      className="report-sport"
                    >
                      Sports
                    </th>
                    <th colSpan="1" role="columnheader">
                      Event Name
                    </th>
                    <th colSpan="1" role="columnheader">
                      Market Name
                    </th>
                    <th colSpan="1" role="columnheader">
                      Nation
                    </th>
                    <th
                      colSpan="1"
                      role="columnheader"
                      className="report-amount text-end"
                    >
                      User Rate
                    </th>
                    <th
                      colSpan="1"
                      role="columnheader"
                      className="report-amount text-end"
                    >
                      Amount
                    </th>
                    <th colSpan="1" role="columnheader" className="report-date">
                      Place Date
                    </th>
                    <th
                      colSpan="1"
                      role="columnheader"
                      className="report-action"
                    >
                      <div className="text-end">
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            title="Toggle All Current Page Rows Selected"
                            style={{
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody role="rowgroup">
                  {visibleData && visibleData.length > 0
                    ? visibleData.map((sport, i) => (
                        <BetTable key={i} data={sport} />
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

export default CurrentBet;
