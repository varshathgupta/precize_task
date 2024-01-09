import React from "react";
import { Line } from "react-chartjs-2";

function MarkDistribution(props) {
  const { data } = props;
  return (
    <Line
      data={{
        labels: data.map((data) => data.name),
        XAxisId: "Name",
        datasets: [
          {
            label: "Scores",
            data: data.map((data) => data.score),
            backgroundColor: "#3498DB ",
            borderColor: "#3498DB ",
          },
        ],
      }}
      options={{
        elements: {
          line: {
            tension: 0.5,
          },
        },
        plugins: {
          title: {
            text: "Student Scores",
          },
        },
      }}
    />
  );
}

export default MarkDistribution;
