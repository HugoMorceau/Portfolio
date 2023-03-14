import './Construction.css'
import { MdConstruction } from 'react-icons/md'
import PropTypes from 'prop-types'

const Construction = ({ title }) => {
  return (
    <div className="Construction">
      <div className='icon'><MdConstruction size= '3rem' color = 'orange'/></div>
      {title} Under Construction
      <div className='icon'><MdConstruction size= '3rem' color = 'orange'/></div>
    </div>
  )
}

Construction.propTypes = {
  title: PropTypes.string.isRequired
}

export default Construction
