import { CaretDown, CaretUp } from 'phosphor-react';
import { ChangeEvent, FC, MouseEvent, useMemo, useRef, useState } from 'react';
import { useOuterClick } from 'react-outer-click';
import styled from 'styled-components';
import BodyText from '../typography/BodyText';
import { COLORS } from '../../utils/constants/colors';

type OptionItem = {
  label: string;
  value: number | string;
};

type SelectProps = {
  items: OptionItem[];
  onSelect: (value: string | number) => void;
};

const ALL_ITEM = { label: 'All', value: 'all' };

const Select: FC<SelectProps> = ({ items, onSelect }) => {
  const [query, setQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<OptionItem>(ALL_ITEM);

  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItem = useMemo(() => {
    return items?.filter((item) =>
      item?.label?.toLowerCase()?.startsWith(query.toLowerCase())
    );
  }, [items, query]);

  const handleWrapperClick = (e: MouseEvent) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSelect = (e: MouseEvent, item: OptionItem) => {
    e.preventDefault();
    onSelect(item.value);
    setSelectedItem(item);
    setQuery('');
  };

  const handleQueryUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    setQuery(value);
  };

  useOuterClick(ref, () => {
    setIsOpen(false);
    setQuery('');
  });

  return (
    <Container ref={ref} onClick={handleWrapperClick}>
      <Wrapper>
        <Selector>
          <input onChange={handleQueryUpdate} value={query} ref={inputRef} />
          <Label>{query.length > 0 ? '' : selectedItem.label}</Label>
        </Selector>
        <Indicator>{isOpen ? <CaretUp /> : <CaretDown />}</Indicator>
      </Wrapper>
      <Options visible={isOpen}>
        <Option isSelected={selectedItem.value === ALL_ITEM.value}>
          <BodyText onClick={(e) => handleSelect(e, ALL_ITEM)}>All</BodyText>
        </Option>
        {filteredItem.map((item) => (
          <Option
            key={`option-${item.value}`}
            isSelected={selectedItem.value === item.value}
          >
            <BodyText onClick={(e) => handleSelect(e, item)}>
              {item.label}
            </BodyText>
          </Option>
        ))}
      </Options>
    </Container>
  );
};

export default Select;

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  align-items: center;
`;

const Selector = styled.div`
  position: relative;
  overflow: hidden;

  input {
    padding: 12px;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;

    min-width: 10px;
    width: fit-content;

    &:focus {
      outline: none;
      border: none;
    }
  }
`;

const Label = styled(BodyText)`
  padding: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 150px;
`;

const Indicator = styled.div`
  padding: 12px;
`;

const Options = styled.div<{ visible?: boolean }>`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);

  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 150px;
  overflow-y: auto;
`;

const Option = styled.div<{ isSelected?: boolean }>`
  padding: 10px;

  background-color: ${(props) =>
    props.isSelected ? COLORS.PRIMARY : 'transparent'};

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:last-child {
    border: 0;
  }
`;
