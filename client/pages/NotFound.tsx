import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-secondary/40 px-6 py-24 text-center">
      <span className="rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
        404
      </span>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        We couldn’t find that page
      </h1>
      <p className="mt-4 max-w-xl text-base text-muted-foreground">
        The page you’re looking for may have been moved or the link you followed
        is outdated. Explore our key services or head back to the homepage.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary/90"
        >
          Return Home
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center justify-center rounded-lg border border-border/70 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/60 hover:text-primary"
        >
          View Services
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
