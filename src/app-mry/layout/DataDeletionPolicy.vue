<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
    <Navbar />
    <main class="py-6 px-4 sm:px-6 lg:px-8">
      <section id="data-deletion-policy" class="max-w-7xl mx-auto">
        <div class="container mx-auto space-y-8">
          
          <!-- Header -->
          <div class="space-y-4 mb-8">
            <h3 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Data Deletion Policy
            </h3>
          </div>

          <!-- 1. Mehery Data Deletion Policy -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              1. Mehery Data Deletion Policy
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              Mehery SocCom Pvt Ltd ("Mehery", "we", "us", or "our") operates the Mehery website, application, APIs, and enterprise social communication platform, including our message aggregation and distribution services (the "Service").
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              This Data Deletion Policy explains how we delete, retain, archive, or anonymize data processed through the Service. It applies to Mehery's WhatsApp Business API solutions, Social Media Messenger integrations, BOT and Agent Communicator workflows, campaign and automation tools, integrated messaging APIs, analytics, support features, and related enterprise communication services.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              This Policy should be read with Mehery's Privacy Policy, Terms and Conditions, applicable commercial agreements, data processing terms, and any relevant WhatsApp Business Platform, Meta, telecom, cloud, payment, or third-party service terms.
            </p>
          </div>

          <!-- 2. Information Covered by This Policy -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              2. Information Covered by This Policy
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              This Policy covers data that we collect, store, access, process, transmit, or maintain in connection with the Service, including:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 text-base sm:text-lg pl-6">
              <li v-for="(item, i) in coveredDataPoints" :key="i">{{ item }}</li>
            </ul>
            <p class="text-gray-600 text-base sm:text-lg">
              This Policy does not apply to data that customers export, download, sync, transmit, or store outside Mehery's systems, including data held in a customer's CRM, ERP, data warehouse, cloud storage, internal databases, third-party tools, or systems operated by WhatsApp, Meta, telecom operators, payment providers, or other independent third parties.
            </p>
          </div>

          <!-- 3. Our Role and Customer Responsibility -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              3. Our Role and Customer Responsibility
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              Mehery provides an enterprise social communication solution that helps businesses connect with their customers across WhatsApp and other digital messaging channels. In many cases, we process personal data on behalf of our enterprise customers to provide the Service.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Customers determine what data is collected from their end customers, how it is used, the lawful basis for processing, the period for which it should be retained, and the instructions given to Mehery. Customers are responsible for ensuring that their use of the Service complies with applicable local laws, privacy laws, consent requirements, WhatsApp and Meta policies, telecom rules, and their own customer-facing privacy notices.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              If an end customer has questions about how a business is using their data through Mehery, the end customer should contact that business directly. Where legally required and commercially reasonable, Mehery will assist the relevant customer in responding to verified data deletion or privacy requests.
            </p>
          </div>

          <!-- 4. Deletion on Customer Request -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              4. Deletion on Customer Request
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              Customers may request deletion of their account data or service data by writing to Mehery at <a href="mailto:support@mehery.com" class="text-blue-600 hover:text-blue-800">support@mehery.com</a> or any other support channel designated in the applicable agreement. This will apply to the entire data and not to any individual record.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Once we receive a verified deletion request, we will take reasonable steps to delete the requested data from active systems, unless continued retention is required or permitted for legal, regulatory, security, fraud-prevention, billing, tax, audit, dispute-resolution, contractual, platform-compliance, or operational purposes.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Before processing a deletion request, Mehery may verify the identity, account ownership, and authority of the requester. We may delay, limit, or decline a request where the request is incomplete, unauthorized, technically impracticable, inconsistent with law, or likely to affect the rights, safety, or data of another customer, user, or end customer.
            </p>
          </div>

          <!-- 5. Deletion Upon Termination, Cancellation, or Expiry -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              5. Deletion Upon Termination, Cancellation, or Expiry
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              Upon termination, cancellation, expiry, or non-renewal of a customer's subscription or commercial arrangement, access to the Service may be suspended, restricted, or discontinued in accordance with the applicable agreement.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Mehery may retain the customer's account data, contacts, conversations, reports, campaigns, BOT flows, templates, media, integrations, WABA configuration, Social Media Messenger configuration, and related service data for a limited reactivation, support, or transition period after cancellation, termination, or account deactivation, unless a different period is required by law or agreed in writing.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              During this period, the customer may request reactivation or export of available data, subject to technical availability, payment status, contractual terms, platform restrictions, and Mehery's then-current policies.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              After the applicable retention or reactivation period expires, Mehery may permanently delete the customer's data from active and back-up systems. Once deleted, such data will not be recoverable.
            </p>
          </div>

          <!-- 6. Inactivity-Based Suspension -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              6. Inactivity-Based Suspension
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              Mehery reserves the right to suspend any inactive account, workspace, WhatsApp channel, WABA configuration, Social Media Messenger channel, BOT, integration, API setup, campaign workspace, or related application from a security perspective.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Unless otherwise agreed in writing, an account or application may be treated as inactive if there is no meaningful usage for a continuous period. Meaningful usage may include message traffic, API calls, webhook activity, campaign execution, BOT or automation activity, Agent Communicator usage, user login activity, billing activity, or other service activity.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Inactivity based suspension, while the license is still active, will be limited to reduced, through-put and enforced 2FA for all Users; API and webhook based communication.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              There will be no deletion of any data during a service suspension due to inactivity.
            </p>
          </div>

          <!-- 7. WhatsApp Business Account and Number Porting -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              7. WhatsApp Business Account and Number Porting
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              Mehery supports WhatsApp Business API onboarding, WABA configuration, and number-porting processes. If a customer migrates a WhatsApp Business Account, phone number, or messaging setup from Mehery to another Business Solution Provider or platform, the previously associated configuration on Mehery will be deactivated, deregistered, suspended, or disconnected.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Following a successful migration or porting event, Mehery may retain the previously associated application and related data for a limited transition period, unless a longer period is required by law or agreed in writing.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              After the transition period as agreed to with the customer, Mehery will delete the migrated application, WABA configuration, channel settings, credentials, message records, templates, reports, media, and related data from its systems. If a customer requires extended retention, the customer must inform Mehery in writing before the transition period expires. Extended retention may be subject to technical feasibility, platform limitations, and additional charges.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Migration or porting of a WhatsApp Business Account or phone number does not release the customer from outstanding payment, billing, compliance, platform, or contractual obligations owed to Mehery.
            </p>
          </div>

          <!-- 8. Message Logs, Delivery Reports, and Investigation Support -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              8. Message Logs, Delivery Reports, and Investigation Support
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              Mehery may maintain message logs, delivery reports, webhook logs, billing events, error logs, diagnostic information, and usage records to provide the Service, support customers, troubleshoot issues, process billing, monitor performance, and detect misuse.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Customers are encouraged to raise message, delivery, webhook, channel, billing, or usage-related issues promptly so that the relevant logs and diagnostic records are available for investigation. Mehery is not obligated to retain, retrieve, furnish, or investigate message logs, delivery reports, billing records, or diagnostic data beyond the applicable retention period, unless required by law, contract, platform obligation, or written agreement.
            </p>
          </div>

          <!-- 9. End-Customer Data Deletion Requests -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              9. End-Customer Data Deletion Requests
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              End customers who interact with a business through WhatsApp, Social Media Messengers, web chat, BOT flows, Agent Communicator, or other Mehery-enabled channels should contact the relevant business for data access, correction, deletion, restriction, objection, or consent-withdrawal requests.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Mehery does not entertain any requests from end customers of businesses.
            </p>
          </div>

          <!-- 10. Consent, Opt-Out, and Suppression Records -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              10. Consent, Opt-Out, and Suppression Records
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              Customers are responsible for obtaining, recording, and honouring all required consents, opt-ins, opt-outs, unsubscribe requests, communication preferences, and suppression requirements for WhatsApp and other messaging channels.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Where Mehery stores opt-in, opt-out, unsubscribe, blocklist, consent, or suppression records, we may retain such records where necessary to demonstrate compliance, prevent unauthorized or unwanted communication (inbound or outbound), enforce communication preferences, investigate abuse, or comply with applicable laws and platform policies.
            </p>
          </div>

          <!-- 11. APIs, Webhooks, and Third-Party Integrations -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              11. APIs, Webhooks, and Third-Party Integrations
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              Customers may connect Mehery to internal systems or third-party services through APIs, webhooks, callbacks, connectors, embedded applications, or custom integrations.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              When a customer disables or removes an integration, Mehery may deactivate or delete the associated configuration, API keys, webhook URLs, callback endpoints, authentication tokens, credentials, and connector settings from active systems.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Historical records generated through integrations, including sync logs, message events, delivery events, API logs, webhook attempts, errors, and audit trails, may be retained for applicable operational, security, billing, compliance, and troubleshooting periods.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Customers are responsible for deleting, securing, or managing any Mehery-originated data that has been exported, transmitted, synchronized, or stored in systems outside Mehery's control.
            </p>
          </div>

          <!-- 12. Media, Documents, and Uploaded Content -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              12. Media, Documents, and Uploaded Content
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              Media files, documents, attachments, templates, and other content uploaded to or exchanged through Mehery may be stored for message delivery, conversation management, BOT workflows, Agent Communicator activity, template management, customer support, compliance, analytics, or customer-requested functionality.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Where media is deleted by the customer or as part of account, application, channel, or conversation deletion, Mehery will take reasonable steps to remove the media from active systems, subject to applicable retention requirements, technical limitations, platform rules, and backup cycles.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Media transmitted through WhatsApp, Meta, telecom networks, social media platforms, customer systems, recipient devices, or third-party providers may remain subject to those parties' independent retention and deletion practices.
            </p>
          </div>

          <!-- 13. Backups and Disaster Recovery -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              13. Backups and Disaster Recovery
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              Deleted data may remain for a limited period in encrypted backups, snapshots, archives, or disaster recovery systems maintained by Mehery or its infrastructure providers.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Backup copies are maintained for business continuity, security, and disaster recovery purposes and are not used for ordinary business operations after deletion from active systems. Such copies are overwritten, deleted, or rendered inaccessible in accordance with Mehery's backup retention cycle.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              If data is restored from backup, Mehery will take reasonable steps to re-apply applicable deletion requests where technically feasible and legally required.
            </p>
          </div>

          <!-- 14. Data Retained for Legal, Security, and Business Purposes -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              14. Data Retained for Legal, Security, and Business Purposes
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              Notwithstanding any deletion request, account closure, migration, or termination, Mehery may retain data where retention is necessary or appropriate to:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 text-base sm:text-lg pl-6">
              <li v-for="(item, i) in retainedDataPoints" :key="i">{{ item }}</li>
            </ul>
            <p class="text-gray-600 text-base sm:text-lg">
              Where data is retained under this section, Mehery will restrict access to authorized personnel and retain the data only for as long as reasonably necessary for the applicable purpose.
            </p>
          </div>

          <!-- 15. Unauthorized Accounts, Profiles, or Configurations -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              15. Unauthorized Accounts, Profiles, or Configurations
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              If an account, profile, phone number, WABA configuration, channel, contact record, or business setup appears to have been created without proper authorization, the affected party may contact Mehery at <a href="mailto:support@mehery.com" class="text-blue-600 hover:text-blue-800">support@mehery.com</a>.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Mehery may request supporting information to verify the claim and may suspend, restrict, remove, or delete the relevant account, profile, channel, phone number, or configuration where appropriate and legally permissible.
            </p>
          </div>

          <!-- 16. Children's Data -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              16. Children's Data
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              The Service is intended for business and enterprise use and does not address anyone under the age of 18. It is the responsibility of our Customers to comply with laws pertaining to children's data.
            </p>
          </div>

          <!-- 17. Customer Responsibility to Export Data -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              17. Customer Responsibility to Export Data
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              Customers are responsible for exporting or preserving any data they require before terminating the Service, deleting an application, migrating a WhatsApp number, disconnecting a channel, removing an integration, or requesting deletion.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              After deletion is completed, Mehery may not be able to restore contacts, conversations, messages, media, templates, BOT flows, campaigns, reports, analytics, integrations, WABA settings, channel configurations, logs, or other customer data.
            </p>
          </div>

          <!-- 18. How to Submit a Deletion Request -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              18. How to Submit a Deletion Request
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              To request deletion of customer account data or service data, customers should contact:<br>
              Email: <a href="mailto:support@mehery.com" class="text-blue-600 hover:text-blue-800">support@mehery.com</a>
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              The request should (a) originate from a business user who is an ADMIN on the Mehery system, (b) should be sent from their official business email id and (c) should include, where applicable:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 text-base sm:text-lg pl-6">
              <li v-for="(item, i) in submissionPoints" :key="i">{{ item }}</li>
            </ul>
            <p class="text-gray-600 text-base sm:text-lg">
              Mehery may ask for additional information to verify the request and protect against unauthorized deletion.
            </p>
          </div>

          <!-- 19. Effect of Deletion -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              19. Effect of Deletion
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">Upon deletion:</p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 text-base sm:text-lg pl-6">
              <li v-for="(item, i) in effectPoints" :key="i">{{ item }}</li>
            </ul>
          </div>

          <!-- 20. Changes to This Policy -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              20. Changes to This Policy
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              Mehery may update this Data Deletion Policy from time to time to reflect changes in law, technology, platform requirements, WhatsApp or Meta policies, service features, operational practices, or business requirements.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              The updated Policy will be posted on Mehery's website, documentation, or otherwise made available to customers. Changes are effective when posted, unless a different effective date is stated.
            </p>
          </div>

        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '../components/common/Navbar.vue';
import Footer from '../components/common/Footer.vue';

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const coveredDataPoints = ref([
  'customer account, company, subscription, and billing information;',
  'authorized user details, roles, permissions, login activity, and support records;',
  'WhatsApp Business Account, phone number, WABA onboarding, channel, and number-porting information;',
  'Social Media Messenger configuration data, including WhatsApp, Telegram, Facebook Messenger, Instagram, Twitter/X DM, web chat, and other supported channels;',
  'contacts, end-customer profiles, audience lists, tags, attributes, segmentation data, and opt-in or opt-out records;',
  'conversations, messages, message metadata, delivery reports, read receipts, interaction history, and communication records;',
  'campaigns, BOT flows, Agent Communicator records, automations, journeys, templates, and workflow configuration data;',
  'media, documents, attachments, template assets, and other content uploaded to or exchanged through the Service;',
  'API keys, webhook URLs, integration credentials, connector settings, callback configurations, and sync logs;',
  'diagnostic logs, audit logs, usage records, analytics, reports, error logs, security logs, and platform activity data.'
]);

const retainedDataPoints = ref([
  'comply with applicable laws, regulations, court orders, government requests, or regulatory obligations;',
  'comply with WhatsApp, Meta, telecom, payment, tax, cloud, or platform requirements;',
  'resolve disputes, collect amounts due, process refunds, or enforce agreements;',
  'maintain billing, tax, accounting, audit, and financial records;',
  'investigate fraud, spam, abuse, unauthorized access, security incidents, policy violations, or possible wrongdoing in connection with the Service;',
  'protect and defend the rights, property, safety, and security of Mehery, customers, users, end customers, partners, or the public;',
  'establish, exercise, or defend legal claims;',
  'preserve evidence where deletion is restricted by legal hold, investigation, or dispute;'
]);

const submissionPoints = ref([
  'customer or company name;',
  'registered account email address;',
  'workspace, organization, application, or account identifier;',
  'WhatsApp Business Account ID, phone number, or channel details;',
  'request for deletion of all data pertaining to the business, upon termination and, if relevant;',
  'proof of authority to act on behalf of the customer.'
]);

const effectPoints = ref([
  'access to the deleted account, application, workspace, channel, integration, or data may permanently cease;',
  'configurations, credentials, contacts, conversations, templates, media, reports, campaigns, BOT flows, WABA settings, webhooks, and related data may be permanently removed from active systems;',
  'reactivation may not be possible after the applicable retention period;',
  'the customer may need to complete onboarding, WABA registration, number-porting, integration setup, or channel configuration again to resume the Service;',
  'deletion may not affect data already exported, delivered, transmitted, backed up, aggregated, anonymized, or retained by customers, recipients, platforms, telecom operators, or third parties.'
]);
</script>