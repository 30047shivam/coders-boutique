import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
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
        <div>
          <div className="relative inline-block">
            <img
              src="/avatar-placeholder.png"
              alt="User Avatar"
              className="h-8 w-8 rounded-full"
            />
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <a href="/settings" className="block px-4 py-2">Settings</a>
              <a href="/logout" className="block px-4 py-2">Logout</a>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
}
