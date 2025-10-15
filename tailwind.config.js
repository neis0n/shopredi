module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply m-0;
}