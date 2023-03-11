import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import './WorkCard.css'
export default function WorkCard (
  { resume }
) {
  const { t } = useTranslation()
  return (
    resume.map((work) => {
      return (
        <div key={work.id} className='Work-wrapper'>
          <div className='Work-details'>
            <h4>{work.company}</h4>
            <div>{t('Position')} : {work.position}</div>
            <div>{t('Description')} : {work.description}</div>
            <div>{t('Start Date')} : {work.startDate}</div>
            <div>{t('End Date')} : {work.endDate}</div>
            <div>{t('Location')} : {work.location}</div>
          </div>
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
