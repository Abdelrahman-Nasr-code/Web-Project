function addReview() {
    const name = document.getElementById("name").value.trim();
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value.trim();

    if (name=='' || rating=='' ||comment=='') {
      alert("Please fill in all fields.");
      return false;
    }

    const reviewHTML = `
      <div class="review">
        <strong>${name}</strong>
        <div class="stars">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</div>
        <p>${comment}</p>
      </div>
    `;

    document.getElementById("rc").innerHTML += reviewHTML;

    
    document.getElementById("rf").reset();

    return false; 
  }