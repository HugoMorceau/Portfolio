import PropTypes from 'prop-types'
export default function WorkCard (
  { resume }
) {
  return (
    <ul>
      {resume.map((work) => {
        return (
          <li key={work.company}>
            <br />
            <h4>{work.company}</h4>
            <ul>
              <li>Position: <span className="position">{work.position}</span></li>
              <li>Description:<span className="description">{work.description}</span></li>
              <li>Start Date: <span className="start-date">{work.startDate}</span></li>
              <li>End Date: <span className="end-date">{work.endDate}</span></li>
              <li>Location: <span className="location">{work.location}</span></li>
            </ul>

          </li>
        )
      })}
    </ul>
  )
}

// PropTypes
WorkCard.propTypes = {
  resume: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
