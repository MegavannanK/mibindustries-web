"use client";

import { AboutUs } from "../components/Homepage/AboutUs";
import { AboutContent } from "../components/AboutUs/AboutContent";
import { AboutUsGallery } from "../components/Homepage/AboutUsGallery";
import Layout from "../components/Layout";

export default function AboutUsPage() {
  return (
    <Layout>
      <div className="pt-20"> {/* Add top padding to account for navbar */}
        <AboutUs />
        <AboutContent />
        <AboutUsGallery />
      </div>
    </Layout>
  );
}
