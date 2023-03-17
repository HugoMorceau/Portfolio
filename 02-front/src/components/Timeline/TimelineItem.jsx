import React from 'react'
import './TimelineItem.css'
import { PropTypes } from 'prop-types'

const TimelineItem = ({ date, title, description, side }) => {
  return (
    <div className="timeline-item">
      <div className={'timeline-item-content'}>
        <span className="category">
          {category}
        </span>
        <time></time>
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
