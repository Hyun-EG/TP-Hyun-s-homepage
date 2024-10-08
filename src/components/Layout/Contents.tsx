import { ReactNode } from "react";

interface ContentsProps {
  children: ReactNode;
}

const Contents = ({ children }: ContentsProps) => {
  return (
    <div className="contents">
      <div className="contents__container">{children}</div>
    </div>
  );
};

export default Contents;
