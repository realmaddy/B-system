import Header from "@/components/Header";
import Card from "@/components/Card";
import QuickActionCard from "@/components/QuickActionCard";
import {
  Users,
  FileVideo,
  Activity,
  TrendingUp,
  ClipboardList,
  Film,
  ListChecks,
} from "lucide-react";

export default function Page() {
  return (
    <main className="flex-1 flex flex-col gap-8 px-6 py-6">
      <Header />

      {/* Analytics Overview */}
      <section>
        <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Activity className="w-4 h-4 text-indigo-500" />
          Analytics Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Card
            title="Total Film"
            value="2,847"
            percent="+12%"
            icon={<FileVideo className="w-5 h-5 text-indigo-500" />}
          />
          <Card
            title="Total Series"
            value="1,234"
            percent="+8%"
            icon={<ClipboardList className="w-5 h-5 text-green-500" />}
          />
          <Card
            title="Missed update"
            value="892"
            percent="+23%"
            icon={<Activity className="w-5 h-5 text-pink-500" />}
          />
          <Card
            title="Series not updated"
            value="98.5%"
            percent="+2%"
            icon={<TrendingUp className="w-5 h-5 text-yellow-500" />}
          />
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <ListChecks className="w-4 h-4 text-indigo-500" />
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <QuickActionCard
            title="Manage Users"
            desc="Manage users"
            gradient="bg-gradient-to-r from-indigo-500 to-pink-500"
            icon={<Users className="w-5 h-5 text-indigo-500" />}
          />
          <QuickActionCard
            title="Manage Films"
            desc="Manage films"
            gradient="bg-gradient-to-r from-green-500 to-emerald-400"
            icon={<Film className="w-5 h-5 text-green-500" />}
          />
          <QuickActionCard
            title="Manage Series"
            desc="Update or add TV series"
            gradient="bg-gradient-to-r from-yellow-400 to-orange-500"
            icon={<ClipboardList className="w-5 h-5 text-yellow-500" />}
          />
          <QuickActionCard
            title="Roles"
            desc="Manage roles"
            gradient="bg-gradient-to-r from-fuchsia-500 to-purple-500"
            icon={<Users className="w-5 h-5 text-fuchsia-500" />}
          />
          <QuickActionCard
            title="Tasks"
            desc="Manage tasks"
            gradient="bg-gradient-to-r from-indigo-500 to-violet-500"
            icon={<ListChecks className="w-5 h-5 text-violet-500" />}
          />
        </div>
      </section>

 

    </main>
  );
}
