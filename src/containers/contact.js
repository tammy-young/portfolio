import Input from '@mui/material/Input';

const Connect = () => {
  return (
    <div className="px-4 lg:px-[5%] flex justify-center relative min-h-screen items-center" id="contact">
      <div className='text-center flex lg:flex-row flex-col lg:gap-8 gap-5 text-center items-center max-w-[1400px]'>
        <div className="flex flex-col lg:text-left text-center lg:w-1/2">
          <h1 className="text-5xl font-bold pb-4 text-main dark:text-white">Let's connect</h1>
          <p className='dark:text-white'>Thank you for visiting! If you have a question, opportunity, or want to say hi, I'd love to hear from you!
            Feel free to reach out, I'll get back to you as soon as I can.
          </p>
        </div>
        <div className="flex flex-col lg:w-1/2 w-full bg-white rounded-lg shadow-lg p-6 dark:bg-neutral-800">
          <form className="flex flex-col gap-4">
            <Input
              placeholder="Your Name"
              inputProps={{ 'aria-label': 'Your Name' }}
              className="bg-[#fafafa] rounded-lg p-2 px-3 dark:!text-white dark:bg-neutral-700"
            />
            <Input
              placeholder="Your Email"
              type="email"
              inputProps={{ 'aria-label': 'Your Email' }}
              className="bg-[#fafafa] rounded-lg p-2 px-3 dark:!text-white dark:bg-neutral-700"
            />
            <Input
              placeholder="Your Message"
              multiline
              rows={4}
              inputProps={{ 'aria-label': 'Your Message' }}
              className="bg-[#fafafa] rounded-lg !p-3 !px-3 dark:!text-white dark:bg-neutral-700"
            />
            <button
              className="bg-main p-3 px-6 rounded-full text-white shadow-lg font-bold hover:bg-main-light hover:shadow-xl transition-colors duration-300 flex justify-center items-center"
              onClick={() => window.open('/docs/Resume_Tammy_Young.pdf', '_blank')}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Connect;
