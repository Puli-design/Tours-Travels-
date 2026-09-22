export default function decorate(block) {
  const rows = [...block.children];

  const title = rows[0]?.querySelector('div')?.textContent.trim()
    || 'Explore the world with us';

  const description = rows[1]?.querySelector('div')?.textContent.trim()
    || 'Discover beautiful destinations, unforgettable experiences and amazing journeys.';

  const button = rows[2]?.querySelector('a');

  const image = rows[3]?.querySelector('picture, img');

  block.innerHTML = '';

  const heroContent = document.createElement('div');
  heroContent.className = 'travel-hero-content';

  const heading = document.createElement('h1');
  heading.textContent = title;

  const text = document.createElement('p');
  text.textContent = description;

  heroContent.append(heading, text);

  if (button) {
    button.className = 'travel-hero-button';
    heroContent.append(button);
  }

  const heroMedia = document.createElement('div');
  heroMedia.className = 'travel-hero-media';

  if (image) {
    if (image.tagName === 'IMG') {
      image.alt = image.alt || 'Beautiful travel destination';
    }

    heroMedia.append(image);
  }

  block.append(heroContent, heroMedia);
}