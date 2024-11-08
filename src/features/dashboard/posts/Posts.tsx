import { useMemo, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components';
import Card from '../../../components/cards/Card';
import Select from '../../../components/form/Select';
import Loading from '../../../components/Loading';
import HeadingText from '../../../components/typography/HeadingText';
import { getPosts } from '../../../services/post.service';

interface IPost {
  usrId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  useQueryClient();

  const query = useQuery('posts', getPosts);

  const [filterWith, setFilterWith] = useState<number | string>('all');

  const handleOnSelect = (value: number | string) => {
    setFilterWith(value);
  };

  const options: { label: string; value: number }[] = useMemo(() => {
    if (!query.data?.length || query.isLoading) {
      return [];
    }

    return query.data.map((data: IPost) => ({
      label: data.title,
      value: data.id,
    }));
  }, [query.data?.length]);

  if (query.isLoading) return <Loading />;

  return (
    <>
      <Header>
        <TitleContainer>
          <HeadingText>Posts</HeadingText>
        </TitleContainer>
        <SelectContainer>
          <Select items={options} onSelect={handleOnSelect} />
        </SelectContainer>
      </Header>

      <Cards>
        {query.data
          ?.filter((comment: IPost) => {
            if (filterWith === 'all') {
              return true;
            }
            return comment.id === filterWith;
          })
          .map((post: IPost) => (
            <Card
              key={`post-${post.id}`}
              title={post.title}
              content={post.body}
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
  margin-bottom: 20px;
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
