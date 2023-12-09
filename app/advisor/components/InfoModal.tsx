import React from 'react';
import { Dialog } from '@headlessui/react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, student }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="bg-white rounded p-6 max-w-sm mx-auto">
          <img className="w-16 h-16 rounded-full mx-auto" src={'/images/placeholder.jpg'} alt="Student avatar" />
          <Dialog.Title className="text-2xl font-bold text-center mt-4">{student.name}</Dialog.Title>
          <p><strong>Major:</strong> {student.major}</p>
          <p><strong>GPA:</strong> {student.gpa}</p>
          <p><strong>Bio:</strong> {student.bio}</p>
          <button
            onClick={onClose}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default InfoModal;