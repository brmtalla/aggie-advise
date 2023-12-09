"use client";

import React, { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';

const gradePoints = {
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2.0,
  'C-': 1.7,
  'D+': 1.3,
  'D': 1.0,
  'F': 0.0,
};

const GpaCalculator: React.FC = () => {
  const [courses, setCourses] = useState([{ courseId: '', credits: '', grade: '' }]);
  const [gpa, setGpa] = useState<number | null>(null);

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const values = [...courses];
    values[index][event.target.name as 'courseId' | 'credits' | 'grade'] = event.target.value;
    setCourses(values);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const totalCredits = courses.reduce((total, course) => {
      if (course.grade.toUpperCase() in gradePoints) {
        return total + Number(course.credits);
      }
      return total;
    }, 0);
  
    const totalGradePoints = courses.reduce((total, course) => {
      if (course.grade.toUpperCase() in gradePoints) {
        return total + (gradePoints[course.grade.toUpperCase() as keyof typeof gradePoints] * Number(course.credits));
      }
      return total;
    }, 0);
  
    const gpa = totalGradePoints / totalCredits;
  
    setGpa(gpa);
  };

  const addCourse = () => {
    setCourses([...courses, { courseId: '', credits: '', grade: '' }]);
  };

  const deleteCourse = (index: number) => {
    if (courses.length > 1) { // Only delete a course if there's more than one
      const values = [...courses];
      values.splice(index, 1);
      setCourses(values);
    }
  };

  const resetCalculator = () => {
    setCourses([{ courseId: '', credits: '', grade: '' }]);
    setGpa(null);
  };

  return (
    <div className="bg-blue-800 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-1/2">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">GPA Calculator</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {courses.map((course, index) => (
            <div key={index} className="flex space-x-4 items-end">
              <div className="flex-1">
                <label className="block text-gray-700 font-bold mb-2">Course ID</label>
                <input
                  type="text"
                  name="courseId"
                  value={course.courseId}
                  onChange={(event) => handleInputChange(index, event)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Credits</label>
                <input
                  type="number"
                  name="credits"
                  value={course.credits}
                  onChange={(event) => handleInputChange(index, event)}
                  className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Grade</label>
                <input
                  type="text"
                  name="grade"
                  value={course.grade}
                  onChange={(event) => handleInputChange(index, event)}
                  className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {index !== courses.length - 1 && (
                <button type="button" onClick={() => deleteCourse(index)} className="text-red-500 py-2"><HiMinus size={24} /></button>
              )}
              {index === courses.length - 1 && (
              <button type="button" onClick={addCourse} className="text-blue-500 py-2"><HiPlus size={24} /></button>
              )}
            </div>
          ))}
          <div className="text-center">
            <button type="submit" className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Calculate GPA
            </button>
            <button type="button" onClick={resetCalculator} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4">
              Reset
            </button>
          </div>
        </form>
        {gpa && (
          <div className="mt-8 text-2xl font-bold text-green-500 text-center">
            GPA: {gpa.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
};

export default GpaCalculator;