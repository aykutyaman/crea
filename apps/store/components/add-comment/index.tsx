import { ReactNode } from 'react';
import * as D from '@crea/domain';
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
    score: {
      type: 'integer',
      minimum: 0,
      maximum: 5,
    },
  },
  required: ['text', 'score'],
};
const bridge = new JSONSchemaBridge(schema, schemaValidator);

export interface AddCommentProps {
  children?: ReactNode;
  onSubmit: (comment: D.CommentLike) => void;
}

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
        <div className={styles.fieldsContainer}>
          <AutoField
            name="text"
            className={styles.input}
            placeholder="Your comment..."
          />
          <AutoField
            name="score"
            className={styles.score}
            placeholder="Score"
          />
        </div>

        <SubmitField className={styles.button} value="Comment" />
        <ErrorsField />
      </AutoForm>
    </div>
  );
};

export default AddComment;
