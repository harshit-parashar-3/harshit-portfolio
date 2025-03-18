import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Grid2X2Icon,
  ListIcon,
  ArrowUpDownIcon,
  SearchIcon,
  TagIcon,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseScrollTop } from "@/hooks/use-scroll-top";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  date?: string;
  category?: string;
}

const AllProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState<string[]>([]);
  const projectsPerPage = 6;

  UseScrollTop();
  useEffect(() => {
    setTimeout(() => {
      const projectsData: Project[] = [
        {
          id: "avcwise",
          title: "AVCWISE",
          description:
            "A managed solution for Local Government Pension Scheme (LGPS) salary sacrifice shared cost AVCs.",

          image:
            "https://static.wixstatic.com/media/1b2a28_3e9a5f9f286f42a9b96d97e8dcf45108~mv2.jpg/v1/fill/w_726,h_522,fp_0.60_0.26,q_85,usm_0.66_1.00_0.01,enc_auto/hero_image.jpg",
          technologies: [
            "React.js",
            "JavaScript (ES6)",
            "HTML5 & CSS3",
            "RESTful APIs",
            "Git & GitHub",
          ],
          liveUrl: "https://home.avcwise.co.uk/",
          featured: true,
          date: "2023",
          category: "Finance Application",
        },
        {
          id: "vivup",
          title: "VIVUP",
          description:
            "A UK-leading employee benefits platform providing health and well-being solutions.",

          image:
            "https://vivupbenefits.co.uk/hs-fs/hubfs/Solutions%20Roundel/All%20Solutions%20-%20White%20BG%20-%20August@0.5x-1.png?width=1031&height=1027&name=All%20Solutions%20-%20White%20BG%20-%20August@0.5x-1.png",
          technologies: [
            "React.js",
            "JavaScript (ES6)",
            "HTML5 & CSS3",
            "RESTful APIs",
            "Git & GitHub",
          ],
          liveUrl: "https://vivupbenefits.co.uk/",
          featured: true,
          date: "2022",
          category: "Employee Benefits Platform",
        },
        {
          id: "voicerules",
          title: "VoiceRules - Global Phone System",
          description:
            "A global phone system allowing users to receive calls anywhere at a low cost.",
          image:
            "https://www.voicerules.com/assets/voicerules-cutomer-support-team-2c182da324b1d1d5169a2a649ca24a7866cc867cfa3b8ab8fa11178b8a0a282a.png",
          technologies: [
            "React.js",
            "JavaScript (ES6)",
            "HTML5 & CSS3",
            "RESTful APIs",
            "Git & GitHub",
          ],
          liveUrl: "https://www.voicerules.com/",
          featured: false,
          date: "2022",
          category: "Communication Platform",
        },
        {
          id: "invoicean",
          title: "Invoicean",
          description:
            "An advanced invoicing solution for freelancers, small businesses, and companies.",
          image:
            "https://invoicean.com/static/media/marketing-bg.129b9cfa9e5a40b6393a.png",
          technologies: [
            "React.js",
            "JavaScript (ES6)",
            "HTML5 & CSS3",
            "RESTful APIs",
            "Git & GitHub",
          ],
          liveUrl: "https://www.voicerules.com/",
          featured: false,
          date: "2022",
          category: "Finance Application",
        },
      ];

      setProjects(projectsData);
      setFilteredProjects(projectsData);
      setIsLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    let result = projects;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.technologies.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedTag) {
      result = result.filter((project) =>
        project.technologies.some(
          (tag) => tag.toLowerCase() === selectedTag.toLowerCase()
        )
      );
    }

    setFilteredProjects(result);
    setCurrentPage(1);
  }, [searchQuery, selectedTag, projects]);

  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  );
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const renderPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => handlePageChange(i)}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return items;
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container px-6 mx-auto py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              All Projects
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through my complete portfolio of web development and design
            projects
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid2X2Icon className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <ListIcon className="h-4 w-4" />
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <TagIcon className="h-4 w-4 text-muted-foreground" />
            <Badge
              variant={selectedCategory === "all" ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory("all")}
            >
              All
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div
          className={`mb-12 ${
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-6"
          }`}
        >
          {paginatedProjects.map((project) => (
            <Card
              key={project.id}
              className={`overflow-hidden border border-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${
                viewMode === "list" ? "flex flex-col md:flex-row" : ""
              }`}
            >
              {viewMode === "list" ? (
                <div className="md:w-1/3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover aspect-video md:aspect-square"
                  />
                </div>
              ) : (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              )}

              <div
                className={viewMode === "list" ? "md:w-2/3 flex flex-col" : ""}
              >
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className={viewMode === "list" ? "mt-auto" : ""}>
                  <Link
                    to={`/project/${project.id}`}
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    View Details
                  </Link>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
                className={
                  currentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
            {renderPaginationItems()}
            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Layout>
  );
};

export default AllProjects;
