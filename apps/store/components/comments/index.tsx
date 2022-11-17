import { ReactNode } from 'react';
import * as D from '@crea/domain';
import getConfig from 'next/config';
import Comment from '../comment';
import * as styles from './index.css';
import AddComment from '../add-comment';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export interface CommentsProps {
  children?: ReactNode;
  productId: D.ID;
}

const {
  publicRuntimeConfig: { API },
} = getConfig();

export const Comments = ({ productId }: CommentsProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (comment: D.CommentLike) => {
      return fetch(`${API}/comment`, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({ comment, productId }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('comments');
      },
    }
  );

  const {
    isLoading,
    error,
    data: comments,
  } = useQuery('comments', () =>
    fetch(`${API}/comments/${productId}`, {
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        return res.json();
      })
      .then((data) => data.comments as D.Comments)
      .catch((error) => {
        // TODO: handle all errors, decoding, network etc.
        throw new Error(error);
      })
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occured';

  return (
    <>
      <ul className={styles.container}>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
      <AddComment
        onSubmit={(comment) => {
          mutation.mutate(comment);
        }}
      />
    </>
  );
};

export default Comments;
