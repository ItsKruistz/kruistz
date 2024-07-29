<main>

<nav class="flex items-center justify-between flex-wrap bg-white dark:bg-[#101010] sticky z-10 top-0 p-2">
  <div class="flex items-center flex-shrink-0 text-black dark:text-white mr-6">
    <label for="my-drawer" class="flex items-center justify-center h-11 w-11 rounded-full hover:bg-neutral-200 duration-150 drawer-button" aria-label="Open menu">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-[22px] w-[22px]" viewBox="0 0 24 24">
        <path d="M3 12h18M3 6h18M3 18h18"/>
      </svg>
    </label>
    <span class="font-semibold text-xl ml-2.5">Title</span>
    </div>
    <button class="flex items-center justify-center h-11 w-11 text-black dark:text-white rounded-full hover:bg-neutral-400 duration-150" aria-label="Search">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-[22px] w-[22px]" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4-4"/>
      </svg>
    </button>
</nav>
<div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
    </div>
    <div class="drawer-side z-50">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-2 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li><a class="drawer-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon w-5 h-5 fill-stroke mr-1.5 ml-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>Home</a></li>
        <li><a class="drawer-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon w-5 h-5 fill-stroke mr-1.5 ml-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
            <rect height="9" width="3" x="7" y="7" />
            <rect height="5" width="3" x="14" y="7" />
          </svg>Projects</a></li>
        <li>
          <a class="drawer-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon w-5 h-5 fill-stroke mr-1.5 ml-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            Gallery</a></li>
      </ul>
    </div>
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

</main>