// import all svg files in the folder
const svgFiles = require.context('./', true, /\.svg$/)
const images = svgFiles.keys().map(svgFiles)

const languages = [
  { name: 'English', code: 'en', flag: images[2] },
  { name: 'Français', code: 'fr', flag: images[1] },
  { name: 'Español', code: 'es', flag: images[0] }
]

export default languages
