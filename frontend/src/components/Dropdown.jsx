import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled Components
const DropdownContainer = styled.div`
  position: relative;
  width: 150px;
`;

const DropdownHeader = styled.div`
  border: 1px solid #C9C9C9;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 100;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

// Default items if no custom list is provided
const defaultItems = ['This Month', 'This Day', 'This Week', 'This Year'];

const Dropdown = ({ list = defaultItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(list[0]);

  // Update the selected item when the provided list changes
  useEffect(() => {
    if (list.length > 0) {
      setSelected(list[0]);
    }
  }, [list]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown}>
        {selected}
        <svg
          style={{
            transition: '0.2s ease-in-out',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 10L12 15L17 10H7Z" fill="currentColor" />
        </svg>
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {list.map((item) => (
            <DropdownItem key={item} onClick={() => handleSelect(item)}>
              {item}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
