
const HighlightedText = ({ text }) => (
  <span className="font-bold text-main">{text}</span>
);

const AboutSection = () => {
  return (
    <div className="relative min-h-dvh w-full flex justify-center items-center px-4" id="about">
      <div className="flex xl:flex-row flex-col xl:gap-16 gap-4">
        <div className="flex items-center !text-center justify-center flex-wrap xl:w-fit w-full">
          <h1 className="text-5xl font-bold pb-2 sm:pb-4 text-transparent bg-clip-text bg-gradient-to-r from-main to-secondary">About me</h1>
        </div>
        <div className="flex flex-col gap-4 bg-white shadow-lg rounded-xl p-6 dark:bg-neutral-800 dark:text-white max-w-[500px]">
          <p>
            I am a Computer Science graduate from the University of Alberta with a passion for building innovative and
            impactful software. With experience in{' '}
            <HighlightedText text="AI" />,{' '}
            <HighlightedText text="full-stack web development" />,{' '}
            and <HighlightedText text="cloud technologies" />,{' '}
            I specialize in creating impactful tools that empower individuals and drive meaningful change.
          </p>
          <p>
            Skilled in <HighlightedText text="Python" />,{' '}
            <HighlightedText text="JavaScript" />,{' '}
            <HighlightedText text="React" />,{' '}
            and <HighlightedText text="Django" />,{' '}
            among other technologies, I thrive in collaborative
            environments and am always eager to learn and grow.
          </p>
          <p>
            I value <HighlightedText text="collaboration" />, <HighlightedText text="adaptability" />, and <HighlightedText text="clear communication" /> in my work.
            I enjoy turning complex problems into practical, user-friendly solutions, while staying open to new ideas and feedback.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;
