import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SectionHeader = ({ title, linkText = "View All", linkTo = "#" }) => {
  return (
    <div className="flex justify-between items-center mb-6 px-4 md:px-0">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white relative pl-4 after:content-[''] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-6 after:bg-blue-500 after:rounded-full">
        {title}
      </h2>
      <Link
        to={linkTo}
        className="text-blue-500 hover:text-blue-700 font-medium text-sm flex items-center gap-1 transition-colors"
      >
        {linkText} <FaArrowRight size={12} />
      </Link>
    </div>
  );
};

export default SectionHeader;
