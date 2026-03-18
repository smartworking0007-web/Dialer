import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const leads = [
  { id: 1, name: 'Robert Fox', phone: '(201) 555-0124', status: 'New', source: 'Web' },
  { id: 2, name: 'Jane Cooper', phone: '(302) 555-0107', status: 'Follow-up', source: 'Facebook' },
  { id: 3, name: 'Wade Warren', phone: '(408) 555-0113', status: 'Interested', source: 'Excel' },
];

export default function LeadsTable() {
  return (
    <Card className="p-0 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Lead Name</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Phone Number</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Status</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {leads.map((lead) => (
            <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 font-semibold">{lead.name}</td>
              <td className="px-6 py-4 text-slate-600">{lead.phone}</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold ">
                  {lead.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <Button variant="secondary" className="py-1 text-xs">Call</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}