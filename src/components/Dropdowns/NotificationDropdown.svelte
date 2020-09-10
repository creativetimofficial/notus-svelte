<script>
import { createPopper } from "@popperjs/core";

let dropdownPopoverShow = false;

let btnDropdownRef;
let popoverDropdownRef;

const toggleDropdown = (event) => {
  event.preventDefault();
  if (dropdownPopoverShow) {
    dropdownPopoverShow = false;
  } else {
    dropdownPopoverShow = true;
    createPopper(btnDropdownRef, popoverDropdownRef, {
      placement: "bottom-start",
    });
  }
}
</script>


  <div>
    <a
      class="text-gray-600 block py-1 px-3"
      bind:this={btnDropdownRef}
      on:click="{toggleDropdown}"
    >
      <i class="fas fa-bell"></i>
    </a>
    <div
      bind:this={popoverDropdownRef}
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow ? 'block':'hidden'}"
    >
      <a
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        Action
      </a>
      <a
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        Another action
      </a>
      <a
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        Something else here
      </a>
      <div class="h-0 my-2 border border-solid border-gray-200" />
      <a
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        Seprated link
      </a>
    </div>
  </div>
