<template>
  <div class="min-h-screen bg-gray-50 p-4">
    <div class="flex h-[calc(100vh-2rem)] gap-4">
      <!-- Sidebar -->
      <div
        :class="[
          'bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out flex flex-col',
          isCollapsed ? 'w-16' : 'w-64',
        ]"
      >
        <!-- Header with toggle button -->
        <div
          class="p-4 border-b border-gray-200 flex items-center justify-between"
        >
          <div v-if="!isCollapsed" class="flex items-center gap-2">
            <Icon name="radix-icons:dashboard" class="w-6 h-6 text-blue-600" />
            <h1 class="font-semibold text-gray-800">Dashboard</h1>
          </div>
          <button
            @click="toggleSidebar"
            class="p-1 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Icon
              :name="
                isCollapsed
                  ? 'radix-icons:hamburger-menu'
                  : 'radix-icons:cross-1'
              "
              class="w-5 h-5 text-gray-600"
            />
          </button>
        </div>

        <!-- Navigation Items -->
        <nav class="flex-1 p-4">
          <ul class="space-y-2">
            <li v-for="item in navigationItems" :key="item.id">
              <a
                href="#"
                :class="[
                  'flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-gray-100',
                  item.active
                    ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                    : 'text-gray-700',
                ]"
              >
                <Icon :name="item.icon" class="w-5 h-5 flex-shrink-0" />
                <span v-if="!isCollapsed" class="font-medium truncate">
                  {{ item.label }}
                </span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- Footer -->
        <div class="p-4 border-t border-gray-200">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div v-if="!isCollapsed" class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-700 truncate">John Doe</p>
              <p class="text-xs text-gray-500 truncate">john@example.com</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 bg-white rounded-lg shadow-lg p-6">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Page Content</h2>
          <p class="text-gray-600 mb-8">
            Đây là nội dung chính của trang. Sidebar có thể thu gọn và mở rộng
            bằng cách click vào nút toggle.
          </p>

          <!-- Sample content -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="i in 6"
              :key="i"
              class="bg-gray-50 rounded-lg p-6 shadow-sm"
            >
              <Icon
                name="radix-icons:component-1"
                class="w-8 h-8 text-blue-500 mx-auto mb-3"
              />
              <h3 class="font-semibold text-gray-800 mb-2">Card {{ i }}</h3>
              <p class="text-sm text-gray-600">
                Nội dung mẫu cho card số {{ i }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const isCollapsed = ref(false);

const navigationItems = ref([
  {
    id: 1,
    label: "Dashboard",
    icon: "radix-icons:dashboard",
    active: true,
  },
  {
    id: 2,
    label: "Users",
    icon: "radix-icons:person",
    active: false,
  },
  {
    id: 3,
    label: "Products",
    icon: "radix-icons:component-2",
    active: false,
  },
  {
    id: 4,
    label: "Orders",
    icon: "radix-icons:archive",
    active: false,
  },
  {
    id: 5,
    label: "Analytics",
    icon: "radix-icons:bar-chart",
    active: false,
  },
  {
    id: 6,
    label: "Settings",
    icon: "radix-icons:gear",
    active: false,
  },
]);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>
