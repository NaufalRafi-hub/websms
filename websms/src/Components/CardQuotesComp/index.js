import React from "react";
import {
  CardAvatar,
  CardBottom,
  CardDetails,
  CardHeader,
  CardWrapper,
  Head,
  Img,
  Line,
  Name,
  Quotes,
  Wrapper,
} from "./CardQuotesElements";
import Data from "./Data";

const CardQuotesComp = () => {
  return (
    <Wrapper>
      {Data.map((data, index) => (
        <CardWrapper key={index}>
          <CardHeader>
              <Quotes>"{data.quotes}"</Quotes>
          </CardHeader>
          <CardBottom>
            <CardAvatar>
              <Img src={data.ava} alt="profile"/>
            </CardAvatar>
            <CardDetails>
                <Head>
                    <Line />
                    <Name>{data.name}</Name>
                </Head>
                <span>{data.perusahaan}</span>
            </CardDetails>
          </CardBottom>
        </CardWrapper>
      ))}
    </Wrapper>
  );
};

export default CardQuotesComp;
