import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import ScheduleDisplay from './components/ScheduleDisplay';

const ScheduleBuilderLayout: React.FC = () => {
  return (
    <>
        <Sidebar>
            <div className="h-full">
                <ScheduleDisplay />
            </div>
        </Sidebar>
    </>
    
  );
};

export default ScheduleBuilderLayout;