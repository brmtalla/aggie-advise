"use client";

import React, { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';

const gradePoints = {
  'A': { min: 90, max: 100 },
  'B': { min: 80, max: 89 },
  'C': { min: 70, max: 79 },
  'D': { min: 60, max: 69 },
  'F': { min: 0, max: 59 },
};

const getGradeColor = (grade: number) => {
  if (grade >= 90) return 'text-green-500';
  if (grade >= 80) return 'text-green-300';
  if (grade >= 70) return 'text-yellow-300';
  if (grade >= 60) return 'text-yellow-600';
  return 'text-red-500';
};

const getLetterGrade = (grade: number) => {
  if (grade >= 90) return 'A';
  if (grade >= 80) return 'B';
  if (grade >= 70) return 'C';
  if (grade >= 60) return 'D';
  return 'F';
};

const CourseCalculator: React.FC = () => {
  const [assignments, setAssignments] = useState([{ assignment: '', weight: '', grade: '' }]);
  const [grade, setGrade] = useState<number | null>(null);

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const values = [...assignments];
    values[index][event.target.name as 'assignment' | 'weight' | 'grade'] = event.target.value;
    setAssignments(values);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const totalWeight = assignments.reduce((total, assignment) => total + Number(assignment.weight), 0);
  
    const totalGradePoints = assignments.reduce((total, assignment) => {
      const gradePoint = gradePoints[assignment.grade.toUpperCase() as keyof typeof gradePoints];
      return total + ((gradePoint ? (gradePoint.min + gradePoint.max) / 2 : 0) * Number(assignment.weight));
    }, 0);
  
    const grade = totalGradePoints / totalWeight;
  
    setGrade(grade);
  };

  const addAssignment = () => {
    setAssignments([...assignments, { assignment: '', weight: '', grade: '' }]);
  };

  const deleteAssignment = (index: number) => {
    if (assignments.length > 1) {
      const values = [...assignments];
      values.splice(index, 1);
      setAssignments(values);
    }
  };

  const resetCalculator = () => {
    setAssignments([{ assignment: '', weight: '', grade: '' }]);
    setGrade(null);
  };

  return (
    <div className="bg-blue-800 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-1/2">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">Course Grade Calculator</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {assignments.map((assignment, index) => (
            <div key={index} className="flex space-x-4 items-end">
              <div className="flex-1">
                <label className="block text-gray-700 font-bold mb-2">Assignment</label>
                <input
                  type="text"
                  name="assignment"
                  value={assignment.assignment}
                  onChange={(event) => handleInputChange(index, event)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Weight</label>
                <input
                  type="number"
                  name="weight"
                  value={assignment.weight}
                  onChange={(event) => handleInputChange(index, event)}
                  className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Grade</label>
                <input
                  type="text" // Change type to text
                  name="grade"
                  value={assignment.grade}
                  onChange={(event) => handleInputChange(index, event)}
                  className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {index !== assignments.length - 1 && (
                <button type="button" onClick={() => deleteAssignment(index)} className="text-red-500 py-2"><HiMinus size={24} /></button>
              )}
              {index === assignments.length - 1 && (
                <button type="button" onClick={addAssignment} className="text-blue-500 py-2"><HiPlus size={24} /></button>
              )}
            </div>
          ))}
          <div className="text-center">
            <button type="submit" className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Calculate Grade
            </button>
            <button type="button" onClick={resetCalculator} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4">
              Reset
            </button>
          </div>
        </form>
        {grade && (
          <div className={`mt-8 text-2xl font-bold ${getGradeColor(grade)} text-center`}>
            Grade: {grade.toFixed(2)} ({getLetterGrade(grade)})
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCalculator;