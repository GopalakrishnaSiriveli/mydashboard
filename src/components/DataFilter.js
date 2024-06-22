import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  margin: 1rem;
  text-align: center;
`;

const Label = styled.label`
  margin-right: 0.5rem;
`;

const DataFilter = ({ year, setYear }) => {
  const handleChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <FilterContainer>
      <Label htmlFor="year">Select Year: </Label>
      <select id="year" value={year} onChange={handleChange}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </FilterContainer>
  );
};

export default DataFilter;
