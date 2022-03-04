import React from "react";
import styled, { keyframes } from "styled-components";
import { animated, useSpring, to } from "react-spring";
import { useHover } from "@use-gesture/react";

const S = {};

const marqueeAn = keyframes`
  100% {
		transform: translate3d(-50%, 0, 0);
	}
`;

S.Item = styled.div`
  cursor: default;
  position: relative;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 -1px var(--color-border);

  :last-child {
    box-shadow: 0 1px var(--color-border), 0 -1px var(--color-border);
  }
`;

S.Link = styled(animated.a)`
  display: block;
  position: relative;
  cursor: pointer;
  text-decoration: none;

  white-space: nowrap;
  font-size: 6vw;
  line-height: 1.2;
  font-weight: 600;
  padding: 1vh 1vw 0;
  text-transform: uppercase;

  :focus,
  :focus-visible {
    color: var(--menu-focus);
  }

  :focus:not(:focus-visible) {
    color: var(--color-link);
  }
`;

S.Marquee = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: var(--marquee-bg);
  /* transform: translate3d(0, 101%, 0); */
`;

S.MarqueeInnerWrapper = styled(animated.div)`
  width: 100%;
  height: 100%;
  /* transform: translate3d(0, -101%, 0); */
`;

S.MarqueeInner = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  will-change: transform;
  animation: ${marqueeAn} 15s linear infinite;

  span {
    color: var(--marquee-text);
    text-align: center;
    font-weight: 400;
    white-space: nowrap;
    font-size: 6vw;
    line-height: 1.2;
    padding: 1vh 1vw 0;
    text-transform: uppercase;
  }
`;

S.MarqueeImg = styled.img`
  width: 15vw;
  height: 70%;
  margin: 0 2vw;
  border-radius: 5vw;
  background-size: cover;
  background-position: 50% 50%;
`;

const MenuItem = ({ link, marquee }) => {
  const [{ y }, api] = useSpring(() => ({
    y: 101
  }));
  const bind = useHover((state) => {
    const {
      type,
      hovering,
      movement: [, my]
    } = state;

    // console.log(type);
    // console.log(hovering);
    api.start({ y: hovering ? 0 : my > 0 ? 101 : -101 });

    // console.log(state);
  });

  return (
    <S.Item>
      <S.Link href={link.url} {...bind()}>
        {link.name}
      </S.Link>
      <S.Marquee style={{ y: to([y], (y) => `${y}%`) }}>
        <S.MarqueeInnerWrapper style={{ y: to([y], (y) => `-${y}%`) }}>
          <S.MarqueeInner aria-hidden="true">
            {[...marquee, ...marquee].map((item, index) => {
              return (
                <>
                  <span>{item.name}</span>
                  <S.MarqueeImg
                    src={ require(`../../assets/img/${item.url}`) }
                  />
                </>
              );
            })}
          </S.MarqueeInner>
        </S.MarqueeInnerWrapper>
      </S.Marquee>
    </S.Item>
  );
};

export default MenuItem;
