import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
export default function WorkCard (
  { resume }
) {
  const { t } = useTranslation()
  return (
    resume.map((work) => {
      return (
        <div key={work.company} className='Work-container'>
          <h4 className='Work-card'>{work.company}</h4>
          <div className="Work-card position">{t('Position')} : {work.position}</div>
          <div className="Work-card description">{t('Description')} : {work.description}</div>
          <div className="Work-card start-date">{t('Start Date')} : {work.startDate}</div>
          <div className="Work-card end-date">{t('End Date')} : {work.endDate}</div>
          <div className="Work-card location">{t('Location')} : {work.location}</div>
        </div>
      )
    })
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
