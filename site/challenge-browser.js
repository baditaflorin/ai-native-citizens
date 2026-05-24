const challengeList = document.querySelector("#challenge-list");
const workflowList = document.querySelector("#workflow-list");
const searchInput = document.querySelector("#search");
const difficultyInputs = [...document.querySelectorAll('input[name="difficulty"]')];
const resultCount = document.querySelector("#result-count");

const [challenges, workflows] = await Promise.all([
  fetch("data/challenges.json").then((response) => response.json()),
  fetch("data/workflow-cards.json").then((response) => response.json())
]);

const workflowById = new Map(workflows.map((workflow) => [workflow.id, workflow]));

function textMatch(challenge, query) {
  if (!query) return true;
  const haystack = [
    challenge.id,
    challenge.title,
    challenge.problem,
    challenge.user,
    challenge.why_it_matters,
    challenge.mvp_scope,
    challenge.difficulty,
    challenge.workflow_cards.join(" ")
  ].join(" ").toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function selectedDifficulty() {
  return difficultyInputs.find((input) => input.checked)?.value ?? "All";
}

function renderChallenge(challenge) {
  const workflowsForChallenge = challenge.workflow_cards
    .map((id) => workflowById.get(id))
    .filter(Boolean);

  return `
    <article class="challenge-card">
      <p class="meta-row"><span>${challenge.id}</span><span>${challenge.difficulty}</span></p>
      <h3>${challenge.title}</h3>
      <p><strong>Problem:</strong> ${challenge.problem}</p>
      <p><strong>User:</strong> ${challenge.user}</p>
      <p><strong>48h scope:</strong> ${challenge.mvp_scope}</p>
      <ul class="tag-list" aria-label="Workflow cards">
        ${workflowsForChallenge.map((workflow) => `<li>${workflow.id}</li>`).join("")}
      </ul>
    </article>
  `;
}

function renderWorkflow(workflow) {
  return `
    <article class="workflow-card">
      <p class="meta-row"><span>${workflow.id}</span></p>
      <h3>${workflow.title}</h3>
      <p>${workflow.what_it_does}</p>
      <p><strong>Verify:</strong> ${workflow.verify}</p>
    </article>
  `;
}

function render() {
  const query = searchInput.value.trim();
  const difficulty = selectedDifficulty();
  const filtered = challenges.filter((challenge) => {
    const difficultyMatch = difficulty === "All" || challenge.difficulty === difficulty;
    return difficultyMatch && textMatch(challenge, query);
  });

  challengeList.innerHTML = filtered.map(renderChallenge).join("");
  workflowList.innerHTML = workflows.map(renderWorkflow).join("");
  resultCount.textContent = `${filtered.length} challenge${filtered.length === 1 ? "" : "s"} shown.`;
}

searchInput.addEventListener("input", render);
difficultyInputs.forEach((input) => input.addEventListener("change", render));

render();

