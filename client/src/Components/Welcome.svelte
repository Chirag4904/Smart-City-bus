<script>
</script>

<div class="relative">
  <div class="absolute flex ml-10 mr-10  top-1 header items-center gap-[42rem]">
    <img src="../../src/assets/lg1.png" alt="" class="w-[5rem] h-[4rem]" />

    <div class=" flex items-center gap-x-20 ">
      <div>About Us</div>
      <div>All Bus</div>
      <div>Schedule</div>
      <div>Sign in</div>
      <button
        type="button"
        class="bg-yellow-500 px-2 text-[18px] text-white font-medium rounded-md shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
        >Sign Up</button
      >
    </div>
  </div>
  <div
    class="container head absolute top-[25%] left-[50%] -translate-x-2/4 -translate-y-2/4 text-[45px] font-bold "
  >
    <h1>
      <div class="animation">
        <span class="first">Are you Ready</span>
        <span class="oh">
          <span class="second">to Board with us?</span>
        </span>
      </div>
    </h1>
  </div>

  <img
    src="../../src/assets/bus-animation-1.gif"
    alt=""
    class="w-screen h-screen"
  />
</div>

<style>
  .head {
    font-family: "Poppins";
    opacity: 0;
    animation: ani2 3s ease-out forwards;
  }

  .header {
    font-family: "Roboto";
    font-size: 1.2rem;
    color: rgb(118, 113, 113);
    cursor: pointer;
    opacity: 0;
    animation: ani2 5s ease-out forwards;
    animation-delay: 1.5s;
  }
  .animation {
    text-align: center;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 50px;
    letter-spacing: 1px;
    color: black;

    animation: fadeIn 1.5s forwards;
    opacity: 0;
    transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  .first {
    animation: firstSpan 1.5s forwards cubic-bezier(0.785, 0.135, 0.15, 0.86);
    z-index: 1;
    position: relative;
  }

  .oh {
    display: inline-flex;
    overflow: hidden;
  }

  .second {
    animation: secondSpan 1.5s forwards cubic-bezier(0.785, 0.135, 0.15, 0.86);
    font-weight: 100;
    z-index: -1;
    display: inline-block;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes firstSpan {
    0% {
      transform: translateX(50%);
    }
    60% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @keyframes secondSpan {
    0% {
      transform: translateX(-100%);
    }
    60% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(-0%);
    }
  }
  @keyframes ani2 {
    100% {
      opacity: 1;
    }
  }
</style>
