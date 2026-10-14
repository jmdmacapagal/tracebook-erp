<script setup lang="ts">
useHead({ title: 'Transfers' })
</script>

<template>
  <UDashboardPanel id="transfers">
    <template #header>
      <UDashboardNavbar title="Transfers">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body />
  </UDashboardPanel>
</template>
