
import { PropTypes } from 'prop-types'
import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import Construction from '../Construction/Construction'
import './Section.css'

const Section = forwardRef(function Section (props, ref) {
  const { title, inConstruction } = props
  const { t } = useTranslation()
  return (
    <section ref={ref} className= {'Section'}>

      <h2 className='Section--title'>{t(title).toUpperCase()}</h2>
      {inConstruction && < Construction title={'Section'}/>}
      {props.children}
    </section>
  )
})

// PropTypes
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  inConstruction: PropTypes.bool.isRequired
}

export default Section
