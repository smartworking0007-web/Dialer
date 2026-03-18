'use client';
import dynamic from 'next/dynamic';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const NoSSRResponsiveContainer = dynamic(
  () => import('recharts').then((mod) => mod.ResponsiveContainer),
  { ssr: false }
);

const data = [
  { name: 'Mon', calls: 400 },
  { name: 'Tue', calls: 300 },
  { name: 'Wed', calls: 200 },
  { name: 'Thu', calls: 278 },
  { name: 'Fri', calls: 189 },
  { name: 'Sat', calls: 239 },
  { name: 'Sun', calls: 349 },
];

export default function PerformanceGraph() {
  return (
    <div className="h-87.5 w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h3 className="text-sm font-bold text-gray-400 uppercase mb-4 ml-2">Weekly Performance</h3>
      
      {/* Step 2: Using the canonical Tailwind class min-h-62.5 */}
      <div className="h-full w-full min-h-62.5">
        <NoSSRResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0B1D46" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#0B1D46" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 11}} 
              dy={10} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 11}} 
            />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Area 
              type="monotone" 
              dataKey="calls" 
              stroke="#0B1D46" 
              strokeWidth={3} 
              fill="url(#colorCalls)" 
              isAnimationActive={true}
            />
          </AreaChart>
        </NoSSRResponsiveContainer>
      </div>
    </div>
  );
}