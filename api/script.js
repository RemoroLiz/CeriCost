document
  .getElementById("costumeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    // Upload photo
    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        const photoUrl = data.photoUrl;

        // Submit form data along with photoUrl to server
        fetch("/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nama: formData.get("nama"),
            photoUrl: photoUrl,
          }),
        }).then((response) => {
          if (response.ok) {
            alert("Data berhasil ditambahkan!");
          } else {
            alert("Gagal menambahkan data!");
          }
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Gagal mengunggah foto!");
      });

    // Reset form
    this.reset();
  });
