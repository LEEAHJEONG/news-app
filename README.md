# 프로젝트 생성

- `npx create-react-app ./`
- `npm i normalize.css`
- `npm i @emotion/react`
- `npm i @emotion/styled`
<!-- - `npm i add sass` -->

- .prettierrc.json 파일 생성

```json
{
  "singleQuote": false,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

- `npm install eslint --dev`
- `npm install eslint-config-react-app --save-dev`
- `npx eslint --init`
- `npm install eslint-config-prettier --save-dev`

- .eslintrc.js 파일 수정

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
  },
};
```

- `npm install @babel/plugin-proposal-private-property-in-object --dev`
- `npm install react-router-dom`

- axios 설치
- `npm i axios`

- src.index.css 수정

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-style: none;
}
ul,
li {
  list-style: none;
}
a {
  color: #000000;
  text-decoration: none;
}
img {
  vertical-align: middle;
  border: 0;
}
html {
  font-size: 10px;
}
body {
  font-family: "Pretendard-Regular", sans-serif;
  font-size: 1rem;
  line-height: 1.25;
  letter-spacing: -0.23px;
  word-break: keep-all;
  color: #000000;
}
```

# 2

- src/App.js

```js
function App() {
  return (
    <div>
      <h1>뉴스 외부 API 연동 앱</h1>
    </div>
  );
}

export default App;
```

- src/index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

- public/index.html 기본적인 것 수정

-src/pages/NewsPage.js

```js
import React from "react";
import NewsItem from "../components/NewsItem";
import NewsList from "../components/NewsList";

const NewsPage = () => {
  return (
    <div>
      <h2>뉴스 목록 페이지입니다.</h2>
      <NewsList />
    </div>
  );
};

export default NewsPage;
```

# 3

- https://newsapi.org/register
- https://newsapi.org/s/south-korea-news-api
