<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-overlay z-10"></div>
        <div 
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          :style="{ backgroundImage: `url('${article?.image}')` }"
        ></div>
        <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-10 z-5"></div>
      </div>

      <!-- Content -->
      <div class="relative z-20 container mx-auto px-4 lg:px-8 text-center">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center justify-center space-x-4 mb-6">
            <span class="px-3 py-1 bg-golden text-charcoal text-sm font-medium rounded-full">
              {{ article?.category }}
            </span>
            <span class="text-gray-300 text-sm">{{ formatDate(article?.date) }}</span>
            <span class="text-gray-300 text-sm">{{ article?.readTime }} min read</span>
          </div>
          
          <h1 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
            {{ article?.title }}
          </h1>
          
          <div class="flex items-center justify-center space-x-4 mb-6">
            <div class="w-10 h-10 bg-golden/20 rounded-full flex items-center justify-center">
              <Icon name="heroicons:user" class="w-5 h-5 text-golden" />
            </div>
            <div>
              <p class="text-white font-medium">{{ article?.author }}</p>
              <p class="text-gray-400 text-sm">{{ article?.authorRole }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="py-16 lg:py-24 bg-charcoal relative overflow-hidden">
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
      
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-700">
          <!-- Article Content -->
          <div class="prose prose-lg prose-invert max-w-none">
            <ContentRenderer v-if="article" :value="article" />
            <p v-else class="text-gray-300">Loading article content...</p>
          </div>
          
          <!-- Tags -->
          <div class="mt-12 pt-8 border-t border-gray-700">
            <div class="flex flex-wrap gap-2">
              <span class="text-gray-300 mr-2">Tags:</span>
              <span 
                class="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full hover:bg-gray-600 transition-colors duration-300"
              >
                {{ article?.category }}
              </span>
              <span 
                class="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full hover:bg-gray-600 transition-colors duration-300"
              >
                Industrial
              </span>
            </div>
          </div>
          
          <!-- Share -->
          <div class="mt-8">
            <p class="text-gray-300 mb-3">Share this article:</p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-golden transition-colors duration-300">
                <Icon name="mdi:linkedin" class="w-6 h-6" />
              </a>
              <a href="#" class="text-gray-400 hover:text-golden transition-colors duration-300">
                <Icon name="mdi:twitter" class="w-6 h-6" />
              </a>
              <a href="#" class="text-gray-400 hover:text-golden transition-colors duration-300">
                <Icon name="mdi:facebook" class="w-6 h-6" />
              </a>
              <a href="#" class="text-gray-400 hover:text-golden transition-colors duration-300">
                <Icon name="mdi:email" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Related Articles -->
        <div class="max-w-6xl mx-auto mt-20">
          <h2 class="text-3xl font-montserrat font-bold text-white mb-12 text-center">
            Related <span class="text-gradient">Articles</span>
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article
              v-for="(relatedArticle, index) in relatedArticles"
              :key="relatedArticle.id"
              class="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-golden transition-all duration-500 hover:scale-105 animate-fade-in-up"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <!-- Article Image -->
              <div class="relative h-48 overflow-hidden">
                <NuxtImg
                  :src="relatedArticle.image"
                  :alt="relatedArticle.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                
                <!-- Category Badge -->
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1 bg-golden text-charcoal text-sm font-medium rounded-full">
                    {{ relatedArticle.category }}
                  </span>
                </div>
              </div>

              <!-- Article Content -->
              <div class="p-6">
                <div class="flex items-center space-x-4 mb-3">
                  <span class="text-gray-400 text-sm">{{ formatDate(relatedArticle.date) }}</span>
                  <span class="text-gray-400 text-sm">{{ relatedArticle.readTime }} min read</span>
                </div>
                
                <h3 class="text-xl font-montserrat font-bold text-white mb-3 group-hover:text-golden transition-colors duration-300 line-clamp-2">
                  {{ relatedArticle.title }}
                </h3>
                
                <p class="text-gray-300 mb-4 line-clamp-3">
                  {{ relatedArticle.excerpt }}
                </p>
                
                <!-- Read More -->
                <NuxtLink 
                  :to="relatedArticle.path?.replace('/article/', '/blog/')"
                  class="inline-flex items-center text-golden hover:text-golden-light transition-colors duration-300 font-medium"
                >
                  Read More
                  <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-1" />
                </NuxtLink>
              </div>
            </article>
          </div>
        </div>
        
        <!-- Back to Blog -->
        <div class="text-center mt-16 animate-fade-in-up" style="animation-delay: 0.8s">
          <NuxtLink to="/blog" class="btn-primary">
            <Icon name="heroicons:arrow-left" class="w-5 h-5 mr-2" />
            Back to Blog
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="py-20 bg-gradient-industrial relative overflow-hidden">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Stay <span class="text-gradient">Updated</span>
          </h2>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest industry insights and technical updates
          </p>
          
          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              v-model="newsletterEmail"
              type="email"
              required
              placeholder="Enter your email address"
              class="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
            />
            <button
              type="submit"
              :disabled="isSubscribing"
              class="px-6 py-3 bg-golden text-charcoal font-bold rounded-lg hover:bg-golden-light transition-all duration-300 disabled:opacity-50"
            >
              <span v-if="!isSubscribing">Subscribe</span>
              <span v-else>Subscribing...</span>
            </button>
          </form>
          
          <p class="text-gray-400 text-sm mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

// stores
const articleStore = useArticleStore();
await callOnce('article-data', () => articleStore.loadData())

// Get the slug from the route
const route = useRoute()
const { slug } = route.params

// data
const loading = ref(false)
const article = ref(null)
const relatedArticles = ref(null)

onBeforeMount(async () => {
  loading.value = true;
  article.value = await articleStore.getArticleByStem(slug)
  if (article.value === null) {
    navigateTo('/blog')
  }
  relatedArticles.value = await articleStore.getRelatedArticles(slug, article.value?.category)
  loading.value = false;
});


// Newsletter subscription
const newsletterEmail = ref('')
const isSubscribing = ref(false)

const subscribeNewsletter = async () => {
  isSubscribing.value = true
  
  try {
    // Simulate newsletter subscription (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Reset form
    newsletterEmail.value = ''
    
    // Show success message (you can implement a toast notification here)
    alert('Thank you for subscribing to our newsletter!')
    
  } catch (error) {
    alert('Sorry, there was an error subscribing. Please try again.')
  } finally {
    isSubscribing.value = false
  }
}

// Format date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

// SEO Meta
useHead({
  title: article.value ? `${article.value.title} - PT Nafitek Global Indonesia` : 'Blog - PT Nafitek Global Indonesia',
  meta: [
    {
      name: 'description',
      content: article.value ? article.value.excerpt : 'Industry insights and technical knowledge from PT Nafitek Global Indonesia'
    },
    {
      property: 'og:title',
      content: article.value ? article.value.title : 'Blog - PT Nafitek Global Indonesia'
    },
    {
      property: 'og:description',
      content: article.value ? article.value.excerpt : 'Industry insights and technical knowledge from PT Nafitek Global Indonesia'
    },
    {
      property: 'og:image',
      content: article.value ? article.value.image : '/logo.png'
    }
  ]
})
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bg-gradient-overlay {
  background: linear-gradient(to bottom, rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.9));
}

:deep(.prose) {
  color: #e5e7eb;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4),
:deep(.prose h5),
:deep(.prose h6) {
  color: white;
  font-family: 'Montserrat', sans-serif;
}

:deep(.prose strong) {
  color: #FBBF24;
}

:deep(.prose a) {
  color: #FBBF24;
  text-decoration: none;
}

:deep(.prose a:hover) {
  text-decoration: underline;
}

:deep(.prose blockquote) {
  border-left-color: #FBBF24;
  color: #9ca3af;
}

:deep(.prose ul li::before) {
  background-color: #FBBF24;
}

:deep(.prose ol li::before) {
  color: #FBBF24;
}

:deep(.prose hr) {
  border-color: #4b5563;
}

:deep(.prose table) {
  border-collapse: collapse;
  width: 100%;
}

:deep(.prose table th) {
  background-color: #374151;
  color: white;
  padding: 0.75rem;
  text-align: left;
  border: 1px solid #4b5563;
}

:deep(.prose table td) {
  padding: 0.75rem;
  border: 1px solid #4b5563;
}

:deep(.prose table tr:nth-child(even)) {
  background-color: #1f2937;
}
</style>