import React from 'react';
import { Search } from 'lucide-react';
import { destinations } from '../data/destinations';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = React.useState('');
  const [suggestions, setSuggestions] = React.useState<typeof destinations>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      const filtered = destinations.filter((dest) =>
        dest.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search destinations in Madhya Pradesh..."
          className="w-full px-6 py-4 text-lg rounded-full bg-white/5 backdrop-blur-md 
                   border-2 border-white/30 focus:outline-none focus:border-white
                   shadow-lg pl-14 text-white"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-6 h-6" />
      </form>

      {suggestions.length > 0 && (
        <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden">
          {suggestions.map((dest) => (
            <div
              key={dest.id}
              className="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setQuery(dest.name);
                onSearch(dest.name);
                setSuggestions([]);
              }}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-12 h-12 rounded-md object-cover mr-4"
              />
              <div>
                <div className="font-medium">{dest.name}</div>
                <div className="text-sm text-gray-500">{dest.category}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
