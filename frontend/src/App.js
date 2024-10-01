import './App.css';
import { useEffect, useState, useMemo } from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, ResponsiveContainer} from "recharts";
import { format } from 'date-fns';
import ToolTipDetails from './components/ToolTipDetails';
import Loading from './components/Loading';

export default function App() {
  
  
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetches excel data
        const response = await fetch('http://localhost:5001/api/data');
        const fetched = await response.json();

        // For debugging
        console.log(fetched); 

        // Checks data has the expected date/return information
        const newData = fetched.map(curItem => {
          let dateObj;
          // Converts date into m/d/yy formatting correctly
          if (typeof curItem.ReferenceDate === 'number') {
            dateObj = new Date(1900, 0, curItem.ReferenceDate - 1);
          }

          // Checks date object/returns are correct
          return dateObj && !isNaN(dateObj) ? {
            day: dateObj,
            dailyReturn: parseFloat(curItem.DailyReturn),
            totalReturn: parseFloat(curItem.TotalReturn), 
          } : null;
        }); 

        // For debugging
        console.log(newData);
        setData(newData); 
      } catch (error) {
        console.error('Error: ', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  // Show Loader component
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 id="header">S&P Total Return</h1>
      <div id="chartDiv">
       
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="day" 
              tickFormatter={(date) => format(date, 'M/d/yy')}
            />
            <YAxis 
              domain={[-750, 3000]}
              ticks={[-750, 0, 750, 1500, 2250, 3000]}
              type="number" 
              tickFormatter={(value) => `${value}%`}
            />
            <CartesianGrid stroke="grey" strokeDasharray="2 2" />
            <Tooltip 
              content={<ToolTipDetails />}
            />
            <Line 
              type="monotone" 
              dataKey="totalReturn" 
              stroke="black" 
              dot={{ r: .25 }}
              animationDuration={300}
              animationEasing="ease"
            />

          </LineChart>
        </ResponsiveContainer>
        
      </div>
      
    </div>
  );
}
