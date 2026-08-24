Feature: eKYC case initiation and consent
  As an onboarding user
  I want to create and manage customer onboarding cases
  So that customers can progress through the KYC workflow with valid consent and case tracking

  Background:
    Given the eKYC onboarding workflow is configured
    And the customer is identified as an individual

  Scenario: Digital onboarding creates a new eKYC case
    Given a supported individual customer journey is selected
    And the user is authenticated as a valid onboarding user
    When the user initiates the case through the digital channel
    Then a new eKYC case should be created
    And the onboarding channel should be recorded as digital
    And a unique case reference should be generated

  Scenario: Assisted onboarding creates a new eKYC case
    Given a supported individual customer journey is selected
    And the user is authenticated as a branch user
    When the user initiates the case through the assisted onboarding channel
    Then a new eKYC case should be created
    And the onboarding channel should be recorded as assisted
    And a unique case reference should be generated

  Scenario: Corporate customer is blocked from initiation
    Given the selected customer type is corporate
    When the user attempts to initiate an eKYC case
    Then the initiation should be blocked
    And no eKYC case should be created

  Scenario: Initiation metadata is captured and protected
    Given a case has been successfully initiated
    When the system stores initiation metadata
    Then the onboarding channel, source, initiation timestamp, initiating user, and contact identifier should be saved
    And an unauthorized user should not be able to edit the metadata

  Scenario: Case reference is unique and remains stable
    Given two new cases are initiated concurrently
    When the case references are generated
    Then each reference should be unique
    And the references should remain unchanged throughout the case lifecycle

  Scenario: Reused reference is not assigned after rejection or cancellation
    Given an existing case was rejected or cancelled
    When a new case is created later
    Then the old case reference should not be reused
    And the new case should get a new unique reference

  Scenario: Consent is required before proceeding
    Given the customer has not accepted the latest consent terms
    When the user attempts to continue to the next stage
    Then the system should block progression
    And the user should be prompted to provide consent

  Scenario: Consent is accepted and recorded
    Given the customer accepts the latest consent terms
    When the case proceeds to data capture
    Then the consent version, channel, timestamp, and response should be stored
    And the audit trail should include the consent record

  Scenario: Partial case can be saved and resumed within expiry
    Given the user has entered partial customer data
    When the user saves the case before final submission
    Then the partially entered data should be retained
    And the user should be able to resume the case within the configured expiry window

  Scenario: Expired saved case cannot proceed without restart or refresh
    Given the saved case has expired according to policy
    When the user attempts to submit the expired case
    Then the submission should be blocked
    And the case should require restart or refresh before resuming
