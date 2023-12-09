import React, { useState } from 'react'
import { HiPlus, HiX } from 'react-icons/hi'

interface Class {
  _id: string;
  ClassCodename: string;
  ClassID: number;
  ClassName: string;
  ClassDescription: string;
  ClassCredits: number;
  ClassPrerequisite: string;
  ClassCorequisite: string;
  Department: string;
  __v: number;
}

interface ScheduleProps {
  classes: Class[];
}

const Schedule: React.FC<ScheduleProps> = ({ classes }) => {
  const [schedule, setSchedule] = useState<Class[]>([])
  const [nextClasses, setNextClasses] = useState<Class[]>([])
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [selectedClassID, setSelectedClassID] = useState<number | null>(null)
  const [studentStanding, setStudentStanding] = useState('')
  const [takenClasses, setTakenClasses] = useState<string[]>([])
  const [creditsTaken, setCreditsTaken] = useState(0)

  const handleClassSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedClassID = Number(event.target.value)
    setSelectedClassID(selectedClassID)
  }

  const handleDepartmentSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDepartment(event.target.value)
  }

  const addClassToSchedule = () => {
    const selectedClass = classes.find(c => c.ClassCodename === selectedDepartment && c.ClassID === selectedClassID)
    if (selectedClass) {
      if (selectedClass.ClassPrerequisite === 'None' || window.confirm(`Have you taken the prerequisite for this class (${selectedClass.ClassPrerequisite})?`)) {
        setSchedule(prevSchedule => [...prevSchedule, selectedClass])
        if (selectedClass.ClassPrerequisite !== 'None') {
          setTakenClasses(prevTakenClasses => [...prevTakenClasses, selectedClass.ClassPrerequisite]) // Add the prerequisite to takenClasses
        }
        setSelectedDepartment('')
        setSelectedClassID(null)
      } else {
        setSelectedDepartment('')
        setSelectedClassID(null)
      }
    }
  }

  const removeClassFromSchedule = (classToRemove: Class) => {
    setSchedule(prevSchedule => prevSchedule.filter(c => c !== classToRemove))
  }

  const handleSubmit = () => {
    const nextClasses = classes.filter(c => 
      schedule.some(s => s.ClassID.toString() === c.ClassPrerequisite) ||
      takenClasses.includes(c.ClassPrerequisite) // Check if the prerequisite is in takenClasses
    )
    setNextClasses(nextClasses)
  }

  const handleReset = () => {
    setSchedule([])
    setNextClasses([])
  }

  return (
    <div className="p-8">
        <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold px-12 text-yellow-500">Welcome to the Aggie Advise Schedule Builder!</h1>
                <p className="text-lg p-4">
                    The purpose behind this page was to aid users in knowing which classes
                    they need to take. This would cut down on the guess work and use it as a starting point of
                    conversation. You can use this page as a starting point to making sure that you are on
                    track.
                </p>
                <p className="text-lg p-4">
                    Note: You should not use this page as your sole resource. Make sure to
                    consult with your advisor and Aggie Access to determine what your
                    schedule should be.
                </p>
                <p className="text-xl p-4">
                    For this page make sure to input your department, major, and the amount
                    of credits you have so far. Upon submission, a list of courses for this semester and course recommendations for next semester will be
                    displayed.
                </p>
        </div>
        <div className="flex items-center justify-center space-x-4">
            <div className="flex space-x-4 mb-4">
                <div>
                    <label className="block text-black-700 font-bold mb-2">Classification</label>
                    <select className="border p-2 rounded" onChange={e => setStudentStanding(e.target.value)}>
                    <option>Select your standing...</option>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                    </select>
                </div>
                
                <div>
                    <label className="block text-black-700 font-bold mb-2">Credits taken</label>
                    <input type="number" className="border p-2 rounded" placeholder="Credits taken" onChange={e => setCreditsTaken(Number(e.target.value))} />
                </div>
            </div>

            <div className="flex space-x-4 mb-4">
                <div>
                    <label className="block text-black-700 font-bold mb-2">Department</label>
                    <select className="border p-2 rounded" value={selectedDepartment} onChange={handleDepartmentSelect}>
                        <option>Select a department...</option>
                        {Array.from(new Set(classes.map(c => c.ClassCodename))).map(department => (
                        <option key={department} value={department}>{department}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-black-700 font-bold mb-2">Class</label>
                    <select className="border p-2 rounded" value={selectedClassID || ''} onChange={handleClassSelect}>
                        <option>Select a class...</option>
                        {classes.filter(c => c.ClassCodename === selectedDepartment).map(c => (
                        <option key={c.ClassID} value={c.ClassID}>{c.ClassID}</option>
                        ))}
                    </select>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addClassToSchedule}><HiPlus /></button>
            </div>
        </div>

      <h2 className="text-2xl font-bold mt-8">Your Schedule</h2>
      {schedule.map(c => (
        <div key={c.ClassID} className="border p-4 mb-4 rounded shadow flex justify-between items-start w-full">
          <div>
            <h3 className="text-xl font-bold">{`${c.ClassCodename} ${c.ClassID}`}</h3>
            <p>{c.ClassName}</p>
            <p>{c.ClassDescription}</p>
            <p>{`Credits: ${c.ClassCredits}`}</p>
            <p>{`Prerequisite: ${c.ClassPrerequisite}`}</p>
            <p>{`Corequisite: ${c.ClassCorequisite}`}</p>
          </div>
          <button className="bg-red-500 text-white p-2 rounded" onClick={() => removeClassFromSchedule(c)}><HiX /></button>
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-8">Total Credit Hours: {schedule.reduce((total, c) => total + c.ClassCredits, 0)}</h2>

      <div className="flex space-x-4 mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Submit</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleReset}>Reset</button>
      </div>

      <h2 className="text-2xl font-bold mt-8 w-full">Next Semester</h2>
      {nextClasses.map(c => (
        <div key={c.ClassID} className="border p-4 mb-4 rounded shadow w-full">
          <h3 className="text-xl font-bold">{`${c.ClassCodename} ${c.ClassID}`}</h3>
          <p>{c.ClassName}</p>
          <p>{c.ClassDescription}</p>
          <p>{`Credits: ${c.ClassCredits}`}</p>
          <p>{`Prerequisite: ${c.ClassPrerequisite}`}</p>
          <p>{`Corequisite: ${c.ClassCorequisite}`}</p>
        </div>
      ))}
    </div>
  )
}

export default Schedule