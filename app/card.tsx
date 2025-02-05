import { ReactNode } from "react";
import "./globals.css";

type CardProps = {
  id: string;
  bg: string;
  fg: string;
  children: ReactNode;
};

export default function Card({ id, bg, fg, children }: CardProps) {
  return (
    <div
      className={`card w-full h-full overflow-y-scroll overscroll-contain sticky top-0 rounded-xl p-6 ${bg} ${fg} ${
        id !== "hero" ? "mt-[15vh]" : ""
      } `}
      id={id.toString()}
    >
      {children}
    </div>
  );
}
