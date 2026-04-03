// components/SearchIcon.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function SearchIcon({ isOpen, onClick }) {
  return (
    <FontAwesomeIcon
      icon={isOpen ? faTimes : faMagnifyingGlass}
      className="search-icon cursor-pointer transition-all duration-200"
      onClick={onClick}
    />
  );
}