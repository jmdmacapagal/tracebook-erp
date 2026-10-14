import type { NavigationMenuItem } from '@nuxt/ui'

export const mainNavigation: NavigationMenuItem[] = [
  { label: 'Products', icon: 'i-lucide-package', to: '/products' },
  { label: 'Stock', icon: 'i-lucide-warehouse', to: '/stock' },
  { label: 'Purchasing', icon: 'i-lucide-shopping-cart', to: '/purchasing' },
  { label: 'Transfers', icon: 'i-lucide-arrow-left-right', to: '/transfers' },
  { label: 'POS', icon: 'i-lucide-scan-barcode', to: '/pos' }
]
