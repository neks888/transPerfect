import React from "react";

function WorkExperience({ job }) {
  return (
    <div
      className="card"
      style={{ width: "20rem", textAlign: "left", marginBottom: "3rem" }}
    >
      {/* <div className="card-header">Position: {job.position}</div> */}
      <ul className="list-group list-group-flush">
        {Object.keys(job).map((key, index) => (
          <li
            style={{ backgroundColor: index == 0 ? "#ccc" : "transparent" }}
            key={index}
            className={"list-group-item"}
          >
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              {key}
            </span>{" "}
            : {job[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkExperience;
