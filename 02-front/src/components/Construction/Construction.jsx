import './Construction.scss'
import { MdConstruction } from 'react-icons/md'
import PropTypes from 'prop-types'

const Construction = ({ title }) => {
  return (
    <div className="Construction">
      <div className='icon'><MdConstruction size= '3rem' color = "#6498f1"/></div>
      {title} Under Construction
      <div className='icon'><MdConstruction size= '3rem' color = "#6498f1"/></div>
    </div>
  )
}

Construction.propTypes = {
  title: PropTypes.string.isRequired
}

export default Construction
