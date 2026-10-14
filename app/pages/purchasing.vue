<script setup lang="ts">
useHead({ title: 'Purchasing' })
</script>

<template>
  <UDashboardPanel id="purchasing">
    <template #header>
      <UDashboardNavbar title="Purchasing">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body />
  </UDashboardPanel>
</template>
