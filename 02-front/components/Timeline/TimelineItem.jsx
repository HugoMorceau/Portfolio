import React from 'react'
import styles from './TimelineItem.module.scss'
import { PropTypes } from 'prop-types'
import moment from 'moment'

import { MdOutlineSchool, MdOutlineWorkOutline, MdLightbulbOutline }
  from '../../config/icons/icons.js'

const iconMap = {
  experience: { icon: MdOutlineWorkOutline, color: '#6498f1' },
  education: { icon: MdOutlineSchool, color: '#53c163' },
  project: { icon: MdLightbulbOutline, color: '#ffbf00' }
}

const TimelineItem = ({
  title, category, company, startDate, endDate, description, side
}) => {
  const iconCategory = category.toLowerCase()
  const IconComponent = iconMap[iconCategory].icon
  const formatedStartDate = moment(startDate).format('MMM YYYY')
  const formatedEndDate = endDate === 'Present' ? endDate : moment(endDate).format('MMM YYYY')
  const period = formatedStartDate + ' - ' + formatedEndDate
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineItemContent}>

        <div className={styles.category + ' ' + category.toLowerCase()}>
          {IconComponent && <IconComponent size="1.5rem" color= {iconMap[iconCategory].color}/>}
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.company} style={{ color: iconMap[iconCategory].color }}>{company} </div>
        <time>{period}</time>

        <p>{description}</p>
        <span className={styles.circle}></span>
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
