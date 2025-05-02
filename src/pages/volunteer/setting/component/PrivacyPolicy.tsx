import React from "react";
import { Link } from "react-router-dom";

const VolunteerPrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg text-gray-900 font-sans">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-6 text-zinc-700">
          Volunteer Connect Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Effective Date: <span className="font-semibold">15/04/2025</span>
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
          Introduction
        </h2>
        <p className="leading-7">
          Welcome to Volunteer Connect! Your privacy is important to us. This
          Privacy Policy outlines how we collect, use, and safeguard your data
          when you engage with our platform as a Volunteer, NGO, or Admin.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
          Information We Collect
        </h2>
        <p className="leading-7 mb-4">
          We may collect the following information:
        </p>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email, phone number,
            profile photo, organization details (for NGOs), and account
            credentials.
          </li>
          <li>
            <strong>Activity Information:</strong> Volunteer applications,
            participation records, hours volunteered, and certificates earned.
          </li>
          <li>
            <strong>Communication Data:</strong> Messages, chat logs, and
            support interactions.
          </li>
          <li>
            <strong>Device & Log Info:</strong> IP address, browser type, OS,
            and usage logs.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
          How We Use Your Information
        </h2>
        <p className="leading-7 mb-4">We use your data to:</p>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>Facilitate volunteer-activity matching and participation.</li>
          <li>Enable communication between volunteers and NGOs.</li>
          <li>Generate certificates and track volunteer impact.</li>
          <li>Enhance user experience and improve platform features.</li>
          <li>Ensure compliance, security, and legal obligations.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
          Information Sharing
        </h2>
        <p className="leading-7 mb-4">
          We do not sell your data. We may share it with:
        </p>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>NGOs for volunteer coordination and verification.</li>
          <li>
            Third-party service providers (e.g., analytics, cloud hosting).
          </li>
          <li>Legal authorities when required by law.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
          Your Rights & Choices
        </h2>
        <p className="leading-7 mb-4">You can:</p>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>Update or delete your profile and data.</li>
          <li>Manage visibility of your activity and achievements.</li>
          <li>Unsubscribe from non-essential communications.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
          Data Security
        </h2>
        <p className="leading-7">
          We take security seriously and implement measures to protect your
          data. However, no system is completely secure. Use strong passwords
          and protect your login credentials.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
          Children's Privacy
        </h2>
        <p className="leading-7">
          Volunteer Connect is intended for users aged 13 and above. We do not
          knowingly collect data from children under 13.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
          Updates to This Policy
        </h2>
        <p className="leading-7">
          We may revise this Privacy Policy periodically. We'll notify you of
          significant updates through the platform or via email.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
          Contact Us
        </h2>
        <p className="leading-7">
          Questions? Reach out to our support team at{" "}
          <Link to="/support" className="text-blue-600 underline">
            support@volunteerconnect.org
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default VolunteerPrivacyPolicy;
