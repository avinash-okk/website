import React, { useState } from 'react';
import { ExternalLink, Play, Instagram, Youtube } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Travel Vlog Series",
      category: "youtube",
      platform: "YouTube",
      description: "A 12-part series documenting adventures across Southeast Asia, featuring local culture and hidden gems.",
      image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=500",
      views: "2.5M",
      link: "#"
    },
    {
      id: 2,
      title: "Brand Collaboration",
      category: "collaboration",
      platform: "Instagram",
      description: "Authentic lifestyle content showcasing sustainable fashion brands with a focus on conscious living.",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500",
      views: "500K",
      link: "#"
    },
    {
      id: 3,
      title: "Behind the Scenes",
      category: "instagram",
      platform: "Instagram",
      description: "Raw, unfiltered content showing the reality behind content creation and the creative process.",
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=500",
      views: "800K",
      link: "#"
    },
    {
      id: 4,
      title: "Tech Review Series",
      category: "youtube",
      platform: "YouTube",
      description: "In-depth reviews of the latest tech gear for content creators, with honest pros and cons.",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=500",
      views: "1.2M",
      link: "#"
    },
    {
      id: 5,
      title: "Wellness Campaign",
      category: "collaboration",
      platform: "Instagram",
      description: "Partnership with wellness brands to promote mental health awareness and self-care routines.",
      image: "https://images.pexels.com/photos/3984360/pexels-photo-3984360.jpeg?auto=compress&cs=tinysrgb&w=500",
      views: "650K",
      link: "#"
    },
    {
      id: 6,
      title: "Creative Challenges",
      category: "tiktok",
      platform: "TikTok",
      description: "Viral challenge series that sparked creativity trends and engaged millions of users worldwide.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=500",
      views: "3.8M",
      link: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'tiktok', label: 'TikTok' },
    { id: 'collaboration', label: 'Brand Collabs' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'YouTube':
        return <Youtube className="w-5 h-5 text-red-600" />;
      case 'Instagram':
        return <Instagram className="w-5 h-5 text-pink-600" />;
      default:
        return <Play className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured
            <span className="text-purple-600 ml-3">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my most impactful content across various platforms, 
            from viral videos to meaningful brand collaborations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                  {getPlatformIcon(project.platform)}
                  <span className="text-sm font-medium">{project.platform}</span>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.views} views
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <ExternalLink className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300">
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in collaborating?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's create something amazing together. I'm always open to new partnerships and creative projects.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;