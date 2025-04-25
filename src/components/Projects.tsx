import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: "avcwise",
      title: "AVCWISE",
      description:
        "A managed solution for Local Government Pension Scheme (LGPS) salary sacrifice shared cost AVCs.",
      image:
        "https://static.wixstatic.com/media/1b2a28_3e9a5f9f286f42a9b96d97e8dcf45108~mv2.jpg/v1/fill/w_726,h_522,fp_0.60_0.26,q_85,usm_0.66_1.00_0.01,enc_auto/hero_image.jpg",
      tags: [
        "React",
        "JavaScript",
        "Frontend Development",
        "Pension Management",
      ],

      liveUrl: "https://home.avcwise.co.uk/",
      featured: true,
    },
    {
      id: "vivup",
      title: "VIVUP",
      description:
        "A UK-leading employee benefits platform providing health and well-being solutions.",
      image:
        "https://vivupbenefits.co.uk/hs-fs/hubfs/Solutions%20Roundel/All%20Solutions%20-%20White%20BG%20-%20August@0.5x-1.png?width=1031&height=1027&name=All%20Solutions%20-%20White%20BG%20-%20August@0.5x-1.png",
      tags: [
        "React",
        "JavaScript",
        "Frontend Development",
        "Employee Benefits",
      ],

      liveUrl: "https://vivupbenefits.co.uk/",
      featured: true,
    },
    {
      id: "voicerules",
      title: "VoiceRules - Global Phone System",
      description:
        "A global phone system allowing users to receive calls anywhere at a low cost.",
      image:
        "https://www.voicerules.com/assets/voicerules-cutomer-support-team-2c182da324b1d1d5169a2a649ca24a7866cc867cfa3b8ab8fa11178b8a0a282a.png",
      tags: [
        "React",
        "JavaScript",
        "Frontend Development",
        "Telecommunications",
      ],

      liveUrl: "https://www.voicerules.com/",
      featured: true,
    },
    {
      id: "advisoryai",
      title: "AdvisoryAI",
      description:
        "AI software designed for financial advisers to automate advisory documents, meeting notes, and client fact finds.",
      image: "https://res.cloudinary.com/dqciqsoy0/image/upload/v1745559169/lupkux745v00tzfjn3ep.png",
      tags: ["NextJs", "JavaScript", "Frontend Development", "Finance"],
      liveUrl: "https://advisoryai.com/",
      featured: false,
    },
    {
      id: "invoicean",
      title: "Invoicean",
      description:
        "An advanced invoicing solution for freelancers, small businesses, and companies.",
      image:
        "https://invoicean.com/static/media/marketing-bg.129b9cfa9e5a40b6393a.png",
      tags: ["React", "JavaScript", "Frontend Development", "Invoicing"],
      githubUrl: "https://github.com/harshitparashar/invoicean",
      liveUrl: "https://invoicean.com/",
      featured: false,
    },
    {
      id: "sanchitHealthcare",
      title: "Sanchit HealthCare LLP",
      description:
        "Leading supplier of certified medical and surgical equipment across India.",
      image: "https://res.cloudinary.com/dqciqsoy0/image/upload/v1745559185/uvkeczgw2uebrhqonpyj.png",
      tags: ["Medical Equipment", "Healthcare Solutions"],
      githubUrl:
        "https://github.com/harshit-parashar-3/sanchit-healthcare-react",
      liveUrl: "https://sanchithealthcarellp.com/",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here’s a selection of projects I’ve worked on, showcasing my skills
            in building modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="reveal group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-full bg-card rounded-xl overflow-hidden neo-morphism transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="py-1 px-2 text-xs font-medium bg-black/40 text-white rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="py-1 px-2 text-xs font-medium bg-black/40 text-white rounded-full backdrop-blur-sm">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <Link
                      to={`/project/${project.id}`}
                      className="text-primary text-sm font-medium flex items-center hover:text-primary/80 transition-colors"
                    >
                      View Details
                      <ArrowRight size={14} className="ml-1" />
                    </Link>

                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="View Github repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="View live project"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 reveal">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            View All Projects
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
