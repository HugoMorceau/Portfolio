import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
export default function WorkCard (
  { resume }
) {
  const { t } = useTranslation()
  return (
    <ul>
      {resume.map((work) => {
        return (
          <li key={work.company}>
            <br />
            <h4>{work.company}</h4>
            <ul>
              <li>{t('Position')} : <span className="position">{work.position}</span></li>
              <li>{t('Description')} :<span className="description">{work.description}</span></li>
              <li>{t('Start Date')} : <span className="start-date">{work.startDate}</span></li>
              <li>{t('End Date')} : <span className="end-date">{work.endDate}</span></li>
              <li>{t('Location')} : <span className="location">{work.location}</span></li>
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
