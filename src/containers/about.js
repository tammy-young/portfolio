
const AboutSection = () => {
  return (
    <div className="bg-main-light dark:bg-neutral-700 p-8" id="about">
      <div className="flex justify-center">
        <div className="flex lg:flex-row flex-col lg:items-stretch xl:w-2/3 lg:w-4/5 lg:gap-8 gap-4 items-center max-w-[1300px]">
          <div className="flex items-center text-center flex-wrap"><p className="text-5xl font-bold min-w-max dark:text-white">About&nbsp;me</p></div>
          <div className="lg:text-left text-center dark:text-white">
            I am a Computer Science new-graduate from the University of Alberta with a passion for building innovative and
            impactful software. With experience in AI, full-stack web development, and cloud technologies, I specialize in
            creating impactful tools that empower individuals and drive meaningful change. Skilled in Python, JavaScript,
            React, and Django, among other technologies, I thrive in collaborative environments and am always eager to learn
            and grow. Let's connect to explore opportunities in tech, AI, or software development.
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;
