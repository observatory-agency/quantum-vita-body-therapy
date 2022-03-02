<template>
  <section class="bg-gray-50">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure
            as="div"
            v-for="faq in faqs"
            :key="faq.question"
            class="pt-6"
            v-slot="{ open }"
          >
            <dt class="text-lg">
              <DisclosureButton
                class="flex items-start justify-between w-full text-left text-gray-400"
              >
                <span class="font-medium text-gray-900">
                  {{ faq.question }}
                </span>
                <span class="flex items-center ml-6 h-7">
                  <ChevronDownIcon
                    :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']"
                    aria-hidden="true"
                  />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="pr-12 mt-2">
              <p class="text-base text-gray-500">
                {{ faq.answer }}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/outline';

const faqs = [
  {
    question: 'Do I need to take my clothes off?',
    answer:
      'For most types of massage therapy, the answer is usually yes, with Shiatsu being the exception to this rule. However, the amount of clothing you need to remove depends largely on the extent of the treatment you are receiving. For full body treatments, you should at least undress down to your pants, but most clients opt to remove all their clothes. Since no two therapists are alike, it is best what is preferred during the consultation. You should be covered with towels or sheets, so the only parts showing are the parts being treated. This helps you relax and also helps you stay warm.'
  },
  {
    question: 'What is the best frequency of treatment?',
    answer:
      'This will vary, but here are some guidelines. If you are seeking massage treatment for remediation from a recent injury, it is usually recommended that the first two or three treatments be spaced every three to four days or weekly, depending on the severity of the pain or dysfunction. For a long term dysfunction, like arthritis, a monthly treatment is recommended until your condition is stabilized. For therapeutic treatments, most people find that once a month suits their needs, but some come more frequently.'
  },
  {
    question: 'How do I choose a therapist?',
    answer:
      'Since you are paying for this treatment, you are ultimately in control. A therapist should be happy to explain what is going to happen to you and what they are hoping to achieve. Not all therapists are forthcoming with this information, you may have to ask. If so, you should expect a satisfactory reply. Remember that private therapists are employed by you to give you the therapy that you’re paying for. The easiest way to find a good therapist is through a recommendation from someone who has been to see that therapist and is happy with the treatment they received.'
  },
  {
    question: 'Will therapy hurt?',
    answer:
      'If at any time the treatment you are receiving is causing you too much discomfort, ask the therapist to stop or to ease off for a few minutes. Be open and let the therapist know how you are feeling and your treatment will be a lot more enjoyable and productive. The old adage, “no pain, no gain,” is not relevant to massage therapy treatments. Remember that it is your physical condition or dysfunction that is painful, not the treatment. You should feel better at the end of each treatment and the treatments should become more comfortable as your dysfunctions improve. After a session, you may feel some mild discomfort or muscle soreness for a few days until your body readjusts and heals itself.'
  },
  {
    question: 'Can massage help reduce stress levels?',
    answer:
      'According to medical studies, anything that can help you relax will reduce your stress levels and massage is one of the most relaxing therapies you can receive. Many people turn to massage to manage day to day stress. Massage therapy treats the problem holistically. Without using suppression chemicals to slow you down, massage therapists attempt to treat the whole person and help your body regain homeostasis, achieving a balance between the various systems of your body and allowing natural healing to occur.'
  },
  {
    question: 'Is it safe to receive a massage during pregnancy?',
    answer:
      'Not only is it safe, it is also very beneficial and comforting. Massage therapy can be received throughout the entire nine month pregnancy term. If you are experiencing complications during pregnancy, discuss your condition with your doctor or midwife first. It is not recommended that you use or allow anyone to apply any pure essential oils (aromatherapy oils) on you in the first three months of your pregnancy. If oils are used, they should be mild ones, such as lavender oil.'
  },
  {
    question: 'Do massage therapists have a Code of Ethics?',
    answer:
      'Yes, massage therapists adhere to the following code: • We provide the test quality care to any one that seeks our professional help. • We accept all clients without discrimination. • We acknowledge the confidential nature of the professional relationship with the client and respect each client’s right to privacy. • We practice only the modalities in which we have been professionally trained and certified in. • We in no way participate or engage in any type of sexual activities with our clients. • We maintain a safe, clean and professional environment.'
  },
  {
    question: 'Are there different techniques in massage?',
    answer:
      'Yes, there are many different types of massage techniques. Swedish massage is the technique most widely known by massage therapists, but others are also trained in sports massage, aromatherapy massage, shiatsu, deep tissue massage, Thai massage or techniques named for their developer, such as Upledger, Heller Work and Feldenkrais.'
  },
  {
    question: 'How much of my body will be massaged?',
    answer:
      "When the client is seeking treatment for a specific injury or condition, the entire session may focus on a single area. There may also be a need to treat body areas that are adversely affected by injuries, such as sprained ankles causing the opposite leg to bear all the body's weight and stress of walking. For relaxation massages, the client and therapist should discuss and agree upon the areas to be massaged. A “full body massage” usually includes the back, neck, shoulders, arms, hands, legs, feet, face, chest (above breasts for women), abdomen and hips. If being massaged in certains areas cause you to feel uncomfortable, you should inform your therapist and they will adjust the massage accordingly. You should never accept a touch that feels wrong in any way or feel pressured to offer an explanation for such sensitivities."
  },
  {
    question: 'Can I bring someone along?',
    answer:
      'Contact your therapist in advance to determine if it is fully acceptable to bring someone else with you. The person may be in the room during the treatment or may wait outside the room. In order to assure that you receive the full benefit and relaxation from your treatment, the person present must remain quiet and unobtrusive during your treatment. Children are not usually permitted as guests.'
  },
  {
    question: 'What studies have been done on massage therapy?',
    answer:
      'Massage has been studied for its use with premature infants, adults who have recently experienced a heart attack or stroke, athletes who desire to increase their athletic performance and shorten recuperation time, victims of sexual abuse, grieving patients and those who have lost limbs or experience unusual pais. Currently, the effects of massage are being studied for its use in familial relations and in dealing with the separation felt when children become teenagers.'
  },
  {
    question: "What is 'Therapeutic Massage?",
    answer:
      'Massage therapy is the manipulation of soft tissue. Other terms included in the definition are effleurage (stroking), petrissage (kneading, tapotement (percusion), compression, vibration, friction, nerve strokes, and Swedish gymnastics, either by hand or with a mechanical or electrical apparatus for the purpose of body massages. Massage therapy can include the use of oils, lotions, salt glows, heat lamps, hot or cold packs and tub, shower or cabinet baths.'
  }
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon
  },
  setup() {
    return {
      faqs
    };
  }
};
</script>
