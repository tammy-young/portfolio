import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EXPERIENCE from '../lib/experience';

function ExperienceCollapsible({ experience }) {
  return (
    <Accordion
      className='dark:!bg-neutral-800 my-1 !rounded-xl !shadow-lg hover:!shadow-xl'
      sx={{
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        },
        '&:before': {
          display: 'none',
        },
        '@media (prefers-color-scheme: dark)': {
          '&:hover': {
            boxShadow: '0 25px 50px -12px rgba(255, 255, 255, 1)',
          },
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className='dark:text-white' />}
        className='!py-3 !px-4'
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className='flex flex-col'>
          <p className='text-2xl font-bold text-main'>{experience.title}</p>
          <p className='dark:text-neutral-300'>{experience.company}</p>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className='flex flex-col gap-2'>
          <div className='text-left dark:text-white'>
            {experience.location} | {experience.duration}
          </div>
          <div className='flex flex-row gap-2 mt-2 dark:text-white'>
            <h3 className='font-bold'>Skills:</h3>
            <div className='flex flex-row flex-wrap gap-2'>
              {
                experience.skills.map((skill, index) => (
                  <span key={index} className='bg-main-light/50 dark:bg-main-light text-main-dark rounded-full px-2 py-1 text-sm'>
                    {skill}
                  </span>
                ))
              }
            </div>
          </div>
          <div className='mt-4 text-left dark:text-white'>
            <h3 className='font-bold'>Responsibilities:</h3>
            <ul className='list-disc pl-5 marker:text-main dark:marker:text-white'>
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
    <div className="flex justify-center items-center relative min-h-fit sm:py-8 py-20 px-4" id="experience">
      <div className='text-center flex xl:flex-row flex-col items-center max-w-[1200px] justify-between xl:gap-8 gap-4'>
        <div className='flex flex-col sm:!text-left'>
          <h1 className="text-5xl font-bold pb-4 text-main">My journey so far</h1>
          <p className='!text-left dark:text-white'>Professional experiences that shaped my expertise</p>
        </div>
        <div className="flex flex-col xl:w-3/5 gap-2">
          {
            EXPERIENCE.map((exp, index) => (
              <ExperienceCollapsible key={index} experience={exp} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Experience;
