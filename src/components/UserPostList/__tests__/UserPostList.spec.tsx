import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import UserPostList from "../UserPostList";
import { userFeedMock } from "../../../mockedData/userFeedMock";

describe("<UserPostList />", () => {
  window.scrollTo = jest.fn();
  const skeletonsQty = 6;
  const playCount = userFeedMock[0].stats.playCount;

  test("renders Component", () => {
    const renderUserPostList = () => {
      return render(
        <MemoryRouter>
          <UserPostList data={userFeedMock} isLoading={false} />
        </MemoryRouter>
      );
    };
    const { getByText } = renderUserPostList();
    expect(getByText(playCount)).toBeInTheDocument();
  });

  test("renders skeleton when loading", () => {
    const renderUserPostList = () => {
      return render(
        <MemoryRouter>
          <UserPostList data={userFeedMock} isLoading={true} />
        </MemoryRouter>
      );
    };
    const { container } = renderUserPostList();
    const span = container.querySelectorAll("span");
    expect(span.length).toBe(skeletonsQty);
  });
});
