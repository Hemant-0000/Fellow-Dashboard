import React from 'react'
import { Line } from 'react-chartjs-2'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement );

//data for bar chart
const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Sales/ month",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
    },
  ],
};

//doughnut chart data set

const data1 = {
  labels: ["Organic", "Social Media", "Websites"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

function Content() {
  return (
    <div className='contentcontainer flex flex-wrap ml-[200px] md:ml-[70px]   ' >
      <div className='contentwrapper flex p-[20px] gap-[40px] md:grid grid-cols-[1fr] ml-[20px] '  >
        <div className='tabs flex justify-evenly items-center w-[250px] h-[100px] bg-white rounded-[10px] cursor-pointer shadow-my-shadow  ' >
          <div className='categories' >
            <h2>Companies</h2>
          </div>
        </div>
        <div className='tabs flex justify-evenly items-center w-[250px] h-[100px] bg-white rounded-[10px] cursor-pointer shadow-my-shadow md:w-[350px]  ' >
          <div className='categories' >
            <h2>Customers</h2>
          </div>
        </div>
        <div className='tabs flex justify-evenly items-center w-[250px] h-[100px] bg-white rounded-[10px] cursor-pointer shadow-my-shadow  ' >
          <div className='categories' >
            <h2>Users</h2>
          </div>
        </div>
        <div className='tabs flex justify-evenly items-center w-[250px] h-[100px] bg-white rounded-[10px] cursor-pointer shadow-my-shadow  ' >
          <div className='categories' >
            <h2>Projects</h2>
          </div>
        </div>
      </div>

      {/* Chart jsx started */}
      <div className='charts flex justify-evenly items-center ml-[20px] md:flex-col md:justify-center md:items-center md:m-auto ' >
        <div className='bar ml-[20px] md:mt-[60px] md:ml-[10px] md:w-[300px] md:h-[300px]   ' >
          <h2 className='md:text-center text-[22px] mb-[20px] ' >Sales</h2>
          {/* Line chart */}
          <Line data={data} width={400} height={400} />
        </div>
        <div className='circle ml-[120px] md:mt-[60px] md:ml-[10px] md:w-[300px] md:h-[300px]  ' >
          <h2 className='md:text-center text-[22px] mb-[20px] ' >Customers Arrived</h2>
          {/* Doughnut chart  */}
          <Doughnut data={data1} width={400} height={400} />
        </div>
      </div>

    </div>
  )
}

export default Content