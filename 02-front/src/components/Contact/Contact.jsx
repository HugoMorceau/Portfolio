import Lorem from '../Lorem/Lorem'

export default function Contact () {
  // state
  // comportements
  // render
  return (
    <div>
      <h2>Contact Me</h2>
      <ul>
        <li>Email: <span className="email">Email</span></li>
        <li>Phone: <span className="phone">Phone</span></li>
        <li>LinkedIn: <span className="linkedin">LinkedIn</span></li>
        <li>GitHub: <span className="github">GitHub</span></li>
      </ul>
      <Lorem />
    </div>
  )
}
