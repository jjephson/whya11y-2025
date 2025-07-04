<template>
	<header class="site-header">
		<div class="top-container">
			<a href="/" class="logo-link">
				<span class="logo-bg">
					<img src="/images/design/logo.png" alt="WhyA11y home page" class="logo-img" />
				</span>
				<span class="logo-text">Why A11y?</span>
			</a>
			<button class="theme-toggle" @click="toggleTheme" :aria-pressed="isDark.toString()">
				<span class="sr-only">Toggle dark mode</span>
				<span v-if="isDark">🌙</span>
				<span v-else>☀️</span>
			</button>
		</div>
		<nav aria-label="Main navigation" class="nav">
			<!-- <p>Menu</p> -->
			<ul class="menu" id="main-menu">
				<li v-for="link in menuLinks" :key="link.href">
					<a
						:href="link.href"
						:class="{ active: currentPath === (link.href === '/' ? '/' : link.href.replace(/\/$/, '')) }"
						:aria-current="currentPath === (link.href === '/' ? '/' : link.href.replace(/\/$/, '')) ? 'page' : null"
					>
						{{ link.label }}
						<span v-if="currentPath === (link.href === '/' ? '/' : link.href.replace(/\/$/, ''))" class="sr-only">(current)</span>
					</a>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script setup>
	import { ref, onMounted } from 'vue';

	const isDark = ref(false);

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

	// --- Active page logic ---
	const menuLinks = [
		{ href: '/why-a11y', label: 'Why a11y?' },
		{ href: '/articles', label: 'Articles' },
		{ href: '/code-examples', label: 'Code Examples' }
	];

	const currentPath = ref('/');

	onMounted(() => {
		currentPath.value = window.location.pathname.replace(/\/$/, '') || '/';
	});
</script>

<style scoped>
	.site-header {
		background: var(--bg);
		color: var(--fg);
	}
	.nav {
		display: flex;
		justify-content: space-between;
		max-width: 900px;
		position: relative;
		background: #F7F7F7;
		background: linear-gradient(180deg,rgba(247, 247, 247, 1) 0%, rgba(245, 245, 245, 1) 100%);
	}
	.logo-link {
		display: inline-block;
	}
	.logo-bg {
		display: inline-block;
		vertical-align: middle;
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
	.logo-text {
		display: inline-block;
		margin-left: .5rem;
		font-size: 1rem;
		color: var(--fg);
		text-decoration: none;
	}
	[data-theme="dark"] .logo-img {
		filter: invert(1) brightness(0.9) contrast(1.2);
	}
	.menu {
		display: flex;
		gap: 1.5rem;
		list-style: none;
		padding: 0;
		background: none;
		border-bottom: none;
		min-width: 0;
		box-shadow: none;
	}
	.menu li a {
		color: var(--fg);
		text-decoration: none;
		font-weight: bold;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		padding: .5rem 0;
		border-radius: 0;
		border-bottom: 2px solid transparent;
		transition: border-color 0.2s, color 0.2s;
	}
	.menu li a:focus,
	.menu li a:hover {
		border-bottom: 2px solid var(--fg);
		color: var(--fg);
		background: none;
		outline: none;
	}
	.theme-toggle {
		background: none;
		border: 1px solid var(--fg);
		border-radius: 50%;
		color: var(--fg);
		font-size: 1.5rem;
		width: 2.5rem;
		height: 2.5rem;
		margin-left: 1rem;
		cursor: pointer;
		z-index: auto;
	}
	
	@media (max-width: 900px) {
		.nav {
			max-width: 100%;
		}
		.menu {
			gap: 1rem;
			margin-right: 0.5rem;
		}
	}
	@media (max-width: 600px) {
		.site-header {
			padding: 0;
			font-family: 'Libre Franklin', Helvetica, Arial, sans-serif;
		}
		.top-container {
			padding:  .5rem .75rem;
		}
		.nav {
			display: flex;
			flex-direction: row;
			justify-content: center;
			border-top: 1px solid rgb(226, 226, 226);
			border-bottom: 1px solid rgb(226, 226, 226);
		}
		.nav p {
			padding: .75rem 1.5rem 0 0;
			margin: 0 1.5rem 0 0;
			font-size: 13px;
			font-weight: bold;
			text-transform: none;
			border-right: 1px solid rgb(226, 226, 226);
		}
		.menu {
			margin: 0;
			gap: 1.5rem;
		}
		.menu li a {
			display: block;
			padding: .75rem 0 .5rem;
			font-size: 13px;
			font-weight: normal;
			text-transform: none;
		}
	}
	.menu li a.active,
	.menu li a[aria-current="page"] {
		border-bottom: 2px solid var(--fg);
		color: var(--fg);
	}
</style> 