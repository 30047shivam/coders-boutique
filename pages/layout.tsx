// /components/Layout.tsx
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between">
        <div className="flex items-center gap-4">
          <span className="text-lg font-bold">Tech Assessment</span>
          <nav className="flex gap-4">
            <a href="/dashboard">Dashboard</a>
            <a href="/assessments">Assessments</a>
            <a href="/profile">Profile</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
};

export default Layout;
