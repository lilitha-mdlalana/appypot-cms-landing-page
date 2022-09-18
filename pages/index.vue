<script setup lang="ts">
const testimonials = ref([
  {
    id: 1,
    writerName: "Danit M",
    writerPosition: "Entrepreneur",
    avatarUrl: "https://i.pravatar.cc/150?img=68",
    review:
      "This app has got everything I need. After using Appy my business skyrocketed! No matter where you go, Appy is the coolest, most happening thing around! It fits our needs perfectly",
  },
  {
    id: 2,
    writerName: "Leanne Graham",
    writerPosition: "Product Engineer",
    avatarUrl: "https://i.pravatar.cc/150?img=62",
    review:
      "The best app to help your harness real-time e-markets. Love this app",
  },
  {
    id: 2,
    writerName: "Ervin Howell",
    writerPosition: "Digital Marketer",
    avatarUrl: "https://i.pravatar.cc/150?img=59",
    review:
      "The team at Appy really knows how  to build strategic applications",
  },
]);
</script>

<template>
  <main>
  <section class="bg-primary text-white">
    <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
        <div
          class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
        >
          <img
            class="absolute inset-0 object-cover w-full h-full"
            src="~/assets/images/man_using_computer.jpg"
            alt="Man using a computer"
          />
        </div>

        <div class="lg:py-24">
          <p class="font-bold">LET'S BUILD A SUCCESSFUL BUSINESS TOGETHER</p>
          <h2 class="text-3xl font-bold sm:text-4xl">
            Manage your ecommerce store.Anytime Anywhere
          </h2>

          <p class="mt-4 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
            hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
            minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
          </p>

          <div class="flex">
            <a class="hover:cursor-pointer" href="#">
              <img
                src="~/assets/images/google_play.svg"
                class="w-[165px]"
                alt="Get it on google play"
              />
            </a>
            <a class="hover:cursor-pointer" href="#">
              <img
                src="~/assets/images/app_store.svg"
                class="w-[165px]"
                alt="Get it on google play"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
        <div class="lg:py-24">
          <h2 class="text-3xl font-bold sm:text-4xl">
            Innovative solutions for small businesses
          </h2>

          <p class="mt-4 text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <br />
          <p class="mt-4 text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>

          <a
            class="inline-flex items-center px-4 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
            href="/get-started"
          >
            <span class="text-sm font-medium"> Learn more </span>

            <svg
              class="w-5 h-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
        <div
          class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-first"
        >
          <img
            class="absolute inset-0 object-cover w-full"
            src="~/assets/images/home_mockup.png"
            alt="Appy homescreen mockup"
          />
        </div>
      </div>
    </div>
    <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
        <div
          class="relative h-64 order-last overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
        >
          <img
            class="absolute inset-0 object-cover w-full h-full"
            src="~/assets/images/analytics.png"
            alt="Analytics mockup"
          />
        </div>

        <div class="lg:py-24">
          <h2 class="text-3xl font-bold sm:text-4xl">
            Real time analytics for your business
          </h2>

          <p class="mt-4 text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p class="mt-4 text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
          <a
            class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
            href="/get-started"
          >
            <span class="text-sm font-medium"> Learn more </span>

            <svg
              class="w-5 h-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
        <div class="lg:py-24">
          <h2 class="text-3xl font-bold sm:text-4xl">
            You focus on your business. We handle all the rest
          </h2>

          <p class="mt-4 text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <br />
          <p class="mt-4 text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>

          <a
            class="inline-flex items-center px-4 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
            href="/get-started"
          >
            <span class="text-sm font-medium"> Learn more </span>

            <svg
              class="w-5 h-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
        <div
          class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-first"
        >
          <img
            class="absolute inset-0 object-cover w-full"
            src="~/assets/images/checkout_mockup.png"
            alt="Man using a computer"
          />
        </div>
      </div>
    </div>
  </section>
  <section id="testimonials">
    <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-24">
      <div class="max-w-xl mx-auto text-center">
        <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <p class="max-w-lg mx-auto mt-4 text-gring-offset-warm-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          praesentium natus sapiente commodi. Aliquid sunt tempore iste
          repellendus explicabo dignissimos placeat, autem harum dolore
          reprehenderit quis! Quo totam dignissimos earum.
        </p>
      </div>

      <div
        class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16"
      >
        <SharedTestimonialsCard
          v-for="review in testimonials"
          :key="review.id"
          :writer-name="review.writerName"
          :writer-position="review.writerPosition"
          :review="review.review"
          :avatar-url="review.avatarUrl"
        />
      </div>
    </div>
  </section>
  <div class="max-w-5xl px-4 py-8 mx-auto">
    <section class="p-8 rounded-lg">
      <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
        <img
          alt="Man"
          src="~/assets/images/mega-creator.png"
          class="object-cover w-full rounded-lg aspect-square"
        />

        <blockquote class="sm:col-span-2">
          <p class="text-3xl font-bold sm:text-xl">
            Ready to skyrocket your business. Download and start today.
          </p>

          <div class="flex">
            <a class="hover:cursor-pointer" href="#">
              <img
                src="~/assets/images/google_play.svg"
                class="w-[165px]"
                alt="Get it on google play"
              />
            </a>
            <a class="hover:cursor-pointer" href="#">
              <img
                src="~/assets/images/app_store.svg"
                class="w-[165px]"
                alt="Get it on google play"
              />
            </a>
          </div>
        </blockquote>
      </div>
    </section>
  </div>
</main>
</template>
