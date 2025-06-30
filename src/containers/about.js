
const AboutSection = () => {
  return (
    <div className="bg-mainYellow p-8" id="about">
      <div className="flex justify-center">
        <div className="flex lg:flex-row flex-col lg:items-stretch lg:w-2/3 lg:gap-8 gap-4 items-center">
          <div className="flex items-center text-center"><p className="text-5xl font-bold min-w-max">About me</p></div>
          <p className="lg:text-left text-center">
            I am a Computer Science new-graduate from the University of Alberta with a passion for building innovative and
            impactful software. With experience in AI, full-stack web development, and cloud technologies, I specialize in
            creating impactful tools that empower individuals and drive meaningful change. Skilled in Python, JavaScript,
            React, and Django, among other technologies, I thrive in collaborative environments and am always eager to learn
            and grow. Let's connect to explore opportunities in tech, AI, or software development.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;
