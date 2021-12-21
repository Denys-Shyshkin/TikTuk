import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import FeedPostsList from '../FeedPostsList';
import { trendingFeedMock } from '../../../mockedData/trendingFeedMock';

describe('<FeedPostsList />', () => {
  let renderFeedPostsList: () => RenderResult;
  window.scrollTo = jest.fn();
  const testName = trendingFeedMock[0].authorMeta.nickName;

  beforeEach(() => {
    renderFeedPostsList = () => {
      return render(
        <MemoryRouter>
          <FeedPostsList data={trendingFeedMock} />
        </MemoryRouter>
      );
    };
  });

  test('renders Component', () => {
    const { getByText } = renderFeedPostsList();
    const userName = getByText(testName);
    expect(userName).toBeInTheDocument();
  });
});
