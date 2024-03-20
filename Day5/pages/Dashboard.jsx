import React, { useState } from 'react';
import Chart from "react-apexcharts";
import '../assets/css/Dashboard.css';
import AdminDashboard from './AdminDashboard';

export default function Dashboard() {
  const [lineChartData, setLineChartData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [
          'April 10-April 18', 'April 20-April 27', 'May 1-May 7', 'May 10-May 17','May 20-May 27'
        ],
      },
      colors: ["black"],
    },
    series: [
      {
        name: "Number of Bookings",
        data: [354, 570, 407, 480, 390],
        type: 'line', // Keep type as line
        markers: {
          size: 8, // Customize the size of the dots
          colors: ['#008FFB'], // Customize the color of the dots
          hover: {
            size: 10 // Customize the size of the dots on hover
          }
        },
      }
    ]
  });

  const [doughnutChartData, setDoughnutChartData] = useState({
    options: {
      labels: ['Suite', 'Balcony Stateroom', 'Luxury Suite', 'Interior Stateroom'],
    },
    series: [50, 30, 20, 10] // Example data (replace with actual data)
  });

  return (
    <div className="wrapper">
      <AdminDashboard />
      <div className="dashboard-container">
        <h4>Booking Analysis</h4>
        <div className="chart-container">
          <Chart
            options={lineChartData.options}
            series={lineChartData.series}
            type="line" // Keep type as line
            width="700"
            height={300}
          />
        </div>
        <h5>Cabin Analysis</h5>
        <div className="total-bookings-container">
          <div className="box">
            <h2>Total Bookings</h2>
            <div className="booking-count">1278</div>
          </div>
        </div>

        <div className="booking-stats-container">
          <div className="box">
            <h2>Booking Statistics</h2>
            <div className="stats-container">
              <div>
                <span>Most Booked Date:</span>
                <span1>April 20-April 27</span1>
              </div>
              <div>
                <span>Most Booked Cabin:</span>
                <span1>Suite Rooms</span1>
              </div>
              <div>
                <span>Least Booked Cabin:</span>
                <span1>Interior Stateroom</span1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="doughnut-chart">
        <Chart
          options={doughnutChartData.options}
          series={doughnutChartData.series}
          type="donut"
          width="500"
          height={300}
        />
      </div>
    </div>
  );
}
