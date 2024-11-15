function SpotifyPlaylist() {
    return (
        <>
        <div class="spotify-playlist">
        <p class="text-playlist">Entre no Mood</p>
        <div class="playlist-grid">
            <iframe style="border-radius:12px"
                src="https://open.spotify.com/embed/playlist/1rIllGWmBAdBDtMbsom9wU?utm_source=generator" width="300"
                height="352" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>

            <iframe style="border-radius:12px"
                src="https://open.spotify.com/embed/playlist/3RXP1GHeziPq7uXIJU1iRr?utm_source=generator" width="300"
                height="352" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>

            <iframe style="border-radius:12px"
                src="https://open.spotify.com/embed/playlist/5ZyTCVn4qWo0U8hSAEEGUB?utm_source=generator" width="300"
                height="352" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>
        </div>
        <div class="playlist-texture">
        </div>
    </div>
        </>
    )
}

export default SpotifyPlaylist