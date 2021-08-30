<header>
	<img src="" alt="symbol" />
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/project">Past Work</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		width: 100%;
		max-width: 1520px;
		display: flex;
		margin: auto;
		flex-flow: row;
		justify-content: space-between;
		border-bottom: 2px solid rgba(37, 37, 37, 0.589);
		box-shadow: 0px 3px rgb(37, 37, 37);
	}

	header img {
		height: 5rem;
		width: 5rem;
		background-color: antiquewhite;
	}

	nav {
		display: flex;
	}

	nav ul {
		display: flex;
		flex-flow: row;
		align-items: center;
	}

	nav ul li {
		display: flex;

		margin: 0rem 1rem;
		list-style: none;
		font-size: 2rem;
	}

	nav ul li a {
		text-decoration: none;
		text-align: center;
	}

	nav ul li a:hover {
		color: greenyellow;
		transition: 0.5s;
		border-bottom: 2px solid greenyellow;
	}

	nav ul::before {
		content: '';
		display: block;
		width: 90px;
		height: 1px;
		margin: 0px auto;
		background-color: rgba(221, 238, 238, 0.877);
	}

	nav ul::after {
		content: '';
		display: block;
		width: 90px;
		height: 1px;
		margin: 0px auto;
		background-color: rgba(221, 238, 238, 0.877);
	}
</style>
