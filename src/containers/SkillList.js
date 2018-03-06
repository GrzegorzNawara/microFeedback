import React from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import { chooseArea } from '../actions'

const mapStateToProps = (state) => ({
  list_items: state.skills_array.map( (skill) => ({
      key: skill.id,
      title: skill.area,
      subtitle: skill.name,
      onListItemClick: () => ( alert(skill.area) )
  }))
})

const mapDispatchToProps = {
}

const SkillList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default SkillList
