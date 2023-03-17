import React from 'react'
import './TimelineItem.scss'
import { PropTypes } from 'prop-types'
import moment from 'moment'

import { MdOutlineSchool, MdOutlineWorkOutline, MdLightbulbOutline }
  from '../../assets/icons/icons.js'

const iconMap = {
  experience: { icon: MdOutlineWorkOutline, color: '#6498f1' },
  education: { icon: MdOutlineSchool, color: 'green' },
  project: { icon: MdLightbulbOutline, color: 'orange' }
}

const TimelineItem = ({
  title, category, company, startDate, endDate, description, side
}) => {
  const iconCategory = category.toLowerCase()
  const IconComponent = iconMap[iconCategory].icon
  const formatedStartDate = moment(startDate).format('MMM YYYY')

  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <div className="timeline-item-header">
          <span className={'category ' + category}>
            {IconComponent && <IconComponent size="1.5rem" color= {iconMap[iconCategory].color}/>}
          </span>
          <time>{formatedStartDate}</time>
          <span className="company">{company}</span>
        </div>
        <p>{title}</p>
        <p>{description}</p>
        <span className="circle"></span>
      </div>
    </div>
  )
}

TimelineItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired
}

export default TimelineItem
