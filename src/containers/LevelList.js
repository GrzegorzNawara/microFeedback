import React from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import { chooseLevel } from '../actions'

const mapStateToProps = (state) => ({
  items: [
    {
      key: 'level2',
      title: state.choice.skill.level2,
      subtitle: state.choice.skill.name,
      level: 2
    }, {
      key: 'level1',
      title: state.choice.skill.level1,
      subtitle: state.choice.skill.name,
      level: 1
    }, {
      key: 'level0',
      title: state.choice.skill.level2,
      subtitle: state.choice.skill.name,
      level: 0
    }
  ].filter( (item) => item.title !== undefined )
})

const mapDispatchToProps = {
  onClick: chooseLevel
}

const LevelList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default LevelList
