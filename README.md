# ScatterFlow VS Code Project

This version uses one flat `assets/` folder for all images and videos.

## How to replace media

1. Open the project folder in VS Code.
2. Drop your images and videos directly into `assets/`.
3. Open `js/media-paths.js`.
4. Match each `file` value to the filename you dropped in.

Example:

```js
featureInstantEcosystem: {
  label: "Instant ecosystem hero image",
  file: "my-real-render.jpg",
  type: "image"
}
```

For video:

```js
featureInstantEcosystem: {
  label: "Instant ecosystem hero video",
  file: "my-demo-video.mp4",
  type: "video"
}
```

## Performance

The page now lazy-loads media with `IntersectionObserver`, so images and videos are only created when they are close to entering the viewport. Images use `loading="lazy"` and `decoding="async"`. Videos use `preload="metadata"`, muted autoplay, loop, and playsinline by default.

## Files

- `index.html` - page structure
- `css/styles.css` - layout and visuals
- `js/media-paths.js` - all editable media filenames
- `js/main.js` - lazy loading, sliders, reveal animation, asset tabs
- `assets/` - put all images and videos here
- `assets/MEDIA_CHECKLIST.md` - every slot/key listed in one place
