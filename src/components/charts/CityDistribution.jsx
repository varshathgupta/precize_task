import React from "react";
import { Bar } from "react-chartjs-2";

function CityDistribution(props) {
  const { data } = props;
  const groupedByCity = data.reduce((acc, person) => {
    const { city, ...rest } = person;
    acc[city] = acc[city] || [];
    acc[city].push(rest);
    return acc;
  }, {});
  console.log(Object.keys(groupedByCity).length);
  return (
    <Bar
      data={{
        labels: Object.keys(groupedByCity),
        datasets: [
          {
            label: "student count",
            data: Object.values(groupedByCity).map((data) => data.length),
            backgroundColor: [
              "#3498DB",
              //   "rgba(250, 192, 19, 0.8)",
              //   "rgba(253, 135, 135, 0.8)",
              //   "rgba(83, 63, 229, 0.8)",
            ],
            borderRadius: 5,
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            text: "Students count from each city",
          },
        },
      }}
    />
  );
}

export default CityDistribution;
