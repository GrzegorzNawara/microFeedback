import React from 'react'
import NavBar from './NavBar'
import AttendeeList from '../connectors/AttendeeList'
import FeedbackModal from '../connectors/FeedbackModal'

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
