function downloadVideo() {
    var videoUrl = document.getElementById('video-url').value;
    if (videoUrl) {
      var options = ['-f', 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best'];
      youtubeDL.exec(videoUrl, options, function(err, output) {
        if (err) {
          alert('Une erreur s\'est produite lors de la récupération des informations sur la vidéo.');
          console.log(err);
          return;
        }
        var downloadUrl = output[0].url;
        if (downloadUrl) {
          var a = document.createElement('a');
          a.href = downloadUrl;
          a.download = 'video.mp4';
          a.target = '_blank';
          a.click();
        } else {
          alert('Impossible de récupérer l\'URL de téléchargement.');
        }
      });
    } else {
      alert('URL de la vidéo YouTube invalide.');
    }
  }
  