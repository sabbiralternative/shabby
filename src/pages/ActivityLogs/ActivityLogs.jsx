import { useState } from "react";
import { useForm } from "react-hook-form";
import { config } from "../../utils/config";
import ActivityTable from "./ActivityTable";
const ActivityLogs = () => {
  const [activityLogs, setActivityLogs] = useState([]);
  const { register, handleSubmit } = useForm();
  const activityLogApi = config?.result?.endpoint?.activityLogs;
  const token = localStorage.getItem("token");

  const onSubmit = ({ toDate, fromDate, logType }) => {
    fetch(activityLogApi, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        from: fromDate,
        to: toDate,
        type: logType,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setActivityLogs(data.result);
        }
      });
  };

  return (
    <div className="center-container">
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
                    <option value="">Select Log Type</option>
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
                  <select className="form-select">
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
                    placeholder={`${activityLogs.length} records...`}
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
                  {activityLogs && activityLogs.length > 0
                    ? activityLogs.map((activityLog, i) => (
                        <ActivityTable key={i} data={activityLog} />
                      ))
                    : null}
                </tbody>
              </table>
            </div>
            {activityLogs.length > 0 && (
              <div className="custom-pagination mt-2">
                <div disabled="">First</div>
                <div disabled="">Previous</div>
                <div disabled="">Next</div>
                <div disabled="">Last</div>
                <div>
                  <span className="me-2">
                    Page <b>1 of 1</b>
                  </span>
                  <span className="me-2">| Go to Page</span>
                  <input
                    className="form-control"
                    type="number"
                    defaultValue="1"
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
