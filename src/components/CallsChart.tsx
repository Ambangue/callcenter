import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '9h', entrants: 40, sortants: 24 },
  { name: '10h', entrants: 30, sortants: 35 },
  { name: '11h', entrants: 20, sortants: 45 },
  { name: '12h', entrants: 27, sortants: 38 },
  { name: '13h', entrants: 18, sortants: 28 },
  { name: '14h', entrants: 23, sortants: 38 },
  { name: '15h', entrants: 34, sortants: 43 },
];

export const CallsChart = () => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="entrants" stroke="#0EA5E9" strokeWidth={2} />
          <Line type="monotone" dataKey="sortants" stroke="#1A1F2C" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};