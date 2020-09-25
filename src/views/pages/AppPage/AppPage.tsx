import React, { FC, useEffect } from 'react';
import { gql } from '@apollo/client';
import { client } from '../../../configuration/GraphQL';

export const AppPage: FC = () => {
  useEffect(() => {
    client
      .query({
        query: gql`
          query {
            todo(id:1) {
              id,
              title,
            }
          }
        `,
      })
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div>
      123
    </div>
  );
};
