const fetchRandomUsers = () =>
  fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((err) => console.log(err));

const Favorites = (() => {
  let list = [];
  let currentId = "";
  const favButton = document.querySelector("#favButton");
  const isAdded = () => list.find((id) => id === currentId);
  const favIcon = () => favButton.querySelector(".fa-heart");

  const updateFavoriteState = () => {
    favIcon().dataset.prefix = isAdded() ? "fas" : "far";
  };

  const handleFavoriteAction = () => {
    if (!isAdded()) {
      list.push(currentId);
    } else {
      list = list.filter((id) => id !== currentId);
    }
    favIcon().classList.add("animate-ping");

    setTimeout(() => {
      favIcon().classList.remove("animate-ping");
      updateFavoriteState();
    }, LARGE_TIMEOUT);
  };
  const sync = (user) => {
    currentId = user.login.uuid;
    updateFavoriteState();
    if (!favButton.classList.contains("hidden")) {
      favButton.removeEventListener("click", handleFavoriteAction);
    } else {
      favButton.addEventListener("click", handleFavoriteAction);
    }
  };

  return {
    list,
    favButton,
    sync,
  };
})();

const Contacts = (() => {
  const userDetails = document.querySelector("#userDetails");
  const usersList = document.querySelector("#usersList");
  const backButton = document.querySelector("#backButton");
  const loadMoreButton = document.querySelector("#loadMoreButton");
  const { favButton } = Favorites;

  const generateUsersSkeletons = (quantity) => {
    const skeletons = [];

    for (let index = 0; index < quantity; index++) {
      const skeleton = UserSkeleton();
      usersList.append(skeleton);
      skeletons.push(skeleton);
    }

    return skeletons;
  };

  const handleToggleAction = () => {
    usersList.classList.toggle("-translate-x-full");
    userDetails.classList.toggle("translate-x-full");
    backButton.classList.toggle("hidden");
    favButton.classList.toggle("hidden");
  };

  const handleUserClick = (user) => {
    Favorites.sync(user);
    UserDetails(user).then(handleToggleAction);
  };

  const getUsers = (callback) => {
    const usersSkeletons = generateUsersSkeletons(MIN_SKELETONS_AMOUNT);

    fetchRandomUsers().then((users) => {
      users.forEach((user, idx) => {
        const userItem = document.createElement("div");
        userItem.addEventListener("click", () => handleUserClick(user));
        userItem.innerHTML = UserItem(user);

        setTimeout(() => {
          usersSkeletons[idx].remove();
          usersList.append(userItem);
        }, REGULAR_TIMEOUT);
      });

      callback && typeof callback === "function" && callback();
    });
  };

  const loadMoreAction = () => {
    loadMoreButton.classList.toggle("fa-spin");
    getUsers(() => {
      setTimeout(() => {
        loadMoreButton.classList.remove("fa-spin");
      }, REGULAR_TIMEOUT);
    });
  };

  const attachListeners = () => {
    backButton.addEventListener("click", handleToggleAction);
    loadMoreButton.addEventListener("click", loadMoreAction);
  };

  const mount = () => {
    getUsers();
    attachListeners();
  };

  return {
    mount,
  };
})();
