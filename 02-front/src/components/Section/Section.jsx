
import { PropTypes } from 'prop-types'
import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'

const Section = forwardRef(function Section (props, ref) {
  const { title } = props
  const { t } = useTranslation()
  return (
    <section ref={ref} className="App-section">
      <h2 className='App-section--title'>{t(title)}</h2>
      {props.children}
    </section>
  )
})

// PropTypes
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Section
