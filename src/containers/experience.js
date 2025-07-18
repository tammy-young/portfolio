import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EXPERIENCE from '../lib/experience';

function ExperienceCollapsible({ experience, index }) {
  return (
    <Accordion
      className='!bg-white/80 dark:!bg-gray-800/80 !backdrop-blur-sm !border !border-white/20 dark:!border-gray-700/20 !my-3 !rounded-2xl !shadow-lg hover:!shadow-xl !transition-all !duration-300'
      sx={{ 
        boxShadow: 'none',
        '&:before': {
          display: 'none',
        },
        '&.Mui-expanded': {
          margin: '12px 0',
        }
      }}
    >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='dark:text-white text-gray-600' />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='!py-4'
        >
          <div className='flex flex-col'>
            <p className='text-2xl font-bold bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent'>{experience.title}</p>
            <p className='text-gray-600 dark:text-gray-300 font-medium'>{experience.company}</p>
          </div>
        </AccordionSummary>
        <AccordionDetails className='!px-6 !pb-6'>
          <div>
            <div className='text-left text-gray-600 dark:text-gray-300 mb-4 font-medium'>
              {experience.location} | {experience.duration}
            </div>
            <div className='flex flex-wrap gap-2 mt-4 mb-6'>
              <h3 className='font-bold text-gray-800 dark:text-white mr-2'>Skills:</h3>
              {experience.skills.map((skill, idx) => (
                <span key={idx} className='px-3 py-1 bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 text-accent-purple dark:text-accent-blue rounded-full text-sm font-medium'>
                  {skill}
                </span>
              ))}
            </div>
            <div className='text-left'>
              <h3 className='font-bold text-gray-800 dark:text-white mb-3'>Responsibilities:</h3>
              <ul className='list-none space-y-2'>
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className='flex items-start'>
                    <span className='w-2 h-2 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span className='text-gray-700 dark:text-gray-300'>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
  )
}

const Experience = () => {
  return (
    <div className="px-[5%] lg:px-[8%] py-20 relative" id="experience">
      <div className="flex justify-center items-center">
        <div className='flex lg:flex-row flex-col items-center max-w-[1200px] justify-between lg:gap-16 gap-12'>
          <div className="lg:w-2/5">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-accent-green via-accent-blue to-accent-purple bg-clip-text text-transparent text-center lg:text-left">
              My journey so far
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 text-center lg:text-left">
              Professional experiences that shaped my expertise
            </p>
          </div>
          
          <div className="lg:w-3/5 w-full">
            {EXPERIENCE.map((exp, index) => (
              <ExperienceCollapsible key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
