import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import MenuAppBar from '../MenuAppBar';
import { Pages } from '../../../constants';

describe('<MenuAppBar />', () => {
  let renderMenuAppBar: () => RenderResult;
  const history = createMemoryHistory();

  beforeEach(() => {
    renderMenuAppBar = () => {
      return render(
        <Router location={history.location} navigator={history}>
          <MenuAppBar />
        </Router>
      );
    };
  });

  test('renders Component', () => {
    const { getByText } = renderMenuAppBar();
    const title = getByText('TikTuk :)');
    expect(title).toBeInTheDocument();
  });

  test('goes to Feed page when feed button is clicked', () => {
    const { getByText } = renderMenuAppBar();
    const feedButton = getByText('Feed');
    fireEvent.click(feedButton);
    expect(history.location.pathname).toBe(Pages.Feed);
  });

  test('goes to Profile page when profile button is clicked', () => {
    const { getByText } = renderMenuAppBar();
    const profileButton = getByText('Profile');
    fireEvent.click(profileButton);
    expect(history.location.pathname).toBe(Pages.Profile);
  });
});
