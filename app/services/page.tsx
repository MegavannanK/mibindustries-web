"use client";

import { Services } from "../components/Homepage/Services";
import Layout from "../components/Layout";

export default function ServicesPage() {
  return (
    <Layout>
      {/* Services Component with all animations */}
      <div className="pt-20"> {/* Add top padding to account for navbar */}
        <Services />
      </div>
    </Layout>
  );
}
