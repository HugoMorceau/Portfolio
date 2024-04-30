// import unimetrixImages from '/assets/images/projects/unimetrix'
const miniGamesImages = [ '/assets/images/projects/miniGames/resume.png']
const portfolioImages = [ '/assets/images/projects/portfolio/portfolio-light.png', '/assets/images/projects/portfolio/portfolio-dark.png' ]
const unimetrixImages = [ '/assets/images/projects/unimetrix/project.png', '/assets/images/projects/unimetrix/logo.png', '/assets/images/projects/unimetrix/home.png' ]
const breweryImages = [ '/assets/images/projects/breweries/breweryFinder.png']
const projects = [
  {
    id: 1,
    name: 'mini games',
    description: 'A collection of mini games',
    image: miniGamesImages,
    date: '20220801',
    link: 'https://mini-games.hugomorceau.com',
    github: 'https://github.com/HugoMorceau/HugoMorceau.github.io',
    tags: ['JavaScript', 'CSS', 'HTML', 'Node.js', 'Express', 'Postegresql']
  },
  {
    id: 2,
    name: 'Unimetrix',
    description: 'Blockchain analytics platform',
    image: unimetrixImages,
    date: '20221201',
    link: 'https://unimetrix.xyz/',
    github: 'https://github.com/HugoMorceau/unimetrix.github.io',
    tags: ['React', 'JavaScript', 'SCSS', 'Node.js', 'Express', 'PostegreSQL', 'Nginx', 'Pm2']
  },
  {
    id: 3,
    name: 'Bet You Forgot',
    description: 'Currently in development',
    image: [],
    date: '20230401',
    link: '',
    github: '',
    tags: ['Next.js', 'Nest.js', 'GraphQL', 'TypeScript', 'TypeORM', 
    'PostegreSQL', 'React',  'Node.js' , 'SCSS', 'JavaScript',
     'CSS', 'HTML', 'Nginx', 'Pm2', 'Docker', 'Express']
  },
  {
    id: 4,
    name: 'Brewery Finder',
    description: 'A website to find breweries, using the Open Brewery DB API',
    image: breweryImages,
    date: '20240430',
    link: 'https://breweries.hugomorceau.com/',
    github: 'https://github.com/HugoMorceau/WasteX-test',
    tags: [ 'Vue.JS',  'Tailwind', 'Pinia', 'Docker', 'Nginx', 'JavaScript' ]
  },
  {
    id: 5,
    name: 'Portfolio',
    description: 'This website',
    image: portfolioImages,
    date: '20230301',
    link: '',
    github: 'https://github.com/HugoMorceau/Portfolio',
    tags: ['React', 'Node.js', 'SCSS', 'Matomo', 'Nginx', 'Docker', 'JavaScript' ]
  }

]

export default projects
