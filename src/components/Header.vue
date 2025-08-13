<template>
	<header class="site-header">
		<div class="top-container">
			<a href="/" class="logo-link">
				<span class="logo-bg">
					<img src="/images/design/logo.png" alt="WhyA11y home page" class="logo-img" />
				</span>
				<span class="logo-text">Why A11y?</span>
			</a>
					<button class="theme-toggle" @click="toggleTheme" :aria-pressed="isDark.toString()" :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
			<span class="sr-only">Toggle dark mode</span>
			<div class="toggle-icon">
				<svg v-if="isDark" class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="5"/>
					<line x1="12" y1="1" x2="12" y2="3"/>
					<line x1="12" y1="21" x2="12" y2="23"/>
					<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
					<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
					<line x1="1" y1="12" x2="3" y2="12"/>
					<line x1="21" y1="12" x2="23" y2="12"/>
					<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
					<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
				</svg>
				<svg v-else class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
				</svg>
			</div>
		</button>
		</div>
		<nav aria-label="Main navigation" class="nav">
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

	const isDark = ref(true);

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
			// Default to dark mode, but respect user's system preference if they prefer light
			const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
			setTheme(!prefersLight); // Use dark mode unless user explicitly prefers light
		}
	});

	// --- Active page logic ---
	const menuLinks = [
		{ href: '/why-a11y', label: 'Why a11y?' },
		{ href: '/articles', label: 'Articles' },
		{ href: '/code-examples', label: 'Code Examples' },
		{ href: '/en301549', label: 'EN 301 549' }
	];

	const currentPath = ref('/');

	onMounted(() => {
		currentPath.value = window.location.pathname.replace(/\/$/, '') || '/';
	});
</script>

<style scoped>
	.site-header {
		padding: 0;
		background: var(--bg);
		color: var(--fg);
		font-family: 'Libre Franklin', Helvetica, Arial, sans-serif;
	}
	.top-container {
		padding: 0.5rem 0.75rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
	}
	.nav {
		display: flex;
		justify-content: center;
		background: #f7f7f7;
		background: linear-gradient(180deg,rgba(247, 247, 247, 1) 0%, rgba(245, 245, 245, 1) 100%);
		border-top: 1px solid rgb(226, 226, 226);
		border-bottom: 1px solid rgb(226, 226, 226);
	}

	[data-theme="dark"] .nav {
		background: #2a2a2a;
		background: linear-gradient(180deg,rgba(42, 42, 42, 1) 0%, rgba(35, 35, 35, 1) 100%);
		border-top: 1px solid #444;
		border-bottom: 1px solid #444;
	}
	.menu {
		display: flex;
		gap: 1rem;
		list-style: none;
		padding: 0;
		margin: 0;
		flex-wrap: wrap;
		justify-content: center;
	}
	.menu li a {
		display: block;
		padding: 0.75rem 0.5rem 0.5rem 0.5rem;
		border-radius: 0;
		border-bottom: 2px solid transparent;
		transition: border-color 0.2s, color 0.2s;
		font-size: 0.875rem;
		letter-spacing: 0.04em;
		text-decoration: none;
		color: var(--fg);
		white-space: nowrap;
	}
	.menu li a:focus,
	.menu li a:hover {
		border-bottom: 2px solid var(--fg);
		color: var(--fg);
		background: none;
		outline: none;
	}
	.menu li a.active,
	.menu li a[aria-current="page"] {
		border-bottom: 2px solid var(--fg);
		color: var(--fg);
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
		display: block;
		height: 2.2rem;
	}
	.logo-text {
		display: inline-block;
		margin-left: .5rem;
		color: var(--fg);
	}
	[data-theme="dark"] .logo-img {
		filter: invert(1) brightness(0.9) contrast(1.2);
	}
	.theme-toggle {
		background: var(--bg-muted);
		border: 2px solid var(--border);
		border-radius: 12px;
		color: var(--fg);
		width: 44px;
		height: 44px;
		margin-left: 1rem;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
	}

	.theme-toggle:hover {
		background: var(--accent-primary);
		border-color: var(--accent-primary);
		color: white;
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
	}

	.theme-toggle:active {
		transform: translateY(0);
		box-shadow: 0 2px 6px rgba(30, 64, 175, 0.2);
	}

	.theme-toggle:focus {
		background: var(--accent-primary) !important;
		border-color: var(--accent-primary) !important;
		color: white !important;
		outline: none;
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
	}

	.toggle-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.theme-toggle:hover .toggle-icon {
		transform: scale(1.1);
	}

	.sun-icon,
	.moon-icon {
		transition: all 0.3s ease;
	}

	[data-theme="dark"] .theme-toggle {
		background: var(--bg-muted);
		border-color: var(--border);
	}

	[data-theme="dark"] .theme-toggle:hover {
		background: var(--accent-primary);
		border-color: var(--accent-primary);
	}

	@media (max-width: 768px) {
		.top-container {
			padding: 0.8rem 1rem;
			max-width: 100%;
		}
		.logo-text {
			font-size: 0.9rem;
		}
		.logo-img {
			height: 1.8rem;
		}
		.theme-toggle {
			width: 40px;
			height: 40px;
		}
		.sun-icon,
		.moon-icon {
			width: 18px;
			height: 18px;
		}
		.nav {
			padding: 0 0.5rem;
		}
		.menu {
			gap: 0.5rem;
			width: 100%;
		}
		.menu li a {
			padding: 0.5rem 0.25rem 0.25rem 0.25rem;
			font-size: 0.8rem;
		}
	}

	@media (max-width: 480px) {
		.top-container {
			padding: 0.8rem 0.75rem;
			max-width: 100%;
		}
		.logo-text {
			font-size: 0.8rem;
			margin-left: 0.25rem;
		}
		.logo-img {
			height: 1.6rem;
		}
		.theme-toggle {
			width: 36px;
			height: 36px;
			margin-left: 0.5rem;
		}
		.sun-icon,
		.moon-icon {
			width: 16px;
			height: 16px;
		}
		.menu {
			gap: 0.25rem;
		}
		.menu li a {
			padding: 0.4rem 0.2rem 0.2rem 0.2rem;
			font-size: 0.75rem;
		}
	}
</style> 