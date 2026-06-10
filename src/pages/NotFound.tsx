import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => (
  <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40vmax] w-[40vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />
    <h1 className="font-display text-8xl font-bold text-gradient md:text-9xl">
      404
    </h1>
    <p className="mt-4 text-lg text-muted-foreground">
      This page seems to have wandered off.
    </p>
    <Link to="/" className="btn-primary mt-8">
      <ArrowLeft size={16} />
      Back to Home
    </Link>
  </div>
);

export default NotFound;
