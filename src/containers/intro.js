import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const IntroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-[5%] lg:px-[8%] relative lg:pt-0 pt-20" id="intro">
      <div className='flex sm:flex-row flex-col sm:justify-around justify-center items-center sm:gap-0 gap-12 max-w-[1400px] w-full'>
        <div className="flex flex-col justify-center gap-6">
          <div className='text-gray-800 dark:text-white'>
            <h4 className="text-xl font-medium text-gray-600 dark:text-gray-300 mb-2">Nice to meet you,</h4>
            <h1 className="text-7xl font-bold text-main">
              I'm Tammy
            </h1>
          </div>
          <h4 className='text-xl text-gray-600 dark:text-gray-300 max-w-md'>
            Passionate software developer/engineer creating innovative solutions in Canada.
          </h4>
          <div className="flex flex-row gap-4 mt-4">
            <Button 
              variant="contained" 
              disableElevation
              className="!bg-main !text-white !font-semibold !px-6 !py-3 !rounded-full !shadow-lg hover:!shadow-xl !transition-all !duration-300"
              sx={{ textTransform: 'capitalize' }}
              onClick={() => window.open('/docs/Resume_Tammy_Young.pdf', '_blank')}
            >
              Resume
            </Button>
            <Button 
              variant="contained" 
              disableElevation
              className="!text-white !rounded-full !p-3 !min-w-0 !w-12 !h-12 !shadow-lg hover:!shadow-xl !transition-all !duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/tammyqyoung/', '_blank')}
            >
              <LinkedInIcon />
            </Button>
            <Button 
              variant="contained" 
              disableElevation
              className="!bg-gradient-to-r !from-gray-800 !to-gray-900 !text-white !rounded-full !p-3 !min-w-0 !w-12 !h-12 !shadow-lg hover:!shadow-xl !transition-all !duration-300"
              onClick={() => window.open('https://github.com/tammy-young/', '_blank')}
            >
              <GitHubIcon />
            </Button>
          </div>
        </div>
        
        <div className="relative group">
          <img 
            src="/images/headshot.jpeg" 
            alt="Tammy Young" 
            className="sm:w-96 sm:h-96 w-64 h-64 object-cover rounded-full shadow-2xl ring-4 ring-white/50 dark:ring-gray-800/50"
          />
        </div>
      </div>
    </div>
  )
}

export default IntroSection;
