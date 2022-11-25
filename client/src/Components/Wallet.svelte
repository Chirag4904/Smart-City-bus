<script>
  import Icon from "@iconify/svelte";
</script>

<div class="relative w-screen h-screen screen ">
  <div
    class="absolute top-[5%] left-[40%] -translate-x-2/4 -translate-y-2/4 wallet font-bold "
  >
    Your Wallet !
  </div>
  <div
    class=" absolute bck rounded-lg top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4  w-[35rem] h-[42rem] mt-4 "
  >
    <div class=" flex items-center justify-between p-2">
      <div class=" head text-[32px] font-bold">Hello,Name</div>
      <div class="rounded-full w-[3rem] h-[3rem] bg-black">
        <img src="../../src/assets/avatar.webp" alt="" />
      </div>
    </div>

    <div
      class=" absolute  rounded-lg w-[20rem] h-[7rem] balance p-2 top-[22%] left-[50%] -translate-x-2/4 -translate-y-2/4"
    >
      <div class=" text-white text-[30px]">Total balance</div>
      <div class="text-white text-[30px]">₹ 1200</div>
    </div>

    <div
      class="flex items-center gap-3 absolute top-[34%] left-[50%] -translate-x-2/4 -translate-y-2/4 "
    >
      <Icon
        icon="material-symbols:add-circle-outline"
        color="#525252"
        width="25"
        height="25  "
        class="cursor-pointer"
      />

      <div class="vl" />
      <div class=" pay text-white text-[20px]">Add Money</div>
      <div />
    </div>
    <div class="recent absolute font-bold top-[44%] p-2">
      Recent Transcation
    </div>
    <div
      class=" card relative top-[50%] left-[48%] -translate-x-2/4 -translate-y-2/4 rounded-md m-3 pb-10 shadow-[0_9px_17px_-6px_rgba(0,0,0,0.3)]"
    >
      <div class="flex items-center m-1 justify-between item">
        <Icon icon="openmoji:bus" color="#525252" width="50" height="50" />
        <div class="title text-[20px] m-4 font-bold ">DLF Cyber Hub</div>
        <div class="title text-[20px] m-4 font-bold ">11:00 am</div>
        <div class="title text-[20px] m-4 font-bold ">₹ 50</div>
      </div>
    </div>
    <div
      class=" card relative top-[50%] left-[48%] -translate-x-2/4 -translate-y-2/4 rounded-md m-3 pb-10 shadow-[0_9px_17px_-6px_rgba(0,0,0,0.3)]"
    >
      <div class="flex items-center m-1 justify-between item">
        <Icon icon="openmoji:bus" color="#525252" width="50" height="50" />
        <div class="title text-[20px] m-4 font-bold ">DLF Cyber Hub</div>
        <div class="title text-[20px] m-4 font-bold ">11:00 am</div>
        <div class="title text-[20px] m-4 font-bold ">₹ 50</div>
      </div>
    </div>
  </div>
</div>

<style>
  .head {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: rgb(19, 30, 37);
  }

  .balance {
    font-family: "Poppins";
    background: rgba(53, 35, 3, 0.295);
  }

  .vl {
    border-left: 1px solid rgb(51, 49, 49);
    height: 17px;
  }

  .pay {
    font-family: "Roboto";
    color: rgb(51, 49, 49);
  }

  .screen {
    background: radial-gradient(
      circle at -8.9% 51.2%,
      rgb(255, 124, 0) 0%,
      rgb(255, 124, 0) 15.9%,
      rgb(255, 163, 77) 15.9%,
      rgb(255, 163, 77) 24.4%,
      rgb(19, 30, 37) 24.5%,
      rgb(19, 30, 37) 66%
    );
  }

  .bck {
    background: rgb(246, 152, 65);
  }

  .wallet {
    font-family: "Rubik Microbe";
    color: orange;
    font-size: 3rem;
  }

  .recent {
    font-style: "Poppins";
    font-size: 1.4rem;
    color: rgb(19, 30, 37);
  }

  .card {
    background: rgba(18, 12, 0, 0.295);
  }

  .item {
    font-family: "Poppins";
    color: rgb(38, 37, 37);
  }
</style>
