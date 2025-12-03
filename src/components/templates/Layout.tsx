import { Outlet } from 'react-router-dom';
import { Navbar } from '../ui/organisms/Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 dark:text-gray-100 ">
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
