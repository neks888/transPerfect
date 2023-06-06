import { React } from "react";
import { useTranslation } from "react-i18next";

function WorkExperience() {
  const { t } = useTranslation();

  const values = [
    {
      Date: "Date1",
    },
    {
      Position: "Position1",
    },
    {
      Company: "Company1",
    },
    {
      Project: "Project1",
    },
    { Tools: "Tools1" },
  ];

  return (
    <div
      className="card"
      style={{ width: "20rem", textAlign: "left", marginBottom: "3rem" }}
    >
      <ul className="list-group list-group-flush">
        {values.map(function (val, index) {
          return (
            <li
              style={{ backgroundColor: index === 0 ? "#ccc" : "" }}
              key={Math.random()}
              className={"list-group-item"}
            >
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                {Object.keys(val)}
              </span>{" "}
              : {t(`${Object.values(val)}`)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default WorkExperience;
