import React from 'react';
import Sidebar from './Sidebar'

export default function Home() {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <div className="min-w-[600px] w-full h-full">
        <div className="w-full min-h-[800px] flex items-center rounded-lg border-dashed border-2 border-gray-400 p-6 m-6">
          <div className="m-auto">
            Content
          </div>
        </div>
      </div>
    </div>
  );
}
