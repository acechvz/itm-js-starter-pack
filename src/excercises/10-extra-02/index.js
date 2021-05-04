const { getByText } = require('@testing-library/dom');
const { getUsers } = require('../../utils');
const VirtualDOM = require('../../virtualDom');

const app = VirtualDOM.container;
const { document } = app;

const Modal = () => {
  const modal = document.createElement('div');
  modal.innerHTML =
    '<div class="modal"><div class="modal-content"></div></div>';
  const modalContent = modal.querySelector('.modal-content');

  const updateContent = (content = '') => {
    modal.classList.toggle('is-open');
    modalContent.innerHTML = content;
  };

  return [modalContent, updateContent];
};

const UserItem = ({ user, onClick = () => {} }) => {
  const userElement = document.createElement('li');
  userElement.setAttribute('data-key', user.id);
  userElement.innerHTML = `${user.name} <span>${user.email}</span>`;

  userElement.addEventListener('click', () => onClick(userElement));

  return userElement;
};

async function Users() {
  const users = await getUsers();
  const [modal, setModalContent] = Modal();
  let isShowMore = false;

  const handleUserClick = (user) => {
    user.classList.toggle('selected');
    const isSelected = user.classList.contains('selected');
    setModalContent(
      isSelected ? `<h3>Current user: ${user.innerHTML}</h3>` : ''
    );
  };

  const usersList = document.createElement('ul');
  const moreUsers = users.slice(5, users.length);
  const showMoreButton = document.createElement('button');
  showMoreButton.textContent = 'Show more';

  const handleUsersListRender = () => {
    usersList.innerHTML = '';
    users.slice(0, 5).forEach((user) =>
      usersList.appendChild(
        UserItem({
          user,
          onClick: handleUserClick,
        })
      )
    );
  };

  showMoreButton.addEventListener('click', () => {
    isShowMore = !isShowMore;
    if (isShowMore) {
      moreUsers.forEach((user) =>
        usersList.appendChild(
          UserItem({
            user,
            onClick: handleUserClick,
          });
        )
      );
    } else {
      handleUsersListRender();
    }
    showMoreButton.textContent = `Show ${isShowMore ? 'less' : 'more'}`;
  });

  handleUsersListRender();

  app.append([usersList, showMoreButton, modal]);
  console.log('Initial Render');
  VirtualDOM.debug();

  console.log('---- Show More - Expanded ------');
  document.querySelector('button').click();
  VirtualDOM.debug();

  console.log('---- Show More - Collapsed ------');
  document.querySelector('button').click();
  VirtualDOM.debug();
}

Users();
