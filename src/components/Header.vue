<template>
	<header class="site-header">
		<nav aria-label="Main navigation" class="nav">
			<a href="/" class="logo-link">
				<span class="logo-bg">
					<img src="/images/design/logo.png" alt="WhyA11y home page" class="logo-img" />
				</span>
			</a>
			<button
				class="menu-toggle"
				:aria-expanded="menuOpen.toString()"
				aria-controls="main-menu"
				@click="toggleMenu"
			>
				<span class="sr-only">Toggle menu</span>
				☰
			</button>
			<ul
				:class="['menu', { open: menuOpen }]"
				id="main-menu"
				@keydown.esc="menuOpen = false"
			>
				<li><a href="/">Home</a></li>
				<li><a href="/why-a11y">Why a11y?</a></li>
				<li><a href="/articles">Articles</a></li>
			</ul>
			<button class="theme-toggle" @click="toggleTheme" :aria-pressed="isDark.toString()">
				<span class="sr-only">Toggle dark mode</span>
				<span v-if="isDark">🌙</span>
				<span v-else>☀️</span>
			</button>
		</nav>
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
		padding: .5rem 1rem;
	}
	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 900px;
		margin: 0 auto;
		position: relative;
	}
	.logo-link {
		display: flex;
		align-items: center;
		margin-right: 1.5rem;
		text-decoration: none;
		flex-shrink: 0;
		position: static;
		left: auto;
		transform: none;
		z-index: auto;
	}
	.logo-bg {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #222;
		border-radius: .5rem;
		padding: .25rem .5rem;
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
		align-items: center;
		position: static;
		top: auto;
		right: auto;
		left: auto;
		background: none;
		border-bottom: none;
		min-width: 0;
		box-shadow: none;
	}
	.menu li a {
		color: var(--fg);
		text-decoration: none;
		font-weight: bold;
		padding: .5rem .75rem;
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
		position: static;
		z-index: auto;
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
		z-index: auto;
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
	@media (max-width: 900px) {
		.nav {
			max-width: 100%;
		}
	}
	@media (max-width: 600px) {
		.nav {
			flex-direction: row;
			align-items: center;
			position: relative;
		}
		.logo-link {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			margin: 0;
			z-index: 12;
		}
		.menu-toggle {
			display: block;
			position: absolute;
			right: .5rem;
			top: 50%;
			transform: translateY(-50%);
			z-index: 13;
		}
		.menu {
			display: none;
			flex-direction: column;
			position: absolute;
			top: 3.5rem;
			right: 0;
			left: auto;
			background: var(--bg);
			border-bottom: 1px solid var(--fg);
			z-index: 11;
			min-width: 160px;
			box-shadow: 0 2px 8px rgba(0,0,0,0.08);
			align-items: flex-start;
		}
		.menu.open {
			display: flex;
		}
		.theme-toggle {
			margin-left: .5rem;
			z-index: 13;
		}
	}
</style> 