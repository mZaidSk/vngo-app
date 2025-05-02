import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon, SearchIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface ActivityFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  selectedStatus: string;
  setSelectedStatus: (value: string) => void;
  selectedDate: Date | null;
  setSelectedDate: (value: Date | null) => void;
  selectedTag: string;
  setSelectedTag: (value: string) => void;
  resetFilters: () => void;
}

const tagOptions = [
  "All Tags",
  "Environmental",
  "Animal Welfare",
  "Education",
  "Community",
  "Food",
];

const statuses = ["All", "Upcoming", "Ongoing", "Completed"];

const ActivityFilters: React.FC<ActivityFiltersProps> = ({
  search,
  setSearch,
  selectedStatus,
  setSelectedStatus,
  selectedDate,
  setSelectedDate,
  selectedTag,
  setSelectedTag,
  resetFilters,
}) => {
  return (
    <div className="p-6 bg-white">
      {/* Filter Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center mb-4">
        <div className="mb-3 relative col-span-2 w-full">
          <span className="absolute left-3 top-3 text-gray-400">
            <SearchIcon className="h-5 w-5" />
          </span>
          <input
            type="text"
            placeholder="Search for activities..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-1 text-sm placeholder:text-gray-400"
          />
        </div>
        {/* <Input
          placeholder="Search for activities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="col-span-2 w-full bg-white"
          
        /> */}

        <Select onValueChange={setSelectedStatus} value={selectedStatus}>
          <SelectTrigger className="bg-white w-full">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            {statuses.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="justify-start text-left font-normal bg-white w-full"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {selectedDate ? format(selectedDate, "PPP") : "Select Date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={selectedDate ?? undefined}
              onSelect={(date) => setSelectedDate(date ?? null)}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        {/* Reset Button */}
        <Button
          variant="ghost"
          className="text-red-600 hover:bg-red-100 transition-colors w-full"
          onClick={resetFilters}
        >
          Reset Filters
        </Button>
      </div>

      {/* Tag Badges */}
      <div className="flex flex-wrap pt-2 gap-3">
        {tagOptions.map((tag) => (
          <Badge
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`cursor-pointer px-4 py-1.5 rounded-full transition-colors text-sm font-medium ${
              tag === selectedTag
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-800 hover:bg-[#daffe4]"
            }`}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ActivityFilters;
