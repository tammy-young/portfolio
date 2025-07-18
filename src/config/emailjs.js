
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
};

const requiredEnvVars = ['REACT_APP_EMAILJS_SERVICE_ID', 'REACT_APP_EMAILJS_TEMPLATE_ID', 'REACT_APP_EMAILJS_PUBLIC_KEY'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.warn('Missing EmailJS environment variables:', missingEnvVars);
  console.warn('Add these to your .env file with REACT_APP_ prefix');
}
