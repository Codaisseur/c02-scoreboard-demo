// src/components/Title.tsx
import React from "react";

export interface ITitle {
  children: React.ReactNode;
}

const Title = (props: ITitle) => <h1>{props.children}</h1>;

export default Title;
