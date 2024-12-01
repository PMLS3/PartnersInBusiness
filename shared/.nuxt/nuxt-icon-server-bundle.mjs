function createRemoteCollection(fetchEndpoint) {
  let _cache
  return async () => {
    if (_cache)
      return _cache
    const res = await fetch(fetchEndpoint).then(r => r.json())
    _cache = res
    return res
  }
}

export const collections = {
  'akar-icons': () => import('@iconify-json/akar-icons/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'fa6-brands': () => import('@iconify-json/fa6-brands/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'feather': () => import('@iconify-json/feather/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'flagpack': () => import('@iconify-json/flagpack/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'ion': () => import('@iconify-json/ion/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'logos': () => import('@iconify-json/logos/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'lucide': () => import('@iconify-json/lucide/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'mdi': () => import('@iconify-json/mdi/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'mdi-light': () => import('@iconify-json/mdi-light/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'pajamas': () => import('@iconify-json/pajamas/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'ph': () => import('@iconify-json/ph/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'simple-icons': () => import('@iconify-json/simple-icons/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'tabler': () => import('@iconify-json/tabler/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'teenyicons': () => import('@iconify-json/teenyicons/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'uit': () => import('@iconify-json/uit/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'uiw': () => import('@iconify-json/uiw/icons.json', { with: { type: 'json' } }).then(m => m.default),
}