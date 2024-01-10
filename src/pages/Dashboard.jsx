import { Button, Card, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import StudentsResult from "../components/charts/StudentsResults";
import MarkDistribution from "../components/charts/MarkDistribution";
import CityDistribution from "../components/charts/CityDistribution";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

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
        <Grid item marginLeft={"1rem"}>
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
