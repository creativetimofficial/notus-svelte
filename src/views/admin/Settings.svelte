<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-8/12 px-4">
      <CardSettings />
    </div>
    <div class="w-full lg:w-4/12 px-4">
      <CardProfile />
    </div>
  </div>
</template>
<script>
import CardSettings from "@/components/Cards/CardSettings.vue";
import CardProfile from "@/components/Cards/CardProfile.vue";

export default {
  components: {
    CardSettings,
    CardProfile,
  },
};
</script>
