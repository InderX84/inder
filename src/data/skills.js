import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaJava, FaPython, FaGitAlt, FaGithub, FaDatabase, FaAws,
} from 'react-icons/fa';
import { SiCplusplus, SiMongodb, SiExpress, SiC } from 'react-icons/si';

// Inverted pyramid — wide at top, narrow at bottom
export const pyramidRows = [
  [
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'C', icon: SiC, color: '#A8B9CC' },
    { name: 'Java', icon: FaJava, color: '#ED8B00' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Express', icon: SiExpress, color: '#e2e8f0' },
    { name: 'Cloud', icon: FaAws, color: '#FF9900' },
  ],
  [
    { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'GitHub', icon: FaGithub, color: '#e2e8f0' },
    { name: 'SQL', icon: FaDatabase, color: '#00758F' },
  ],
  [
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'Node.js', icon: FaNodeJs, color: '#68A063' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
  ],
];
