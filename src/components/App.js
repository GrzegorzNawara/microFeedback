import React from 'react'
import NavBar from './NavBar'
import AttendeeList from '../containers/AttendeeList'
import FeedbackModal from '../containers/FeedbackModal'

const App = () => (
  <div>

    <NavBar />
    <FeedbackModal />

    <div className="container">
      <div className="row">
        <AttendeeList />
      </div>
    </div>

  </div>
)

export default App
