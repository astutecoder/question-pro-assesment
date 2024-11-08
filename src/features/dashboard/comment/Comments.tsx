import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components';
import Card from '../../../components/cards/Card';
import Select from '../../../components/form/Select';
import Loading from '../../../components/Loading';
import HeadingText from '../../../components/typography/HeadingText';
import { getComments } from '../../../services/comments.service';
import { usePostOptions } from '../../../utils/hooks/usePostOptions';
import { IComment } from '../../../utils/type/IComment';

const Posts = () => {
  useQueryClient();

  const query = useQuery('comments', getComments);
  const options = usePostOptions();

  const [filterWith, setFilterWith] = useState<number | string>('all');

  const handleOnSelect = (value: number | string) => {
    setFilterWith(value);
  };

  if (query.isLoading) return <Loading />;

  return (
    <>
      <Header>
        <TitleContainer>
          <HeadingText>Comments</HeadingText>
        </TitleContainer>
        <SelectContainer>
          <Select items={options} onSelect={handleOnSelect} />
        </SelectContainer>
      </Header>
      <Cards>
        {query.data
          ?.filter((comment: IComment) => {
            if (filterWith === 'all') {
              return true;
            }
            return comment.postId === filterWith;
          })
          .map((comment: IComment) => (
            <Card
              key={`comments-${comment.id}`}
              title={comment.name}
              content={comment.body}
            />
          ))}
      </Cards>
    </>
  );
};

export default Posts;

const Header = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  flex: 2;
`;

const SelectContainer = styled.div`
  flex: 1;
`;

const Cards = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
