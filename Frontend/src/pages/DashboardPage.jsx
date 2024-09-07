import StatusTracking from './StatusTracking';

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <DocumentUpload />
      <StatusTracking />
    </div>
  );
};
export default DashboardPage;
