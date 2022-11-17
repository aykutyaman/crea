import { PathReporter } from 'io-ts/PathReporter';
import * as t from 'io-ts';

export function createValidator<A, B>(codec: t.Type<A, B>) {
  return (model: Record<string, unknown>) => {
    const decoded = codec.decode(model);
    return decoded._tag === 'Left'
      ? {
          details: PathReporter.report(decoded).map((message) => ({
            message,
            instancePath: '',
            params: {},
          })),
        }
      : null;
  };
}
