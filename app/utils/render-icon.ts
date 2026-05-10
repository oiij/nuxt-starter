import type { CSSProperties } from 'vue'
import { NuxtIcon } from '#components'

export function renderIcon(icon?: string, size?: number | string) {
  const iconSize = typeof size === 'number' ? `${size}px` : size ?? '1em'
  const style: CSSProperties = {
    width: iconSize,
    height: iconSize,
  }
  return icon?.startsWith('svg:')
    ? h(NuxtIcon, { name: icon?.replace('svg:', ''), style })
    : icon?.startsWith('i-')
      ? h('i', { class: icon, style })
      : null
}
