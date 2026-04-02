import ambition from '../assets/images/ambition-script.png'
import revolver from '../assets/images/gothic-revolver.png'
import skullThorns from '../assets/images/surreal-skull-thorns.png'
import classical from '../assets/images/classical-portrait.png'
import studioArm from '../assets/images/studio-surreal-arm.png'

/**
 * Demo video: CC0 sample (replace with your file in src/assets/videos and import like images).
 */
const DEMO_VIDEO =
  'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'

export const galleryCategories = [
  'All',
  'Fine Line',
  'Black & Grey',
  'Script',
  'Custom Pieces',
  'Flash',
]

/**
 * @typedef {{ id: number; title: string; category: string; mediaType: 'image' | 'video'; thumbnail: string; src: string; description: string; featured?: boolean }} GalleryItem
 */

/** @type {GalleryItem[]} */
export const galleryItems = [
  {
    id: 1,
    title: 'Custom Ambition Script',
    category: 'Script',
    mediaType: 'image',
    thumbnail: ambition,
    src: ambition,
    description:
      'Large-scale custom lettering with intricate flourishes and high-contrast calligraphy.',
    featured: true,
  },
  {
    id: 2,
    title: 'Gothic Bone Revolver',
    category: 'Black & Grey',
    mediaType: 'image',
    thumbnail: revolver,
    src: revolver,
    description:
      'A custom-designed, horror-inspired revolver with bone texture and skeletal detail.',
    featured: true,
  },
  {
    id: 3,
    title: 'Surreal Skull & Thorns',
    category: 'Custom Pieces',
    mediaType: 'image',
    thumbnail: skullThorns,
    src: skullThorns,
    description:
      'Illustrative fusion of anatomy and portraiture with bold red accents and controlled chaos.',
    featured: true,
  },
  {
    id: 4,
    title: 'Classical Portrait',
    category: 'Black & Grey',
    mediaType: 'image',
    thumbnail: classical,
    src: classical,
    description:
      'Illustrative realism with depth in hair and beard — moody, sculptural, and timeless.',
    featured: true,
  },
  {
    id: 5,
    title: 'Studio Session — Arm Composition',
    category: 'Custom Pieces',
    mediaType: 'image',
    thumbnail: studioArm,
    src: studioArm,
    description:
      'Dark illustrative work with cohesive flow from shoulder to forearm — surreal detail and atmosphere.',
    featured: true,
  },
  {
    id: 6,
    title: 'Healing Process Clip',
    category: 'Custom Pieces',
    mediaType: 'video',
    thumbnail: skullThorns,
    src: DEMO_VIDEO,
    description:
      'Example video slot — replace `src` with an imported file from ../assets/videos when ready.',
    featured: false,
  },
]

export const featuredItems = galleryItems.filter((item) => item.featured)
