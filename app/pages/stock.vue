<script setup lang="ts">
useHead({ title: 'Stock' })
</script>

<template>
  <UDashboardPanel id="stock">
    <template #header>
      <UDashboardNavbar title="Stock">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body />
  </UDashboardPanel>
</template>
