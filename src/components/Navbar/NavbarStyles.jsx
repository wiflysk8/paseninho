import styled from "styled-components";

export const NavbarStyled = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  background: #fff;
  border-bottom: 1px solid #7f7f7f80;
`;

export const LogoContainer = styled.div`

  display: flex;
  gap: 24px;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  color:var(--color-navbarText)
  font-family: "QuickSand";
  font-size: 24px;
  img {
    width: 80px;
    height: 80px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  @media screen and (max-width: 500px) {
    transition: 0.8s all ease;
    font-size: 1rem;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: #000;
  transition: 0.8s all ease;
  .NavLink {
    text-decoration: none;
    color: #000;
  }

  @media screen and (max-width: 500px) {
    transition: 0.8s all ease;
    font-size: 1rem;
  }
`;
