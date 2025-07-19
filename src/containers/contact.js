import { useState, useRef } from 'react';
import Input from '@mui/material/Input';
import Button from '../components/button';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Connect = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.from_name || !formData.from_email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Check if EmailJS is configured with environment variables
      if (!EMAILJS_CONFIG.SERVICE_ID || 
          !EMAILJS_CONFIG.TEMPLATE_ID || 
          !EMAILJS_CONFIG.PUBLIC_KEY ||
          EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' ||
          EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
          EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {

        setTimeout(() => {
          setStatus({
            type: 'success',
            message: 'Demo mode: Message would be sent! Please check your environment variables are set correctly.'
          });
          setFormData({ from_name: '', from_email: '', message: '' });
          setIsLoading(false);
        }, 1000);
        return;
      }

      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or contact me directly.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-4 lg:px-[5%] flex justify-center relative min-h-dvh items-center" id="contact">
      <div className='text-center flex lg:flex-row flex-col lg:gap-8 gap-5 text-center items-center max-w-[1400px]'>
        <div className="flex flex-col lg:text-left text-center lg:w-1/2">
          <h1 className="text-5xl font-bold pb-2 sm:pb-4 text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-secondary">Let's connect</h1>
          <p className='dark:text-white'>Thank you for visiting! If you have a question, opportunity, or want to say hi, I'd love to hear from you!
            Feel free to reach out, I'll get back to you as soon as I can.
          </p>
        </div>
        <div className="flex flex-col lg:w-1/2 w-full bg-white rounded-lg shadow-lg p-6 dark:bg-neutral-800">
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Your Name"
              inputProps={{ 'aria-label': 'Your Name' }}
              className="bg-[#fafafa] rounded-lg p-2 px-3 dark:!text-white dark:bg-neutral-700"
              required
            />
            <Input
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="Your Email"
              type="email"
              inputProps={{ 'aria-label': 'Your Email' }}
              className="bg-[#fafafa] rounded-lg p-2 px-3 dark:!text-white dark:bg-neutral-700"
              required
            />
            <Input
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              multiline
              rows={4}
              inputProps={{ 'aria-label': 'Your Message' }}
              className="bg-[#fafafa] rounded-lg !p-3 !px-3 dark:!text-white dark:bg-neutral-700"
              required
            />

            {status.message && (
              <div className={`p-3 rounded-lg text-sm font-medium ${status.type === 'success'
                ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                }`}>
                {status.message}
              </div>
            )}

            <Button
              onClick={handleSubmit}
              color={isLoading ? 'bg-gray-400' : undefined}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Connect;
