import React from "react";
import { Link } from "react-router-dom";
import { GlassesIcon } from "../components/GlassesIcon";
import { Home as HomeIcon } from "lucide-react";

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 max-w-7xl mx-auto px-4">
      <div className="brand-card p-8 sm:p-12 max-w-lg w-full text-center space-y-6 bg-sunflower/20">
        
        {/* Mascot Confused Circle */}
        <div className="w-36 h-36 mx-auto rounded-full border-4 border-darkText overflow-hidden bg-white shadow-[6px_6px_0px_#1A1A1A]">
          <img
            src="/images/devansh_character.jpg"
            alt="Devansh Mascot 404 Confused"
            className="w-full h-full object-cover object-top scale-125 translate-y-2 rotate-12"
          />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson text-white text-xs font-mono font-bold border-2 border-darkText">
            <GlassesIcon size={14} />
            <span>ERROR 404</span>
          </div>

          <h1 className="text-3xl font-extrabold font-heading text-darkText">
            Data Point Not Found!
          </h1>
          <p className="text-xs sm:text-sm text-darkText/80 font-medium">
            Looks like this SQL query returned 0 rows or the route doesn't exist.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-extrabold font-heading text-white bg-crimson hover:bg-crimson-hover rounded-2xl border-2 border-darkText shadow-[4px_4px_0px_#1A1A1A]"
        >
          <HomeIcon className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

      </div>
    </div>
  );
};

export default NotFound;
