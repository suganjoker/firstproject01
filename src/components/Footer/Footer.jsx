import styled from "styled-components";
import React from "react";
import logo from "../../assets/dresteinLogo.svg";
const FooterHeader = styled.div`
  width: 90vw;
  margin-inline: auto;

  margin-top: 5rem;

  /* text-transform: uppercase; */
  border-radius: 20px 20px 0 0;
`;
const FooterTitle = styled.h1`
  font-size: 7vw;
  font-weight: bold;
  display: flex;
  text-transform: capitalize;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Montserrat", sans-serif;

  /* font-family: poppins, sans-serif; */
  /* padding-left: 40px; */
`;
const FooterContainer = styled.div`
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;
const DresteinLogo = styled.img`
  width: 30%;
`;
const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;

  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

const FooterTextTitle = styled.h1`
  padding: 1rem 0;
`;

const FooterMainText = styled.p``;

const FooterConatinAll = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterBottom = styled.div`
  color: white;
  /* background: linear-gradient(0.25turn, #312755, #1c1c20, #362430); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 1rem; */
  padding: 0.5rem 1rem;
  border-radius: 1rem 1rem 0 0;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
`;
const Policy = styled.div``;
const MadewithLove = styled.div``;
const Copyright = styled.div``;
function Footer() {
  return (
    <FooterHeader>
      <FooterTitle>About us</FooterTitle>
      <FooterConatinAll>
        <FooterContainer>
          <DresteinLogo src={logo} />
          <FooterText>
            <FooterTextTitle>Lorem ipsum dolor sit amet.5</FooterTextTitle>
            <FooterMainText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              neque, consequatur magnam aliquam doloremque nesciunt similique
              praesentium vel pariatur provident.
            </FooterMainText>
          </FooterText>
        </FooterContainer>
      </FooterConatinAll>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            class="gmap_iframe"
            title="SEC Location"
            width="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=saveetha engineering college&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <a href="https://piratebay-proxys.com/">Piratebay</a>
        </div>
      </div>
      <FooterBottom>
        <Policy>Privacy Policy | Terms</Policy>
        <MadewithLove> Made with ❤️ by IT DEPT </MadewithLove>
        <Copyright>© 2022 SAVEETHA ENGINEERING COLLEGE</Copyright>
      </FooterBottom>
    </FooterHeader>
  );
}

export default Footer;
