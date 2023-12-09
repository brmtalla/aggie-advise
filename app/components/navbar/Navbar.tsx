// Navbar.tsx
"use client";

import React from 'react';
import { useSession } from 'next-auth/react'; // or whatever you use for session management

const Navbar = () => {
  const { data: session, status: loading } = useSession();

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // getMonth() returns 0-11
  const day = now.getDate();

  let semester;
  if ((month === 12 && day >= 20) || month < 5 || (month === 5 && day <= 20)) {
    semester = `Spring ${year}`;
  } else if (month < 8 || (month === 8 && day <= 10)) {
    semester = `Summer ${year}`;
  } else {
    semester = `Fall ${year}`;
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-700 text-yellow p-5 shadow-sm flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-yellow-300">Aggie Advise</h1>
      {/* other navbar content */}
      <div className="text-white font-semibold">{semester}</div>
    </nav>
  );
};

export default Navbar;