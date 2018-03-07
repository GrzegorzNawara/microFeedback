import React from 'react'
import NavBar from './NavBar'
import AttendeeList from '../containers/AttendeeList'
import AreaList from '../containers/AreaList'
import SkillList from '../containers/SkillList'
import LevelList from '../containers/LevelList'

const App = () => (
  <div>
    <NavBar />
    <AttendeeList />
    <hr />
    <AreaList />
    <hr />
    <SkillList />
    <hr />
    <LevelList />
  </div>
)

export default App
