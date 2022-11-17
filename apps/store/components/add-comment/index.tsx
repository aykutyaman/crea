import { ReactNode, useState } from 'react';
import * as D from '@crea/domain';
import getConfig from 'next/config';
import {
  AutoField,
  AutoForm,
  SubmitField,
  ErrorsField,
} from 'uniforms-unstyled';
import * as styles from './index.css';
import { createValidator } from '../../pages/helpers';
import JSONSchemaBridge from 'uniforms-bridge-json-schema';

const schemaValidator = createValidator(D.CommentLike);
const schema = {
  title: 'Comment',
  type: 'object',
  properties: {
    text: { type: 'string' },
  },
  required: ['text'],
};
const bridge = new JSONSchemaBridge(schema, schemaValidator);

export interface AddCommentProps {
  children?: ReactNode;
  onSubmit: (comment: D.CommentLike) => void;
}

const {
  publicRuntimeConfig: { API },
} = getConfig();

export const AddComment = ({ onSubmit }: AddCommentProps) => {
  const handleSubmit = (comment: D.CommentLike) => {
    onSubmit(comment);
  };

  return (
    <div className={styles.container}>
      <AutoForm
        schema={bridge}
        onSubmit={(comment) => {
          const decoded = D.CommentLike.decode(comment);

          if (decoded._tag === 'Right') {
            handleSubmit(decoded.right);
          }
        }}
        ref={(form) => {
          if (form) form.reset();
        }}
      >
        <AutoField
          name="text"
          className={styles.input}
          placeholder="Your comment..."
        />
        <SubmitField className={styles.button} value="Comment" />
        <ErrorsField />
      </AutoForm>
    </div>
  );
};

export default AddComment;
