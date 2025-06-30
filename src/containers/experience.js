import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EXPERIENCE from '../lib/experience';

function ExperienceCollapsible({ experience }) {
  return (
    <Accordion
      className='dark:!bg-neutral-700 my-1 !rounded-lg'>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className='dark:text-white' />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className='flex flex-col'>
          <p className='text-2xl font-bold dark:text-white'>{experience.title}</p>
          <p className='dark:text-neutral-300'>{experience.company}</p>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <div className='text-left dark:text-white'>
            {experience.location} | {experience.duration}
          </div>
          <div className='flex flex-row gap-2 mt-2 dark:text-white'>
            <h3 className='font-bold'>Skills:</h3>
            <div className='flex flex-row'>
              {experience.skills.join(', ')}
            </div>
          </div>
          <div className='mt-4 text-left dark:text-white'>
            <h3 className='font-bold'>Responsibilities:</h3>
            <ul className='list-disc pl-5'>
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
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
    <div className="text-center px-[5%] flex lg:flex-row flex-col sm:gap-8 gap-2 justify-around text-center items-center" id="experience">
      <h1 className="text-5xl font-bold pb-4 dark:text-white">My journey so far</h1>
      <div className="flex flex-col lg:w-1/2">
        {
          EXPERIENCE.map((exp, index) => (
            <ExperienceCollapsible key={index} experience={exp} />
          ))
        }
      </div>
    </div>
  );
}

export default Experience;
