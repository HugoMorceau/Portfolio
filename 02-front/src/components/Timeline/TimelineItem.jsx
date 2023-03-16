import React from 'react'
import './TimelineItem.css'
import { PropTypes } from 'prop-types'

const TimelineItem = ({ date, title, description, side }) => {
  return (
    <div className={`timeline-item ${side}`}>
      <div className="timeline-date">{date}</div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

TimelineItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired
}

export default TimelineItem
