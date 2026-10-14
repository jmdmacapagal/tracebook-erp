<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <UDashboardGroup unit="rem">
    <UDashboardSidebar
      id="main"
      v-model:open="open"
      collapsible
      resizable
      :default-size="15"
      :min-size="12"
      :max-size="20"
      :ui="{ footer: 'border-t border-default' }"
    >
      <template #header="{ collapsed }">
        <NuxtLink
          to="/"
          class="flex items-center gap-2 font-semibold text-highlighted"
        >
          <UIcon
            name="i-lucide-boxes"
            class="size-6 shrink-0 text-primary"
          />
          <span v-if="!collapsed">Tracebook</span>
        </NuxtLink>
      </template>

      <template #default="{ collapsed }">
        <UNavigationMenu
          :items="mainNavigation"
          :collapsed="collapsed"
          orientation="vertical"
          tooltip
        />
      </template>

      <template #footer="{ collapsed }">
        <UColorModeButton
          :class="collapsed ? 'mx-auto' : ''"
        />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>
