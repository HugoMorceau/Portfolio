import React from 'react'
import './Timeline.css'
import TimelineItem from './TimelineItem'
import PropTypes from 'prop-types'

const Timeline = ({ data }) => {
  // Trie les données par startDate
  const sortedData = [...data].sort((a, b) => b.startDate.localeCompare(a.startDate))

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {sortedData.map((item, index) => (
        <TimelineItem
          key={index}
          date={`${item.startDate} - ${item.endDate}`}
          title={item.title}
          description={item.description}
          side={item.type === 'Experience' ? 'left' : 'right'}
        />
      ))}
    </div>
  )
}

Timeline.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Timeline
