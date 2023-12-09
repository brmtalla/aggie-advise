"use client";

import Button from '@/app/components/Button';
import Modal from '@/app/components/Modal';
import { Dialog } from '@headlessui/react';
import { set } from 'lodash';
import image from 'next/image';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const users = [
  {
    "_id": "656cde6d85eeacda379808c5",
    "name": "Brandon Talla",
    "email": "brandonmtalla@gmail.com",
    "emailVerified": null,
    "image": "https://lh3.googleusercontent.com/a/ACg8ocJhgwxCTm7HxAmBQ2kgT1w4UFAzKakVJuu32bEQT0H1=s96-c",
    "createdAt": "2023-12-03T20:00:45.301Z",
    "updatedAt": "2023-12-03T20:00:45.301Z",
    "conversationIds": [
      "656d4b5fa39be8a8802c7e47",
      "656d6915a39be8a8802c7e48",
      "656dd50765fade3eb045d757"
    ]
  },
  {
    "_id": "657229dc2cc8e4fddbf3389b",
    "name": "tamia",
    "email": "tamia@ncat.edu",
    "hashedPassword": "$2b$12$PWS4zCRSH.kzSkD.n9EZwOoBtRcVlzu13R2A3K3.rNpETTJI7hbSW",
    "createdAt": "2023-12-07T20:23:55.772Z",
    "updatedAt": "2023-12-07T20:23:55.772Z",
    "userType": "ADVISOR",
    "department": "Computer Science",
    "officeHours": ["Monday: 10:00am - 12:00pm", "Wednesday: 10:00am - 12:00pm", "Friday: 10:00am - 12:00pm"],
    "conversationIds": [
      "657266fc2cc8e4fddbf3389c"
    ],
    "seenMessagesIds": [
      "657267032cc8e4fddbf3389d",
      "657267272cc8e4fddbf3389e",
      "657267302cc8e4fddbf3389f",
      "657267372cc8e4fddbf338a0",
      "6573690f2cc8e4fddbf338a1",
      "657369142cc8e4fddbf338a2",
      "65745373e537da9d4996d4fc"
    ],
    "advisorId": "6",
  },
  {
    "_id": "656ce1c485eeacda379808c7",
    "name": "Johnathan Dale",
    "email": "john@ncat.edu",
    "hashedPassword": "$2b$12$S8XsMvAnjlzRLHV1Uhi/x../ONxKLSJ3OPcU/o08VMQsJ8QS0jI4a",
    "createdAt": "2023-12-03T20:15:00.657Z",
    "updatedAt": "2023-12-04T18:34:18.851Z",
    "conversationIds": [
      "656d08d955035db8517671aa",
      "656d4b5fa39be8a8802c7e47",
      "656d6915a39be8a8802c7e48",
      "656dd50765fade3eb045d757",
      "656ddf9aa4709ee5b89be624",
      "656e14976ed8379217977836",
      "656e1b6eb5f3dfba70c98123",
      "656e2a229ee6c4a0a5c16ca2",
      "656f6b9e64901ee11c909e19",
      "65709ed92cc8e4fddbf33891",
      "657266fc2cc8e4fddbf3389c"
    ],
    "seenMessagesIds": [
      "656d3d2c00355ec721eb0c9c",
      "656d3e4100355ec721eb0c9d",
      "656d691aa39be8a8802c7e49",
      "656dd83c65fade3eb045d758",
      "656dd85f65fade3eb045d759",
      "656ddb9065fade3eb045d75a",
      "656ddb9965fade3eb045d75b",
      "656ddba565fade3eb045d75c",
      "656ddbb065fade3eb045d75e",
      "656dfacfa4709ee5b89be625",
      "656dfad6a4709ee5b89be626",
      "656e0272c2adb78eb4449e52",
      "656e0299c2adb78eb4449e53",
      "656e1b78b5f3dfba70c98124",
      "656e2a199ee6c4a0a5c16ca1",
      "656e2a2e9ee6c4a0a5c16ca3",
      "656f6ba964901ee11c909e1a",
      "656f6bb364901ee11c909e1b",
      "656f6bbc64901ee11c909e1c",
      "656f6bc264901ee11c909e1d",
      "65709ede2cc8e4fddbf33892",
      "65709f812cc8e4fddbf33893",
      "65709f932cc8e4fddbf33894",
      "65709f952cc8e4fddbf33895",
      "65709fa52cc8e4fddbf33896",
      "657267032cc8e4fddbf3389d",
      "657267272cc8e4fddbf3389e",
      "657267302cc8e4fddbf3389f",
      "657267372cc8e4fddbf338a0",
      "6573690f2cc8e4fddbf338a1",
      "657369142cc8e4fddbf338a2"
    ],
    "image": null,
    "advisorId": "1",
    "department": "Computer Science",
    "userType": "ADVISOR"
  },
  {
    "_id": "656d081655035db8517671a9",
    "name": "Mark James",
    "email": "mark@ncat.edu",
    "hashedPassword": "$2b$12$/stbgvLhvRoGjtNtKDnehugyYvV4qAfoZndQhSmzFL7BQ8VoS0CSa",
    "createdAt": "2023-12-03T22:57:48.063Z",
    "updatedAt": "2023-12-03T22:57:48.063Z",
    "conversationIds": [
      "656d08d955035db8517671aa",
      "656dd50765fade3eb045d757",
      "656e07b6c2adb78eb4449e57",
      "656e14e76ed8379217977838",
      "656e1b6eb5f3dfba70c98123"
    ],
    "seenMessagesIds": [
      "656d2c9b08dd2fbf830cb311",
      "656d2f3f00355ec721eb0c9a",
      "656d314f00355ec721eb0c9b",
      "656d3d2c00355ec721eb0c9c"
    ],
    "advisorId": "2",
    "department": "Computer Science",
    "userType": "ADVISOR"
  },
  {
    "_id": "656dd3ee65fade3eb045d756",
    "name": "Brian Lackey",
    "email": "brian@aggies.ncat.edu",
    "hashedPassword": "$2b$12$NEVD7acMk2Ow6sHq80Tjbu7lkAtCz8kMTz/Cq7D0yIP3.iBKo9cVi",
    "createdAt": "2023-12-04T13:28:14.958Z",
    "updatedAt": "2023-12-04T13:28:14.958Z",
    "conversationIds": [
      "656dd50765fade3eb045d757",
      "656ddf9aa4709ee5b89be624",
      "656e07b6c2adb78eb4449e57",
      "656e14976ed8379217977836",
      "656e14e76ed8379217977838",
      "656e2a229ee6c4a0a5c16ca2",
      "656e99fbcecec051591189a5"
    ],
    "seenMessagesIds": [
      "656dd83c65fade3eb045d758",
      "656e0299c2adb78eb4449e53",
      "656e04cfc2adb78eb4449e54",
      "656e04d8c2adb78eb4449e55",
      "656e05ccc2adb78eb4449e56",
      "656e09daad1c4524a48e6058",
      "656e0ae6ad1c4524a48e6059",
      "656ddbb065fade3eb045d75e",
      "656e0b7e6ed8379217977834",
      "656e0de16ed8379217977835",
      "656e149c6ed8379217977837",
      "656e14ec6ed8379217977839",
      "656e27899ee6c4a0a5c16c9f",
      "656e27c09ee6c4a0a5c16ca0",
      "656e9a01cecec051591189a6",
      "656ea1dccecec051591189a7",
      "656ea1e3cecec051591189a8",
      "656ea1eacecec051591189a9"
    ],
    "advisorId": "3",
    "department": "Computer Science",
    "userType": "ADVISOR"
  },
  {
    "_id": "656e99e4cecec051591189a4",
    "name": "Trent Roberts",
    "email": "trob@aggies.ncat.edu",
    "hashedPassword": "$2b$12$kFUJdguGOaMGhfXUhh/XqOgeziFTJPP34.mEnkCNRAixkAwfnPfSC",
    "createdAt": "2023-12-05T03:32:52.628Z",
    "updatedAt": "2023-12-05T03:56:46.208Z",
    "userType": "STUDENT",
    "conversationIds": [
      "656e99fbcecec051591189a5",
      "656f6b9e64901ee11c909e19",
      "656fb45964901ee11c909e1f",
      "656fbf9264901ee11c909e2a"
    ],
    "seenMessagesIds": [
      "656e9a01cecec051591189a6",
      "656ea1dccecec051591189a7",
      "656ea1e3cecec051591189a8",
      "656ea1eacecec051591189a9",
      "656f6ba964901ee11c909e1a",
      "656f6bb364901ee11c909e1b",
      "656f6bbc64901ee11c909e1c",
      "656f6bc264901ee11c909e1d",
      "656fb46064901ee11c909e20"
    ],
    "image": null,
    "gpa": "3.58",
    "studentId": "950485866"
  },
  {
    "_id": "656fb45464901ee11c909e1e",
    "name": "Ronald Swanson",
    "email": "ron@ncat.edu",
    "hashedPassword": "$2b$12$mOt6lvJE8SRdRvwr8W1PvOY/HVs7I6ZMur7/T85iqggheAV9C1xXO",
    "createdAt": "2023-12-05T23:37:56.293Z",
    "updatedAt": "2023-12-05T23:37:56.293Z",
    "userType": "ADVISOR",
    "conversationIds": [
      "656fb45964901ee11c909e1f"
    ],
    "seenMessagesIds": [
      "656fb46064901ee11c909e20"
    ],
    "advisor": "4",
    "department": "Computer Science"
  },
  {
    "_id": "656fbe4964901ee11c909e21",
    "name": "Don Peters",
    "email": "don@aggies.ncat.edu",
    "hashedPassword": "$2b$12$S1EFERnvUwIFlxy68S.dcOiJHd67oqQYLu7LJDEXacQumzipCvknO",
    "createdAt": "2023-12-06T00:20:25.876Z",
    "updatedAt": "2023-12-06T00:20:25.876Z",
    "userType": "STUDENT",
    "conversationIds": [
      "656fbe7364901ee11c909e23",
      "656fbf9264901ee11c909e2a",
      "65709ed92cc8e4fddbf33891"
    ],
    "seenMessagesIds": [
      "656fbe8164901ee11c909e24",
      "656fbe9264901ee11c909e25",
      "656fbe9664901ee11c909e26",
      "656fbe9b64901ee11c909e27",
      "656fbe9e64901ee11c909e28",
      "656fbf7b64901ee11c909e29",
      "656fbfac64901ee11c909e2b",
      "656ff76d64901ee11c909e2c",
      "656ff77c64901ee11c909e2d",
      "656ff78564901ee11c909e2e",
      "656ff78e64901ee11c909e2f",
      "656ff7d764901ee11c909e30",
      "656ff7e464901ee11c909e31",
      "65709ede2cc8e4fddbf33892",
      "65709f812cc8e4fddbf33893",
      "65709f952cc8e4fddbf33895",
      "65709fa52cc8e4fddbf33896",
      "656fb46064901ee11c909e20"
    ],
    "gpa": "3.68",
    "studentId": "950428865"
  },
  {
    "_id": "656fbe5e64901ee11c909e22",
    "name": "Janet Jackson",
    "email": "janet@ncat.edu",
    "hashedPassword": "$2b$12$h0UKU17Yd/GJJ26ZoLr3eO9MK43DsvjmT9okyFZiBOybvR5htOI3G",
    "createdAt": "2023-12-06T00:20:46.533Z",
    "updatedAt": "2023-12-06T00:20:46.533Z",
    "userType": "ADVISOR",
    "conversationIds": [
      "656fbe7364901ee11c909e23",
      "656fbf9264901ee11c909e2a"
    ],
    "seenMessagesIds": [
      "656fbe8164901ee11c909e24",
      "656fbe9264901ee11c909e25",
      "656fbe9664901ee11c909e26",
      "656fbe9b64901ee11c909e27",
      "656fbe9e64901ee11c909e28",
      "656fbf7b64901ee11c909e29",
      "656fbfac64901ee11c909e2b",
      "656ff76d64901ee11c909e2c",
      "656ff78564901ee11c909e2e",
      "656ff78e64901ee11c909e2f",
      "656ff7d764901ee11c909e30",
      "656ff7e464901ee11c909e31"
    ],
    "department": "Computer Science",
    "advisorId": "5"
  },
  {
    "_id": "65709e612cc8e4fddbf33890",
    "name": "James Johnson",
    "email": "jjohn2@aggies.ncat.edu",
    "hashedPassword": "$2b$12$WczdLiuMP5Syf2tVGQbYP.gZacloleUmk7P6iVByqQpQfzdFJsp9q",
    "createdAt": "2023-12-06T16:16:32.989Z",
    "updatedAt": "2023-12-06T16:16:32.989Z",
    "userType": "STUDENT",
    "gpa": "3.25",
    "studentId": "950486237"
  },
  {
    "_id": "65721c272cc8e4fddbf33897",
    "name": "martin",
    "email": "martin@ncat.edu",
    "hashedPassword": "$2b$12$c2n97gnQVvcpP3Q3n14cL.JZSmaCF4jRDCuVyVEXO26Lqpmcs8a0W",
    "createdAt": "2023-12-07T19:25:27.876Z",
    "updatedAt": "2023-12-07T19:25:27.876Z",
    "userType": "STUDENT",
    "seenMessagesIds": [
      "656fb46064901ee11c909e20"
    ]
  },
  {
    "_id": "65721dbf2cc8e4fddbf33898",
    "name": "Bliss Anderson",
    "email": "bander@aggies.ncat.edu",
    "hashedPassword": "$2b$12$bYh6wPOK2mR6LsM7aEXuguRvrRDCcw631sSHbZ49URbL9zTsRCQOi",
    "createdAt": "2023-12-07T19:32:15.430Z",
    "updatedAt": "2023-12-07T19:32:15.430Z",
    "userType": "STUDENT",
    "gpa": "3.85",
    "studentId": "950453095"
  },
  {
    "_id": "6572267b2cc8e4fddbf33899",
    "name": "Zaria Marks",
    "email": "zmarks@aggies.ncat.edu",
    "hashedPassword": "$2b$12$HLGL6gJ5DSXFvRB9LdMS8.oixmbt7Pghnvm5QZKCmHGRzRCDAECTW",
    "createdAt": "2023-12-07T20:09:24.468Z",
    "updatedAt": "2023-12-07T20:09:24.468Z",
    "userType": "STUDENT",
    "gpa": "2.58",
    "studentId": "950386767"
  },
].flat();

const Advisor: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const advisor = users.find(user => user.userType === 'ADVISOR');
  const students = users.filter(user => user.userType !== 'ADVISOR');

  const filteredStudents = students.filter(student => student.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-blue-800 flex flex-col items-center justify-start space-y-2 p-8">
      {advisor && (
        <>
            <div>
                <h1 className="text-6xl font-bold text-yellow-500 mb-5">Advisor View</h1>
            </div>
            <div className="flex items-center space-x-4">
                <img className="w-16 h-16 rounded-full" src={advisor.image || '/images/placeholder.jpg'} alt="Advisor avatar" />
                <div>
                    <h1 className="text-2xl font-bold text-white">{advisor.name}</h1>
                    <p className="text-lg text-white">{advisor.email}</p>
                    {/*All other information will go inside brakcets, the current information is just a placeholder*/}
                </div>
            </div>
            <p className="text-white"><strong>Department:</strong> {advisor.department}</p>
            <strong className="text-white">Office Hours:</strong>
            {advisor.officeHours && (
            <ul className="text-white">
                {advisor.officeHours.map((officeHour, index) => (
                <li key={index}>{officeHour}</li>
                ))}
            </ul>
            )}
        </>
      )}
        <div>
            <h1 className="text-3xl font-bold text-white mt-5">Students</h1>
        </div>
    
        <div className="w-full flex justify-center items-center space-x-5">
            <input
                className="w-full max-w-screen-md p-2 rounded border border-gray-300 shadow-inner m-4"
                type="text"
                placeholder="Search for students..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>

        <div className="grid grid-cols-5 gap-4 w-full max-w-screen-xl">
            {filteredStudents.map((student, index) => (
            <div key={index} className="card bg-white rounded shadow p-4 flex flex-col items-center space-y-2 cursor-pointer"
                onClick={() => {
                    setSelectedStudent(student);
                    setIsModalOpen(true);
                }}
            >
                <img className="w-16 h-16 rounded-full" src={student.image || '/images/placeholder.jpg'} alt="Student avatar" />
                <h2 className="text-lg font-bold">{student.name}</h2>
                <p className="text-sm">{student.email}</p>
                {/* Add other student information here */}
            </div>
            ))}
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <form>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className='flex flex-col items-center'>
                            <img className="w-16 h-16 rounded-full" src={selectedStudent?.image || '/images/placeholder.jpg'} alt="Advisor avatar" />
                            <h2 
                                className="
                                    text-2xl
                                    font-semibold 
                                    leading-7 
                                    text-gray-900
                                "
                            >
                                {selectedStudent?.name}
                            </h2>
                            <h2 
                                className="
    
                                    leading-7 
                                    text-gray-900
                                "
                            >
                                {selectedStudent?.email}
                            </h2>
                        </div>

                        <div className="mt-10 flex flex-col gap-y-8">
                            <p className="text-gray-700"><strong>GPA:</strong> {selectedStudent?.gpa}</p>
                            <p className="text-gray-700"><strong>Major:</strong> {selectedStudent?.major}</p>
                            <p className="text-gray-700"><strong>Bio:</strong> {/*selectedStudent?.major*/} </p>
                        </div>
                    </div>
                </div>

                <div 
                    className="
                        mt-6 
                        flex 
                        items-center 
                        justify-end 
                        gap-x-6
                    "
                >
                    <Button
                        disabled={isLoading}
                        secondary 
                        onClick={() => setIsModalOpen(false)}
                    >
                        Close
                    </Button>
                </div>
            </form>
        </Modal>
    </div>
  );
};

export default Advisor;