<template>
  <section class="relative z-50 py-8 sm:py-24 content-wrapper">
    <h2 class="text-4xl text-center">Quantum Vita’s Services</h2>
    <p class="mt-4 text-lg text-center text-gray-700">
      Come Experience The Secret of Relaxation
    </p>
    <div class="grid gap-12 mt-16 lg:grid-cols-2">
      <div
        v-for="service in services"
        :key="service.title"
        class="p-6 space-y-4 bg-white chill-box"
      >
        <h4 class="text-xl text-gray-800">{{ service.title }}</h4>
        <p class="text-gray-600">{{ service.description }}</p>
        <div class="flex items-center space-x-6">
          <p v-if="service.priceMini" class="text-lg text-gray-700 font-display">
            35 minutes:
            <span class="text-xl text-gray-800 font-display">${{ service.priceMini }}</span>
          </p>
          <p v-if="service.priceOne" class="text-lg text-gray-700 font-display">
            60 minutes:
            <span class="text-xl text-gray-800 font-display">${{ service.priceOne }}</span>
          </p>
          <p v-if="service.priceTwo" class="text-lg text-gray-700 font-display">
            90 minutes:
            <span class="text-xl text-gray-800 font-display">${{ service.priceTwo }}</span>
          </p>
          <p v-if="service.priceThree" class="text-lg text-gray-700 font-display">
            120 minutes:
            <span class="text-xl text-gray-800 font-display">${{ service.priceThree }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: 'Anma (Japanese Deep Tissue)',
          description:
            'You will undergo an invigorating massage that reaches the deep layers of muscles and muscle tissue. You will experience a feeling of general vitality and well being.',
          priceOne: '110',
          priceTwo: '165',
          priceThree: '240'
        },
        {
          title: 'Aromatherapy',
          description:
            'Fine oils are applied to the body by the therapist and you will enjoy the relaxing aroma as the effect of the massage and aroma has a positive effect on the body, mind and soul.',
          priceOne: '115',
          priceTwo: '170',
          priceThree: '245'
        },
        {
          title: 'Cupping Therapy',
          description:
            'Cupping is a type of alternative therapy that involves placing cups on the skin to create suction. This suction is thought to improve the flow of energy in the body and facilitate healing. Cupping increases blood circulation to the area where the cups are placed. This may relieve muscle tension, which can improve overall blood flow and promote cell repair.',
          priceMini: '60'
        },
        {
          title: 'Hot Stone Therapy',
          description:
            'This type of massage involves the use and placement of stones on different points of the body. The direct heat of the hot stones relaxes muscles, allowing the therapist access to deeper muscle layers. This relaxing treatment is only available with a 90-minute massage session.',
          priceOne: '120',
          priceTwo: '175',
          priceThree: '250'
        },
        {
          title: 'Manual Lymph Drainage (MLD)',
          description:
            'This technique will allow fluids to flow from the lymph system to help remove toxins more efficiently and regulate swelling, irritation and edema. This method can be effectively used for cancer patients who have undergone a lymph node dissection with the possible outcome of lymphodema.',
          priceOne: '120',
          priceTwo: '175',
          priceThree: '250'
        },
        {
          title: 'Neuromuscular',
          description:
            'This technique will relive you of acute pain via the application of direct deep pressure by the therapist on key trigger points in your body. ',
          priceOne: '110',
          priceTwo: '165',
          priceThree: '240'
        },
        {
          title: 'Prenatal & Postpartum Massage',
          description:
            'This massage therapy supports the physiological, structural and emotional wellbeing of both mother and fetus.',
          priceOne: '110',
          priceTwo: '165',
          priceThree: '240'
        },
        {
          title: 'Reflexology',
          description:
            'Reflexology the application of pressure, stretch and movement to the feet and hands to effect corresponding parts of the body. Reflexologists view the feet and hands as a reflection of the body.',
          priceOne: '99',
          priceTwo: '149',
          priceThree: '198'
        },
        {
          title: 'Sports Massage Therapy',
          description:
            'Athletes and sports enthusiasts will benefit from the popular sports massage technique. This method will relax muscle tension and may aid in preventing sports related injuries.',
          priceOne: '110',
          priceTwo: '165',
          priceThree: '240'
        },
        {
          title: 'Swedish',
          description:
            'This method will relax your muscles and increase oxygen flow in your blood. Your stress level be reduced as you experience the gliding strokes kneading and tapping of the skin.',
          priceOne: '110',
          priceTwo: '165',
          priceThree: '240'
        }
      ]
    };
  }
};
</script>

<style scoped>
.chill-box {
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.08), 8px 8px 2px rgba(240, 226, 163, 0.65);
}
</style>
