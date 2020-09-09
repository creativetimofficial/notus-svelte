<script>
import { Link } from "svelte-routing";
import { createPopper } from "@popperjs/core";

let dropdownPopoverShow = false;

const toggleDropdown = (event) => {
  event.preventDefault();
  if (dropdownPopoverShow) {
    dropdownPopoverShow = false;
  } else {
    dropdownPopoverShow = true;
    createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
      placement: "bottom-start",
    });
  }
}

</script>


  <div>
    <a
      class="hover:text-gray-600 text-gray-800 px-3 py-2 flex items-center text-xs uppercase font-bold"
      href="#pablo"
      ref="btnDropdownRef"
      on:click="{toggleDropdown}"
    >
      Demo Pages
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow ? 'block':'hidden'}"
    >
      <span
        class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
      >
        Admin Layout
      </span>
      <Link
        to="/admin/dashboard"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        Dashboard
      </Link>
      <Link
        to="/admin/settings"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        Settings
      </Link>
      <Link
        to="/admin/tables"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        Tables
      </Link>
      <Link
        to="/admin/maps"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        Maps
      </Link>
      <div class="h-0 mx-4 my-2 border border-solid border-gray-200" />
      <span
        class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
      >
        Auth Layout
      </span>
      <Link
        to="/auth/login"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        Login
      </Link>
      <Link
        to="/auth/register"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        Register
      </Link>
      <div class="h-0 mx-4 my-2 border border-solid border-gray-200" />
      <span
        class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
      >
        No Layout
      </span>
      <Link
        to="/landing"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        Lading
      </Link>
      <Link
        to="/profile"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        Profile
      </Link>
    </div>
  </div>
