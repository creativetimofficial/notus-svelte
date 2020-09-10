<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-gray-800 text-xl font-bold">My account</h6>
        <button
          class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          Settings
        </button>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
          User Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Username
              </label>
              <input
                type="text"
                class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                value="lucky.jesse"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email address
              </label>
              <input
                type="email"
                class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                value="jesse@example.com"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                First Name
              </label>
              <input
                type="text"
                class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                value="Lucky"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Last Name
              </label>
              <input
                type="text"
                class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                value="Jesse"
              />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-gray-400" />

        <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
          Contact Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Address
              </label>
              <input
                type="text"
                class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
              />
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                City
              </label>
              <input
                type="email"
                class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                value="New York"
              />
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Country
              </label>
              <input
                type="text"
                class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                value="United States"
              />
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Postal Code
              </label>
              <input
                type="text"
                class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                value="Postal Code"
              />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-gray-400" />

        <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
          About Me
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                About me
              </label>
              <textarea
                type="text"
                class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                rows="4"
              >
                    A beautiful Dashboard for React & Tailwindcss. It is Free
                    and Open Source.
                  </textarea
              >
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
