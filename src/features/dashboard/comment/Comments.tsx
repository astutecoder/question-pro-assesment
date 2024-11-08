import { useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components';
import Card from '../../../components/cards/Card';
import { getComments } from '../../../services/comments.service';
import Loading from '../../../components/Loading';
import HeadingText from '../../../components/typography/HeadingText';
import { useMemo, useState } from 'react';
import Select from '../../../components/form/Select';

interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const Posts = () => {
  useQueryClient();

  const query = useQuery('comments', getComments);
  const [filterWith, setFilterWith] = useState<number | string>('all');

  const options: { label: string; value: number }[] = useMemo(() => {
    if (!query.data?.length || query.isLoading) {
      return [];
    }

    return query.data.map((data: IComment) => ({
      label: data.name,
      value: data.id,
    }));
  }, [query.data?.length]);

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
            return comment.id === filterWith;
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
