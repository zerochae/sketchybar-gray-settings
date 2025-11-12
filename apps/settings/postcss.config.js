import path from "path";
import { fileURLToPath } from "url";
import pandacss from "@pandacss/dev/postcss";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  plugins: [
    pandacss({
      cwd: path.resolve(__dirname, "../../packages/panda"),
    }),
  ],
};
