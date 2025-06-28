import React from 'react';
import { Award, Users, Video, TrendingUp } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Video className="w-8 h-8 text-purple-600" />,
      title: "Content Creation",
      description: "5+ years creating engaging video content across platforms"
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Community Building",
      description: "Built engaged communities totaling 500K+ followers"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Brand Partnerships",
      description: "Collaborated with 50+ brands on successful campaigns"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-teal-600" />,
      title: "Growth Strategy",
      description: "Expertise in viral content and audience engagement"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About
                <span className="text-purple-600 ml-3">Alex Rivera</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Hey there! I'm Alex, a passionate content creator who believes in the power of 
                  authentic storytelling to create meaningful connections. What started as a hobby 
                  of sharing my adventures has grown into a platform that reaches hundreds of 
                  thousands of people worldwide.
                </p>
                <p>
                  My journey began five years ago when I picked up my first camera and decided to 
                  document my travels. Since then, I've evolved into a multi-platform creator, 
                  specializing in lifestyle content, brand collaborations, and community building.
                </p>
                <p>
                  I'm driven by the opportunity to inspire others to pursue their passions while 
                  helping brands tell their stories in authentic, engaging ways that resonate 
                  with real people.
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-gray-600">Years Creating</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-teal-600 mb-2">50M+</div>
                <div className="text-gray-600">Total Views</div>
              </div>
            </div>
          </div>

          {/* Image and Achievements */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-teal-100 p-8 shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-teal-600 rounded-xl flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">AR</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg">
                <Video className="w-8 h-8 text-purple-600" />
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-4">{achievement.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;