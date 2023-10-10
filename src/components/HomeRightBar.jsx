import React from 'react'
import "./HomeRightBar.css"
import Navbar from "../components/Navbar"
import { BarChart, ComposedChart, Area, Bar,PieChart,Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HomeRightBar = () => {
  const data = [
    {
      "name": "Page A",
      "uv": 1000,
      "fill": "#bab4b4"
    },
    {
      "name": "Page B",
      "uv": 3000,

      "fill": "#bab4b4"
    },
    {
      "name": "Page C",
      "uv": 2000,

      "fill": "#bab4b4"
    },
    {
      "name": "Page D",
      "uv": 2780,

      "fill": "#14b652"

    },
    {
      "name": "Page E",
      "uv": 1890,

      "fill": "#bab4b4"

    },
    {
      "name": "Page F",
      "uv": 2390,

      "fill": "#bab4b4"
    },
    {
      "name": "Page G",
      "uv": 3490,

      "fill": "#bab4b4"
    }
  ]
  const data2 = [
    {
      "name": "Page A",
      "uv": 1000,
      "fill": "#bab4b4"
    },
    {
      "name": "Page B",
      "uv": 3000,

      "fill": "#bab4b4"
    },
    {
      "name": "Page C",
      "uv": 2000,

      "fill": "#bab4b4"
    },
    {
      "name": "Page D",
      "uv": 2780,

      "fill": "#000000"

    },
    {
      "name": "Page E",
      "uv": 1890,

      "fill": "#bab4b4"

    },
    {
      "name": "Page F",
      "uv": 390,

      "fill": "#bab4b4"
    },
    {
      "name": "Page G",
      "uv": 3490,

      "fill": "#bab4b4"
    }
  ]


  {/*   line chart code*/ }
  const data4 = [
    {
      name: 'Page A',
      task_created: 4000,
      task_completed: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      task_created: 3000,
      task_completed: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      task_created: 2000,
      task_completed: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      task_created: 2780,
      task_completed: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      task_created: 1890,
      task_completed: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      task_created: 2390,
      task_completed: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      task_created: 8000,
      task_completed: 4300,
      amt: 2100,
    },
  ];


  {/*   composed chart code*/ }
  const data6 = [
    {
      "name": "Jan",
      "uv": 4000,
      "amt": 2400
    },
    {
      "name": "FeB",
      "uv": 3000,
      "amt": 2210
    },
    {
      "name": "MarCh",
      "uv": 2000,
      "amt": 2290
    },
    {
      "name": "April",
      "uv": 2780,
      "amt": 2000
    },
    {
      "name": "May",
      "uv": 1890,
      "amt": 2181
    },
    {
      "name": "June",
      "uv": 2390,
      "amt": 2500
    },
    {
      "name": "July",
      "uv": 3490,
      "amt": 2100
    }
  ]

  const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];

  
  {/*   Piechart code*/ }
  const data7 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];
      
  
  return (

    <div className='mainHomeRightbar'>
      <Navbar />
      <div>
        <div className='itemcontainer'>
          <div className='itemcontainer1'>
            <div className='subitemcontainer'>
              <p className='taskprogress'>Task Progress</p>
              <p className='taskcounter'>212</p>
              <p className='currentmonth1'>Current Month</p>
            </div>

            <div className='barchartcontainer' >
              <BarChart width={166} height={100} data={data}>
                <CartesianGrid strokeDasharray="3 3" />

                <Tooltip />
                <Bar dataKey="uv" fill="fill" />
              </BarChart>

            </div>
          </div>
          <div className='itemcontainer1'>
            <div className='subitemcontainer'>
              <p className='taskprogress'>Task Completed</p>
              <p className='taskcounter1'>391</p>
              <p className='currentmonth1'>Current Month</p>
            </div>

            <div className='barchartcontainer' >
              <BarChart width={166} height={100} data={data2}>
                <CartesianGrid strokeDasharray="3 3" />

                <Tooltip />
                <Bar dataKey="uv" fill="fill" />
              </BarChart>

            </div>
          </div>

          <div className='itemcontainer1'>
            <div className='subitemcontainer'>
              <p className='taskprogress'>Monthly Task Progress</p>
              <p className='taskcounter2'>290</p>
              <p className='currentmonth1'>Current Month</p>
            </div>

            <div className='barchartcontainer' >
              <BarChart width={166} height={100} data={data}>
                <CartesianGrid strokeDasharray="3 3" />

                <Tooltip />
                <Bar dataKey="uv" fill="fill" />
              </BarChart>
            </div>
          </div>
        </div>
        <div className='middletaskchart'>
          <p className='taskvscompleted '>Task Created vs Task Completed</p>
          {/* chart code linechart */}
          <LineChart width={1130} height={250} data={data4}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="task_created" stroke="#8884d8" />
            <Line type="monotone" dataKey="task_completed" stroke="#82ca9d" />
          </LineChart>
          <div className='taskcontainer'>
            <div className='taskchart'>
              <p className='tasktext'> Your Team Performance this week</p>
            </div>

            <div className='taskchart1'>
              <p className='tasktext1'>Your Team Performance past week</p>

            </div>

            <div className='taskchart2'>
              <p className='tasktext2'> Your Team Performance this month</p>

            </div>
            {/* composed chart code */}
          </div>
          <ComposedChart width={600} height={250} data={data6}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>

          
        {/* pie chart code */}
        <div className='piechartcontainer'>
        <PieChart width={730} height={250}>
  <Pie data={data7} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data7} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
  
</PieChart>
</div>

        </div>

      </div>
    </div>
  )
}

export default HomeRightBar