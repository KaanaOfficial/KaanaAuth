<template>
  <div class="flex flex-col">
    <div class="flex flex-col items-center p-2 m-1 bg-white rounded-[25px] rounded-b-[5px]">
      <div class="w-full">
        <div class="p-2">
          <div class="flex items-top">
            <img class="w-16 h-16 rounded-full" :src="profileImage" alt="Profile image" />
            <div class="px-2 flex flex-col">
              <div class="p-2">
                <div class="text-lg font-bold">{{ name }}</div>
                <div class="text-gray-600">{{ email }}</div>
              </div>
              <a class="text-black rounded-full bg-white border border-black px-4 p-1 w-fit whitespace-nowrap cursor-pointer hover:bg-main-primary/10"
                href="{{ manageAccountLink }}" target="_blank" rel="noopener noreferrer">Manage your Kaana Account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const authStore = useAuthStore()
    const currentUser = authStore.currentUser
    return {
      profileImage:
        "https://lh3.googleusercontent.com/a/AEdFTp5wTZZVsK6bSsRooa6fNsPZEwM3mGdC8w-3eeNAyHw=s83-c-mo",
      name: "Albert Isern Alvarez",
      email: currentUser?.email,
      manageAccountLink:
        "https://myaccount.kaana.io/",
    };
  },
};
</script>
