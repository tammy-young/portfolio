import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LinkIcon from '@mui/icons-material/Link';
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
    <div>
      <button className="bg-white dark:bg-neutral-700 rounded-full p-3 shadow-lg m-6 fixed top-0 left-0 z-50" onClick={handleClose}>
        <CloseIcon className='dark:text-white text-neutral-400' />
      </button>
      <img src={project.image} className='top-0' alt={project.name}></img>
      <div className='flex flex-col gap-2 dark:text-white pt-4'>
        <div className='flex flex-row gap-2 items-center'>
          <h2 className='text-3xl font-bold text-main'>{project.name}</h2>
          <div className='flex items-center justify-center'>
            <button className='bg-neutral-200/80 dark:bg-neutral-700 !p-[0.9rem] rounded w-6 h-6 flex justify-center items-center' onClick={() => window.open(project.link, '_blank')}>
              <OpenInNewIcon className='text-sky-500' fontSize='small' />
            </button>
          </div>
          {
            project.url && (
              <button className='bg-neutral-200/80 dark:bg-neutral-700 !p-[0.9rem] rounded w-6 h-6 flex justify-center items-center' onClick={() => window.open(project.link, '_blank')}>
                <LinkIcon className='text-sky-500' onClick={() => window.open(project.url, '_blank')} />
              </button>
            )
          }
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
    <div className="group bg-white shadow-lg dark:border-none dark:bg-neutral-800 rounded-xl text-left sm:w-[45%] 2xl:w-[30%] max-w-[490px] w-full cursor-pointer h-[425px] hover:shadow-xl hover:shadow-main-light/20 transition-shadow duration-300">
      <div onClick={handleOpen} className='flex flex-col justify-between h-full'>
        <div className='relative overflow-hidden rounded-t-2xl h-2/3'>
          <img src={project.image} className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-500' alt={project.name}></img>
          <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
        <div className="p-6 dark:text-white">
          <h2 className="text-2xl font-bold text-main">{project.name}</h2>
          <p>{project.summary}</p>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-white dark:!bg-neutral-800 md:w-[60%] w-[90%] max-w-[800px] rounded-lg">
          <ProjectModal project={project} handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="text-center min-h-fit flex flex-col gap-8 px-4 justify-center items-center py-8" id="projects">
      <div className='flex flex-col items-center justify-center'>
        <h1 className="text-5xl font-bold pb-4 text-main">I love building things</h1>
        <p className='dark:text-white'>Explore my latest projects and creative solutions</p>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-center flex-wrap sm:gap-8 gap-4 max-w-[1500px]">
          {PROJECTS.map((project) =>
            <Project project={project} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects;
