import { ReactNode } from "react";

type ChildProps = {
  children: ReactNode;
};

export default function GradientHeader({ children }: ChildProps) {
  return (
    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary to-secondary inline-block text-transparent bg-clip-text">
      {children}
    </h2>
  );
}
