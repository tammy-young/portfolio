
const AboutSection = () => {
  return (
    <div className="relative min-h-dvh w-full flex justify-center items-center px-4" id="about">
      <div className="flex xl:flex-row flex-col xl:gap-16 gap-4">
        <div className="flex items-center !text-center justify-center flex-wrap xl:w-fit w-full">
          <h1 className="text-5xl font-bold pb-2 sm:pb-4 text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-secondary">About me</h1>
        </div>
        <div className="flex flex-col gap-4 bg-white shadow-lg rounded-xl p-6 dark:bg-neutral-800 dark:text-white max-w-[500px]">
          <p>
            I am a Computer Science new-graduate from the University of Alberta with a passion for building innovative and
            impactful software. With experience in{' '}
            <span className="font-bold text-main">AI</span>,{' '}
            <span className="font-bold text-main">full-stack web development</span>,{' '}
            and <span className="font-bold text-main">cloud technologies</span>,{' '}
            I specialize in creating impactful tools that empower individuals and drive meaningful change.
          </p>
          <p>
            Skilled in <span className="font-bold text-main">Python</span>,{' '}
            <span className="font-bold text-main">JavaScript</span>,{' '}
            <span className="font-bold text-main">React</span>,{' '}
            and <span className="font-bold text-main">Django</span>,{' '}
            among other technologies, I thrive in collaborative
            environments and am always eager to learn and grow. Let's connect to explore opportunities in tech,
            AI, or software development.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;
