// Mark Hicken did this stuff
// 2018 pandora song downloader experiment

(function(window, document) {
    var audios = document.querySelectorAll('audio');
    var track = document.querySelector('.nowPlayingTopInfo__current__trackName');
    var artist = document.querySelector('.nowPlayingTopInfo__current__artistName');
    var album = document.querySelector('.nowPlayingTopInfo__current__albumName');

    if (audios && audios.length && track && artist && album) {
        var audio = audios[audios.length - 1]
        track = track && track.innerText.trim();
        artist = artist && artist.innerText.trim();
        album = album && album.innerText.trim();

        var fileName = artist + ' - ' + album + ' - ' + track + '.mp4';

        var link = document.createElement('a');
        link.style = 'display: none';
        link.id = 'temp_link';
        link.href = audio.src;
        link.innerText = 'Download Current Song';
        link.download = fileName;
        document.body.append(link);
        var domLink = document.getElementById('temp_link');
        domLink.click();
        link.remove();

        alert('Downloading track...\r\n'+link.download);

        // TODO: copy it to the clipboard?

        // TODO: update ID3 data

        // TODO: create download link from byte array data (support download="fileName" attributes)
    } else {
        console.log('No audio file to download!');
    }

    // function loadAudioIntoContext(url, onLoadHandler) {
    //     var audioCtx = new AudioContext();
    //     var source = audioCtx.createBufferSource();
    //     var request = new XMLHttpRequest();

    //     request.open('GET', url, true);
    //     request.responseType = 'arraybuffer';

    //     request.onload = function() {
    //         var audioData = request.response;
    //         audioCtx.decodeAudioData(audioData, function(buffer) {
    //             source.buffer = buffer;
    //             source.connect(audioCtx.destination);
    //             source.loop = true;
    //             // pass data out to the callback
    //             onLoadHandler(source.buffer, audioCtx);
    //         }, function(e) {
    //             console.log("Error with decoding audio data " + e.err);
    //         });
    //     }

    //     request.send();
    // }

    // function updateId3Data(audioBuffer, title, artist, album, year) {
    //     var reader = new FileReader();
    //         reader.onload = function(e) {
    //         var dv = new jDataView(this.result);

    //         // "TAG" starts at byte -128 from EOF.
    //         // See http://en.wikipedia.org/wiki/ID3
    //         if (dv.getString(3, dv.byteLength - 128) == 'TAG') {
    //             var title = dv.getString(30, dv.tell());
    //             var artist = dv.getString(30, dv.tell());
    //             var album = dv.getString(30, dv.tell());
    //             var year = dv.getString(4, dv.tell());
    //         } else {
    //             // no ID3v1 data found.
    //         }
    //     };

    //     reader.readAsArrayBuffer(this.files[0]);
    // }
})(window, document);