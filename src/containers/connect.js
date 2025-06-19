import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Colours from '../lib/colours';

const Connect = () => {
  return (
    <div className="text-center px-[5%] flex sm:flex-row flex-col gap-8 justify-around text-center items-center">
      <div className="flex flex-col text-left w-1/3">
        <h1 className="text-5xl font-bold pb-4">Let's connect</h1>
        <p>Thank you for visiting! If you have a question, opportunity, or want to say hi, I'd love to hear from you!
          Feel free to reach out, I'll get back to you as soon as I can.
        </p>
      </div>
      <div className="flex flex-col w-1/2">
        <form className="flex flex-col gap-4">
          <Input
            placeholder="Your Name"
            inputProps={{ 'aria-label': 'Your Name' }}
            className="border border-b-0 rounded p-2"
          />
          <Input
            placeholder="Your Email"
            type="email"
            inputProps={{ 'aria-label': 'Your Email' }}
            className="border border-b-0 rounded p-2"
          />
          <Input
            placeholder="Your Message"
            multiline
            rows={4}
            inputProps={{ 'aria-label': 'Your Message' }}
            className="border border-b-0 rounded !p-2"
          />
          <Button
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
            type="submit"
            variant='contained'
            sx={{ textTransform: 'capitalize', backgroundColor: Colours.mainPurple, color: 'black' }}
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Connect;
