import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import UserCard from '../UserCard';
import { userInfoMock } from '../../../mockedData/userInfoMock';

describe('<UserCard />', () => {
  const testName = userInfoMock.user.nickname;

  test('renders Component', () => {
    const renderUserCard = () => {
      return render(
        <MemoryRouter>
          <UserCard profile={userInfoMock} isLoading={false} />
        </MemoryRouter>
      );
    };
    const { getByText } = renderUserCard();
    const userName = getByText(testName);
    expect(userName).toBeInTheDocument();
  });

  test('renders spinner during loading', () => {
    const renderUserCard = () => {
      return render(
        <MemoryRouter>
          <UserCard profile={userInfoMock} isLoading={true} />
        </MemoryRouter>
      );
    };
    const { container } = renderUserCard();
    const spinner = container.querySelector('circle');
    expect(spinner).toBeInTheDocument();
  });
});
