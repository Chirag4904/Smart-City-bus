<script>
  import Icon from "@iconify/svelte";
</script>

<div class="relative w-screen h-screen">
  <div class=" flex top-1 header items-center gap-[18rem] justify-between ">
    <img src="../../src/assets/lg1.png" alt="" class="w-[5rem] h-[4rem]" />
    <div class=" item flex items-center gap-x-20 ">
      <div>All Bus</div>
      <div>Schedule</div>
      <div>Wallet</div>
      <div>Map</div>
    </div>
    <div class="flex items-center gap-x-4 mr-4">
      <Icon icon="mdi:qrcode-scan" color="gray" width="40" height="40" />
      <Icon
        icon="ion:search-circle-outline"
        color="gray"
        width="45"
        height="45"
      />
      <div class="rounded-full w-[4rem] h-[4rem]">
        <img src="../../src/assets/avatar.webp" alt="" />
      </div>
      <div>Sarah Williams</div>
    </div>
  </div>
  <img
    src="../../src/assets/buswait.jpg"
    alt=""
    class="w-screen h-[500px] absolute top-[40%] left-[50%] -translate-x-2/4 -translate-y-2/4"
  />
  <div
    class=" bus absolute top-[20%] left-[50%] -translate-x-2/4 -translate-y-2/4 font-bold"
  >
    Bus Schedule
  </div>

  <div
    class=" card relative top-[65%] left-[50%] -translate-x-2/4 -translate-y-2/4 w-[70rem] h-[11rem] rounded-md m-3 pb-10 bg-white shadow-[0_9px_17px_-6px_rgba(0,0,0,0.3)]"
  >
    <div class="title text-[18px] mt-[5px] ml-[10px] mb-[5px] font-bold">
      Name
    </div>
  </div>
</div>

<style>
  .item {
    font-size: 1.2rem;
    font-family: "Roboto";
  }

  .bus {
    font-size: 3rem;
    font-family: "Poppins";
    color: rgb(108, 77, 77);
  }
</style>
