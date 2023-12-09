// GpaLayout.tsx
import React from 'react';
import GpaCalculator from './components/GPACalculator';
import CourseCalculator from './components/CourseCalculator'; // Import CourseCalculator
import Sidebar from '../components/sidebar/Sidebar';

const GpaLayout: React.FC = () => {
  return (
    <>
        <Sidebar>
            <div className="min-h-screen bg-blue-800 flex flex-col items-center justify-center">
                <div className="p-5 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-yellow-400 py-2">Welcome to our GPA and Course Calculators!</h1>
                    <p className="text-lg text-white">Enter your courses, grades and credits for each course in the GPA Calculator to calculate your GPA.</p>
                    <p className="text-lg text-white mb-4"> Enter your assignments, grades, and weights in the Course Calculator to calculate your grade for a course.</p>
                </div> 
                <div className="w-full max-w-screen-xl space-y-8"> 
                    <GpaCalculator />
                    <CourseCalculator />
                </div>
            </div>
        </Sidebar>
    </>
  );
};

export default GpaLayout;