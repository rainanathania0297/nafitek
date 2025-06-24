<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-overlay z-10"></div>
        <div 
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        ></div>
        <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-10 z-5"></div>
      </div>

      <!-- Floating Elements -->
      <div class="absolute inset-0 z-5">
        <div class="absolute top-20 left-10 w-16 h-16 border-2 border-golden/30 rotate-45 animate-float"></div>
        <div class="absolute bottom-20 right-10 w-20 h-20 border border-golden/20 rounded-full animate-pulse-slow"></div>
      </div>

      <!-- Content -->
      <div class="relative z-20 container mx-auto px-4 lg:px-8 text-center">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
            Industry <span class="text-gradient">Insights</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up" style="animation-delay: 0.2s">
            Expert insights, industry trends, and technical knowledge from our team
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Article -->
    <section class="py-20 bg-charcoal relative overflow-hidden" v-if="featuredArticle">
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
      
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Featured <span class="text-gradient">Article</span>
          </h2>
          <div class="w-24 h-1 bg-golden mx-auto"></div>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Image -->
            <div class="animate-fade-in-left">
              <NuxtImg
                :src="featuredArticle.image"
                :alt="featuredArticle.title"
                class="w-full h-[400px] object-cover rounded-2xl shadow-industrial"
                loading="lazy"
              />
            </div>

            <!-- Content -->
            <div class="animate-fade-in-right">
              <div class="flex items-center space-x-4 mb-4">
                <span class="px-3 py-1 bg-golden text-charcoal text-sm font-medium rounded-full">
                  {{ featuredArticle.category }}
                </span>
                <span class="text-gray-400 text-sm">{{ formatDate(featuredArticle.date) }}</span>
              </div>
              
              <h3 class="text-3xl font-montserrat font-bold text-white mb-4">
                {{ featuredArticle.title }}
              </h3>
              
              <p class="text-lg text-gray-300 mb-6 leading-relaxed">
                {{ featuredArticle.excerpt }}
              </p>
              
              <div class="flex items-center space-x-4 mb-6">
                <div class="w-10 h-10 bg-golden/20 rounded-full flex items-center justify-center">
                  <Icon name="heroicons:user" class="w-5 h-5 text-golden" />
                </div>
                <div>
                  <p class="text-white font-medium">{{ featuredArticle.author }}</p>
                  <p class="text-gray-400 text-sm">{{ featuredArticle.authorRole }}</p>
                </div>
              </div>

              <div class="inline-flex items-center px-8 py-4 bg-golden text-charcoal font-bold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105">
                Read Full Article
                <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Categories -->
    <section class="py-16 bg-gradient-industrial">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            class="px-6 py-3 rounded-lg font-medium transition-all duration-300"
            :class="[
              activeCategory === category
                ? 'bg-golden text-charcoal'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Blog Articles Grid -->
    <section class="py-20 lg:py-32 bg-charcoal relative overflow-hidden">
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
      
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <article
            v-for="(article, index) in filteredArticles"
            :key="article.id"
            class="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-golden transition-all duration-500 hover:scale-105 animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Article Image -->
            <div class="relative h-48 overflow-hidden">
              <NuxtImg
                :src="article.image"
                :alt="article.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              
              <!-- Category Badge -->
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-golden text-charcoal text-sm font-medium rounded-full">
                  {{ article.category }}
                </span>
              </div>
            </div>

            <!-- Article Content -->
            <div class="p-6">
              <div class="flex items-center space-x-4 mb-3">
                <span class="text-gray-400 text-sm">{{ formatDate(article.date) }}</span>
                <span class="text-gray-400 text-sm">{{ article.readTime }} min read</span>
              </div>
              
              <h3 class="text-xl font-montserrat font-bold text-white mb-3 group-hover:text-golden transition-colors duration-300 line-clamp-2">
                {{ article.title }}
              </h3>
              
              <p class="text-gray-300 mb-4 line-clamp-3">
                {{ article.excerpt }}
              </p>
              
              <!-- Author -->
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-8 h-8 bg-golden/20 rounded-full flex items-center justify-center">
                  <Icon name="heroicons:user" class="w-4 h-4 text-golden" />
                </div>
                <div>
                  <p class="text-white text-sm font-medium">{{ article.author }}</p>
                </div>
              </div>

              <!-- Read More -->
              <div class="inline-flex items-center text-golden hover:text-golden-light transition-colors duration-300 font-medium">
                Read More
                <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-1" />
              </div>
            </div>
          </article>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-16" v-if="hasMoreArticles">
          <button 
            @click="loadMoreArticles"
            class="px-8 py-4 bg-golden text-charcoal font-bold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105"
          >
            Load More Articles
          </button>
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
import { ref, computed } from 'vue'

// Reactive data
const activeCategory = ref('All')
const displayedArticles = ref(9)
const newsletterEmail = ref('')
const isSubscribing = ref(false)

// Categories
const categories = [
  'All',
  'Maintenance',
  'Automation',
  'Industry Trends',
  'Technical Guides',
  'Case Studies'
]

// Sample blog articles data
const allArticles = [
  {
    id: 1,
    title: 'The Future of Industrial Automation: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends in industrial automation, from AI-powered systems to IoT integration, and how they\'re transforming manufacturing processes.',
    category: 'Industry Trends',
    author: 'Technical Team',
    authorRole: 'Automation Specialists',
    date: '2024-01-15',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'future-industrial-automation-trends-2024',
    featured: true
  },
  {
    id: 2,
    title: 'Vacuum Pump Maintenance: Best Practices for Optimal Performance',
    excerpt: 'Learn essential maintenance techniques to extend the life of your vacuum pumps and ensure consistent performance in industrial applications.',
    category: 'Maintenance',
    author: 'Maintenance Team',
    authorRole: 'Service Engineers',
    date: '2024-01-10',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'vacuum-pump-maintenance-best-practices'
  },
  {
    id: 3,
    title: 'PLC Programming: Essential Tips for Industrial Control Systems',
    excerpt: 'Master the fundamentals of PLC programming with practical tips and best practices for designing efficient industrial control systems.',
    category: 'Technical Guides',
    author: 'Automation Team',
    authorRole: 'PLC Specialists',
    date: '2024-01-05',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'plc-programming-essential-tips'
  },
  {
    id: 4,
    title: 'Case Study: Successful Automation Implementation at PT Elektronik',
    excerpt: 'Discover how we transformed a manual production line into a fully automated system, resulting in 40% efficiency improvement.',
    category: 'Case Studies',
    author: 'Project Team',
    authorRole: 'Project Managers',
    date: '2023-12-28',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'case-study-automation-pt-elektronik'
  },
  {
    id: 5,
    title: 'Understanding Industrial Component Quality Standards',
    excerpt: 'A comprehensive guide to quality standards for industrial components and how to ensure compliance in your operations.',
    category: 'Technical Guides',
    author: 'Quality Team',
    authorRole: 'Quality Engineers',
    date: '2023-12-20',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'industrial-component-quality-standards'
  },
  {
    id: 6,
    title: 'Preventive Maintenance Strategies for Manufacturing Equipment',
    excerpt: 'Implement effective preventive maintenance strategies to reduce downtime and extend equipment lifespan in your facility.',
    category: 'Maintenance',
    author: 'Maintenance Team',
    authorRole: 'Service Engineers',
    date: '2023-12-15',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'preventive-maintenance-strategies'
  }
]

// Computed properties
const featuredArticle = computed(() => {
  return allArticles.find(article => article.featured)
})

const filteredArticles = computed(() => {
  const filtered = activeCategory.value === 'All' 
    ? allArticles.filter(article => !article.featured)
    : allArticles.filter(article => article.category === activeCategory.value && !article.featured)
  
  return filtered.slice(0, displayedArticles.value)
})

const hasMoreArticles = computed(() => {
  const totalFiltered = activeCategory.value === 'All' 
    ? allArticles.filter(article => !article.featured).length
    : allArticles.filter(article => article.category === activeCategory.value && !article.featured).length
  
  return displayedArticles.value < totalFiltered
})

// Methods
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

const loadMoreArticles = () => {
  displayedArticles.value += 6
}

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

// SEO Meta
useHead({
  title: 'Industry Insights Blog - PT Nafitek Global Indonesia | Technical Knowledge',
  meta: [
    {
      name: 'description',
      content: 'Expert insights on industrial automation, maintenance, and technical guides from PT Nafitek Global Indonesia. Stay updated with industry trends and best practices.'
    },
    {
      name: 'keywords',
      content: 'industrial blog, automation insights, maintenance guides, technical articles, industry trends, PLC programming, vacuum pump maintenance, Indonesia industrial'
    },
    {
      property: 'og:title',
      content: 'Industry Insights Blog - PT Nafitek Global Indonesia'
    },
    {
      property: 'og:description',
      content: 'Expert insights and technical knowledge on industrial automation, maintenance, and manufacturing best practices.'
    },
    {
      property: 'og:image',
      content: '/logo.png'
    }
  ]
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>