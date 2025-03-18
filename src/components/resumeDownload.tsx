import { saveAs } from "file-saver";
import { ExternalLink } from "lucide-react";

const ResumeDownload = () => {
  const handleDownload = () => {
    saveAs("/utils/Resume.pdf", "Harshit_Resume.pdf");
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center justify-center text-primary hover:text-primary/80 font-medium transition-colors"
    >
      Download Resume
      <ExternalLink size={16} className="ml-2" />
    </button>
  );
};

export default ResumeDownload;
