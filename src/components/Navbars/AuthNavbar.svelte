<script>
  import { link } from "svelte-routing";

  // core components
  import PagesDropdown from "components/Dropdowns/PagesDropdown.svelte";

  let navbarOpen = false;

  function setNavbarOpen() {
    navbarOpen = !navbarOpen;
  }
</script>

<nav
  class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
>
  <div
    class="container px-4 mx-auto flex flex-wrap items-center justify-between"
  >
    <div
      class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
    >
      <a
        use:link
        class="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
        href="/"
      >
        Notus Svelte
      </a>
      <button
        class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        on:click="{setNavbarOpen}"
      >
        <i class="text-white fas fa-bars"></i>
      </button>
    </div>
    <div
      class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none rounded shadow-lg {navbarOpen ? 'block':'hidden'}"
      id="example-navbar-warning"
    >
      <ul class="flex flex-col lg:flex-row list-none mr-auto">
        <li class="flex items-center">
          <a
            class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus?ref=ns-auth-navbar"
          >
            <i
              class="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"
            />
            Docs
          </a>
        </li>
      </ul>
      <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
        <li class="flex items-center">
          <PagesDropdown />
        </li>
        <li class="flex items-center">
          <a
            class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-svelte%2F%23%2F"
            target="_blank"
          >
            <i
              class="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg"
            />
            <span class="lg:hidden inline-block ml-2">Share</span>
          </a>
        </li>

        <li class="flex items-center">
          <a
            class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-svelte%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20Svelte%20UI%20Kit%20and%20Admin.%20Let%20Notus%20Svelte%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
            target="_blank"
          >
            <i
              class="lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg"
            />
            <span class="lg:hidden inline-block ml-2">Tweet</span>
          </a>
        </li>

        <li class="flex items-center">
          <a
            class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="https://github.com/creativetimofficial/notus-svelte?ref=ns-auth-navbar"
            target="_blank"
          >
            <i
              class="lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg"
            />
            <span class="lg:hidden inline-block ml-2">Star</span>
          </a>
        </li>

        <li class="flex items-center">
          <button
            class="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            type="button"
          >
            <i class="fas fa-arrow-alt-circle-down"></i> Download
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
