import { css } from "@emotion/react";
import { useRef } from "react";
import { toast } from "react-toastify";
interface AppProps {
  name: string;
}
export const App = ({ name }: AppProps) => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
      `}
    >
      <InstallBox text={`npm i ${name}`} />
      <InstallBox text={`yarn add ${name}`} />
      <InstallBox text={`pnpm i ${name}`} />
    </div>
  );
};

interface InstallBoxProps {
  text: string;
}
const InstallBox = ({ text }: InstallBoxProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const handleCopy = () => {
    const node = ref.current;
    if (node == null) {
      return;
    }
    const range = document.createRange();
    range.selectNodeContents(node);
    const selection = window.getSelection();
    if (selection == null) {
      return;
    }
    selection.removeAllRanges();
    selection.addRange(range);
    navigator.clipboard.writeText(node.textContent ?? "");
    toast.success("Successfully copied.");
  };
  return (
    <div
      css={css`
        font-family: "Fira Mono", "Andale Mono", "Consolas", monospace;
        letter-spacing: 0px;
        font-feature-settings: none;
        font-variant-ligatures: none;
        position: relative;
        margin-top: 
        max-width: 95vw;
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
        height:45px;
      `}
    >
      <RightIcon
        css={css`
          position: absolute;
          top: 11px;
          left: 18px;
        `}
      />
      <p
        css={css`
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 5px;
          padding: 10px 10px 10px 34px;
          border: 1px #cccccc solid;
        `}
      >
        <code ref={ref}>{text}</code>
      </p>
      <button
        css={css`
          position: absolute;
          right: 15px;
          left: auto;
          border: none;
          background: none;
          cursor: pointer;
          &:hover {
            svg {
              fill: rgba(0, 0, 0, 0.8);
            }
          }
        `}
        onClick={handleCopy}
      >
        <CopyIcon
          css={css`
            width: 0.9em;
            height: 0.9em;
            -ms-flex: none;
            flex: none;
            margin-right: 3px;
            margin-left: 0px;
            margin-top: 3px;
            fill: rgba(0, 0, 0, 0.5);
          `}
        />
      </button>
    </div>
  );
};

interface IconProps {
  className?: string;
}
const RightIcon = ({ className }: IconProps) => {
  return (
    <svg viewBox="0 0 12.32 9.33" aria-hidden="true" className={className}>
      <g>
        <line className="st1" x1="7.6" y1="8.9" x2="7.6" y2="6.9"></line>
        <rect width="1.9" height="1.9"></rect>
        <rect x="1.9" y="1.9" width="1.9" height="1.9"></rect>
        <rect x="3.7" y="3.7" width="1.9" height="1.9"></rect>
        <rect x="1.9" y="5.6" width="1.9" height="1.9"></rect>
        <rect y="7.5" width="1.9" height="1.9"></rect>
      </g>
    </svg>
  );
};

const CopyIcon = ({ className }: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="copy"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={className}
    >
      <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
    </svg>
  );
};
