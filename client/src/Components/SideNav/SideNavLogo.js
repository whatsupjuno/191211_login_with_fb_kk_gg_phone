import React from "react";
import styled from "styled-components";

/** NavbarLogo 최상단 */
const Wrapper = styled("div")`
  height: 106px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/** Navbar 로고 이미지 */
const LogoStyle = styled("a")`
  display: block;
  box-sizing: border-box;
  width: 120px;
  margin-top: 40px;
  margin-bottom: 40px;
  align-self: center;

  & > img {
    display: block;
    width: 100%;
  }
`;

/**
 * Navbar 로고.
 * `public`폴더를 기준 아이콘 경로.
 */

export default () => {
  return (
    <Wrapper>
      <LogoStyle href={"/"}>
        <img alt="" src={"/images/coworksys_sideNavLogo.png"} />
      </LogoStyle>
    </Wrapper>
  );
};
