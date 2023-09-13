import React from "react";
import { useParams } from "react-router-dom";

export const Formulary = ({title}) => {
  const { number } = useParams();
  return (
    <>
        <div>Formulary {number}</div>
        <div>Title {title}</div>
    </>
  )
};
