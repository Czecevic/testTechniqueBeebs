export interface EventResult {
  [key: string]: string;
}

export interface EventCardProps {
  event: EventResult;
}

export interface EventTagsProps {
  allTags: string[];
  selectedTags: string[];
  handleTagChange: (tag: string) => void;
  openSideBar: boolean;
  setSortBy: (sort: string) => void;
  setSortOrder: (order: string) => void;
}

export interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export interface ErrorProps {
  errorMessage: string | null;
}

// EventCard

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  link?: string;
}

export interface MediaProps {
  image: string;
  alt: string;
  height?: string;
}

type VariantType = "subtitle1" | "h1" | "body2" | "h6";

export interface TypographyProps {
  variant: VariantType;
  children: React.ReactNode;
  className?: string;
}

// EventTags

export interface RadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxButtonProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export interface SortOptionProps {
  selectedOption: string;
  handleSortChange: (value: string) => void;
}

export interface TagSelectorProps {
  allTags: string[];
  selectedTags: string[];
  handleTagChange: (tag: string) => void;
}
