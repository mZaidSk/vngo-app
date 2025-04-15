import React from "react";
import { Link } from "react-router-dom";

const TPtandcVolunteer = () => {
  return (
    <div className="terms-and-conditions-container max-w-4xl min-h-screen mx-auto p-6 bg-gray-50 shadow-lg rounded-lg overflow-y-auto pb-32">
      <h1 className="text-3xl font-bold mb-6 text-left text-zinc-700">
        Terms and Conditions
      </h1>

      <section className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          Welcome to{" "}
          <strong className="text-blue-600">Volunteer Connect</strong>! By
          accessing or using our platform, you agree to comply with and be bound
          by these Terms and Conditions. If you do not agree with any part,
          please discontinue use of our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          1. Definitions
        </h2>
        <p className="text-gray-700 leading-relaxed">
          <strong className="text-blue-600">"Platform"</strong>: Refers to the
          Volunteer Connect website or mobile application. <br />
          <strong className="text-blue-600">"User"</strong>: Refers to
          registered individuals or NGOs using the platform. <br />
          <strong className="text-blue-600">"Activity"</strong>: Refers to
          volunteering events or opportunities posted on the platform. <br />
          <strong className="text-blue-600">"Profile"</strong>: Refers to the
          user’s personal or organizational information stored on the platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          2. User Responsibilities
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            Provide accurate, honest, and updated information during
            registration and activity participation.
          </li>
          <li>
            Respect community guidelines and interact courteously with other
            users and organizations.
          </li>
          <li>
            Refrain from engaging in any form of abuse, harassment, or
            fraudulent activity.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          3. Privacy Policy
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Your use of Volunteer Connect is also governed by our Privacy Policy.
          It explains how your personal and organizational data is collected,
          stored, and used. We encourage all users to review it thoroughly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          4. Intellectual Property Rights
        </h2>
        <p className="text-gray-700 leading-relaxed">
          All content, logos, and software associated with Volunteer Connect are
          the intellectual property of the platform. Users retain rights to the
          content they submit, but grant Volunteer Connect permission to use it
          for platform-related purposes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          5. Limitation of Liability
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Volunteer Connect is not liable for any direct or indirect damages
          arising from activity participation, user conduct, or use of
          third-party services integrated with the platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          6. Termination and Suspension
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Volunteer Connect reserves the right to suspend or terminate accounts
          that violate our terms, misuse the platform, or endanger community
          safety. Users may also choose to delete their account at any time via
          their profile settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          7. Modifications to Terms
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We may modify these Terms and Conditions as needed. Major updates will
          be communicated via email or in-app notifications. Continued use of
          the platform indicates acceptance of updated terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          8. Contact Us
        </h2>
        <p className="text-gray-700 leading-relaxed">
          For any questions, suggestions, or concerns regarding these Terms and
          Conditions, please contact us at{" "}
          <Link to="/support" className="text-blue-600 underline">
            support@volunteerconnect.org
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default TPtandcVolunteer;
