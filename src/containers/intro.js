import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const IntroSection = () => {
  return (
    <div className="px-[5%] flex justify-center h-screen" id="intro">
      <div className='flex sm:flex-row flex-col sm:justify-around justify-center items-center sm:gap-0 gap-5 max-w-[1400px]'>
        <div className="flex flex-col justify-center gap-4">
          <div className='dark:text-white'>
            <h4 className="">Nice to meet you,</h4>
            <h1 className="text-7xl font-bold w-max text-main">I'm Tammy</h1>
          </div>
          <h4 className='dark:text-white max-w-[400px]'>Passionate software developer/engineer creating innovative solutions in Canada.</h4>
          <div className="flex flex-row gap-4">
            <button
              className="bg-main p-3 px-6 rounded-full text-white shadow-lg font-bold"
              onClick={() => window.open('/docs/Resume_Tammy_Young.pdf', '_blank')}
            >
              Resume
            </button>
            <button
              className="bg-[#0072b1] p-3 rounded-full text-white shadow-lg"
              onClick={() => window.open('https://www.linkedin.com/in/tammyqyoung/', '_blank')}
            >
              <LinkedInIcon />
            </button>
            <button
              className="bg-black p-3 rounded-full text-white shadow-lg"
              onClick={() => window.open('https://github.com/tammy-young/', '_blank')}
            >
              <GitHubIcon />
            </button>
          </div>
        </div>
        <img src="/images/headshot.jpeg" alt="Tammy Young" className="sm:w-1/3 w-5/6 rounded-full border-4 border-white shadow-xl"></img>
      </div>
    </div>
  )
}

export default IntroSection;
