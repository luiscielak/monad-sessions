import { GlobalStyle } from "@/styles/global-style";
import styled from "styled-components";

type Pos = { left: number; top: number };

const PositionedSvg = styled.svg<Pos>`
  position: absolute;
  left: ${(props: Pos) => props.left}%;
  top: ${(props: Pos) => props.top}%;
  transform: scale(0.18);)
`;

type Dims = { width: number; height: number };

const renderFn1 = ({ width, height, left, top }: Dims & Pos, idx: number) => (
  <PositionedSvg
    version="1.1"
    width={200}
    height={30}
    xmlns="http://www.w3.org/2000/svg"
    left={left}
    top={top}
    key={idx}
  >
    <rect
      width="100%"
      height="100%"
      fill={
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
      }
    />
  </PositionedSvg>
);

const renderFn = ({ left, top }: Pos, idx: number) => (
  <PositionedSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 687.06 346.76"
    left={left}
    top={top}
    key={idx}
  >
    <path
      d="M.44,
    28.7Q9,
    168.37,
    69.56,
    76.09T222.47,
    3.46a226.19,
    226.19,
    0,
    0,
    1,
    75.12,
    30.88Q332.5,
    56.68,
    506.11,
    182.82q53.64,
    38.64,
    89.18,
    46.22,
    49.73,
    10.59,
    59.32-34.41c3.37-15.8-2.06-32.62-16.43-50.5S617.67,
    112.51,
    619.69,
    103c1.69-7.91,
    7.25-10.85,
    16.74-8.83q21.33,
    4.55,
    38.33,
    46.56t10.47,
    72.8q-13.63,
    64-81.55,
    104T467.06,
    342.84q-49.72-10.6-274.17-177.28Q145.84,
    130.75,
    115,
    124.17q-33.09-7-78.4,
    77.38C28.2,
    217.89,
    19.25,
    225.1,
    9.76,
    223.08,
    1.91,
    221.4-1.24,
    216.55.44,
    208.7Z"
    />
  </PositionedSvg>
);

const positions1 = [
  { left: -10, top: 10 },
  { left: -6, top: -10 },
  { left: -2, top: 10 },
  { left: 0, top: 10 },
  { left: 8, top: 7 },
  { left: 16, top: 10 },
];

const positions2 = [
  { left: -1, top: -1 },
  { left: -2, top: -2 },
  { left: -3, top: -3 },
  { left: -4, top: -4 },
  { left: -5, top: -5 },
  { left: -6, top: -6 },
  { left: -7, top: -7 },
  { left: -8, top: -8 },
  { left: -9, top: -9 },
  { left: -10, top: -10 },
  { left: 0, top: 0 },
  { left: 1, top: 1 },
  { left: 2, top: 2 },
  { left: 3, top: 3 },
  { left: 4, top: 4 },
  { left: 5, top: 5 },
  { left: 6, top: 6 },
  { left: 7, top: 7 },
  { left: 8, top: 8 },
  { left: 9, top: 9 },
  { left: 10, top: 10 },
];

const transform1 = ({ top, left }: Pos) => ({
  top: top / (10 - top) + 10 - top,
  left: (10 - left) / left + (-10 + left) + left,
});

const transform = (x: Pos) => x;

const randInt = () => Math.floor(Math.random() * (10 - -10) + 10);

const randPos = () => ({ left: randInt(), top: randInt() });

const positions = () =>
  Array(8)
    .fill(null)
    .map((_) => randPos());

function Sketch() {
  return (
    <div>
      <GlobalStyle />
      {positions().map((x, idx) => renderFn(transform(x), idx))}
    </div>
  );
}

export default Sketch;
