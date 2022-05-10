import React from "react";
import ErrorBoundary from "./error-boundary";

export default {
	title: "Error Boundary",
	component: ErrorBoundary,
};

export const errorBoundary = () => {
	return <ErrorBoundary explicitError={true} />
};
