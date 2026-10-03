import { useEffect, useState } from 'react'

// Removes a plain-colour photo background in the browser (flood fill from the edges),
// so the name can sit behind the person without slow blend modes. Falls back to the original photo.
export default function useCutout(src, maxH = 900) {
  const [out, setOut] = useState(src)
  useEffect(() => {
    let dead = false, url
    const img = new Image()
    img.onload = () => {
      const s = Math.min(1, maxH / img.naturalHeight)
      const w = Math.round(img.naturalWidth * s), h = Math.round(img.naturalHeight * s)
      const c = document.createElement('canvas'); c.width = w; c.height = h
      const ctx = c.getContext('2d', { willReadFrequently: true })
      ctx.drawImage(img, 0, 0, w, h)
      const data = ctx.getImageData(0, 0, w, h), px = data.data
      const at = (x, y) => { const i = (y * w + x) * 4; return [px[i], px[i + 1], px[i + 2]] }
      const corners = [at(2, 2), at(w - 3, 2), at(2, h - 3), at(w - 3, h - 3)]
      const bg = [0, 1, 2].map((k) => corners.reduce((a, p) => a + p[k], 0) / 4)
      if (corners.some((p) => Math.hypot(p[0] - bg[0], p[1] - bg[1], p[2] - bg[2]) > 30)) return // busy background: keep photo as is
      const seen = new Uint8Array(w * h), stack = []
      const push = (x, y) => {
        if (x < 0 || y < 0 || x >= w || y >= h) return
        const p = y * w + x
        if (seen[p] || Math.hypot(px[p * 4] - bg[0], px[p * 4 + 1] - bg[1], px[p * 4 + 2] - bg[2]) > 70) return
        seen[p] = 1; stack.push(p)
      }
      for (let x = 0; x < w; x++) { push(x, 0); push(x, h - 1) }
      for (let y = 0; y < h; y++) { push(0, y); push(w - 1, y) }
      while (stack.length) { const p = stack.pop(), x = p % w, y = (p - x) / w; push(x + 1, y); push(x - 1, y); push(x, y + 1); push(x, y - 1) }
      for (let p = 0; p < w * h; p++) {
        if (seen[p]) px[p * 4 + 3] = 0
        else if (seen[p - 1] || seen[p + 1] || seen[p - w] || seen[p + w]) px[p * 4 + 3] = 90 // soft edge
      }
      ctx.putImageData(data, 0, 0)
      c.toBlob((b) => { if (b && !dead) { url = URL.createObjectURL(b); setOut(url) } })
    }
    img.src = src
    return () => { dead = true; if (url) URL.revokeObjectURL(url) }
  }, [src, maxH])
  return out
}
