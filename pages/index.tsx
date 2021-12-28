import { GlobalStyle } from "@/styles/global-style";
import styled from "styled-components";

type Pos = { left: number; top: number };

const PositionedSvg = styled.svg<Pos>`
  position: absolute;
  left: ${(props: Pos) => props.left}%;
  top: ${(props: Pos) => props.top}%;
`;

type Dims = { width: number; height: number };

const renderFn = ({ width, height, left, top }: Dims & Pos, idx: number) => (
  <PositionedSvg
    version="1.1"
    width={200}
    height={30}
    xmlns="http://www.w3.org/2000/svg"
    left={left}
    top={top}
    key={idx}
  >
    <rect width="100%" height="100%" fill={'#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')} />
  </PositionedSvg>
);

function Sketch() {
  return (
    <div>
      <GlobalStyle />
      <h1>Hello world</h1>
      {[
        { left: 10, top: 10 },
        { left: 55, top: 100 },
        { left: 60, top: 90 },
        { left: 70, top: 80 },
        { left: 75, top: 7 },
        { left: 80, top: 10 },
      ].map((x, idx) => renderFn(x, idx))}
    </div>
  );
}

export default Sketch;
