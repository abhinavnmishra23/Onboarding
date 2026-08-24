Feature: Data capture and due diligence
  As an onboarding user and KYC reviewer
  I want the system to validate customer data and review evidence
  So that only valid, complete, and reviewable cases progress through due diligence

  Background:
    Given a valid eKYC case exists
    And the case is in the data capture or due diligence stage

  Scenario: Valid customer profile is accepted
    Given all required personal, contact, identity, address, occupation, and financial fields are completed
    And the profile data matches the configured validation rules
    When the user saves the profile information
    Then the data should be stored against the correct case reference
    And no validation errors should be displayed

  Scenario: Missing mandatory fields are rejected
    Given one or more mandatory customer profile fields are blank
    When the user attempts to save or submit the profile
    Then the system should display validation errors
    And the case should not progress to the next stage

  Scenario: Invalid email or mobile formats are rejected
    Given an invalid email address or mobile number is entered
    When the user saves or submits the profile
    Then the system should flag the invalid field
    And the user should be prompted to correct the value

  Scenario: Valid identity document details are accepted
    Given a document type is selected and valid document number, issue date, expiry date, and issuing authority are entered
    When the user saves the document details
    Then the document should be accepted
    And the case should retain the document metadata

  Scenario: Expired or invalid document dates are blocked
    Given a document has expired or has an invalid date range
    When the user submits the document details
    Then the system should flag the invalid document
    And the case should not proceed until the dates are corrected

  Scenario: Valid document upload is linked to the case
    Given a compliant PDF or JPG file is uploaded for identity or address proof
    When the upload completes successfully
    Then the file should be stored securely
    And the document should be linked to the correct customer and case

  Scenario: Unsupported or oversized document upload is rejected
    Given an unsupported file type or an oversized file is uploaded
    When the upload is attempted
    Then the upload should fail
    And the user should see a clear file type or size validation message

  Scenario: Pre-submission validation prevents incomplete case progression
    Given required data or required documents are missing
    When the user submits the case for due diligence
    Then submission should be blocked
    And the user should see the list of missing or invalid items

  Scenario: Duplicate identity is flagged for controlled handling
    Given a duplicate or potential duplicate identity record is detected
    When the case undergoes validation
    Then the case should be flagged for manual review
    And it should not be silently approved

  Scenario: Due diligence identifies mismatches and records reviewer actions
    Given submitted customer data and uploaded proofs are available for verification
    When the reviewer runs due diligence checks
    Then any exact or partial mismatch should be identified
    And each field should be marked passed, failed, or pending

  Scenario: Reviewer can route a case for rework with reason
    Given a reviewer identifies missing or inconsistent data
    When the reviewer selects rework routing
    Then the rework reason, required action, and responsible user or queue should be mandatory
    And the case status should change to Rework Request

  Scenario: KYC rejection requires reason and preserves audit evidence
    Given the reviewer determines that identity cannot be established or required evidence is invalid
    When the case is rejected from due diligence
    Then a rejection reason should be mandatory
    And reviewer identity, timestamp, comments, and evidence references should be stored
    And the case should be closed as KYC Rejected
