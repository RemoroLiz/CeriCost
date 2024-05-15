function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}
function initClient() {
  function appendDataToSheet(photoUrl) {
    // Kredensial Google Sheets
    const sheetsCredentials = {
      type: "service_account",
      project_id: "sewa-kostum-423309",
      private_key_id: "9f53c34b68df157b50dbcd6b69de71e4b0c54e62",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDHvzaKQcvY0OUz\nC67esszl6uE6AqslGMU2Zhgpzokg0LLzZUyRNl1dTA1B3PZ9PMZ2/oQ/ErtwPRPL\naUEWbjKCqUpvfbeid2MEM867WGJbsDhkVfTouiSdT86VyGnyjjnq8FnkCqh4Jxdr\nyKy6ba4kO8sFf/B07vvz+QewL+PWPUx+N6DNm6hp2DjdZVzVYLlYUJXsDm513RIo\njnjJwUKBzvZ5SeVGGlf4LZBEW3iM0kSCDzkjWVvmmBqgvidaLzjqytvGI1q/I4Qh\nLRhy4ZVRGKlWnEJN+NBLuI04cLlKHhfiC184f1lWQRcnZ6HYkAfoMXrrtfW5wqe5\n2+Ef4Eb5AgMBAAECggEABZzyUClmeR0KEWiZ/ScxBu8v0/slUPYbFdSBuzkGO8Sw\nAEZGNzI781MS1n+gvwCBQwpGo2W06TcTxZLoK2E+eTmYvlaeA+Poq/W1vahPhhKT\ny+c2qhlcmop9CTkxl8ljeysbNFz26RhC7WDQai7w80YDExA9kyRwS/9hQsdeigbJ\ntRgtjpguyyjEfLdAExs8yZjeNd/iETXeye0vTlNxSUrG2zYEds5RDarMulHU/M+v\nhrdBCB10Ipe0JeEbgSCOi2SyfvE1PrJIB8s9MoMHPJmo0VzrWrpejsdzQEyRi0B7\nwbwqQMZpp4RzMA6HS2iUNysJL4K3maD3NtbC0YSKxQKBgQD0F1CGPThCSQK0rkfU\n2i6uIo0d0S0WWZRuCYLvFB5Mi7AVtW7YnkQbRI8EpNrV0BCKzE7zt8li+SUyVH6p\n/ySOYl4lnEToQR7EWgYI6CBpVXWojr6SAODOxujyBtAorkEB0z+mk+v+Mw18XGSN\nzTTSTiAi0JGq6ZAYJvLslVqtLQKBgQDRfgrT+xAPR08ugNFX60cTgsPZse6JdyPB\nitOuTulYO9LAbxuETvyvUGyi1ZaY/KziHJ46n6u2APPyoqHk5W8r18/fcyGjMTws\niFVJzmCZBacSyvJdBe0sXE9+ibSagNK8aRAnzNt31ohHgbudgIVfmlMgzZVGT18n\npUMezUOYfQKBgAbRy+8kMLkxXwD7SYh53AoDbxvhJzhTomD8pQrW7g3HbVD9863b\nph146eIAVRjaKkwmbyJCBT9dpJtmXu+S8EuGFglI92fhweFMfpSrH5SxzYq7Cjn8\nCkvcpM92P0STsb9CTqnxwgslFABgeHK5w/sIMb+nQhqbUepK1Eil15W1AoGAetCO\n3omgd6SRmiyxDf8D8z9FPFnhAzwSfUO7J8RhbnXb7y70DdQUtV7L4YagPF5dqE2o\nwaucCh5y5btMeBm93BEwb8paXQbfRShD//n6jZtPwGe0QK7ZxZj0jbWDaNS/Nu/N\nJdgmjhH6YRmAeSzAhDTAKUn9CnQ7z81GFUe3Ki0CgYBQjOaySiM/btvZuiMiJJLm\nwKrehD7zwaH0oQo0/5E6VwOAMGEJ6AI/CAN/t/ReLpvQgDoHcAFCT9PodKmm6LkH\n/daj1lrbaaoMJCTHs/8WM4d5/O5hffF4Y8R3Ot2BV214wF7AjtFIGUDEKwIADVdO\nMacbKHDy7jy548rehQ8g4A==\n-----END PRIVATE KEY-----\n",
      client_email: "ceri-424@sewa-kostum-423309.iam.gserviceaccount.com",
      client_id: "115719105952668407530",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/ceri-424%40sewa-kostum-423309.iam.gserviceaccount.com",
      universe_domain: "googleapis.com",
    };

    // Kredensial Google Drive
    const driveCredentials = {
      type: "service_account",
      project_id: "sewa-kostum-423309",
      private_key_id: "9c151d7ce466768b7234f1f0116e0492e8169d98",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDUubD7Vwl/CyAb\nwBGoV+M/qYVHiIS7pJi0bXHlxxCjJqjHkn7XRwstOjN5Dbebyn1dA+7ZX8RxvU+k\n4pC51lcplJhve3SOYx9xmR+O3LhZAOjjTMwN3kz/+DNt5HolDoYpA2fqfdclD+eb\n9TmATa3P93D0E5zXSmDnbCeOjq/bg3y5x5toLdTAYDrUBn0wsrzylb9x7KbkiK/v\nt5Vn03UAo0UIs6WjQIBQE7t4IMjWtDT9hb7/0Rwrj04IhHIl60LtOe51YCCUDbWk\nUatnCm58jGQfOYNQkLllqQ6CHFyyj64lviCvfgcZrzvYdD0sjD0i1MxzkiSKUPvW\nErCdg7aHAgMBAAECggEABUuwH7mtd1ewD3DLH708X4fZVQwNfdxdntRAqx83B1C9\nj+ZSOQrAOPqDcIaKZRr33vprlka/jbNQScMIJlAzMEpONyxEHQ1TqZDNy9Er169h\nnNL7G3dGxHKJ2TkAX27KoTe//QLv+bC5K9VBfrOwWYaH7dOVKnjkC67SF0bvEtBZ\n/oq7IjPNwN2tVnyJPd9geXlUXAR1hvS0D3numkcsAZjuYsn1cSkEszSGyFmfm1MX\nct5+itw0VNQIqFDaBX01WczuYY6TsWJSHQF5KbVmYcIxaLnv2WMmfaUNaScq1QRo\nHfb8dPWimC6ZHGjW1AN858tq/u4ynGJwMKp4UkmEkQKBgQD/UswzserhW0A2dhlu\nW61IlQN6MdxXSeLZ7QcyEpbzqUcabAXsxfavQm3QnEGHvCYDl0Ekw2DI9Ka5Xtxg\nwqWHxwlywyt69O+3OuIKbbi35ERrEsWihHamgxXsiSDsiqFOBuFxB0sZKnA8kyls\nGmiHDJGYVs4/CvgsHKArh+SJVwKBgQDVSf8kuLQXJOGI2jganWC44Wg+mwWiTzdK\nLL4G4ShgRO7NX1nRKrrkjbryBIbXgsqjowBcM2CusDjDrlzGuSUeZNS9haZKJg7u\nRvsEgVnbwgH23VM6k+2HvMCgzYFxObP7y9cMtrLhuWU8x0z55Alc6tNv/2R8+2CR\nGcP1ZGqOUQKBgCxpsqurXzgkL19J29Kej934TcqLsdBdQeC2onHLWga4g23NLJqr\nNOX3oDKRe7SovdQSE3rZoZRTOk00exE5yqF7teEIoh+ZS7mLvJYjz+XtBxm5Ajfq\n4tjEJKQollmPI8/20nBe3GlcQHnI/4OWdGhJf2oIb4f32IOT1yi7Ur2xAoGBAIL1\nBxpV6gVX2L59Nftpa8y4YZgm+MOandkGNbrlnjPVv0YL6IrcEJpqR0F39A74uFDW\nsU7rIM7BVmkXctF1Nkw+Hr0rBVn7milFHbS7cx/SNACODh8mWq5//0n8RCDwDAlr\nM+QTfSvI+FbkC+hW0kThzeazSdDPS5Br4HyYJjCxAoGAA4MGmIQYDIu5mWcxKXzF\n66m1whDrva6SJ63awys6QJONi02uJMGtqGV6Uifbw5LQS2yZnAU7s4zNjkp9zdEt\ngEIShFPF4G0E4Tljsm3hRdaICC0x52FzurFPB4wjKsqVHqqs1QMVF+n1WApuAQKk\n+2KJt5fMuwHxJ9zri1+BZEA=\n-----END PRIVATE KEY-----\n",
      client_email: "sewa-drive@sewa-kostum-423309.iam.gserviceaccount.com",
      client_id: "116474528180583338591",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/sewa-drive%40sewa-kostum-423309.iam.gserviceaccount.com",
      universe_domain: "googleapis.com",
    };

    // Konfigurasi kredensial untuk Google Sheets API
    gapi.client
      .init({
        apiKey: null,
        clientId: null,
        discoveryDocs: [
          "https://sheets.googleapis.com/$discovery/rest?version=v4",
        ],
        scope: "https://www.googleapis.com/auth/spreadsheets",
        loginHint: sheetsCredentials.client_email,
        fetch_basic_profile: false,
        ux_mode: "redirect",
        redirect_uri: "postmessage",
      })
      .then(function () {
        // Setelah kredensial Google Sheets diinisialisasi, data akan dikirim ke spreadsheet
        gapi.auth.setToken({
          access_token: sheetsCredentials.access_token,
        });
        gapi.client.sheets.spreadsheets.values
          .append({
            spreadsheetId: "1rTJZn3Eke8AqG8LX2z8iUon0VySgH-o9AgebxrfytmU", // ID spreadsheet Anda
            range: "Sheet1", // Nama sheet Anda
            valueInputOption: "RAW",
            resource: {
              values: [
                [document.getElementById("nama").value, photoUrl], // Menambahkan URL foto ke dalam data yang disimpan
              ],
            },
          })
          .then(
            function (response) {
              console.log("Data berhasil ditambahkan:", response);
              alert("Data berhasil ditambahkan!");
            },
            function (reason) {
              console.error("Gagal menambahkan data:", reason);
              alert("Gagal menambahkan data!");
            }
          );
      });

    // Konfigurasi kredensial untuk Google Drive API
    gapi.client
      .init({
        apiKey: null,
        clientId: null,
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
        ],
        scope: "https://www.googleapis.com/auth/drive.file",
        loginHint: driveCredentials.client_email,
        fetch_basic_profile: false,
        ux_mode: "redirect",
        redirect_uri: "postmessage",
      })
      .then(function () {
        // Setelah kredensial Google Drive diinisialisasi, foto akan diunggah ke Google Drive
        var fileMetadata = {
          name: "costume_photo_" + new Date().getTime(), // Nama file yang diunggah
          parents: [
            "1V9jqjAZZ72Momu_PINKq90Cuw45MgTnafYjjL7OX7HWWe41fWB6wYJUsemytQU5t6Z43r7Ei",
          ], // ID folder Google Drive tempat Anda ingin menyimpan foto
        };
        var media = {
          mimeType: "image/jpeg",
          body: document.getElementById("foto").files[0], // Mengambil foto dari input file
        };
        gapi.client.drive.files
          .create({
            resource: fileMetadata,
            media: media,
            fields: "id",
          })
          .then(function (response) {
            console.log("File ID:", response.result.id);
            // Jika foto berhasil diunggah, dapatkan URL-nya
            var photoUrl =
              "https://drive.google.com/uc?id=" + response.result.id;
            appendDataToSheet(photoUrl); // Panggil fungsi untuk menyimpan URL foto ke Google Spreadsheet
          })
          .catch(function (error) {
            console.error("Gagal mengunggah foto:", error);
            alert("Gagal mengunggah foto!");
          });
      });
  }

  document
    .getElementById("costumeForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // Call appendDataToSheet function here
      appendDataToSheet();
      // Reset form
      this.reset();
    });
}
