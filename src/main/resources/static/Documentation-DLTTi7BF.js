import{_ as e,c as a,o as d,bb as t}from"./index-D73lKA6z.js";const s={},i={class:"card"},o=t(`<div class="font-semibold text-2xl mb-4" data-v-8ddd5f83>Documentation</div><div class="font-semibold text-xl mb-4" data-v-8ddd5f83>Get Started</div><p class="text-lg mb-4" data-v-8ddd5f83> Sakai is an application template for Vue based on the <a href="https://github.com/vuejs/create-vue" class="font-medium text-primary hover:underline" data-v-8ddd5f83>create-vue</a>, the recommended way to start a <strong data-v-8ddd5f83>Vite-powered</strong> Vue projects. To get started, clone the <a href="https://github.com/primefaces/sakai-vue" class="font-medium text-primary hover:underline" data-v-8ddd5f83>repository</a> from GitHub and install the dependencies with npm or yarn. </p><pre class="app-code" data-v-8ddd5f83><code data-v-8ddd5f83>git clone https://github.com/primefaces/sakai-vue
npm install
npm run dev</code></pre><p class="text-lg mb-4" data-v-8ddd5f83>Navigate to <i class="bg-highlight px-2 py-1 rounded-border not-italic text-base" data-v-8ddd5f83>http://localhost:5173/</i> to view the application in your local environment.</p><pre class="app-code" data-v-8ddd5f83><code data-v-8ddd5f83>npm run dev</code></pre><div class="font-semibold text-xl mb-4" data-v-8ddd5f83>Structure</div><p class="text-lg mb-4" data-v-8ddd5f83>Templates consists of a couple folders, demos and layout have been separated so that you can easily remove what is not necessary for your application.</p><ul class="leading-normal list-disc pl-8 text-lg mb-4" data-v-8ddd5f83><li data-v-8ddd5f83><span class="text-primary font-medium" data-v-8ddd5f83>src/layout</span>: Main layout files, needs to be present.</li><li data-v-8ddd5f83><span class="text-primary font-medium" data-v-8ddd5f83>src/views</span>: Demo pages like Dashboard.</li><li data-v-8ddd5f83><span class="text-primary font-medium" data-v-8ddd5f83>public/demo</span>: Assets used in demos</li><li data-v-8ddd5f83><span class="text-primary font-medium" data-v-8ddd5f83>src/assets/demo</span>: Styles used in demos</li><li data-v-8ddd5f83><span class="text-primary font-medium" data-v-8ddd5f83>src/assets/layout</span>: SCSS files of the main layout</li></ul><div class="font-semibold text-xl mb-4" data-v-8ddd5f83>Menu</div><p class="text-lg mb-4" data-v-8ddd5f83> Main menu is defined at <span class="bg-highlight px-2 py-1 rounded-border not-italic text-base" data-v-8ddd5f83>src/layout/AppMenu.vue</span> file. Update the <i class="bg-highlight px-2 py-1 rounded-border not-italic text-base" data-v-8ddd5f83>model</i> property to define your own menu items. </p><div class="font-semibold text-xl mb-4" data-v-8ddd5f83>Layout Composable</div><p class="text-lg mb-4" data-v-8ddd5f83> The <span class="bg-highlight px-2 py-1 rounded-border not-italic text-base" data-v-8ddd5f83>src/layout/composables/layout.js</span> is a composable that manages the layout state changes including dark mode, PrimeVue theme, menu modes and states. If you change the initial values like the preset or colors, make sure to apply them at PrimeVue config at main.js as well. </p><div class="font-semibold text-xl mb-4" data-v-8ddd5f83>Tailwind CSS</div><p class="text-lg mb-4" data-v-8ddd5f83>The demo pages are developed with Tailwind CSS however the core application shell mainly uses custom CSS.</p><div class="font-semibold text-xl mb-4" data-v-8ddd5f83>Variables</div><p class="text-lg mb-4" data-v-8ddd5f83> CSS variables used in the template derive their values from the PrimeVue styled mode presets, use the files under <span class="bg-highlight px-2 py-1 rounded-border not-italic text-base" data-v-8ddd5f83>assets/layout/_variables.scss</span> to customize according to your requirements. </p>`,17),l=[o];function n(r,c){return d(),a("div",i,l)}const m=e(s,[["render",n],["__scopeId","data-v-8ddd5f83"]]);export{m as default};
