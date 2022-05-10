import React from "react";
import { PropTypes } from "prop-types";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: !!this.props.explicitError };
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}
	render() {
		if (this.state.hasError) {
			return (
				<div className="error-boundary">
					<h3>
						Something went wrong
						<br />
						<span className="error-boundary__h3--debolded">
							We&apos;re sorry, but this service is temporarily unavailable.
							Please check back soon.
						</span>
					</h3>
				</div>
			);
		}
		return this.props.children;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.object,
	explicitError: PropTypes.bool
};

export default ErrorBoundary;
