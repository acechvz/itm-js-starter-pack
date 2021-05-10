const UserSkeleton = () => {
  const userSkeleton = document.createElement("div");
  userSkeleton.innerHTML = `
      <div class="bg-white transition p-3 flex items-center rounded-md shadow-md hover:shadow-lg cursor-pointer">
        <div class="relative mr-4">
          <div class="rounded-full w-12 h-12 bg-gray-200 animate-pulse"></div>
        </div>
        <div>
          <div class="h-3 w-16 max-w-full bg-gray-200 animate-pulse mb-2 rounded-lg"></div>
          <div class="h-3 w-32 max-w-full bg-gray-200 animate-pulse rounded-lg"></div>
        </div>
      </div>`;

  return userSkeleton;
};

const UserItem = (user) => {
  const { first, last } = user.name;
  const fullName = `${first} ${last}`;
  const activeStatus = Math.random() > HALF_LUCKY;
  return `
    <div class="bg-white p-3 flex rounded-md shadow-md hover:shadow-lg cursor-pointer items-center">
        <div class="relative mr-4">
          <img src="${
            user.picture.thumbnail
          }" class="rounded-full w-10 sm:w-12" alt="">
          <span class="w-3 h-3 rounded-full absolute z-10 bottom-0 right-0 ring-2 ring-white ${
            activeStatus ? "bg-green-600" : "bg-red-400"
          }"></span>
        </div>
        <div>
        <h4 class="text-sm md:text-lgtext-gray-800 font-bold">${fullName}</h4>
        <div class="text-gray-600 text-xs md:text-sm">${user.email}</div>
      </div>
    </div>
    `;
};
const UserDetails = (user) => {
  const { picture, name, email, phone, cell, location, nat } = user;
  const fullName = `${name.first} ${name.last}`;
  const userTemplate = document.createElement("div");
  return new Promise((res, rej) => {
    try {
      userDetails.innerHTML = "";
      userTemplate.innerHTML = `
        <div class="text-center">
          <img src="${picture.medium}" class="rounded-full mb-4 mx-auto" alt="">
          <h4 class="text-gray-800 font-bold">${fullName}</h4>
          <div class="text-gray-600 text-sm">${location.city}, ${location.country} (${nat})</div>
          <hr class="my-4">
          <div class="w-4/5 mx-auto flex flex-col gap-1">
            <div class="flex items-center">
                <div class="w-12"><i class="fas fa-mobile-alt"></i></div>
                <span class="text-sm">${cell}</span>
            </div>
            <div class="flex items-center">
                <div class="w-12"><i class="fas fa-phone"></i></div>
                <span class="text-sm">${phone}</span>
            </div>
            <div class="flex items-center">
                <div class="w-12"><i class="fas fa-at"></i></div>
                <span class="text-sm">${email}</span>
            </div>
          </div>
        </div>`;

      userDetails.append(userTemplate);

      setTimeout(res, SMALL_TIMEOUT);
    } catch (err) {
      rej(err);
    }
  });
};
