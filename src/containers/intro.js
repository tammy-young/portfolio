import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '../components/button.js';

const IntroSection = () => {
  return (
    <div className="px-[5%] flex justify-center relative min-h-dvh w-full" id="intro">
      <div className='flex xl:flex-row flex-col xl:justify-around justify-center items-center xl:gap-0 gap-5'>
        <div className="flex flex-col justify-center gap-4">
          <div className='dark:text-white'>
            <h4 className="">Nice to meet you,</h4>
            <h1 className="text-7xl font-bold w-max text-transparent bg-clip-text bg-gradient-to-r from-main to-tertiary">I'm Tammy</h1>
          </div>
          <h4 className='dark:text-white max-w-[400px]'>Passionate software developer/engineer creating innovative solutions in Canada.</h4>
          <div className="flex flex-row gap-4">
            <Button
              onClick={() => window.open('/docs/Resume_Tammy_Young.pdf', '_blank')}
              padding={'p-3 px-6'}
            >
              Resume
            </Button>
            <Button
              onClick={() => window.open('https://www.linkedin.com/in/tammyqyoung/', '_blank')}
              color={"bg-[#0072b1]"}
            >
              <LinkedInIcon />
            </Button>
            <Button
              onClick={() => window.open('https://github.com/tammy-young/', '_blank')}
              color={"bg-black"}
            >
              <GitHubIcon />
            </Button>
          </div>
        </div>
        <img src="/images/headshot.jpeg" alt="Tammy Young" className="xl:w-1/3 sm:w-1/2 w-3/4 rounded-full border-4 border-white hover:border-main shadow-xl hover:shadow-main/30 transition-all duration-300"></img>
      </div>
    </div>
  )
}

export default IntroSection;
