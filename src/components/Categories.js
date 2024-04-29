import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";

const CategoriesStyle = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  gap: 15px;
  @media screen and (max-width: 768px) {
    width: 100%;

    // 반응형에서 스크롤바생성
    overflow-x: auto;
    // 또는
    /* display: flex;
    flex-wrap: wrap; */
  }
`;

const NavLinkStyle = styled(NavLink)`
  font-size: 1.125rem;
  /* cursor: pointer; */
  white-space: pre;
  padding-bottom: 0.25rem;

  &:hover {
    color: #a5a5a5;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #f4a4a4;
    color: #f4a4a4;
  }

  /* ${props =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #f4a4a4;
      color: #f4a4a4;
    `} */
`;

const categories = [
  { name: "all", text: "전체보기" },
  { name: "business", text: "비지니스" },
  { name: "entertainment", text: "엔터테인먼트" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sports", text: "스포츠" },
  { name: "technology", text: "기술" },
];

const Categories = () => {
  return (
    <CategoriesStyle>
      {categories.map(category => (
        <NavLinkStyle
          key={category.name}
          to={category.name === "all" ? "/" : `/${category.name}`}
          // className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {category.text}
        </NavLinkStyle>
      ))}
    </CategoriesStyle>
  );
};

export default Categories;
