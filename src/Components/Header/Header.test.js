import React from "react";
import ReactDom from "react-dom";
import { Search, Home } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

it("renders home button", () => {
  const div = document.createElement("div");
  ReactDom.render(
    <IconButton>
      <Home />
    </IconButton>,
    div
  );
});

it("render search icon", () => {
  const div = document.createElement("div");
  ReactDom.render(<Search />, div);
});

