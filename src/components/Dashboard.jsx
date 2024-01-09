import { Button, Card, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import StudentsResult from "./charts/StudentsResults";
import MarkDistribution from "./charts/MarkDistribution";
import CityDistribution from "./charts/CityDistribution";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const dummyData = [
  {
    name: "John Doe",
    address: "123 Main Street",
    country: "United States",
    city: "Sydney",
    pincode: "12345",
    score: "987",
    isPass: parseInt("987") > 0.3 * 1600 ? "Pass" : "Fail",
  },
  {
    name: "Alice Smith",
    address: "456 Oak Avenue",
    country: "London",
    city: "Mapleville",
    pincode: "67890",
    score: "543",
    isPass: parseInt("543") > 0.3 * 1600 ? "Pass" : "Fail",
  },
  {
    name: "Bob Johnson",
    address: "789 Pine Road",
    country: "United Kingdom",
    city: "London",
    pincode: "ABC123",
    score: "789",
    isPass: parseInt("789") > 0.3 * 1600 ? "Pass" : "Fail",
  },
  {
    name: "Eva Brown",
    address: "321 Elm Lane",
    country: "Australia",
    city: "Sydney",
    pincode: "XYZ456",
    score: "1200",
    isPass: parseInt("1200") > 0.3 * 1600 ? "Pass" : "Fail",
  },
  {
    name: "Chris Williams",
    address: "567 Birch Street",
    country: "Germany",
    city: "Berlin",
    pincode: "123ABC",
    score: "300",
    isPass: parseInt("300") > 0.3 * 1600 ? "Pass" : "Fail",
  },
  // Add more objects as needed
];
localStorage.setItem("studentList", JSON.stringify(dummyData));
function Dashboard() {
  const data = JSON.parse(localStorage.getItem("studentList")) || [];
  const navigate = useNavigate();
  return (
    <>
      <Grid container margin={"3rem 2rem"}>
        <Grid item style={{ margin: "1rem" }}>
          <Card
            style={{
              width: "38rem",
              height: "25rem",
              padding: "2rem",
            }}
          >
            {data.length === 0 ? (
              <p>Click view more and enter data to view graph</p>
            ) : (
              <MarkDistribution data={data} />
            )}
          </Card>
        </Grid>
        <Grid item xl lg md xs={6} marginLeft={"1rem"}>
          <Grid item style={{ margin: " 1rem" }}>
            <Card
              style={{
                width: "30rem",
                height: "11rem",
                padding: " 1rem",
              }}
            >
              {data.length === 0 ? (
                <p>Click view more and enter data to view graph</p>
              ) : (
                <StudentsResult data={data} />
              )}
            </Card>
          </Grid>
          <Grid item style={{ margin: " 1rem" }}>
            <Card
              style={{
                width: "30rem",
                height: "13rem",
                padding: " 1rem",
              }}
            >
              {data.length === 0 ? (
                <p>Click view more and enter data to view graph</p>
              ) : (
                <CityDistribution data={data} />
              )}
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Button variant="outlined" onClick={() => navigate("/view-all")}>
          view More ...
        </Button>
      </Grid>
    </>
  );
}

export default Dashboard;
