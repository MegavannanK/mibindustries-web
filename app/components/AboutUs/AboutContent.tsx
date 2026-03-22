"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleIcon, ShieldCheckIcon, TruckIcon, CurrencyDollarIcon, CubeTransparentIcon, ChevronDownIcon } from "@heroicons/react/outline";
import Container from "../ui/Container";

const commitments = [
  "Consistent product grading",
  "Flexible packaging options",
  "Competitive export pricing",
  "Quick documentation processing",
  "Timely shipment coordination"
];

const qaSteps = [
  { step: 1, title: "Raw material selection" },
  { step: 2, title: "Cleaning and grading" },
  { step: 3, title: "Moisture verification" },
  { step: 4, title: "Packing inspection" },
  { step: 5, title: "Pre-shipment confirmation" }
];

const whyChooseUs = [
  { icon: <CubeTransparentIcon className="w-8 h-8 text-primary-600" />, title: "Direct Sourcing", desc: "Fresh products procured directly from origin suppliers." },
  { icon: <CurrencyDollarIcon className="w-8 h-8 text-primary-600" />, title: "Competitive Pricing", desc: "Efficient supply chain reduces intermediary costs." },
  { icon: <TruckIcon className="w-8 h-8 text-primary-600" />, title: "Reliable Delivery", desc: "Coordinated logistics ensures shipment schedules are maintained." },
  { icon: <ShieldCheckIcon className="w-8 h-8 text-primary-600" />, title: "Custom Orders", desc: "Private labeling and custom packaging supported." }
];

const faqs = [
  { q: "Do you provide samples?", a: "Yes, samples can be arranged based on product availability." },
  { q: "What is the minimum order quantity?", a: "MOQ depends on product and packaging requirements." },
  { q: "What payment terms are accepted?", a: "TT and LC options available depending on order size." },
  { q: "Do you support private label branding?", a: "Yes, we supply OEM and private branding." },
  { q: "How long does shipment take?", a: "Transit time depends on the destination country and shipping line schedule." }
];

export const AboutContent = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* Our Commitment & Quality Assurance Dual Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Our Commitment */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full font-semibold text-sm mb-6">
                <CheckCircleIcon className="w-5 h-5" /> Our Commitment
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">We support our buyers with:</h3>
              <ul className="space-y-4 mt-8">
                {commitments.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quality Assurance */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Quality Assurance</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Multi-Stage Inspection</h3>
                <p className="text-gray-600 text-lg">All products undergo strict quality control:</p>
              </div>

              <div className="relative pl-6 md:pl-8 border-l-2 border-emerald-100 space-y-8">
                {qaSteps.map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[35px] md:-left-[43px] top-1 w-8 h-8 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-emerald-600 font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* Why Choose MIB Industries */}
      <section className="py-20 bg-slate-900 text-white">
        <Container className="max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose MIB Industries</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors"
              >
                <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 bg-white">
        <Container className="max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-lg">Everything you need to know about our sourcing, pricing, and shipping.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50/50"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.q}</span>
                  <ChevronDownIcon 
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-gray-600 text-lg leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};
