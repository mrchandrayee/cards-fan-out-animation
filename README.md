# Cards Fan-Out Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/cards-fan-out-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable recreation of the uploaded 19.27-second screen recording.

## Video content

The page heading is **Cards Fan-Out Animation**. Inside a dark navy preview area with an orange border, five gradient cards fan out around the central blue card. Hovering/focusing a card brings it forward and enlarges it.

Cards and visible copy:

1. **Creative** — Build beautiful and creative digital experiences.
2. **Design** — Modern interfaces with smooth interactions.
3. **Explore** — Discover new ideas and interactive experiences.
4. **Develop** — Turn ideas into powerful web experiences.
5. **Launch** — Create, launch and grow your next project.

The video also displays the prompt `Comment "Cards" for code` and a CSS code pane.

## CSS transcribed from the video

The visible `.card` rule has been transcribed into the code panel and implemented in `style.css`:

- `position: absolute`
- `left: 50%; top: 50%`
- `width: 240px; height: 340px`
- `margin-left: -120px; margin-top: -170px`
- `border-radius: 24px`
- `padding: 25px; display: flex`
- `align-items: flex-end; color: white`
- `transform-origin: 50% 100%`
- `transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)`
- `box-shadow 0.6s ease, filter 0.6s ease`
- `0 20px 40px rgba(0,0,0,0.35)`
- `overflow: hidden; cursor: pointer`
- `will-change: transform`

The square glyph in the recording's color/alpha values is rendered here as the intended CSS notation (`white` and `rgba(...)`). Other layout, card-specific gradient colors, fan-out transforms, and interaction behavior are reconstructed because the recording does not show their full source rules.

## Interaction

- The deck opens in a five-card fan-out arrangement.
- Hover or keyboard-focus a card to bring it forward.
- Click/tap a card to select it on touch screens.
- Move the pointer away to restore the default fan-out with Explore in front.

## Run

1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. Hover, focus, or tap the cards.

No npm, framework, external assets, or internet connection is required.

## Files

- `index.html` — card content and visible CSS excerpt
- `style.css` — complete visual design and fan-out transitions
- `script.js` — hover, focus, and tap selection
- `README.md` — transcription notes and instructions

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
