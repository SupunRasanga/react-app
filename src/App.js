import './App.css';
import React from 'react';
import StudentForm from './components/Form/StudentForm';
import Navigation from './components/Navigation/Navigation';
import Table from './components/Table/Table';




function App() {

  return (
    <div>
        <Navigation></Navigation>
        <div className="row">
          <div className="col-8">
            <Table></Table>
          </div>
          <div className="col-4">
            <StudentForm></StudentForm>
          </div>
        </div>
        
    </div>
    
  );
}

export default App;
