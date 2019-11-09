class GitHub {
	constructor() {
		this.cliend_id = "e663c121405d12db1131";
		this.client_secret = "432ddf0cbd6694719c217eedb74bbe7193ac8f41";
		this.repos_count = 5;
		this.repos_sort = "created: asc";
	}
	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${
				this.cliend_id
			}&client_secret=${this.client_secret}`
		);
		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${
				this.repos_count
			}&sort=${this.repos_sort}&client_id=${
				this.cliend_id
			}&client_secret=${this.client_secret}`
		);
		const profile = await profileResponse.json();
		const repos = await repoResponse.json();
		return {
			profile,
			repos
		};
	}
}
