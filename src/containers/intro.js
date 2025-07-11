import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const IntroSection = () => {
  return (
    <div className="px-[5%] flex justify-center" id="intro">
      <div className='flex sm:flex-row flex-col sm:justify-around justify-center items-center sm:gap-0 gap-5 max-w-[1400px]'>
        <div className="flex flex-col justify-center gap-3">
          <div className='dark:text-white'>
            <h4 className="">Nice to meet you,</h4>
            <h1 className="text-6xl font-bold w-max">I'm Tammy</h1>
          </div>
          <h4 className='dark:text-white'>Passionate software developer/engineer based in Canada.</h4>
          <div className="flex flex-row gap-2">
            <Button variant="contained" disableElevation
              className="!bg-main-light"
              sx={{ textTransform: 'capitalize', color: '#000' }}
              onClick={() => window.open('/docs/Resume_Tammy_Young.pdf', '_blank')}
            >
              Resume
            </Button>
            <Button variant="contained" disableElevation
              onClick={() => window.open('https://www.linkedin.com/in/tammyqyoung/', '_blank')}
            >
              <LinkedInIcon />
            </Button>
            <Button variant="contained" disableElevation
              sx={{ backgroundColor: '#000', color: '#fff' }}
              onClick={() => window.open('https://github.com/tammy-young/', '_blank')}
            >
              <GitHubIcon />
            </Button>
          </div>
        </div>
        <img src="/images/headshot.jpeg" alt="Tammy Young" className="sm:w-1/3 w-5/6 rounded-full"></img>
      </div>
    </div>
  )
}

export default IntroSection;
