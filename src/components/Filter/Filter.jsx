import { useDispatch } from 'react-redux';
import { FilterWrapper, FilterInput } from './Filter.styled';
import { setFilterValue } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = evt =>
    dispatch(setFilterValue(evt.currentTarget.value.toLocaleLowerCase()));

  return (
    <FilterWrapper>
      Find contacts by Name:
      <FilterInput
        type="text"
        placeholder="Start typing a name..."
        onChange={changeFilter}
      />
    </FilterWrapper>
  );
};
