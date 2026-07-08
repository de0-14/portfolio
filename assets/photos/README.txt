Drop your photos here!

Accepted formats: .jpg, .jpeg, .png, .webp

Unlike a PHP version, a static site can't scan this folder on its own —
so after adding image files here, open assets/js/data.js and add each
filename to the galleryPhotos array, e.g.:

const galleryPhotos = [
  'assets/photos/street-01.jpg',
  'assets/photos/street-02.jpg',
];

They'll then show up in the "Behind the Lens" gallery on the site.

Tip: for best results, use images with a similar aspect ratio
(roughly 4:5, portrait) so the grid stays tidy.
