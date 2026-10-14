<script setup lang="ts">
useHead({ title: 'POS' })
</script>

<template>
  <UDashboardPanel id="pos">
    <template #header>
      <UDashboardNavbar title="POS">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body />
  </UDashboardPanel>
</template>
