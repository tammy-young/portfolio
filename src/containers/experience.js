import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import EXPERIENCE from '../lib/experience';

function ExperienceCollapsible({ experience }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='flex flex-col'>
            <p className='text-2xl font-bold'>{experience.title}</p>
            <p>{experience.company}</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div className='text-left'>
              {experience.location} | {experience.duration}
            </div>
            <div className='flex flex-row gap-2 mt-2'>
              <h3 className='font-bold'>Skills:</h3>
              <div className='flex flex-row'>
                {experience.skills.join(', ')}
              </div>
            </div>
            <div className='mt-4 text-left'>
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
    </div>
  )
}

const Experience = () => {
  return (
    <div className="text-center px-[5%] flex sm:flex-row flex-col gap-8 justify-around text-center items-center">
      <h1 className="text-5xl font-bold pb-4">My journey so far</h1>
      <div className="flex flex-col w-1/2">
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
