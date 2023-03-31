import skills from '../../data/skills/skillsFR.js';
import styles from './Skills.module.scss';
import {
  FaHtml5, FaCss3, FaNodeJs, FaReact, FaDatabase, FaGithub, FaVuejs, FaDocker,
  SiIbm, SiNextdotjs, SiMongodb, SiTypescript, SiGraphql, SiThreedotjs,
  IoCodeSlash, TbRelationOneToMany,
} from '../../config/icons/icons.js';

const iconMap = {
  fahtml5: FaHtml5,
  facss3: FaCss3,
  fanodejs: FaNodeJs,
  fareact: FaReact,
  fadatabase: FaDatabase,
  fagithub: FaGithub,
  siibm: SiIbm,
  iocodeslash: IoCodeSlash,
  tbrelationonetomany: TbRelationOneToMany,
  sinextdotjs: SiNextdotjs,
  simongodb: SiMongodb,
  sitypescript: SiTypescript,
  favuejs: FaVuejs,
  fadocker: FaDocker,
  sigraphql: SiGraphql,
  sithreedotjs: SiThreedotjs

};

export default function Skills() {
  // Todo translate categories
  const categories = {
    web: { label: 'Web', skills: [] },
    db: { label: 'Database', skills: [] },
    old: { label: 'Legacy Systems', skills: [] },
    learning: { label: 'Currently learning', skills: [] },
    learningNext: { label: 'Want to learn', skills: [] }
  };

  skills.forEach((skill) => {
    if (categories[skill.category]) {
      categories[skill.category].skills.push(skill);
    }
  });

  return (
    <div className={styles.SkillsContainer}>
      {Object.values(categories).map((category) => (
        <div key={category.label}
          className={`${styles.SkillsCategory} ${styles[`SkillsCategory--${category.label.toLowerCase()}`]}`}>
          <h2>{category.label}</h2>
          {category.skills.map((skill) => {
            const iconName = skill.icon.toLowerCase();
            const IconComponent = iconMap[iconName];

            return (
              <div key={skill.id} className={styles.SkillWrapper}>
                {IconComponent && <IconComponent size="1.5rem" />}
                {skill.name}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
