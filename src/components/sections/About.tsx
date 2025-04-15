
const About = () => {
  return (
    <section id="about" className="section scroll-mt bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Bio text */}
          <div className="md:w-1/2 animate-on-scroll">
            <p className="mb-4 text-gray-700">
              Hello! I'm a passionate digital creator and content specialist based in [Your Location]. 
              With over [X] years of experience in content creation, social media management, and digital 
              marketing, I help brands and individuals tell their stories and connect with their audience.
            </p>
            <p className="mb-4 text-gray-700">
              My journey began when I discovered my passion for storytelling and visual communication. 
              Since then, I've worked with various clients across different industries, helping them 
              establish their online presence and create meaningful connections with their audience.
            </p>
            <p className="text-gray-700">
              When I'm not creating content, you can find me exploring nature, experimenting with 
              photography, or enjoying a good book with a cup of coffee. I believe in continuous 
              learning and pushing creative boundaries to deliver exceptional results.
            </p>
          </div>
          
          {/* Photos grid */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="animate-on-scroll">
                <img
                  src="https://images.unsplash.com/photo-1516307365426-bea591f05011"
                  alt="Personal photo 1"
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
              </div>
              <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
                <img
                  src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf"
                  alt="Personal photo 2"
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
              </div>
              <div className="col-span-2 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="Personal photo 3"
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
