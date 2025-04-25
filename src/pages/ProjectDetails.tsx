import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { ChevronLeft, ExternalLink, Github } from "lucide-react";
import { UseScrollTop } from "@/hooks/use-scroll-top";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
  technologies?: string[];
  date?: string;
  category?: string;
}

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  UseScrollTop();
  useEffect(() => {
    // Simulate fetching project data
    setTimeout(() => {
      const projectDataMap: Record<string, Project> = {
        avcwise: {
          id: "avcwise",
          title: "AVCWISE",
          description:
            "A managed solution for Local Government Pension Scheme (LGPS) salary sacrifice shared cost AVCs.",
          longDescription:
            "AVCWISE facilitates efficient management of AVCs, offering features for contributions management, performance tracking, and reporting. It integrates seamlessly with LGPS systems to ensure accurate data synchronization. I was responsible for developing and maintaining the front-end using React.js, focusing on creating an intuitive user interface that enhances user engagement.",
          image:
            "https://static.wixstatic.com/media/1b2a28_3e9a5f9f286f42a9b96d97e8dcf45108~mv2.jpg/v1/fill/w_726,h_522,fp_0.60_0.26,q_85,usm_0.66_1.00_0.01,enc_auto/hero_image.jpg",
          tags: [
            "React",
            "JavaScript",
            "Frontend Development",
            "Pension Management",
          ],

          liveUrl: "https://home.avcwise.co.uk/",
          features: [
            "User authentication and profile management",
            "Contributions management with real-time updates",
            "Performance tracking and analytics",
            "Comprehensive reporting tools",
            "Integration with existing LGPS systems",
          ],
          technologies: [
            "React.js",
            "JavaScript (ES6)",
            "HTML5 & CSS3",
            "RESTful APIs",
            "Git & GitHub",
          ],
          date: "2023",
          category: "Finance Application",
        },
        vivup: {
          id: "vivup",
          title: "VIVUP",
          description:
            "A UK-leading employee benefits platform providing health and well-being solutions.",
          longDescription:
            "VIVUP is a comprehensive benefits platform providing an Employee Assistance Program (EAP) to support employee well-being. I contributed to the front-end development using React.js, crafting user-friendly interfaces and collaborating with UI/UX designers to enhance the employee experience.",
          image:
            "https://vivupbenefits.co.uk/hs-fs/hubfs/Solutions%20Roundel/All%20Solutions%20-%20White%20BG%20-%20August@0.5x-1.png?width=1031&height=1027&name=All%20Solutions%20-%20White%20BG%20-%20August@0.5x-1.png",
          tags: [
            "React",
            "JavaScript",
            "Frontend Development",
            "Employee Benefits",
          ],

          liveUrl: "https://vivupbenefits.co.uk/",
          features: [
            "Employee benefits catalog with search and filtering",
            "Personalized dashboards for employees",
            "Usage tracking and analytics",
            "Integration with HR systems",
            "Secure access and data management",
          ],
          technologies: [
            "React.js",
            "JavaScript (ES6)",
            "HTML5 & CSS3",
            "RESTful APIs",
            "Git & GitHub",
          ],
          date: "2022",
          category: "Employee Benefits Platform",
        },
        voicerules: {
          id: "voicerules",
          title: "VoiceRules - Global Phone System",
          description:
            "A global phone system allowing users to receive calls anywhere at a low cost.",
          longDescription:
            "VoiceRules offers a cost-effective solution for global communication with virtual phone numbers, call forwarding, and seamless connectivity. I developed the front-end components using React.js, ensuring scalability and a user-friendly interface.",
          image:
            "https://www.voicerules.com/assets/voicerules-cutomer-support-team-2c182da324b1d1d5169a2a649ca24a7866cc867cfa3b8ab8fa11178b8a0a282a.png",
          tags: [
            "React",
            "JavaScript",
            "Frontend Development",
            "Telecommunications",
          ],
          githubUrl: "https://github.com/harshitparashar/voicerules",
          liveUrl: "https://www.voicerules.com/",
          features: [
            "Virtual phone numbers",
            "Call forwarding and routing",
            "Global connectivity",
            "User-friendly interface for call management",
            "Scalable architecture to support growth",
          ],
          technologies: [
            "React.js",
            "JavaScript (ES6)",
            "HTML5 & CSS3",
            "RESTful APIs",
            "Git & GitHub",
          ],
          date: "2024",
          category: "Telecommunications",
        },
        invoicean: {
          id: "invoicean",
          title: "Invoicean",
          description:
            "An advanced invoicing solution for freelancers, small businesses, and companies.",
          longDescription:
            "Invoicean is a professional invoicing system designed to simplify billing processes, manage clients, and generate financial reports. I led the UI/UX design and frontend development to create a user-friendly and efficient interface.",
          image:
            "https://invoicean.com/static/media/marketing-bg.129b9cfa9e5a40b6393a.png",
          tags: ["React", "JavaScript", "Frontend Development", "Invoicing"],
          githubUrl: "https://github.com/harshitparashar/invoicean",
          liveUrl: "https://invoicean.com/",
          features: [
            "Invoice creation and management",
            "Client database with contact management",
            "Financial reporting and analytics",
            "Customizable invoice templates",
            "Secure data storage and access",
          ],
          technologies: [
            "React.js",
            "JavaScript (ES6)",
            "HTML5 & CSS3",
            "RESTful APIs",
            "Git & GitHub",
          ],
          date: "2024",
          category: "Finance Application",
        },
        advisoryai: {
          id: "advisoryai",
          title: "AdvisoryAI",
          description:
            "AI-powered platform designed to revolutionize financial advising through automation and intelligent insights.",
          longDescription:
            "AdvisoryAI is an innovative solution tailored for financial advisers, paraplanners, and firms. It features AI employees like Evie and Emma who assist in generating client documents, summaries, and personalized financial reports in seconds. I contributed to building intuitive user flows, enhancing the frontend experience, and ensuring seamless integration of AI services.",
          image: "https://res.cloudinary.com/dqciqsoy0/image/upload/v1745559169/lupkux745v00tzfjn3ep.png",
          tags: [
            "React",
            "JavaScript",
            "Frontend Development",
            "AI Integration",
            "Fintech",
          ],
          githubUrl: "", // Private or not available publicly
          liveUrl: "https://advisoryai.com/",
          features: [
            "AI assistant 'Evie' for financial advisors",
            "AI assistant 'Emma' for paraplanners",
            "Automated creation of suitability reports and review notes",
            "Advanced tone-matching and dialect adaptation",
            "Client fact find updates using AI",
            "Data security and compliance support",
          ],
          technologies: [
            "React.js",
            "JavaScript (ES6)",
            "Next.js",
            "Tailwind CSS",
            "OpenAI GPT APIs",
            "REST APIs",
            "Git & GitHub",
          ],
          date: "2024",
          category: "AI-powered Fintech Application",
        },
        sanchitHealthcare: {
          id: "sanchitHealthcare",
          title: "Sanchit HealthCare LLP",
          description:
            "A leading supplier of medical and surgical equipment, providing high-quality solutions to healthcare institutions across India.",
          longDescription:
            "Established in 2009, Sanchit HealthCare LLP has emerged as a prominent marketing company specializing in medical and surgical equipment. With a commitment to customer satisfaction, the company offers a range of products including patient monitors, ECG machines, and oxygen concentrators. Their focus on quality is demonstrated through ISO 9001 and CE certifications, ensuring reliable and efficient healthcare solutions.",
          image: "https://res.cloudinary.com/dqciqsoy0/image/upload/v1745559185/uvkeczgw2uebrhqonpyj.png",
          tags: ["Medical Equipment", "Healthcare Solutions"],
          githubUrl:
            "https://github.com/harshit-parashar-3/sanchit-healthcare-react", // Not applicable
          liveUrl: "https://sanchithealthcarellp.com/",
          features: [
            "Supply of diagnostic instruments and rapid test kits",
            "Provision of critical care and respiratory equipment",
            "Customized solutions for hospitals and clinics",
            "Emphasis on high-quality, cost-effective products",
            "Strong after-sales support and service",
          ],
          technologies: [
            "Medical Device Technology",
            "Quality Assurance Standards",
            "Supply Chain Management",
            "Customer Relationship Management",
          ],
          date: "2009",
          category: "Medical Equipment Supplier",
        },
      };

      setProject(id && projectDataMap[id] ? projectDataMap[id] : null);
      setLoading(false);
    }, 800);
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-28 pb-20">
        <div className="container px-6 mx-auto">
          {/* Back button */}
          <Link
            to="/#projects"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ChevronLeft size={18} className="mr-1" />
            Back to Projects
          </Link>

          {/* Hero section */}
          <div className="relative rounded-2xl overflow-hidden h-96 mb-12 reveal">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <div>
                {project.category && (
                  <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/80 text-white rounded-full mb-4">
                    {project.category}
                  </span>
                )}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {project.title}
                </h1>
                {project.date && (
                  <p className="text-white/80 text-sm">{project.date}</p>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div
              className="lg:col-span-2 reveal"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="glass-morphism rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {project.longDescription
                    ?.split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index} className="mb-4 text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>

              {project.features && (
                <div className="glass-morphism rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary mr-3"></span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div
              className="lg:col-span-1 reveal"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Project links */}
              <div className="glass-morphism rounded-xl p-8 mb-8">
                <h3 className="text-xl font-bold mb-6">Project Links</h3>
                <div className="space-y-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <span className="font-medium">Live Demo</span>
                      <ExternalLink size={18} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <span className="font-medium">GitHub Repository</span>
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Technologies */}
              {project.technologies && (
                <div className="glass-morphism rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold mb-6">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block py-1 px-3 text-sm font-medium bg-secondary/70 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {project.tags && (
                <div className="glass-morphism rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-6">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block py-1 px-3 text-sm font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
