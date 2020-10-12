import React from "react"
import { render } from "@testing-library/react"
import App from "./components/App/App"

it("renders without crashing", () => {
  render(<App />)
  // expect(
  // 	getByText('Learn React')
  // ).toBeInTheDocument();
})
