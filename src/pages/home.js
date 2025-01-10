import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import ReactMarkdown from 'react-markdown';
import NoteFeed from '../components/NoteFeed';

import { useQuery, gql } from '@apollo/client';

const GET_NOTES = gql`
  query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error!</p>;
  return <NoteFeed notes={data.noteFeed.notes} />;
};

export default Home;
