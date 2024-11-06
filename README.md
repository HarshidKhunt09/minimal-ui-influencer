## 🚀 Project Name

Minimal UI - Influencer

## 📝 Note

I'm using React.js to build this project. According to the provided test task, it requires Next.js, but there isn't a free Minimal UI repository for Next.js and I think structure is very similar in both. I'm using a different graph for analytics since I couldn't find a graph component in the older version of Minimal UI. I think it's available in the newer version, and building a graph component from scratch would take some time. Aside from this, everything works properly in terms of both functionality and UI.

## ⚙️ Installation

1. Clone the repository

```
git clone https://github.com/HarshidKhunt09/minimal-ui-influencer.git
```

2. Navigate to the project directory

```
cd minimal-ui-influencer
```

3. Install dependencies:

```
npm i
```

4. Create `.env` add all environment variables.
5. Start the development server:

```
npm run dev
```

6. Open your browser and go to [http://localhost:3039](http://localhost:3039) to view the app.

## 📝 Environment Variables

The following environment variables are used in this project:

- **VITE_API_URL**: Specifies the URL of the API server.
- **VITE_API_KEY**: Specifies api key of app.

Before running the project, make sure to set these environment variables in a `.env` file in the project root directory.

## 🌟 Contribution Guidelines

These are the guidelines to be followed while contributing to this codebase.

### Basic Rules

- Use a semicolon at the end of every statements.
- DO NOT LEAVE trailing whitespaces at the end of any sentence.
- whitespace must not be used_inside_parantheses but always put spaces around operators, oprands. and after commas.That affects the readability Example:

```
for (let i = 0; i < 10; i++) {} ✅
for(let i=0; i<10; i++){} ❌
```

- Prefer modern ES functions whenever possible.
- Prefer hooks as much as possible.
- ALWAYS use variable with const.
- Limit the use of nested ternary operators to maintain code readability.
- Utilize object and array destructuring to simplify code and make it more readable.
- Prefer using LESS for styling instead of inline styles.
- Use React Fragments (<>...</>) to group multiple elements without adding an extra node to the DOM.
- AVOID Using Index as a Key When Mapping Over Arrays, use unique and stable keys when mapping over arrays to improve rendering performance and avoid potential issues with component reordering.
- When using useEffect hook, make sure to have a cleanup function unless it is not needed.
- Stay updated with React's official documentation, guidelines, and best practices to leverage the latest features and improvements in React development.

## Thanks

