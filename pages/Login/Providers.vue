<template>
    <div class="m-1 p-10 bg-white dark:bg-gray-900 rounded-[25px] flex-1 sm:h-auto">
        <div class="flex flex-col items-center">
            <img class="w-[2rem] mb-2" src="~/assets/images/logoIcon.png" alt="Kaana Logo" />
            <span class="text-2xl font-semi-bold mt-1">Sign In</span>
            <p class="leading-normal font-semi-bold">Use your Kaana Account</p>
        </div>
        <Providers class="my-[1rem]" />
        <div class="space-y-9 mt-9">
            <div class="text-sm flex justify-between items-center">
                <nuxt-link to="/login"
                    class="py-4 px-6 w-full text-center rounded-full text-white btn bg-black hover:opacity-80">Go
                    Back</nuxt-link>
            </div>
        </div>
    </div>
</template>