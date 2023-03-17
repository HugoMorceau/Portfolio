import React from 'react'
import './Timeline.css'
import TimelineItem from './TimelineItem'
import PropTypes from 'prop-types'

const Timeline = ({ data }) => {
  // Trie les données par startDate
  const sortedData = [...data].sort((a, b) => b.startDate.localeCompare(a.startDate))

  return (
    <div className="timeline-container">
      {sortedData.map((item, index) => (
        <TimelineItem
          key={item.id}
          date={`${item.startDate} - ${item.endDate}`}
          title={item.title}
          company={item.company}
          startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
          location={item.location}
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
