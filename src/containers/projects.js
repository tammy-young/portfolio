import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LinkIcon from '@mui/icons-material/Link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
    <div className="relative">
      <button 
        className="bg-white dark:bg-neutral-700 rounded-full p-2 sm:p-3 shadow-lg absolute top-2 sm:top-4 right-2 sm:right-4 z-50 hover:bg-gray-50 dark:hover:bg-neutral-600 transition-colors" 
        onClick={handleClose}
      >
        <CloseIcon className='dark:text-white text-neutral-400 text-sm sm:text-base' />
      </button>
      <img src={project.image} className='w-full rounded-t-lg object-contain max-h-[40vh] sm:max-h-[50vh]' alt={project.name}></img>
      <div className='flex flex-col gap-2 sm:gap-3 dark:text-white p-4 sm:p-6'>
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 sm:items-center'>
          <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-main'>{project.name}</h2>
          <div className='flex items-center gap-2'>
            <button 
              className='bg-neutral-200/80 dark:bg-neutral-700 p-2 sm:p-[0.6rem] rounded w-8 h-8 sm:w-9 sm:h-9 flex justify-center items-center hover:bg-neutral-300/80 dark:hover:bg-neutral-600 transition-colors' 
              onClick={() => window.open(project.link, '_blank')}
            >
              <OpenInNewIcon className='text-sky-500' fontSize='small' />
            </button>
            {project.url && (
              <button 
                className='bg-neutral-200/80 dark:bg-neutral-700 p-2 sm:p-[0.6rem] rounded w-8 h-8 sm:w-9 sm:h-9 flex justify-center items-center hover:bg-neutral-300/80 dark:hover:bg-neutral-600 transition-colors' 
                onClick={() => window.open(project.url, '_blank')}
              >
                <LinkIcon className='text-sky-500' fontSize='small' />
              </button>
            )}
          </div>
        </div>
        <p className="text-sm sm:text-base leading-relaxed">{project.description}</p>
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
    <div className="group bg-white shadow-lg dark:border-none dark:bg-neutral-800 rounded-xl text-left w-full cursor-pointer h-[320px] sm:h-[380px] lg:h-[425px] hover:shadow-xl hover:shadow-main-light/20 transition-shadow duration-300">
      <div onClick={handleOpen} className='flex flex-col justify-between h-full'>
        <div className='relative overflow-hidden rounded-t-2xl h-3/5 sm:h-2/3'>
          <img src={project.image} className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-500' alt={project.name}></img>
          <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
        <div className="p-3 sm:p-4 lg:p-6 dark:text-white">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-main mb-1 sm:mb-2">{project.name}</h2>
          <p className="text-xs sm:text-sm lg:text-base line-clamp-2 sm:line-clamp-3">{project.summary}</p>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-white dark:!bg-neutral-800 w-[95%] sm:w-[85%] md:w-[60%] max-w-[800px] rounded-lg max-h-[90vh] overflow-y-auto">
          <ProjectModal project={project} handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  )
}

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Calculate how many projects to show at once based on screen size
  const getProjectsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1536) return 3; // 2xl screens
      if (window.innerWidth >= 1280) return 3; // xl screens
      if (window.innerWidth >= 1024) return 2; // lg screens
      if (window.innerWidth >= 768) return 2;  // md screens
      if (window.innerWidth >= 640) return 1;  // sm screens
      return 1; // mobile
    }
    return 1;
  };

  const [projectsPerView, setProjectsPerView] = useState(getProjectsPerView());

  // Update projects per view on window resize
  useEffect(() => {
    const handleResize = () => {
      const newProjectsPerView = getProjectsPerView();
      setProjectsPerView(newProjectsPerView);
      // Reset index if it's out of bounds after resize
      const newMaxIndex = Math.max(0, Math.ceil(PROJECTS.length / newProjectsPerView) - 1);
      if (currentIndex > newMaxIndex) {
        setCurrentIndex(newMaxIndex);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [currentIndex]);

  const maxIndex = Math.max(0, Math.ceil(PROJECTS.length / projectsPerView) - 1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        prevProject();
      } else if (e.key === 'ArrowRight') {
        nextProject();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToProject = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Touch gesture handling
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextProject();
    } else if (isRightSwipe) {
      prevProject();
    }
  };

  return (
    <div className="text-center min-h-fit flex flex-col gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4 justify-center items-center py-6 sm:py-8" id="projects">
      <div className='flex flex-col items-center justify-center px-4'>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold pb-2 sm:pb-4 text-main">I love building things</h1>
        <p className='dark:text-white text-sm sm:text-base text-center max-w-2xl'>Explore my latest projects and creative solutions</p>
      </div>
      
      {/* Carousel Container */}
      <div 
        className="relative w-full max-w-[320px] sm:max-w-[640px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1400px]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Navigation Buttons - Hidden on small screens */}
        {PROJECTS.length > projectsPerView && (
          <>
            <button
              onClick={prevProject}
              disabled={isTransitioning}
              className="hidden sm:block absolute left-2 lg:left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 rounded-full p-2 lg:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous project"
            >
              <ArrowBackIosIcon className="text-main dark:text-white ml-1 text-sm lg:text-base" />
            </button>

            <button
              onClick={nextProject}
              disabled={isTransitioning}
              className="hidden sm:block absolute right-2 lg:right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 rounded-full p-2 lg:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next project"
            >
              <ArrowForwardIosIcon className="text-main dark:text-white text-sm lg:text-base" />
            </button>
          </>
        )}

        {/* Projects Display */}
        <div className={`${PROJECTS.length > projectsPerView ? 'mx-0 sm:mx-8 lg:mx-12' : 'mx-0'} overflow-hidden`}>
          <div 
            className={`flex transition-transform duration-300 ease-in-out ${
              isTransitioning ? 'pointer-events-none' : ''
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {/* Group projects into slides */}
            {Array.from({ length: Math.ceil(PROJECTS.length / projectsPerView) }, (_, slideIndex) => {
              const startIdx = slideIndex * projectsPerView;
              const endIdx = Math.min(startIdx + projectsPerView, PROJECTS.length);
              const slideProjects = PROJECTS.slice(startIdx, endIdx);
              
              return (
                <div 
                  key={`slide-${slideIndex}`}
                  className="flex min-w-full gap-4 px-2 sm:px-3 lg:px-4"
                >
                  {slideProjects.map((project, projectIndex) => (
                    <div 
                      key={`project-${startIdx + projectIndex}`}
                      className="flex-1"
                    >
                      <Project project={project} />
                    </div>
                  ))}
                  {/* Fill empty spaces if this is the last slide and it's not full */}
                  {slideProjects.length < projectsPerView && 
                    Array.from({ length: projectsPerView - slideProjects.length }, (_, emptyIndex) => (
                      <div key={`empty-${slideIndex}-${emptyIndex}`} className="flex-1" />
                    ))
                  }
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        {PROJECTS.length > projectsPerView && (
          <div className="flex justify-center mt-4 sm:mt-6 gap-1.5 sm:gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => goToProject(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-main scale-110'
                    : 'bg-gray-300 dark:bg-neutral-600 hover:bg-gray-400 dark:hover:bg-neutral-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Mobile swipe hint */}
        <div className="block sm:hidden text-center mt-3">
          <p className="text-xs text-gray-500 dark:text-gray-400">Swipe left or right to navigate</p>
        </div>
      </div>
    </div>
  )
}

export default Projects;
