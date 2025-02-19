import styled from "styled-components";

const ResizeBorder = styled.div<{ dir?: "left" | "right" }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${(props) => (props.dir !== "right" ? "-1px" : "auto")};
  left: ${(props) => (props.dir === "right" ? "-1px" : "auto")};
  width: 2px;
  cursor: col-resize;

  &:hover {
    transition-delay: 500ms;
    transition: background 250ms ease-in-out;
    background: ${(props) => props.theme.sidebarActiveBackground};
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: -4px;
    width: 10px;
  }
`;

export default ResizeBorder;
