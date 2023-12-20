const users = [];
async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    if (user.message) {
        console.log("Usuário não encontrado");
    }
    else {
        users.push(user);
        console.log(`O usuário ${user.login} foi salvo`);
    }
}
async function showUser(username) {
    const user = users.find((user) => user.login === username);
    if (typeof user === "undefined") {
        console.log("Usuário não encontrado");
    }
    else {
        const response = await fetch(user.repos_url);
        const repos = await response.json();
        let message = `id: ${user.id}\nlogin: ${user.login}\nnome: ${user.name}\nBio: ${user.bio}\nRepositórios públicos: ${user.public_repos}\n`;
        repos.forEach((repo) => {
            message += `Nome: ${repo.name}\nDescrição: ${repo.description}\nEstrelas: ${repo.stargazers_count}\nÉ um fork: ${repo.fork ? "Sim" : "Não"}\n`;
        });
        console.log(message);
    }
}
function showAllUsers() {
    let message = "Usuários:\n";
    users.forEach(user => {
        message += `\n- ${user.login}`;
    });
    console.log(message);
}
function showReposTotal() {
    const resposTotal = users.reduce((accum, user) => accum + user.public_repos, 0);
    console.log(`O grupo possui um total de ${resposTotal} respositórios públicos!`);
}
function showTopFive() {
    const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5);
    let message = 'Top 5 usuários com mais respositórios públicos:\n';
    topFive.forEach((user, index) => {
        message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`;
    });
    console.log(message);
}
async function main() {
    await fetchUser('isaacpontes');
    await fetchUser('julianaconde');
    await fetchUser('pcaldass');
    await fetchUser('lucasqueirogaa');
    await fetchUser('frans203');
    await fetchUser('LeDragoX');
    await showUser('isaacpontes');
    await showUser('julianaconde');
    showAllUsers();
    showReposTotal();
    showTopFive();
}
main();
