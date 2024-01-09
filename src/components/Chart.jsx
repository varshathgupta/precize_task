import { Card, Container, Grid } from "@mui/material";
import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import StudentsResult from "./charts/StudentsResults";
import MarkDistribution from "./charts/MarkDistribution";
import CityDistribution from "./charts/CityDistribution";
defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function Chart() {
  const data = JSON.parse(localStorage.getItem("studentList")) || [];
  return (
    <Container>
      <Grid container>
        <Grid item style={{ margin: "2rem" }}>
          <Card
            style={{
              width: "40rem",
              height: "15rem",
              padding: "2rem",
            }}
          >
            {data.length === 0 ? (
              <p>Enter data to view graph</p>
            ) : (
              <MarkDistribution data={data} />
            )}
          </Card>
        </Grid>
        <Grid item container style={{ margin: "2rem" }}>
          <Grid item style={{ padding: " 0.5rem" }}>
            <Card
              style={{
                width: "19rem",
                height: "15rem",
                padding: " 0.5rem",
                textAlign: "center",
              }}
            >
              {data.length === 0 ? (
                <p>Enter data to view graph</p>
              ) : (
                <StudentsResult data={data} />
              )}
            </Card>
          </Grid>
          <Grid item style={{ padding: " 0.5rem" }}>
            <Card
              style={{
                width: "19rem",
                height: "15rem",
              }}
            >
              <CityDistribution data={data} />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Chart;
