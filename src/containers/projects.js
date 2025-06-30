import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PROJECTS from '../lib/projects.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function ProjectModal({ project, handleClose }) {
  return (
    <div className=''>
      <div className='pr-2 pb-2 rounded-full w-max cursor-pointer'>
        <CloseIcon onClick={handleClose} className='dark:text-white' />
      </div>
      <img src={project.image} className='top-0' alt={project.name}></img>
      <div className='flex flex-col gap-2 dark:text-white'>
        <div className='flex flex-row gap-2 items-center'>
          <h2 className='text-3xl font-bold pt-4'>{project.name}</h2>
          <OpenInNewIcon className='cursor-pointer' onClick={() => window.open(project.link, '_blank')} />
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  )
}

function Project({ project }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false)
  };

  return (
    <div className="border border-neutral-400 dark:border-none dark:bg-neutral-700 rounded-lg text-left sm:w-[45%] lg:w-[30%] max-w-[490px] w-full cursor-pointer h-[400px]">
      <div onClick={handleOpen} className='flex flex-col justify-between h-full'>
        <div className='flex justify-center items-center content-center text-center h-full'>
          <img src={project.image} className='h-min' alt={project.name}></img>
        </div>
        <div className="p-4 dark:text-white">
          <h2 className="text-2xl font-bold">{project.name}</h2>
          <p>{project.summary}</p>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-white dark:!bg-neutral-700 md:w-[60%] w-[90%] max-w-[800px] rounded-lg">
          <ProjectModal project={project} handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="text-center px-[5%]" id="projects">
      <h1 className="text-5xl font-bold pb-4 dark:text-white">I love building things</h1>
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-center flex-wrap gap-4 ">
          {PROJECTS.map((project) =>
            <Project project={project} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects;
