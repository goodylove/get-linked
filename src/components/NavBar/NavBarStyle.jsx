import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-top: 20px;
  padding: 20px 20px;
  ul {
    color: white;
    list-style-type: none;
    gap: 35px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .mobile {
    display: none;
  }
  @media (max-width: 768px) {
    .logo {
      width: 100px;
    }
    ul {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;
