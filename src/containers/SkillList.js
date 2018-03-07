import React from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import { chooseSkill } from '../actions'

const mapStateToProps = (state) => ({
  items: state.skills_array
    .filter( (skill) => skill.area === state.choice.area )
    .map( (skill) => ({
      key: skill.id,
      title: skill.name,
      subtitle: skill.area,
      skill: skill
    }))
})

const mapDispatchToProps = {
  onClick: chooseSkill
}

const SkillList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default SkillList
