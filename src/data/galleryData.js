import handOfGod from '../assets/images/HandOfGodTat.jpg'
import crownChest from '../assets/images/CrownChestTat.jpg'
import tat7 from '../assets/images/tat  7.JPG'
import tat8 from '../assets/images/tat 8.JPG'
import img971026 from '../assets/images/971026D3-359E-4A56-9918-9962A99809B9.JPG'
import img4827 from '../assets/images/4827FB91-A5DD-4AC7-9FD7-2F29E1C421E9.JPG'

import mov1 from '../assets/images/8dd7e67466f9471384d49e5075853a30.MOV'
import mov2 from '../assets/images/4b6c6d85f9df4f7e8d890613535d46a0.MOV'
import mov3 from '../assets/images/cbf149b8f9634a3b9ae8db4632768503.MOV'
import mov4 from '../assets/images/562c10f0a6a84fee9a314385a483f874.MOV'
import mov5 from '../assets/images/f8d44331cd174008969f0cb12533c713.MOV'

export const galleryCategories = [
  'All',
  'Fine Line',
  'Black & Grey',
  'Script',
  'Custom Pieces',
  'Video',
  'Flash',
]

/**
 * Each image / video file is used at most once in this list (no asset repeated).
 * Videos use inline preview in the grid (no duplicate poster image).
 *
 * @typedef {{ id: number; title: string; category: string; mediaType: 'image' | 'video'; thumbnail?: string; src: string; description: string; featured?: boolean }} GalleryItem
 */

/** @type {GalleryItem[]} */
export const galleryItems = [
  {
    id: 1,
    title: 'Hand of God',
    category: 'Custom Pieces',
    mediaType: 'image',
    thumbnail: handOfGod,
    src: handOfGod,
    description: 'Custom composition — detail and contrast tailored to placement.',
    featured: true,
  },
  {
    id: 2,
    title: 'Crown chest piece',
    category: 'Black & Grey',
    mediaType: 'image',
    thumbnail: crownChest,
    src: crownChest,
    description: 'Black and grey work with strong focal flow across the chest.',
    featured: true,
  },
  {
    id: 3,
    title: 'Fine line session',
    category: 'Fine Line',
    mediaType: 'image',
    thumbnail: tat7,
    src: tat7,
    description: 'Delicate linework and balance for a clean healed result.',
    featured: true,
  },
  {
    id: 4,
    title: 'Placement study',
    category: 'Fine Line',
    mediaType: 'image',
    thumbnail: tat8,
    src: tat8,
    description: 'Design shaped to follow natural body movement.',
    featured: true,
  },
  {
    id: 5,
    title: 'Portrait & tone',
    category: 'Black & Grey',
    mediaType: 'image',
    thumbnail: img971026,
    src: img971026,
    description: 'Depth, soft gradients, and readable contrast.',
    featured: true,
  },
  {
    id: 6,
    title: 'Script & lettering',
    category: 'Script',
    mediaType: 'image',
    thumbnail: img4827,
    src: img4827,
    description: 'Custom lettering with flow and clarity.',
    featured: true,
  },
  {
    id: 7,
    title: 'Studio clip 1',
    category: 'Video',
    mediaType: 'video',
    src: mov1,
    description: 'Session footage — process and healed-in progress.',
    featured: false,
  },
  {
    id: 8,
    title: 'Studio clip 2',
    category: 'Video',
    mediaType: 'video',
    src: mov2,
    description: 'Behind the needle — pacing, stencil, and line.',
    featured: false,
  },
  {
    id: 9,
    title: 'Studio clip 3',
    category: 'Video',
    mediaType: 'video',
    src: mov3,
    description: 'Close-up detail and shading passes.',
    featured: false,
  },
  {
    id: 10,
    title: 'Studio clip 4',
    category: 'Video',
    mediaType: 'video',
    src: mov4,
    description: 'Full context of the piece on skin.',
    featured: false,
  },
  {
    id: 11,
    title: 'Studio clip 5',
    category: 'Video',
    mediaType: 'video',
    src: mov5,
    description: 'Wrap-up and final look.',
    featured: false,
  },
]

export const featuredItems = galleryItems.filter((item) => item.featured)
