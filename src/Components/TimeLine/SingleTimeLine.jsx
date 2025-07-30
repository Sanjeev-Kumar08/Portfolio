import React from "react";
import ContentCard from "./ContentCard";

export function SingleTimeLine({ items }) {
  return (
    <div className="relative max-w-6xl mx-auto sm:p-6 pl-0">
      {/* Timeline line - vertical on mobile, centered on desktop */}
      <div className="absolute left-[7px] sm:left-1/2 sm:transform sm:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-t from-purple-500 to-blue-500"></div>

      <div className="space-y-8 sm:space-y-12">
        {items.map((item, index) => {
          // Alternate sides for desktop, or use specified side
          const isLeft =
            item.side === "left" || (item.side !== "right" && index % 2 === 0);

          return <ContentCard item={item} isLeft={isLeft} />;
        })}
      </div>
    </div>
  );
}
