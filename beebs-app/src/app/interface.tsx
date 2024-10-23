export interface EventResult {
  [key: string]: string;
}

export interface EventCardProps {
  event: EventResult;
}

export interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export interface EventTagsProps {
  allTags: string[];
  selectedTags: string[];
  handleTagChange: (tag: string) => void;
  openSideBar: boolean;
  setSortBy: (sort: string) => void;
  setSortOrder: (order: string) => void;
}
