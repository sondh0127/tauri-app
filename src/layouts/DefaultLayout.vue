<script setup lang="tsx">
import type { MenuOption } from 'naive-ui'
import { NIcon } from 'naive-ui'
import type { RouteRecordRaw } from 'vue-router'
import { RouterLink } from 'vue-router'
import { routes } from '@/router'

const collapsed = ref(false)

function transformRouteToMenu(routes: RouteRecordRaw[], pathParent?: string) {
  const globalMenu: MenuOption[] = []

  routes.forEach((route) => {
    const { path, meta, name } = route
    let children: MenuOption[] | undefined
    if (route.children)
      children = transformRouteToMenu(route.children as RouteRecordRaw[], path)

    const menuItem: MenuOption = {
      key: path,
      label: (
        <RouterLink to={{ name }}>{meta?.label}</RouterLink>
      ),
      icon: () => (
        <NIcon>
          <div class={meta?.icon}/>
        </NIcon>
      ),
      children,
    }
    if (!meta?.hideInMenu)
      globalMenu.push(menuItem)

    else if (children)
      globalMenu.push(...children)
  })
  return globalMenu
}

const routesMenu = transformRouteToMenu(routes)

function renderMenuLabel(option: MenuOption) {
  if ('href' in option) {
    return h('a', { href: option.href, target: '_blank' }, [
      option.label as string,
    ])
  }
  return option.label as string
}

function expandIcon() {
  return (
    <NIcon>
      <div class="i-carbon:chevron-down text-indigo" />
    </NIcon>
  )
}

const headerHeight = '64'
</script>

<template>
  <NLayout has-sider>
    <NLayoutSider
      bordered collapse-mode="width" :collapsed-width="64" :width="240" :collapsed="collapsed"
      show-trigger @collapse="collapsed = true" @expand="collapsed = false"
    >
      <NMenu
        :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22" :options="routesMenu"
        :render-label="renderMenuLabel" :expand-icon="expandIcon"
      />
    </NLayoutSider>
    <NLayout>
      <NLayoutHeader>
        <div class="bg-neutral-900 text-white" :style="`height: ${headerHeight}px`">
          Header
        </div>
      </NLayoutHeader>
      <NLayoutContent content-style="padding: 0px;">
        <div
          class="bg-neutral-700 text-white grid place-items-center"
          :style="`height: calc(100vh - ${headerHeight}px)`"
        >
          <slot />
        </div>
      </NLayoutContent>
    </NLayout>
  </NLayout>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply w-screen h-screen grid;
}
</style>
