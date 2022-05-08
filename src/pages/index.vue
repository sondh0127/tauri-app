<script setup lang="tsx">
import type { MenuOption } from 'naive-ui'
import { NIcon } from 'naive-ui'

const [show, toggle] = useToggle(false)

const collapsed = ref(false)

const menuOptions: MenuOption[] = [
  {
    label: 'Converters',
    key: 'converters',
    icon: () => (
      <NIcon>
        <div class="i-carbon:page-break" />
      </NIcon>
    ),
    children: [
      {
        label: 'JSON <-> YAML',
        key: 'json-yaml',
        icon: () => (
          <NIcon>
            <div class="i-carbon:page-break" />
          </NIcon>
        ),
      },
    ],
  },
  {
    label: 'Dance Dance Dance',
    key: 'Dance Dance Dance',
    icon: () => (
      <NIcon>
        <div class="i-carbon:page-break" />
      </NIcon>
    ),
    children: [
      {
        type: 'group',
        label: 'People',
        key: 'people',
        children: [
          {
            label: 'Narrator',
            key: 'narrator',
            icon: () => (
              <NIcon>
                <div class="i-carbon:page-break" />
              </NIcon>
            ),
          },
          {
            label: 'Sheep Man',
            key: 'sheep-man',
            icon: () => (
              <NIcon>
                <div class="i-carbon:page-break" />
              </NIcon>
            ),
          },
        ],
      },
      {
        type: 'group',
        label: 'People',
        key: 'people',
        children: [
          {
            label: 'Narrator',
            key: 'narrator',
            icon: () => (
              <NIcon>
                <div class="i-carbon:page-break" />
              </NIcon>
            ),
          },
          {
            label: 'Sheep Man',
            key: 'sheep-man',
            icon: () => (
              <NIcon>
                <div class="i-carbon:page-break" />
              </NIcon>
            ),
          },
        ],
      },
      {
        label: 'Food',
        key: 'food',
        icon: () => (
          <NIcon>
            <div class="i-carbon:page-break" />
          </NIcon>
        ),
      },
      {
        label: 'The past increases. The future recedes.',
        key: 'the-past-increases-the-future-recedes',
        icon: () => (
          <NIcon>
            <div class="i-carbon:page-break" />
          </NIcon>
        ),
      },
    ],
  },
  {
    label: 'Hear the Wind Sing',
    key: 'hear-the-wind-sing',
    icon: () => (
      <NIcon>
        <div class="i-carbon:page-break" />
      </NIcon>
    ),
    href: 'https://en.wikipedia.org/wiki/Hear_the_Wind_Sing',
  },
]

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
    <n-layout-sider
      bordered collapse-mode="width" :collapsed-width="64" :width="240" :collapsed="collapsed"
      show-trigger @collapse="collapsed = true" @expand="collapsed = false"
    >
      <n-menu
        :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions"
        :render-label="renderMenuLabel" :expand-icon="expandIcon"
      />
    </n-layout-sider>
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
          Content
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
