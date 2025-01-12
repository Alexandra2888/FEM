import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    it("renders without crashing", () => {
        render(<App />)
    });

    it("renders 'Hello' text", () => {
        render(<App />)
        expect(screen.getByTestId("title")).toBeInTheDocument();
        expect(screen.getByTestId("title")).toHaveTextContent("Hello World!");
    });
});