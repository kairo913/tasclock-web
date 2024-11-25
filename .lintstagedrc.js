import path from "path";
import process from "process";

const buildPrettierCommand = (filenames) =>
    `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

const buildEslintCommand = (filenames) =>
    `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

export default {
    "*.{js,jsx,ts,tsx}": [buildPrettierCommand, buildEslintCommand],
};
