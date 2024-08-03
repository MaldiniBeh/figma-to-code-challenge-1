const Component = {
  collectionsBtn: (btnData) =>
    `${btnData
      .map(
        (btnName) =>
          `<button class="px-4 py-2 bg-gray-200 font-releway-semi-base text-gray-700 rounded-full">${btnName}</button>`
      )
      .join("")}`,

  menu: (menus) =>
    `${menus
      .map((menu) => `<a href="#" class="font-herderTitle">${menu}</a>`)
      .join("")}`,

  card: (cardArray) =>
    `${cardArray
      .map(
        (item) => `
        <div class="border p-3 rounded-3xl text-center font-releway-semi-base">
          <img
            src="${item.image}"
            alt=${item.name}
            class="w-full h-64 object-cover rounded-3xl"
          />
          <div class="flex justify-between items-center">
          <h3 class="mt-4 text-lg font-releway-semi-base font-bold">${item.name}</h3>
          <div class="flex space-x-1 mt-5 font-releway-semi-base font-bold">
           <img
            src="/images/ethereum.png"
            alt="ethereum"
            class="w-5 h-5"
          />
          <p class="text-gray-900">${item.price}</p>
          </div>
          </div>
          <button class="mt-4 border border-black text-black px-4 py-2 w-full rounded-full">
            Place a Bid
          </button>
        </div>`
      )
      .join("")}`,

      wallet : (walletData) =>
        `${walletData
          .map(
            (item) =>
              ` <div class="p-6 border rounded-3xl bg-gray-200">
          <img
            src="${item.image}"
            alt="${item.title}"
            class="w-12 h-12"
          />
          <h3 class="mt-4 text-xl font-bold font-releway-semi-base">${item.title}</h3>
          <p class="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>`
          )
          .join("")}`,
};
export default Component;
