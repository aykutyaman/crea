import { ReactNode, useEffect, useState } from 'react';
import * as D from '@crea/domain';
import getConfig from 'next/config';
import Comment from '../comment';

export interface CommentsProps {
  children?: ReactNode;
  productId: D.ID;
}

const {
  publicRuntimeConfig: { API },
} = getConfig();

export const Comments = ({ productId }: CommentsProps) => {
  const [comments, setComments] = useState<D.Comments>(null);

  useEffect(() => {
    fetch(`${API}/comments/${productId}`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setComments(data.comments));
  }, [productId]);

  return (
    <div>
      <ul className="">
        {comments && comments.map((comment) => <Comment comment={comment} />)}
      </ul>
    </div>
  );
};

export default Comments;
