<script>
  import Icon from "@iconify/svelte";
</script>

<div class="relative">
  <div class="absolute flex top-1 header items-center gap-[39rem]">
    <img src="../../src/assets/lg1.png" alt="" class="w-[5rem] h-[4rem]" />

    <div class=" flex items-center gap-x-20 ">
      <div>All Bus</div>
      <div>Schedule</div>
      <div>Wallet</div>
      <div>Map</div>
      <Icon
        icon="ion:search-circle-outline"
        color="gray"
        width="45"
        height="45"
      />
      <div class="flex items-center">
        <div class="rounded-full w-[4rem] h-[4rem]">
          <img src="../../src/assets/avatar.webp" alt="" />
        </div>
        <div>Sarah Williams</div>
      </div>
    </div>
  </div>
</div>
