<script setup lang="ts">
import { ref, watch } from 'vue'
interface ColorItem {
  name: string
  hex: string
  desc: string
  img?: string
}

const colors: ColorItem[] = [
  { name: 'Red', hex: '#ef4444', desc: 'Smoked beet + paprika', img: '/red.jpg' },
  { name: 'Orange', hex: '#f97316', desc: 'Carrot + roasted pepper', img: '/orange.jpg' },
  { name: 'Yellow', hex: '#eab308', desc: 'Turmeric + golden beet', img: '/yellow.jpg' },
  { name: 'Green', hex: '#22c55e', desc: 'Spinach + garden herb', img: '/green.jpg' },
  { name: 'Blue', hex: '#3b82f6', desc: 'Blue spirulina', img: '/blue.jpg' },
  { name: 'Violet', hex: '#8b5cf6', desc: 'Purple sweet potato', img: '/violet.jpg' },
]

function pattyStyle(hex: string) {
  const base = hex
  const highlight = 'rgba(255,255,255,0.25)'
  const shadow = 'rgba(0,0,0,0.25)'
  return {
    backgroundImage: `radial-gradient(60% 60% at 30% 25%, ${highlight}, transparent 60%), radial-gradient(80% 80% at 70% 70%, ${shadow}, transparent 60%), radial-gradient(circle at 50% 50%, ${base}, ${base})`,
  }
}

function cardStyle(hex: string) {
  const a1 = hex.length === 7 ? `${hex}33` : hex
  const a2 = hex.length === 7 ? `${hex}0D` : hex
  return {
    backgroundImage: `linear-gradient(135deg, ${a1}, ${a2})`,
  }
}
const selectedColors = ref<string[]>([])
const showToaster = ref(false)
let toastTimer: number | undefined

function openToaster() {
  showToaster.value = true
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = window.setTimeout(() => (showToaster.value = false), 4000)
}

function addToMenu(color: string) {
  if (!selectedColors.value.includes(color)) {
    selectedColors.value.push(color)
  }
  openToaster()
}

function removeColor(color: string) {
  selectedColors.value = selectedColors.value.filter((c) => c !== color)
}

function gotoForm() {
  const section = document.getElementById('lead-form')
  section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function colorDotClass(name: string) {
  const k = name.toLowerCase()
  if (k === 'red') return 'bg-rainbow-red'
  if (k === 'orange') return 'bg-rainbow-orange'
  if (k === 'yellow') return 'bg-rainbow-yellow'
  if (k === 'green') return 'bg-rainbow-green'
  if (k === 'blue') return 'bg-rainbow-blue'
  if (k === 'violet') return 'bg-rainbow-violet'
  return 'bg-white'
}

watch(selectedColors, (v) => {
  if (v.length === 0) showToaster.value = false
})
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-slate-100"
  >
    <!-- Header -->
    <header class="sticky top-0 z-30 bg-slate-950/70 backdrop-blur border-b border-white/10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 rounded-xl bg-rainbow-stripe"></div>
          <div class="leading-none">
            <div class="text-xl font-extrabold tracking-tight rainbow-text">Rainbow Patties</div>
            <div class="text-xs text-slate-400 -mt-0.5">Plant-based. Unforgettable.</div>
          </div>
        </div>
        <nav class="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <a href="#colors" class="hover:text-white">Colors</a>
          <a href="#packs" class="hover:text-white">Packs</a>
          <a href="#lead-form" class="hover:text-white">Request samples</a>
        </nav>
        <a href="#lead-form" class="btn">Get wholesale info</a>
      </div>
    </header>

    <!-- Hero -->
    <section class="relative isolate">
      <div class="absolute inset-0 -z-10">
        <video
          aria-hidden="true"
          autoplay
          muted
          loop
          playsinline
          class="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/public/pan.mp4"
            type="video/mp4"
          />
        </video>
        <div class="absolute inset-0 bg-black/60"></div>
        <div
          class="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-slate-900"
        ></div>
      </div>
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-40 text-center">
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
          Plant‑Based Burger Patties in Every <span class="rainbow-text">Color of the Rainbow</span>
        </h1>
      </div>
    </section>

    <section class="py-12 lg:py-16 bg-slate-950/40 border-t border-b border-white/10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div class="badge mb-4">
            <span class="h-2 w-2 rounded-full bg-brand-primary"></span> New wholesale launch
          </div>
          <p class="text-lg text-slate-300 max-w-prose">
            Designed for restaurant pros: vibrant, food-safe colors that sear, sizzle, and wow your
            guests. Same juicy bite, now in Red, Orange, Yellow, Green, Blue, and Violet.
          </p>
          <ul class="mt-6 space-y-2 text-slate-200">
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2.5 w-2.5 rounded-full bg-rainbow-red"></span> 100% plant-based,
              allergen‑friendly recipe
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2.5 w-2.5 rounded-full bg-rainbow-green"></span> Cooks on flat‑top
              or grill like your current patties
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2.5 w-2.5 rounded-full bg-rainbow-blue"></span> Natural color
              sources; holds color after cooking
            </li>
          </ul>
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <a href="#lead-form" class="btn">Request wholesale pricing</a>
            <a href="#colors" class="btn-secondary">See the colors</a>
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
            <p class="mt-2 text-slate-300">
              Engineered for plating magic, social buzz, and seasonal specials.
            </p>
          </div>
          <a href="#lead-form" class="btn hidden sm:inline-flex">Get samples</a>
        </div>

        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="c in colors"
            :key="c.name"
            class="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 flex flex-col"
            :style="cardStyle(c.hex)"
          >
            <div class="w-full">
              <img
                v-if="c.img"
                :src="c.img"
                :alt="c.name + ' patty'"
                class="w-full h-48 sm:h-56 object-cover"
              />
              <div v-else class="w-full grid place-items-center py-10">
                <div
                  class="relative h-36 w-36 sm:h-40 sm:w-40 rounded-full shadow-xl ring-4 ring-white/10"
                  :style="pattyStyle(c.hex)"
                ></div>
              </div>
            </div>
            <div class="p-6 flex items-start justify-between gap-4">
              <div>
                <h3 class="text-xl font-bold">{{ c.name }}</h3>
                <p class="text-xs text-slate-300">{{ c.desc }}</p>
              </div>
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-2">
                  <span
                    class="h-3 w-3 rounded-full"
                    :style="{ backgroundColor: c.hex }"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Color swatch</span>
                </div>
                <button type="button" class="btn-secondary" @click="addToMenu(c.name)">
                  Add to samples
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Pack Options -->
    <section id="packs" class="py-16 lg:py-24 bg-slate-950/30">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl sm:text-4xl font-extrabold">Wholesale cases that fit your line</h2>
          <p class="mt-2 text-slate-300">
            Standard 4 oz patties. Frozen, ready for service. Minimum order: 1 case.
          </p>
        </div>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
            <div class="space-y-1">
              <h3 class="text-3xl font-extrabold rainbow-text">Most Flexible</h3>
              <p class="text-slate-300">24‑pack case</p>
            </div>
            <ul class="mt-4 space-y-2 text-slate-300">
              <li>Great for daily specials and small concepts</li>
              <li>Mix‑and‑match up to 2 colors per case</li>
              <li>Ships in insulated recyclable packaging</li>
            </ul>
            <div class="mt-6">
              <a href="#lead-form" class="btn w-full">Request pricing</a>
            </div>
          </div>
          <div
            class="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm ring-2 ring-brand-primary/20"
          >
            <div class="space-y-1">
              <h3 class="text-3xl font-extrabold rainbow-text">Best Value</h3>
              <p class="text-slate-300">48‑pack case</p>
            </div>
            <ul class="mt-4 space-y-2 text-slate-300">
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
    <section id="lead-form" class="py-16 lg:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div class="badge mb-3">
              <span class="h-2 w-2 rounded-full bg-rainbow-green"></span> Sampling available
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold">Request pricing & samples</h2>
            <p class="mt-3 text-slate-300">
              Tell us about your restaurant and pick sample colors below. We’ll follow up with
              wholesale pricing and sample options.
            </p>
          </div>

          <form
            name="Restaurant Leads"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            class="glass-dark rounded-2xl p-6"
          >
            <input type="hidden" name="form-name" value="Restaurant Leads" />
            <p class="hidden">
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-slate-300">Your name</label>
                <input
                  name="name"
                  type="text"
                  required
                  class="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-400 px-3 py-2 focus:border-brand-primary focus:ring-brand-primary"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-300">Restaurant</label>
                <input
                  name="restaurant"
                  type="text"
                  required
                  class="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-400 px-3 py-2 focus:border-brand-primary focus:ring-brand-primary"
                />
              </div>
              <div class="sm:col-span-2">
                <label class="block text-sm font-medium text-slate-300">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  class="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-400 px-3 py-2 focus:border-brand-primary focus:ring-brand-primary"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-300">Preferred case size</label>
                <select
                  name="case-size"
                  class="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 text-slate-100 px-3 py-2 focus:border-brand-primary focus:ring-brand-primary"
                >
                  <option>24-pack</option>
                  <option>48-pack</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <fieldset>
                  <legend class="block text-sm font-medium text-slate-300">
                    Pick sample colors (optional)
                  </legend>
                  <div class="mt-2 flex flex-wrap gap-2">
                    <label class="relative">
                      <input
                        type="checkbox"
                        name="colors[]"
                        v-model="selectedColors"
                        value="Red"
                        class="peer sr-only"
                      />
                      <span
                        class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white transition peer-checked:border-brand-primary/60 peer-checked:bg-brand-primary/20"
                      >
                        <span class="h-2.5 w-2.5 rounded-full bg-rainbow-red"></span>
                        Red
                      </span>
                    </label>
                    <label class="relative">
                      <input
                        type="checkbox"
                        name="colors[]"
                        v-model="selectedColors"
                        value="Orange"
                        class="peer sr-only"
                      />
                      <span
                        class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white transition peer-checked:border-brand-primary/60 peer-checked:bg-brand-primary/20"
                      >
                        <span class="h-2.5 w-2.5 rounded-full bg-rainbow-orange"></span>
                        Orange
                      </span>
                    </label>
                    <label class="relative">
                      <input
                        type="checkbox"
                        name="colors[]"
                        v-model="selectedColors"
                        value="Yellow"
                        class="peer sr-only"
                      />
                      <span
                        class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white transition peer-checked:border-brand-primary/60 peer-checked:bg-brand-primary/20"
                      >
                        <span class="h-2.5 w-2.5 rounded-full bg-rainbow-yellow"></span>
                        Yellow
                      </span>
                    </label>
                    <label class="relative">
                      <input
                        type="checkbox"
                        name="colors[]"
                        v-model="selectedColors"
                        value="Green"
                        class="peer sr-only"
                      />
                      <span
                        class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white transition peer-checked:border-brand-primary/60 peer-checked:bg-brand-primary/20"
                      >
                        <span class="h-2.5 w-2.5 rounded-full bg-rainbow-green"></span>
                        Green
                      </span>
                    </label>
                    <label class="relative">
                      <input
                        type="checkbox"
                        name="colors[]"
                        v-model="selectedColors"
                        value="Blue"
                        class="peer sr-only"
                      />
                      <span
                        class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white transition peer-checked:border-brand-primary/60 peer-checked:bg-brand-primary/20"
                      >
                        <span class="h-2.5 w-2.5 rounded-full bg-rainbow-blue"></span>
                        Blue
                      </span>
                    </label>
                    <label class="relative">
                      <input
                        type="checkbox"
                        name="colors[]"
                        v-model="selectedColors"
                        value="Violet"
                        class="peer sr-only"
                      />
                      <span
                        class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white transition peer-checked:border-brand-primary/60 peer-checked:bg-brand-primary/20"
                      >
                        <span class="h-2.5 w-2.5 rounded-full bg-rainbow-violet"></span>
                        Violet
                      </span>
                    </label>
                  </div>
                </fieldset>
              </div>
              <div class="sm:col-span-2">
                <label class="block text-sm font-medium text-slate-300">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  class="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-400 px-3 py-2 focus:border-brand-primary focus:ring-brand-primary"
                  placeholder="Tell us about your concept, volume, or launch date"
                ></textarea>
              </div>
              <div class="sm:col-span-2 flex items-center gap-2">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  class="h-4 w-4 rounded border-slate-600 text-brand-primary focus:ring-brand-primary"
                />
                <label for="consent" class="text-sm text-slate-300"
                  >I agree to be contacted about wholesale pricing and samples.</label
                >
              </div>
            </div>
            <div class="mt-6">
              <button type="submit" class="btn w-full">Send request</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Sample Cart Toaster -->
    <div
      aria-live="polite"
      class="fixed left-1/2 bottom-6 z-50 -translate-x-1/2 transition-all duration-300"
      :class="[
        showToaster ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 pointer-events-none',
      ]"
    >
      <div
        class="glass-dark rounded-xl shadow-2xl border border-white/10 p-4 w-[calc(100vw-2rem)] max-w-3xl"
      >
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="h-8 w-8 rounded-lg bg-rainbow-stripe"></div>
            <div>
              <p class="font-semibold">Sample cart</p>
              <p class="text-xs text-slate-300">Colors added. They’re selected in the form.</p>
            </div>
          </div>
          <button
            type="button"
            @click="showToaster = false"
            aria-label="Close"
            class="text-white/70 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                d="M6.225 4.811 4.81 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586 6.225 4.811Z"
              />
            </svg>
          </button>
        </div>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="c in selectedColors"
            :key="c"
            class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm"
          >
            <span class="h-2.5 w-2.5 rounded-full" :class="colorDotClass(c)"></span>
            {{ c }}
            <button
              type="button"
              class="text-white/70 hover:text-white"
              @click="removeColor(c)"
              aria-label="Remove"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-4 w-4"
              >
                <path d="M6 7h12v2H6zM8 9h8l-1 10H9zM10 5h4v2h-4z" />
              </svg>
            </button>
          </span>
        </div>
        <div class="mt-3 flex gap-2 justify-end">
          <button type="button" class="btn-secondary" @click="gotoForm">Go to form</button>
          <button type="button" class="btn" @click="gotoForm">Request samples</button>
        </div>
      </div>
    </div>

    <!-- Reopen Samples Button -->
    <button
      type="button"
      class="fixed bottom-6 right-6 z-40 btn shadow-candy flex items-center gap-2"
      v-if="selectedColors.length && !showToaster"
      @click="showToaster = true"
      aria-label="Open sample cart"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-5 w-5"
      >
        <path d="M6 7h12l-1 12H7L6 7zm3-2h6v2H9z" />
      </svg>
      <span>View samples ({{ selectedColors.length }})</span>
    </button>

    <!-- Footer -->
    <footer class="border-t border-white/10 bg-slate-950">
      <div
        class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p class="text-sm text-slate-400">
          © {{ new Date().getFullYear() }} Rainbow Patties. All rights reserved.
        </p>
        <div class="flex items-center gap-3 text-sm text-slate-300">
          <span class="badge">100% Plant‑Based</span>
          <span class="badge">Food‑Service Ready</span>
          <span class="badge">Made in USA</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
