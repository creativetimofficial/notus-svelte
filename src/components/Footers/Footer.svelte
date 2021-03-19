<script>
  // make dynamic date to be added to footer
  let date = new Date().getFullYear();
</script>

<footer class="relative bg-blueGray-200 pt-8 pb-6">
  <div
    class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
    style="transform: translateZ(0);"
  >
    <svg
      class="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        class="text-blueGray-200 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-center lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl font-semibold">Let's keep in touch!</h4>
        <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div class="mt-6 lg:mb-0 mb-6">
          <button
            class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
            type="button"
          >
            <i class="fab fa-twitter"></i>
          </button>
          <button
            class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
            type="button"
          >
            <i class="fab fa-facebook-square"></i>
          </button>
          <button
            class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
            type="button"
          >
            <i class="fab fa-dribbble"></i>
          </button>
          <button
            class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
            type="button"
          >
            <i class="fab fa-github"></i>
          </button>
        </div>
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span
              class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
            >
              Useful Links
            </span>
            <ul class="list-unstyled">
              <li>
                <a
                  class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="https://www.creative-tim.com/presentation?ref=ns-footer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="https://blog.creative-tim.com?ref=ns-footer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="https://www.github.com/creativetimofficial?ref=ns-footer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="https://www.creative-tim.com/bootstrap-themes/free?ref=ns-footer"
                >
                  Free Products
                </a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span
              class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
            >
              Other Resources
            </span>
            <ul class="list-unstyled">
              <li>
                <a
                  class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="https://github.com/creativetimofficial/notus-svelte/blob/main/LICENSE.md?ref=ns-footer"
                >
                  MIT License
                </a>
              </li>
              <li>
                <a
                  class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="https://creative-tim.com/terms?ref=ns-footer"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="https://creative-tim.com/privacy?ref=ns-footer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="https://creative-tim.com/contact-us?ref=ns-footer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300" />
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © {date} Notus Svelte by
          <a
            href="https://www.creative-tim.com?ref=ns-footer"
            class="text-blueGray-500 hover:text-blueGray-800"
          >
            Creative Tim
          </a>
          .
        </div>
      </div>
    </div>
  </div>
</footer>
