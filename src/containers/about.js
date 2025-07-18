
const AboutSection = () => {
  return (
    <div className="px-[5%] lg:px-[8%] py-20 relative" id="about">
      <div className="flex justify-center">
        <div className="flex lg:flex-row flex-col lg:items-center xl:w-2/3 lg:w-4/5 lg:gap-16 gap-8 items-center max-w-[1300px]">
          <div className="flex items-center justify-center lg:w-1/3">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue bg-clip-text text-transparent text-center lg:text-left">
              About me
            </h2>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                I am a Computer Science new-graduate from the University of Alberta with a passion for building innovative and
                impactful software. With experience in <span className="font-semibold text-accent-purple">AI</span>, <span className="font-semibold text-accent-blue">full-stack web development</span>, and <span className="font-semibold text-accent-green">cloud technologies</span>, I specialize in
                creating impactful tools that empower individuals and drive meaningful change. 
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                Skilled in <span className="font-semibold text-accent-orange">Python</span>, <span className="font-semibold text-accent-pink">JavaScript</span>,
                <span className="font-semibold text-accent-blue"> React</span>, and <span className="font-semibold text-accent-green">Django</span>, among other technologies, I thrive in collaborative environments and am always eager to learn
                and grow. Let's connect to explore opportunities in tech, AI, or software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;
