import React from "react";
import { Doughnut } from "react-chartjs-2";

function StudentsResult(props) {
  const { data = [] } = props;
  const result = data.reduce(
    (acc, item) => {
      acc[item.isPass]++;
      return acc;
    },
    { Pass: 0, Fail: 0 }
  );
  return (
    <Doughnut
      data={{
        labels: ["Pass", "Fail"],
        datasets: [
          {
            label: "Count",
            data: [result.Pass, result.Fail],
            backgroundColor: [
              "rgba(46, 134, 193,0.7 ) ",
              "rgba(93, 173, 226  ,0.7)",
            ],
            borderColor: [
              "rgba(46, 134, 193,0.7 ) ",
              "rgba(93, 173, 226  ,0.7)",
            ],
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            text: "Student Results",
            style: {
              textAlign: "center",
            },
          },
        },
      }}
    />
  );
}

export default StudentsResult;
