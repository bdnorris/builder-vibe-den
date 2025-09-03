<script setup lang="ts">
interface ColorItem {
  name: string
  hex: string
  desc: string
}

const colors: ColorItem[] = [
  { name: 'Red', hex: '#ef4444', desc: 'Smoked beet + paprika' },
  { name: 'Orange', hex: '#f97316', desc: 'Carrot + roasted pepper' },
  { name: 'Yellow', hex: '#eab308', desc: 'Turmeric + golden beet' },
  { name: 'Green', hex: '#22c55e', desc: 'Spinach + garden herb' },
  { name: 'Blue', hex: '#3b82f6', desc: 'Blue spirulina' },
  { name: 'Violet', hex: '#8b5cf6', desc: 'Purple sweet potato' },
]

function pattyStyle(hex: string) {
  // Rich, textured patty using layered gradients (works without Tailwind plugins)
  const base = hex
  const highlight = 'rgba(255,255,255,0.25)'
  const shadow = 'rgba(0,0,0,0.25)'
  return {
    backgroundImage: `radial-gradient(60% 60% at 30% 25%, ${highlight}, transparent 60%), radial-gradient(80% 80% at 70% 70%, ${shadow}, transparent 60%), radial-gradient(circle at 50% 50%, ${base}, ${base})`,
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-800">
    <!-- Header -->
    <header class="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-white/30">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 rounded-xl bg-rainbow-stripe"></div>
          <div class="leading-none">
            <div class="text-xl font-extrabold tracking-tight rainbow-text">Rainbow Patties</div>
            <div class="text-xs text-slate-500 -mt-0.5">Plant-based. Unforgettable.</div>
          </div>
        </div>
        <nav class="hidden md:flex items-center gap-6 text-sm">
          <a href="#colors" class="hover:text-slate-900">Colors</a>
          <a href="#packs" class="hover:text-slate-900">Packs</a>
          <a href="#lead-form" class="hover:text-slate-900">Contact</a>
        </nav>
        <a href="#lead-form" class="btn">Get wholesale info</a>
      </div>
    </header>

    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 bg-rainbow-stripe blur-3xl"></div>
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div class="badge mb-4"><span class="h-2 w-2 rounded-full bg-brand-primary"></span> New wholesale launch</div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Plant‑Based Burger Patties in Every <span class="rainbow-text">Color of the Rainbow</span>
          </h1>
          <p class="mt-6 text-lg text-slate-600 max-w-prose">
            Designed for restaurant pros: vibrant, food-safe colors that sear, sizzle, and wow your guests. Same juicy bite, now in Red, Orange, Yellow, Green, Blue, and Violet.
          </p>
          <ul class="mt-6 space-y-2 text-slate-700">
            <li class="flex items-start gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-rainbow-red"></span> 100% plant-based, allergen‑friendly recipe</li>
            <li class="flex items-start gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-rainbow-green"></span> Cooks on flat‑top or grill like your current patties</li>
            <li class="flex items-start gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-rainbow-blue"></span> Natural color sources; holds color after cooking</li>
          </ul>
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <a href="#lead-form" class="btn">Request wholesale pricing</a>
            <a href="#colors" class="btn-secondary">See the colors</a>
          </div>
        </div>
        <!-- 16:9 Video placeholder without aspect-ratio plugin -->
        <div class="relative w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
          <div class="w-full" style="padding-bottom:56.25%"></div>
          <div class="absolute inset-0 bg-black/5 flex items-center justify-center">
            <div class="relative max-w-3xl w-full h-full">
              <div class="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 opacity-80"></div>
              <div class="absolute inset-0 grid place-items-center">
                <button type="button" aria-label="Play video" class="h-20 w-20 rounded-full grid place-items-center bg-white/90 hover:bg-white transition shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8 text-slate-900">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <p class="mt-4 text-white/80 text-sm">Drop your 16:9 video here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Color Grid -->
    <section id="colors" class="relative py-16 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-end justify-between gap-6">
          <div>
            <h2 class="text-3xl sm:text-4xl font-extrabold">Six show‑stopping colors</h2>
            <p class="mt-2 text-slate-600">Engineered for plating magic, social buzz, and seasonal specials.</p>
          </div>
          <a href="#lead-form" class="btn hidden sm:inline-flex">Get samples</a>
        </div>

        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article v-for="c in colors" :key="c.name" class="glass rounded-2xl p-6 flex flex-col">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold">{{ c.name }}</h3>
              <span class="text-xs text-slate-500">{{ c.desc }}</span>
            </div>
            <div class="mt-5 grid place-items-center">
              <div class="relative h-36 w-36 sm:h-40 sm:w-40 rounded-full shadow-xl ring-4 ring-white/70" :style="pattyStyle(c.hex)">
                <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-xs font-semibold shadow" :style="{ color: c.hex }">Signature</div>
              </div>
            </div>
            <div class="mt-5 flex items-center justify-between text-sm">
              <div class="flex items-center gap-2"><span class="h-3 w-3 rounded-full" :style="{ backgroundColor: c.hex }"></span>{{ c.hex }}</div>
              <a href="#lead-form" class="text-brand-primary hover:underline">Add to menu</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Pack Options -->
    <section id="packs" class="py-16 lg:py-24 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl sm:text-4xl font-extrabold">Wholesale cases that fit your line</h2>
          <p class="mt-2 text-slate-600">Standard 4 oz patties. Frozen, ready for service. Minimum order: 1 case.</p>
        </div>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="rounded-2xl border bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm">
            <div class="flex items-center justify-between">
              <h3 class="text-2xl font-bold">24‑pack case</h3>
              <span class="badge"><span class="h-2 w-2 rounded-full bg-emerald-500"></span> Most flexible</span>
            </div>
            <ul class="mt-4 space-y-2 text-slate-700">
              <li>Great for daily specials and small concepts</li>
              <li>Mix‑and‑match up to 2 colors per case</li>
              <li>Ships in insulated recyclable packaging</li>
            </ul>
            <div class="mt-6">
              <a href="#lead-form" class="btn w-full">Request pricing</a>
            </div>
          </div>
          <div class="rounded-2xl border bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm ring-2 ring-brand-primary/20">
            <div class="flex items-center justify-between">
              <h3 class="text-2xl font-bold">48‑pack case</h3>
              <span class="badge"><span class="h-2 w-2 rounded-full bg-fuchsia-500"></span> Best value</span>
            </div>
            <ul class="mt-4 space-y-2 text-slate-700">
              <li>Ideal for multi‑unit and high‑volume kitchens</li>
              <li>Mix‑and‑match up to 4 colors per case</li>
              <li>Volume pricing available</li>
            </ul>
            <div class="mt-6">
              <a href="#lead-form" class="btn w-full">Request pricing</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lead Gen Form (Netlify-ready) -->
    <section id="lead-form" class="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 class="text-3xl sm:text-4xl font-extrabold">Let’s start a conversation</h2>
            <p class="mt-3 text-slate-600">Tell us about your restaurant and we’ll send wholesale pricing and sample options.</p>
            <div class="mt-6 flex flex-wrap gap-3">
              <span class="badge"><span class="h-2 w-2 rounded-full bg-rainbow.red"></span> Red</span>
              <span class="badge"><span class="h-2 w-2 rounded-full bg-rainbow.orange"></span> Orange</span>
              <span class="badge"><span class="h-2 w-2 rounded-full bg-rainbow.yellow"></span> Yellow</span>
              <span class="badge"><span class="h-2 w-2 rounded-full bg-rainbow.green"></span> Green</span>
              <span class="badge"><span class="h-2 w-2 rounded-full bg-rainbow.blue"></span> Blue</span>
              <span class="badge"><span class="h-2 w-2 rounded-full bg-rainbow.violet"></span> Violet</span>
            </div>
          </div>

          <form
            name="Restaurant Leads"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            class="glass rounded-2xl p-6"
          >
            <input type="hidden" name="form-name" value="Restaurant Leads" />
            <p class="hidden">
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-slate-700">Your name</label>
                <input name="name" type="text" required class="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-brand-primary focus:ring-brand-primary" />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700">Restaurant</label>
                <input name="restaurant" type="text" required class="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-brand-primary focus:ring-brand-primary" />
              </div>
              <div class="sm:col-span-2">
                <label class="block text-sm font-medium text-slate-700">Email</label>
                <input name="email" type="email" required class="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-brand-primary focus:ring-brand-primary" />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700">Preferred case size</label>
                <select name="case-size" class="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-brand-primary focus:ring-brand-primary">
                  <option>24-pack</option>
                  <option>48-pack</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700">Colors of interest</label>
                <input name="colors" type="text" placeholder="e.g. Red, Green, Violet" class="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-brand-primary focus:ring-brand-primary" />
              </div>
              <div class="sm:col-span-2">
                <label class="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="4" class="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-brand-primary focus:ring-brand-primary" placeholder="Tell us about your concept, volume, or launch date"></textarea>
              </div>
              <div class="sm:col-span-2 flex items-center gap-2">
                <input id="consent" name="consent" type="checkbox" required class="h-4 w-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary" />
                <label for="consent" class="text-sm text-slate-700">I agree to be contacted about wholesale pricing and samples.</label>
              </div>
            </div>
            <div class="mt-6">
              <button type="submit" class="btn w-full">Send request</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-slate-500">© {{ new Date().getFullYear() }} Rainbow Patties. All rights reserved.</p>
        <div class="flex items-center gap-3 text-sm text-slate-600">
          <span class="badge">100% Plant‑Based</span>
          <span class="badge">Food‑Service Ready</span>
          <span class="badge">Made in USA</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
</style>
