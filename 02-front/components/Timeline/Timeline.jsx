import React from 'react'
import styles from './Timeline.module.scss'
import TimelineItem from './TimelineItem'
import PropTypes from 'prop-types'

const Timeline = ({ data }) => {
  // Trie les données par startDate
  const sortedData = [...data].sort((a, b) => b.startDate.localeCompare(a.startDate))

  return (
    <div className={styles.timelineContainer}>
      {sortedData.map((item, index) => (
        <TimelineItem
          key={item.id}
          date={`${item.startDate} - ${item.endDate}`}
          title={item.title}
          category={item.category}
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
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Timeline
