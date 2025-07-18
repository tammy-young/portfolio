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
    <div className='relative'>
      <div className='absolute top-0 right-0 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer transition-all duration-200 z-10'>
        <CloseIcon onClick={handleClose} className='dark:text-white text-gray-600' />
      </div>
      <div className='relative overflow-hidden rounded-lg mb-4'>
        <img src={project.image} className='w-full h-64 object-cover' alt={project.name}></img>
        <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>
      </div>
      <div className='flex flex-col gap-4 dark:text-white'>
        <div className='flex flex-row gap-3 items-center'>
          <h2 className='text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent'>{project.name}</h2>
          <div className='flex gap-2'>
            <OpenInNewIcon className='cursor-pointer text-accent-blue hover:text-accent-purple transition-colors duration-200 p-1 rounded bg-gray-100 dark:bg-gray-700' onClick={() => window.open(project.link, '_blank')} />
            {project.url && <LinkIcon className='cursor-pointer text-accent-green hover:text-accent-blue transition-colors duration-200 p-1 rounded bg-gray-100 dark:bg-gray-700' onClick={() => window.open(project.url, '_blank')} />}
          </div>
        </div>
        <p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'>{project.description}</p>
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
    <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-300 sm:w-[45%] lg:w-[30%] max-w-[490px] w-full cursor-pointer h-[400px] overflow-hidden">
      <div onClick={handleOpen} className='relative h-full flex flex-col'>
        <div className='relative overflow-hidden rounded-t-2xl h-2/3'>
          <img src={project.image} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' alt={project.name}></img>
          <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
        <div className="p-6 h-1/3 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">{project.name}</h2>
          <p className='text-gray-600 dark:text-gray-300 line-clamp-3'>{project.summary}</p>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-white dark:!bg-gray-800 md:w-[60%] w-[90%] max-w-[800px] rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-2xl backdrop-blur-sm">
          <ProjectModal project={project} handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="px-[5%] lg:px-[8%] py-20 relative" id="projects">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue bg-clip-text text-transparent">
          I love building things
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore my latest projects and creative solutions
        </p>
      </div>
      
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-center flex-wrap gap-8 max-w-[1500px]">
          {PROJECTS.map((project, index) =>
            <Project key={index} project={project} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects;
