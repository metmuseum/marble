import html from "./html";

export default function exampleComponent() {
	return html`
		<div
			style="
        width: 100%;
        height: 200px;
        background: #333;
        color: white;
        text-align: center;
        margin-bottom: calc(24px + 0.75vw);"
		>
			<h2>Just an example component</h2>
		</div>
	`;
}
