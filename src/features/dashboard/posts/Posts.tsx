import { useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components';
import Card from '../../../components/cards/Card';
import Select from '../../../components/form/Select';
import Loading from '../../../components/Loading';
import HeadingText from '../../../components/typography/HeadingText';
import { getPosts } from '../../../services/post.service';
import { useUserOptions } from '../../../utils/hooks/useUserOptions';
import { IPost } from '../../../utils/type/IPost';
import { useState } from 'react';

const Posts = () => {
  useQueryClient();

  const query = useQuery('posts', getPosts);
  const options = useUserOptions();

  const [filterWith, setFilterWith] = useState<number | string>('all');

  const handleOnSelect = (value: number | string) => {
    setFilterWith(value);
  };

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
          ?.filter((post: IPost) => {
            if (filterWith === 'all') {
              return true;
            }
            return post.userId === filterWith;
          })
          .map((post: IPost) => (
            <Card
              key={`post-${post.id}`}
              title={`user: ${post.userId} ${post.title}`}
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
  width: 50%;
`;
