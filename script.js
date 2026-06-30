db.collection("stories")
  .orderBy("timestamp", "desc")
  .onSnapshot(snapshot => {
    const storiesDiv = document.getElementById("stories");
    storiesDiv.innerHTML = "";

    snapshot.forEach(doc => {
      const story = doc.data();

      storiesDiv.innerHTML += `
        <div class="story-card">
          <div class="story-text">
            ${story.text}
          </div>
          <div>🤍 Support: ${story.support || 0}</div>
          <button class="support-btn" 
            onclick="addSupport('${doc.id}', ${story.support || 0})">
            I Understand
          </button>
        </div>
      `;
    });
  });