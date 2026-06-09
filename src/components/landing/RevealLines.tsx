import type { ElementType } from "react";
import RevealWords from "./RevealWords";

type RevealLinesProps = {
  lines: string[];
  className?: string;
  as?: ElementType;
  delay?: number;
  onScroll?: boolean;
};

const RevealLines = ({
  lines,
  className,
  as: Tag = "h2",
  delay = 0,
  onScroll = true,
}: RevealLinesProps) => {
  return (
    <Tag className={className}>
      {lines.map((line, index) => (
        <span key={line} className="block">
          <RevealWords text={line} delay={delay + index * 0.18} onScroll={onScroll} />
        </span>
      ))}
    </Tag>
  );
};

export default RevealLines;
