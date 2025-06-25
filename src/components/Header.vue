<template>
  <header class="site-header">
    <div class="container">
      <nav aria-label="Main navigation" class="nav">
        <a href="/" class="logo-link" aria-label="Home">
          <span class="logo-bg">
            <img src="/images/design/logo.png" alt="WhyA11y Logo" class="logo-img" />
          </span>
        </a>
        <button
          class="menu-toggle"
          :aria-expanded="menuOpen.toString()"
          aria-controls="main-menu"
          @click="toggleMenu"
          @keyup.enter.space="toggleMenu"
        >
          <span class="sr-only">Toggle menu</span>
          ☰
        </button>
        <ul
          :class="['menu', { open: menuOpen }]"
          id="main-menu"
          role="menubar"
        >
          <li role="none"><a role="menuitem" href="/">Home</a></li>
          <li role="none"><a role="menuitem" href="/articles">Articles</a></li>
          <li role="none"><a role="menuitem" href="/why-a11y">Why a11y</a></li>
        </ul>
        <button class="theme-toggle" @click="toggleTheme" :aria-pressed="isDark.toString()">
          <span class="sr-only">Toggle dark mode</span>
          <span v-if="isDark">🌙</span>
          <span v-else>☀️</span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const menuOpen = ref(false);
const isDark = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function setTheme(dark) {
  isDark.value = dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

function toggleTheme() {
  setTheme(!isDark.value);
}

onMounted(() => {
  const saved = localStorage.getItem('theme');
  if (saved) {
    setTheme(saved === 'dark');
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark);
  }
});
</script>

<style scoped>
.site-header {
  background: var(--bg);
  color: var(--fg);
  border-bottom: 1px solid var(--fg);
  padding: 0.5rem 1rem;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
}
.logo-link {
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  text-decoration: none;
}
.logo-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #222;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
}
[data-theme="dark"] .logo-bg {
  background: #fff;
}
.logo-img {
  height: 2.2rem;
  width: auto;
  display: block;
  filter: none;
}
[data-theme="dark"] .logo-img {
  filter: invert(1) brightness(0.9) contrast(1.2);
}
.menu {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu li a {
  color: var(--fg);
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
}
.menu li a:focus,
.menu li a:hover {
  background: var(--fg);
  color: var(--bg);
  outline: 2px solid var(--fg);
}
.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--fg);
  cursor: pointer;
}
.theme-toggle {
  background: none;
  border: 1px solid var(--fg);
  border-radius: 50%;
  color: var(--fg);
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  cursor: pointer;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
@media (max-width: 600px) {
  .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 3.5rem;
    left: 0;
    right: 0;
    background: var(--bg);
    border-bottom: 1px solid var(--fg);
    z-index: 10;
  }
  .menu.open {
    display: flex;
  }
  .menu-toggle {
    display: block;
  }
}
</style> 