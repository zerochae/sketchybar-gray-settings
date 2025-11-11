import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  plugins: {
    '@pandacss/dev/postcss': {
      cwd: path.resolve(__dirname, '../../packages/panda'),
    },
  },
};
