
// Login (demo logic)
document.getElementById('loginForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    if(user === "admin" && pass === "admin"){
      window.location = '/admin';
      return;
    }
    if(user.length && pass.length) window.location = '/voter';
    else document.getElementById('loginMsg').innerHTML='<span class="error">Invalid login.</span>';
});

// Registration (for demo, does not store users)
window.register = function() {
  const regUser = document.getElementById('regUser').value.trim();
  const regPass = document.getElementById('regPass').value.trim();
  if(regUser.length >= 4 && regPass.length >= 4)
    document.getElementById('registerMsg').innerHTML = '<span class="success">Registered! (Demo: Use for login above)</span>';
  else
    document.getElementById('registerMsg').innerHTML = '<span class="error">Min 4 chars required.</span>';
}

// Voting Dashboard Example - Show mock candidates
if(document.getElementById('candidates')){
  const candidateList = [
    {id:1, name:"Narender Modi"},
    {id:2, name:"Amit"},
    {id:3, name:"Ayush"}
  ];
  let voted = false;
  document.getElementById('candidates').innerHTML = candidateList.map(c =>
    `<div class="candidate-card">
      <span>${c.name}</span>
      <button class="vote-btn" onclick="vote('${c.name}')">Vote</button>
     </div>`
  ).join('');
  window.vote = function(name) {
    if(voted){ document.getElementById('voteMsg').innerHTML='<span class="error">You already voted!</span>'; return; }
    document.getElementById('voteMsg').innerHTML = `<span class="success">Vote cast for <b>${name}</b>! 🎉</span>`;
    voted = true;
  }
}

// Admin Dashboard Example
if(document.getElementById('results')){
  setTimeout(()=>{
    document.getElementById('results').innerHTML=`
      <div class="candidate-list" style="display:block;">
        <div class="candidate-card"><span>Alice Turing</span><span>15 votes</span></div>
        <div class="candidate-card"><span>Bob Hopper</span><span>10 votes</span></div>
        <div class="candidate-card"><span>Charlie Lovelace</span><span>8 votes</span></div>
      </div>`;
  }, 800);
}
