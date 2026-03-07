import React from 'react'
import StudentAssignmentCards from '../../../components/Student/Assignments/StudentAssigmentCards'
import StudentAssignmentList from '../../../components/Student/Assignments/StudentAssigmentList'

const Assignments = () => {
  return (
    <div className='p-5'>
     <StudentAssignmentCards />

    <div className='mt-10'>
       <StudentAssignmentList />
    </div>
    </div>
  )
}

export default Assignments
