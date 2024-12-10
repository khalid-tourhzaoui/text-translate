// Importing React and the required icons from the @tabler/icons-react library
import React from "react";
import {
  IconBriefcase, // Icon representing business
  IconBulb,      // Icon representing creativity
  IconSchool,    // Icon representing education
  IconWriting,   // Icon representing writing
  IconMoodSmile, // Icon representing communication
  IconHeart,     // Icon representing health
} from "@tabler/icons-react";

// Defining an array of categories
// Each category includes an icon and a descriptive label
const categories = [
  { icon: IconBriefcase, label: "Business" },     // Category for business
  { icon: IconSchool, label: "Education" },      // Category for education
  { icon: IconBulb, label: "Creative" },         // Category for creativity
  { icon: IconHeart, label: "Health" },          // Category for health
  { icon: IconWriting, label: "Journaling" },    // Category for journaling
  { icon: IconMoodSmile, label: "Communication" } // Category for communication
];

// Defining a functional React component
// This component renders a list of category links
const CategoryLinks: React.FC = () => {
  return (
    <div className="mt-10 sm:mt-20">
      {/* Iterating over the `categories` array to display each category */}
      {categories.map(({ icon: Icon, label }) => (
        <a
          key={label} // Unique key for each link, based on the label
          className="m-1 py-2 px-3 inline-flex 
          items-center gap-x-2 text-sm font-medium 
          rounded-lg border border-gray-200 
          bg-white text-gray-800 shadow-sm hover:bg-gray-50
           disabled:opacity-50 disabled:pointer-events-none
            dark:bg-neutral-900 dark:border-neutral-700
             dark:text-white dark:hover:bg-neutral-800"
          href="#" // Destination link (currently a placeholder)
        >
          {/* Displaying the icon associated with the category */}
          <Icon size={18} />
          {/* Displaying the label of the category */}
          {label}
        </a>
      ))}
    </div>
  );
};

// Exporting the component for use in other parts of the application
export default CategoryLinks;
