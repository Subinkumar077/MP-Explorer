import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const predefinedPlaces = [
  { id: 1, name: "Khajuraho Temples" },
  { id: 2, name: "Bandhavgarh National Park" },
  { id: 3, name: "Sanchi Stupa" },
  { id: 4, name: "Pachmarhi" },
  { id: 5, name: "Kanha National Park" },
  { id: 6, name: "Patalpani Waterfall" },
  { id: 7, name: "Taj-ul-Masjid" },
  { id: 8, name: "Gwalior Fort" },
  { id: 9, name: "Bhedaghat" },
  { id: 10, name: "Bhimbetka Rock Shelters" },
  { id: 11, name: "Chitrakoot" },
  { id: 12, name: "Marble Rock Boating Adventure" },
  { id: 13, name: "Tawa Reservoir" },
  { id: 14, name: "Maheshwar Ghats and Handloom Weaving" },
  { id: 15, name: "Raneh Falls Canyon Trek" },
  { id: 16, name: "Kailash Temple" },
  { id: 17, name: "Omkareshwar Temple" },
  { id: 18, name: "Mahakaleshwar Temple" },
];

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<typeof predefinedPlaces>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
    setShowDropdown(false); // Close dropdown after search
    // Navigate to Insights Section with the search query
    navigate(`/insightssection/${query}`); // Replace with your desired route
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      const filtered = predefinedPlaces.filter((place) =>
        place.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions(predefinedPlaces);
    }
  };

  const handleFocus = () => {
    setShowDropdown(true); // Show dropdown when the search bar is focused
    if (!query.trim()) {
      setSuggestions(predefinedPlaces); // Show all predefined places if the search bar is empty
    }
  };

  const handleSuggestionClick = (name: string) => {
    setQuery(name);
    onSearch(name);
    setShowDropdown(false); // Close dropdown after selecting a suggestion
    // Navigate to Insights Section with the selected place name
    navigate(`/insightssection/${name}`); // Replace with your desired route
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder="Search destinations in Madhya Pradesh..."
          className="w-full px-6 py-4 text-lg rounded-full bg-white/5 backdrop-blur-md 
                   border-2 border-white/30 focus:outline-none focus:border-white
                   shadow-lg pr-14 text-white"
        />
        {/* Move the search icon to the right */}
        <Search
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-6 h-6 cursor-pointer"
          onClick={handleSearch}
        />
      </form>

      {showDropdown && suggestions.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute mt-2 w-full rounded-lg shadow-lg overflow-hidden z-10
                     bg-white/5 backdrop-blur-md border border-white/30 text-white"
        >
          <div className="max-h-48 overflow-y-auto">
            {suggestions.map((place, index) => (
              <div
                key={place.id}
                className={`flex items-center p-3 hover:bg-white/10 cursor-pointer ${
                  index >= 0 ? "border-t border-white/20" : ""
                }`}
                onClick={() => handleSuggestionClick(place.name)}
              >
                <div className="font-medium">{place.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
