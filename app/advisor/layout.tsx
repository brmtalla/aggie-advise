import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Advisor from './components/Advisor';

const AdvisorViewLayout: React.FC = () => {
  return (
    <>
        <Sidebar>
            <div className="h-full">
                <Advisor />
            </div>
        </Sidebar>
    </>
    
  );
};

export default AdvisorViewLayout;