import React from 'react'
import './TimelineItem.css'
import { PropTypes } from 'prop-types'

const TimelineItem = ({
  date, title, category, startDate, endDate, description, side
}) => {
  return (
    <div className="timeline-item">
      <div className='timeline-item-content'>
        <span className= {'category ' + category}>
          {category}
        </span>
        <time>{startDate}</time>
        {/* <time>{endDate}</time> */}
        <p>{description}</p>
        <span className='circle'></span>
      </div>
    </div>
  )
}

TimelineItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired
}

export default TimelineItem
