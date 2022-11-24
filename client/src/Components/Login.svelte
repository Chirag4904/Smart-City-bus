<script></script>

<div>
  <div class="flex justify-between">
    <div>
      <img src="../../src/assets/lg1.png" alt="" class="w-[7rem] h-[6rem] " />
      <div class=" head font-bold ml-[100px] mt-20 mr-20">
        Welcome Back, Name
      </div>
      <div class="ml-[170px] text-[15px] text-gray">
        Please enter your details
      </div>
      <form class="w-full max-w-sm m-20 flex flex-col gap-y-10">
        <div class="flex items-center border-b border-blue-200 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Email"
            aria-label="email"
          />
        </div>
        <div class="flex items-center border-b border-blue-200 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Password"
            aria-label="pass"
          />
        </div>

        <button
          class="px-6 py-2.5 bg-gray-800 text-white font-medium text-[20px] leading-tight  rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >Login in</button
        >
        <div>
          <span class="text-gray-500 mr-2 ml-20">Doesn't Have an account?</span
          ><button class="text-blue-800 font-bold">SignUp</button>
        </div>
      </form>
    </div>
    <div class="relative top-4 right-4">
      <img
        src="../../src/assets/bus_giff.gif"
        alt=""
        class="rounded-[20px] m-auto w-[45rem] h-[47.5rem] "
      />
    </div>
  </div>
</div>

<style>
  .head {
    font-size: 2rem;
    font-family: "Roboto";
  }
</style>
