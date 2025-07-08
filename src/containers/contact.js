import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Colours from '../lib/colours';

const Connect = () => {
  return (
    <div className="px-[5%] flex justify-center" id="contact">
      <div className='text-center flex sm:flex-row flex-col sm:gap-8 gap-5 justify-around text-center items-center max-w-[1400px]'>
        <div className="flex flex-col text-left sm:w-1/3">
          <h1 className="text-5xl font-bold pb-4 dark:text-white">Let's connect</h1>
          <p className='dark:text-white'>Thank you for visiting! If you have a question, opportunity, or want to say hi, I'd love to hear from you!
            Feel free to reach out, I'll get back to you as soon as I can.
          </p>
        </div>
        <div className="flex flex-col sm:w-1/2 w-full">
          <form className="flex flex-col gap-4">
            <Input
              placeholder="Your Name"
              inputProps={{ 'aria-label': 'Your Name' }}
              className="border dark:border-none rounded-lg p-2 px-3 dark:!text-white dark:bg-neutral-700"
            />
            <Input
              placeholder="Your Email"
              type="email"
              inputProps={{ 'aria-label': 'Your Email' }}
              className="border dark:border-none rounded-lg p-2 px-3 dark:!text-white dark:bg-neutral-700"
            />
            <Input
              placeholder="Your Message"
              multiline
              rows={4}
              inputProps={{ 'aria-label': 'Your Message' }}
              className="border dark:border-none rounded-lg !p-3 !px-3 dark:!text-white dark:bg-neutral-700"
            />
            <Button
              className="text-white rounded-lg p-2 !bg-main-light"
              type="submit"
              variant='contained'
              disableElevation
              sx={{ textTransform: 'capitalize', color: 'black' }}
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Connect;
