import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const Connect = () => {
  return (
    <div className="px-[5%] lg:px-[8%] py-20 relative" id="contact">
      <div className="flex justify-center">
        <div className='flex sm:flex-row flex-col sm:gap-16 gap-12 justify-center items-center max-w-[1400px] w-full'>
          <div className="flex flex-col text-center sm:text-left sm:w-1/2">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple bg-clip-text text-transparent mb-6">
              Let's connect
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
              Thank you for visiting! If you have a question, opportunity, or want to say hi, I'd love to hear from you!
              Feel free to reach out, I'll get back to you as soon as I can.
            </p>
          </div>

          <div className="sm:w-1/2 w-full">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
              <form className="flex flex-col gap-6">
                <Input
                  placeholder="Your Name"
                  inputProps={{ 'aria-label': 'Your Name' }}
                  className="!bg-gray-50 dark:!bg-gray-700/50 !border-0 !rounded-lg !p-4 !text-gray-800 dark:!text-white !placeholder-gray-500 dark:!placeholder-gray-400 !shadow-sm focus:!shadow-md !transition-all !duration-300"
                  sx={{
                    '&:before': { display: 'none' },
                    '&:after': { display: 'none' },
                  }}
                />
                <Input
                  placeholder="Your Email"
                  type="email"
                  inputProps={{ 'aria-label': 'Your Email' }}
                  className="!bg-gray-50 dark:!bg-gray-700/50 !border-0 !rounded-lg !p-4 !text-gray-800 dark:!text-white !placeholder-gray-500 dark:!placeholder-gray-400 !shadow-sm focus:!shadow-md !transition-all !duration-300"
                  sx={{
                    '&:before': { display: 'none' },
                    '&:after': { display: 'none' },
                  }}
                />
                <Input
                  placeholder="Your Message"
                  multiline
                  rows={4}
                  inputProps={{ 'aria-label': 'Your Message' }}
                  className="!bg-gray-50 dark:!bg-gray-700/50 !border-0 !rounded-lg !p-4 !text-gray-800 dark:!text-white !placeholder-gray-500 dark:!placeholder-gray-400 !shadow-sm focus:!shadow-md !transition-all !duration-300"
                  sx={{
                    '&:before': { display: 'none' },
                    '&:after': { display: 'none' },
                  }}
                />
                <Button
                  className="!bg-gradient-to-r !from-accent-orange !to-accent-pink !text-white !font-semibold !py-4 !rounded-lg !shadow-lg hover:!shadow-xl !transition-all !duration-300"
                  type="submit"
                  variant='contained'
                  disableElevation
                  sx={{ textTransform: 'capitalize' }}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
