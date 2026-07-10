import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import "../styles/Dashboard.css";


function ChartCard({ title, type, data }) {


  return (

    <div className="chart-card">


      <h3>
        {title}
      </h3>



      <ResponsiveContainer width="100%" height={300}>


        {type === "line" && (

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              strokeWidth={3}
            />

          </LineChart>

        )}



        {type === "bar" && (

          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              radius={[8,8,0,0]}
            />

          </BarChart>

        )}



        {type === "pie" && (

          <PieChart>


            <Pie

              data={data}

              dataKey="value"

              nameKey="name"

              cx="50%"

              cy="50%"

              outerRadius={100}

            >

              {data.map((item,index)=>(

                <Cell key={index}/>

              ))}


            </Pie>


            <Tooltip />


          </PieChart>

        )}



      </ResponsiveContainer>


    </div>

  );

}


export default ChartCard;