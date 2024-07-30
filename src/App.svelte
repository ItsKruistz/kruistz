<main>

<nav class="flex items-center justify-between flex-wrap bg-white dark:bg-[#101010] sticky z-10 top-0 p-2">
  <div class="flex items-center flex-shrink-0 text-black dark:text-white mr-6">
    <label for="my-drawer" class="drawer-button flex items-center justify-center h-11 w-11 rounded-full hover:opacity-50 duration-150" aria-label="Open menu">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-[22px] w-[22px]" viewBox="0 0 24 24">
        <path d="M3 12h18M3 6h18M3 18h18"/>
      </svg>
    </label>
    <span class="font-semibold text-xl ml-2.5">Kruistz's Page</span>
    </div>
    <button class="flex items-center justify-center h-11 w-11 text-black dark:text-white rounded-full hover:opacity-50 duration-150" aria-label="Search">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-[22px] w-[22px]" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4-4"/>
      </svg>
    </button>
</nav>
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
  </div>
  <div class="drawer-side z-20">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-3">
      <!-- Sidebar content here -->
      <li><a class="text-xl p-2 rounded-lg hover:bg-white hover:text-[#292524] hover:font-medium duration-150">Home</a></li>
      <li><a class="text-xl p-2 rounded-lg hover:bg-white hover:text-[#292524] hover:font-medium duration-150">Projects</a></li>
      <li><a class="text-xl p-2 rounded-lg hover:bg-white hover:text-[#292524] hover:font-medium duration-150">Gallery</a></li>
    </ul>
  </div>

  <section>
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left dark:text-white">
        <h1 class="text-4xl mb-4 font-bold">Hello, I'm Kruistz!</h1>
        <p class="mb-8 leading-normal text-lg">An hobbyist coder who likes to play gacha games. I also like to take photos too!</p>
      <div class="flex justify-center">
      </div>
      </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
    </div>
  </section>
  <section>
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left dark:text-white">
        <h2 class="text-3xl mb-4 font-bold">Things that I like to do</h2>
        <p class="mb-8 leading-normal">Listening to music, playing games, sometimes do my homework</p>
      </div>
    </div>
  </section>
    <section>
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left dark:text-white">
        <h2 class="text-3xl mb-4 font-bold">Tech stack used for this site</h2>
        <p class="mb-8 leading-normal"><span class="font-bold">Frontend:</span> Tailwind CSS, DaisyUI <br>
        <span class="font-bold">Backend:</span> Svelte with TypeScript <br>
        <span class="font-bold">Build tool:</span> Vite </p>
      </div>
    </div>
  </section>
  <footer class="bg-neutral-900 text-white px-5 py-4">
    Copyright © 2024 - All rights reserved <br>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-7 h-7" viewBox="0 0 24 24">
  <path fill="currentColor" d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.51.07.07 0 0 0-.08.03c-.2.38-.44.87-.6 1.25a18.27 18.27 0 0 0-5.5 0 12.64 12.64 0 0 0-.6-1.25.08.08 0 0 0-.09-.03c-1.69.29-3.33.8-4.88 1.51a.07.07 0 0 0-.04.03A20.25 20.25 0 0 0 .1 18.06a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .08-.02c.46-.63.87-1.3 1.22-2a.08.08 0 0 0-.04-.1 13.1 13.1 0 0 1-1.87-.9.08.08 0 0 1-.04-.06.08.08 0 0 1 .03-.06l.37-.3a.07.07 0 0 1 .08 0 14.2 14.2 0 0 0 12.06 0 .07.07 0 0 1 .08 0l.37.3a.08.08 0 0 1 .03.06.08.08 0 0 1-.03.06c-.6.35-1.23.65-1.87.9a.08.08 0 0 0-.06.07l.01.03c.36.7.78 1.36 1.23 2a.08.08 0 0 0 .08.02 19.84 19.84 0 0 0 6-3.03.08.08 0 0 0 .04-.05c.5-5.18-.84-9.68-3.55-13.66a.06.06 0 0 0-.03-.03ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.15 2.42Z"/>
</svg> Tiktok Discord 4Chan Reddit
  </footer>
</main>