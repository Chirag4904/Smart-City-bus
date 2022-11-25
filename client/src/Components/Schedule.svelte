<script>
  import Icon from "@iconify/svelte";
</script>

<div class="relative w-screen h-screen">
  <div class=" flex top-1 header items-center gap-[18rem] justify-between ">
    <img src="../../src/assets/lg1.png" alt="" class="w-[5rem] h-[4rem]" />
    <div class=" item flex items-center gap-x-20 cursor-pointer ">
      <div>All Bus</div>
      <div>Schedule</div>
      <div>Wallet</div>
      <div>Map</div>
    </div>
    <div class="flex items-center gap-x-4 mr-4 cursor-pointer">
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
    class=" card relative flex items-center h-[8rem] justify-between pl-10 pr-10 top-[64%] left-[50%] -translate-x-2/4 -translate-y-2/4 w-[70rem] h-[11rem] rounded-md m-3 pb-10 bg-white shadow-[0_9px_17px_-6px_rgba(0,0,0,0.3)]"
  >
    <div
      class="title text-[22px] mt-[5px] ml-[10px] mb-[5px] font-bold bg-orange-400 rounded-lg p-2"
    >
      Bus1-4359
    </div>
    <div class="vl mt-10" />
    <div>
      <div class="text-[25px]">
        7:40 <span class="text-gray-600 text-[25px] font-bold">AM</span>
      </div>
      <div class=" place font-semibold text-[20px]">IGI Airport</div>
    </div>
    <div class="flex items-center gap-2">
      <div class="hl" />
      <Icon icon="openmoji:bus" color="#525252" width="50" height="50" />
      <div class="hl" />
    </div>
    <div>
      <div class="text-[25px] font-semibold">
        8:15 <span class="text-gray-500 text-[25px] font-bold">AM</span>
      </div>
      <div class=" place text-[20px] font-semibold">Link Road</div>
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

  .vl {
    border-left: 2px solid rgb(92, 90, 90);
    height: 7rem;
  }

  .hl {
    border-top: 2px solid rgb(111, 107, 107);
    width: 8rem;
  }

  .place {
    font-family: "Poppins";
  }
</style>
