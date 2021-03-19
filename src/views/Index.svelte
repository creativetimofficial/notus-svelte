<script>
  import { Link } from "svelte-routing";

  // core components
  import IndexNavbar from "components/Navbars/IndexNavbar.svelte";
  import Footer from "components/Footers/Footer.svelte";

  const patternVue = "/assets/img/pattern_svelte.png";
  const componentBtn = "/assets/img/component-btn.png";
  const componentProfileCard = "/assets/img/component-profile-card.png";
  const componentInfoCard = "/assets/img/component-info-card.png";
  const componentInfo2 = "/assets/img/component-info-2.png";
  const componentMenu = "/assets/img/component-menu.png";
  const componentBtnPink = "/assets/img/component-btn-pink.png";
  const documentation = "/assets/img/documentation.png";
  const login = "/assets/img/login.jpg";
  const profile = "/assets/img/profile.jpg";
  const landing = "/assets/img/landing.jpg";
  export let location;
</script>

<IndexNavbar />
<section class="header relative pt-16 items-center flex h-screen max-h-860-px">
  <div class="container mx-auto items-center flex flex-wrap">
    <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
      <div class="pt-32 sm:pt-0">
        <h2 class="font-semibold text-4xl text-blueGray-600">
          Notus Svelte - A beautiful extension for Tailwind CSS.
        </h2>
        <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
          Notus Svelte is Free and Open Source. It does not change any of the CSS from
          <a
            href="https://tailwindcss.com/?ref=creativetim"
            class="text-blueGray-600"
            target="_blank"
          >
            Tailwind CSS.
          </a>
          It features multiple HTML elements and it comes with dynamic
          components for ReactJS, Vue and Angular.
        </p>
        <div class="mt-12">
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus?ref=ns-index"
            target="_blank"
            class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-400 active:bg-red-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
          >
            Get started
          </a>
          <a
            href="https://github.com/creativetimofficial/notus-svelte?ref=ns-index"
            class="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            target="_blank"
          >
            Github Star
          </a>
        </div>
      </div>
    </div>
  </div>

  <img
    class="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
    src="{patternVue}"
    alt="..."
  />
</section>

<section class="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
  <div
    class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
        class="text-blueGray-100 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>
  <div class="container mx-auto">
    <div class="flex flex-wrap items-center">
      <div
        class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"
      >
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-400"
        >
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            class="w-full align-middle rounded-t-lg"
          />
          <blockquote class="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              class="absolute left-0 w-full block h-95-px -top-94-px"
            >
              <polygon
                points="-30,95 583,95 583,65"
                class="text-red-400 fill-current"
              ></polygon>
            </svg>
            <h4 class="text-xl font-bold text-white">
              Great for your awesome project
            </h4>
            <p class="text-md font-light mt-2 text-white">
              Putting together a page has never been easier than matching
              together pre-made components. From landing pages presentation to
              login areas, you can easily customise and built your pages.
            </p>
          </blockquote>
        </div>
      </div>

      <div class="w-full md:w-6/12 px-4">
        <div class="flex flex-wrap">
          <div class="w-full md:w-6/12 px-4">
            <div class="relative flex flex-col mt-4">
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                >
                  <i class="fas fa-sitemap"></i>
                </div>
                <h6 class="text-xl mb-1 font-semibold">
                  CSS Components
                </h6>
                <p class="mb-4 text-blueGray-500">
                  Notus Svelte comes with a huge number of Fully Coded CSS
                  components.
                </p>
              </div>
            </div>
            <div class="relative flex flex-col min-w-0">
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                >
                  <i class="fas fa-drafting-compass"></i>
                </div>
                <h6 class="text-xl mb-1 font-semibold">
                  JavaScript Components
                </h6>
                <p class="mb-4 text-blueGray-500">
                  We also feature many dynamic components for React, NextJS, Vue
                  and Angular.
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-6/12 px-4">
            <div class="relative flex flex-col min-w-0 mt-4">
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                >
                  <i class="fas fa-newspaper"></i>
                </div>
                <h6 class="text-xl mb-1 font-semibold">Pages</h6>
                <p class="mb-4 text-blueGray-500">
                  This extension also comes with 3 sample pages. They are fully
                  coded so you can start working instantly.
                </p>
              </div>
            </div>
            <div class="relative flex flex-col min-w-0">
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                >
                  <i class="fas fa-file-alt"></i>
                </div>
                <h6 class="text-xl mb-1 font-semibold">
                  Documentation
                </h6>
                <p class="mb-4 text-blueGray-500">
                  Built by developers for developers. You will love how easy is
                  to to work with Notus Svelte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto overflow-hidden pb-20">
    <div class="flex flex-wrap items-center">
      <div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
        <div
          class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
        >
          <i class="fas fa-sitemap text-xl"></i>
        </div>
        <h3 class="text-3xl mb-2 font-semibold leading-normal">
          CSS Components
        </h3>
        <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          Every element that you need in a product comes built in as a
          component. All components fit perfectly with each other and can have
          different colours.
        </p>
        <div class="block pb-6">
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
          >
            Buttons
          </span>
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
          >
            Inputs
          </span>
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
          >
            Labels
          </span>
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
          >
            Menus
          </span>
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
          >
            Navbars
          </span>
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
          >
            Pagination
          </span>
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
          >
            Progressbars
          </span>
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
          >
            Typography
          </span>
        </div>
        <a
          href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=ns-index"
          target="_blank"
          class="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
        >
          View All
          <i class="fa fa-angle-double-right ml-1 leading-relaxed"></i>
        </a>
      </div>

      <div class="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
        <div class="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
          <img
            alt="..."
            src="{componentBtn}"
            class="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
          />
          <img
            alt="..."
            src="{componentProfileCard}"
            class="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
          />
          <img
            alt="..."
            src="{componentInfoCard}"
            class="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
          />
          <img
            alt="..."
            src="{componentInfo2}"
            class="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
          />
          <img
            alt="..."
            src="{componentMenu}"
            class="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
          />
          <img
            alt="..."
            src="{componentBtnPink}"
            class="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-wrap items-center pt-32">
      <div class="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
        <div class="justify-center flex flex-wrap relative">
          <div class="my-4 w-full lg:w-6/12 px-4">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=ns-index"
              target="_blank"
            >
              <div
                class="bg-red-600 shadow-lg rounded-lg text-center p-8"
              >
                <img
                  alt="..."
                  class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                />
                <p class="text-lg text-white mt-4 font-semibold">
                  Svelte
                </p>
              </div>
            </a>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=ns-index"
              target="_blank"
            >
              <div class="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                <img
                  alt="..."
                  class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                />
                <p class="text-lg text-white mt-4 font-semibold">
                  ReactJS
                </p>
              </div>
            </a>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=ns-index"
              target="_blank"
            >
              <div
                class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
              >
                <img
                  alt="..."
                  class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                />
                <p class="text-lg text-white mt-4 font-semibold">
                  NextJS
                </p>
              </div>
            </a>
          </div>
          <div class="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=ns-index"
              target="_blank"
            >
              <div class="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                <img
                  alt="..."
                  class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                />
                <p class="text-lg text-white mt-4 font-semibold">
                  JavaScript
                </p>
              </div>
            </a>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=ns-index"
              target="_blank"
            >
              <div class="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                <img
                  alt="..."
                  class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                />
                <p class="text-lg text-white mt-4 font-semibold">
                  Angular
                </p>
              </div>
            </a>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=ns-index"
              target="_blank"
            >
              <div
                class="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8"
              >
                <img
                  alt="..."
                  class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                />
                <p class="text-lg text-white mt-4 font-semibold">
                  Vue.js
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
        <div
          class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
        >
          <i class="fas fa-drafting-compass text-xl"></i>
        </div>
        <h3 class="text-3xl mb-2 font-semibold leading-normal">
          Javascript Components
        </h3>
        <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          In order to create a great User Experience some components require
          JavaScript. In this way you can manipulate the elements on the page
          and give more options to your users.
        </p>
        <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          We created a set of Components that are dynamic and come to help you.
        </p>
        <div class="block pb-6">
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
          >
            Alerts
          </span>
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
          >
            Dropdowns
          </span>
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
          >
            Menus
          </span>
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
          >
            Modals
          </span>
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
          >
            Navbars
          </span>
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
          >
            Popovers
          </span>
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
          >
            Tabs
          </span>
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
          >
            Tooltips
          </span>
        </div>
        <a
          href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=ns-index"
          target="_blank"
          class="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
        >
          View all
          <i class="fa fa-angle-double-right ml-1 leading-relaxed"></i>
        </a>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 pb-32 pt-48">
    <div class="items-center flex flex-wrap">
      <div class="w-full md:w-5/12 ml-auto px-12 md:px-4">
        <div class="md:pr-12">
          <div
            class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
          >
            <i class="fas fa-file-alt text-xl"></i>
          </div>
          <h3 class="text-3xl font-semibold">
            Complex Documentation
          </h3>
          <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
            This extension comes a lot of fully coded examples that help you get
            started faster. You can adjust the colors and also the programming
            language. You can change the text and images and you're good to go.
          </p>
          <ul class="list-none mt-6">
            <li class="py-2">
              <div class="flex items-center">
                <div>
                  <span
                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3"
                  >
                    <i class="fas fa-fingerprint"></i>
                  </span>
                </div>
                <div>
                  <h4 class="text-blueGray-500">
                    Built by Developers for Developers
                  </h4>
                </div>
              </div>
            </li>
            <li class="py-2">
              <div class="flex items-center">
                <div>
                  <span
                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3"
                  >
                    <i class="fab fa-html5"></i>
                  </span>
                </div>
                <div>
                  <h4 class="text-blueGray-500">
                    Carefully crafted code for Components
                  </h4>
                </div>
              </div>
            </li>
            <li class="py-2">
              <div class="flex items-center">
                <div>
                  <span
                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3"
                  >
                    <i class="far fa-paper-plane"></i>
                  </span>
                </div>
                <div>
                  <h4 class="text-blueGray-500">
                    Dynamic Javascript Components
                  </h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
        <img
          alt="..."
          class="max-w-full rounded-lg shadow-xl"
          style="
            transform: scale(1) perspective(1040px) rotateY(-11deg)
              rotateX(2deg) rotate(2deg);
          "
          src="{documentation}"
        />
      </div>
    </div>
  </div>

  <div class="justify-center text-center flex flex-wrap mt-24">
    <div class="w-full md:w-6/12 px-12 md:px-4">
      <h2 class="font-semibold text-4xl">Beautiful Example Pages</h2>
      <p class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
        Notus Svelte is a completly new product built using our past
        experience in web templates. Take the examples we made for you and start
        playing with them.
      </p>
    </div>
  </div>
</section>

<section class="block relative z-1 bg-blueGray-600">
  <div class="container mx-auto">
    <div class="justify-center flex flex-wrap">
      <div class="w-full lg:w-12/12 px-4 -mt-24">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-4/12 px-4">
            <h5 class="text-xl font-semibold pb-4 text-center">
              Login Page
            </h5>
            <Link to="/auth/login">
              <div
                class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
              >
                <img
                  alt="..."
                  class="align-middle border-none max-w-full h-auto rounded-lg"
                  src="{login}"
                />
              </div>
            </Link>
          </div>

          <div class="w-full lg:w-4/12 px-4">
            <h5 class="text-xl font-semibold pb-4 text-center">
              Profile Page
            </h5>
            <Link to="/profile">
              <div
                class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
              >
                <img
                  alt="..."
                  class="align-middle border-none max-w-full h-auto rounded-lg"
                  src="{profile}"
                />
              </div>
            </Link>
          </div>

          <div class="w-full lg:w-4/12 px-4">
            <h5 class="text-xl font-semibold pb-4 text-center">
              Landing Page
            </h5>
            <Link to="/landing">
              <div
                class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
              >
                <img
                  alt="..."
                  class="align-middle border-none max-w-full h-auto rounded-lg"
                  src="{landing}"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-20 bg-blueGray-600 overflow-hidden">
  <div class="container mx-auto pb-64">
    <div class="flex flex-wrap justify-center">
      <div class="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
        <div
          class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
        >
          <i class="fas fa-code-branch text-xl"></i>
        </div>
        <h3 class="text-3xl mb-2 font-semibold leading-normal text-white">
          Open Source
        </h3>
        <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
          Since
          <a
            href="https://tailwindcss.com/?ref=creativetim"
            class="text-blueGray-300"
            target="_blank"
          >
            Tailwind CSS
          </a>
          is an open source project we wanted to continue this movement too. You
          can give this version a try to feel the design and also test the
          quality of the code!
        </p>
        <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
          Get it free on Github and please help us spread the news with a Star!
        </p>
        <a
          href="https://github.com/creativetimofficial/notus-svelte?ref=ns-index"
          target="_blank"
          class="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
        >
          Github Star
        </a>
      </div>

      <div class="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
        <i
          class="fab fa-github text-blueGray-700 text-55 absolute -top-150-px -right-100 left-auto opacity-80"
        ></i>
      </div>
    </div>
  </div>
</section>

<section class="pb-16 bg-blueGray-200 relative pt-32">
  <div
    class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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

  <div class="container mx-auto">
    <div
      class="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10"
    >
      <div class="w-full text-center lg:w-8/12">
        <p class="text-4xl text-center">
          <span role="img" aria-label="love">
            😍
          </span>
        </p>
        <h3 class="font-semibold text-3xl">
          Do you love this Starter Kit?
        </h3>
        <p class="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
          Cause if you do, it can be yours now. Hit the buttons below to
          navigate to get the Free version for your next project. Build a new
          web app or give an old project a new look!
        </p>
        <div class="sm:block flex flex-col mt-10">
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus?ref=ns-index"
            target="_blank"
            class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-red-400 active:bg-red-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
          >
            Get started
          </a>
          <a
            href="https://github.com/creativetimofficial/notus-svelte?ref=ns-index"
            target="_blank"
            class="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
          >
            <i class="fab fa-github text-lg mr-1"></i>
            <span>Help With a Star</span>
          </a>
        </div>
        <div class="text-center mt-16"></div>
      </div>
    </div>
  </div>
</section>
<Footer />
