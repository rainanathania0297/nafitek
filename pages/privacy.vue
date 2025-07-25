<template>
  <div class="py-20 lg:py-32 bg-charcoal">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1
            class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
          >
            Privacy <span class="text-gradient">Policy</span>
          </h1>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300">
            Your privacy is important to us. Learn how we collect, use, and
            protect your information.
          </p>
          <p class="text-gray-400 mt-4">Last updated: July 24, 2025</p>
        </div>

        <!-- Content -->
        <div class="prose prose-lg prose-invert max-w-none">
          <div
            class="bg-gray-800/50 rounded-xl p-8 border border-gray-700 space-y-8"
          >
            <section>
              <h2 class="text-2xl font-montserrat font-bold text-white mb-4">
                1. Information We Collect
              </h2>
              <div class="text-gray-300 space-y-4">
                <p>
                  We collect information you provide directly to us, such as
                  when you:
                </p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Fill out our contact forms</li>
                  <li>Request quotes or consultations</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us via phone or email</li>
                  <li>Visit our facilities</li>
                </ul>
                <p>
                  This information may include your name, email address, phone
                  number, company name, and details about your industrial needs
                  or projects.
                </p>
              </div>
            </section>

            <section>
              <h2 class="text-2xl font-montserrat font-bold text-white mb-4">
                2. How We Use Your Information
              </h2>
              <div class="text-gray-300 space-y-4">
                <p>We use the information we collect to:</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Respond to your inquiries and provide customer support
                  </li>
                  <li>Provide quotes and consultations for our services</li>
                  <li>Send you technical updates and industry insights</li>
                  <li>Improve our services and website functionality</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 class="text-2xl font-montserrat font-bold text-white mb-4">
                3. Information Sharing
              </h2>
              <div class="text-gray-300 space-y-4">
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except in
                  the following circumstances:
                </p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>
                    With trusted service providers who assist in operating our
                    website or conducting business
                  </li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 class="text-2xl font-montserrat font-bold text-white mb-4">
                4. Data Security
              </h2>
              <div class="text-gray-300 space-y-4">
                <p>
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction. However, no method of transmission
                  over the internet is 100% secure.
                </p>
              </div>
            </section>

            <section>
              <h2 class="text-2xl font-montserrat font-bold text-white mb-4">
                5. Cookies and Tracking
              </h2>
              <div class="text-gray-300 space-y-4">
                <p>
                  Our website may use cookies to enhance your browsing
                  experience. You can choose to disable cookies through your
                  browser settings, though this may affect website
                  functionality.
                </p>
              </div>
            </section>

            <section>
              <h2 class="text-2xl font-montserrat font-bold text-white mb-4">
                6. Your Rights
              </h2>
              <div class="text-gray-300 space-y-4">
                <p>You have the right to:</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request information about how your data is processed</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 class="text-2xl font-montserrat font-bold text-white mb-4">
                7. Contact Information
              </h2>
              <div class="text-gray-300 space-y-4">
                <p>
                  If you have questions about this Privacy Policy or our data
                  practices, please contact us:
                </p>
                <div class="bg-gray-700/50 rounded-lg p-6 mt-4">
                  <div class="space-y-2">
                    <p><strong>PT Nafitek Global Indonesia</strong></p>
                    <p>
                      {{ companyStore.companyData.address.street }},
                      {{ companyStore.companyData.address.village }},
                      {{ companyStore.companyData.address.district }}
                    </p>
                    <p>
                      {{ companyStore.companyData.address.city }},
                      {{ companyStore.companyData.address.province }}
                      {{ companyStore.companyData.address.postal_code }},
                      {{ companyStore.companyData.address.country }}
                    </p>
                    <p>
                      Phone:
                      <a
                        :href="`tel:${companyStore.companyData.phone}`"
                        class="text-golden hover:text-golden-light"
                        >{{ companyStore.companyData.phone }}</a
                      >
                    </p>
                    <p>
                      Email:
                      <a
                        :href="`mailto:${companyStore.companyData.email}`"
                        class="text-golden hover:text-golden-light"
                        >{{ companyStore.companyData.email }}</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 class="text-2xl font-montserrat font-bold text-white mb-4">
                8. Changes to This Policy
              </h2>
              <div class="text-gray-300 space-y-4">
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date.
                </p>
              </div>
            </section>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="mt-16 text-center">
          <div
            class="bg-gradient-industrial rounded-2xl p-8 border border-gray-700"
          >
            <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
              Questions About Your Privacy?
            </h3>
            <p class="text-gray-300 mb-6">
              Our team is here to address any concerns you may have about how we
              handle your information.
            </p>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center px-8 py-4 bg-golden text-charcoal font-bold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105"
            >
              Contact Us
              <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// stores
const companyStore = useCompanyStore();
await callOnce("company-data", () => companyStore.loadData());

// SEO Meta
useHead({
  title: "Privacy Policy - PT Nafitek Global Indonesia | Data Protection",
  meta: [
    {
      name: "description",
      content:
        "Privacy Policy for PT Nafitek Global Indonesia. Learn how we collect, use, and protect your personal information when you use our services.",
    },
    {
      name: "keywords",
      content:
        "privacy policy, data protection, personal information, PT Nafitek Global, privacy rights, data security",
    },
    {
      property: "og:title",
      content: "Privacy Policy - PT Nafitek Global Indonesia",
    },
    {
      property: "og:description",
      content:
        "Our commitment to protecting your privacy and personal information. Learn about our data practices and your rights.",
    },
  ],
});
</script>
