import React from "react";
import "./JokesItem.css";
export default function JokesItem({ value }) {
	return <li className="joke">{value}</li>;
}
