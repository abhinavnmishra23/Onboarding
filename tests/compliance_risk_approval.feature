Feature: Compliance screening, risk assessment, and final approval
  As a compliance reviewer, risk reviewer, and approver
  I want final decisions to follow policy, risk, and approval rules
  So that only valid, authorized, and fully reviewed cases proceed

  Background:
    Given the case has passed the required pre-checks for the current stage
    And the applicable business rules, thresholds, and approval matrix are configured

  Scenario: Screening with no match results in a clear status
    Given configured customer identifiers are available for screening
    When the compliance screening service runs
    Then the result should be captured as clear or no match
    And no alert should be generated below threshold

  Scenario: Possible PEP or sanctions result generates a compliance alert
    Given a watchlist match is found with a confidence above threshold
    When the compliance logic evaluates the match
    Then an alert should be created with alert severity, match fields, and case reference
    And the case should remain blocked from automatic progression

  Scenario: False positive closure requires reason and authorization
    Given an alert is classified as a false positive
    When the authorized compliance user closes the alert
    Then a valid reason and supporting comments should be required
    And the closure should be written to the audit history

  Scenario: Confirmed adverse match follows policy-controlled outcome
    Given a sanctions, PEP, or adverse match is confirmed
    When the compliance decision is recorded
    Then the configured policy outcome should be triggered
    And approval should be blocked until the adverse match is addressed

  Scenario: Risk scoring calculates score and assigns risk band
    Given active risk rules and customer attributes are available
    When risk scoring is executed
    Then a numeric risk score should be calculated
    And a risk band such as low, medium, or high should be assigned
    And the factor-level traceability should be visible to the reviewer

  Scenario: Mandatory high-risk overrides are applied correctly
    Given a mandatory high-risk trigger exists
    When the risk classification is calculated
    Then the configured override should be applied
    And the final risk band should reflect the override

  Scenario: Maker-checker control blocks same-user approval
    Given a medium or high-risk case requires checker approval
    And the maker has completed the review
    When the checker is assigned
    Then the maker and checker must be different authorized users
    And the same user should not be able to approve their own work

  Scenario: Final approval is blocked until all prerequisites are complete
    Given any mandatory prerequisite is incomplete or failed
    When the approver attempts to submit the final decision
    Then the approval action should be disabled
    And the pending prerequisites should be clearly displayed

  Scenario: Authorized approver can approve only when permitted by the approval matrix
    Given the user is valid and assigned the approver role
    And the case meets all prerequisite checks
    When the approver submits the final approval
    Then the approval should be recorded
    And the approver identity, timestamp, reason, and supporting notes should be stored

  Scenario: Unauthorized final approval attempt is blocked
    Given a user does not have the required approval authority
    When the user attempts to approve or reject the case
    Then the action should be blocked
    And the attempt should be visible in the audit trail

  Scenario: Approval rejection closes the case without downstream trigger
    Given an approver rejects the case for policy, risk, or compliance reasons
    When the rejection decision is submitted
    Then the case should close with Approval Rejection status
    And the downstream customer creation or onboarding handoff should not be triggered

  Scenario: Downstream trigger occurs only after successful approval
    Given the case is approved successfully
    When the approval is finalized
    Then the downstream customer creation or account-opening handoff should be triggered
    And integration success, failure, retry, or exception details should be logged

  Scenario: Status history records each workflow transition
    Given a stage transition occurs for the case
    When the transition is completed
    Then a status history entry should be created with previous stage, new stage, event, user, timestamp, and reason
    And standard users should not be able to delete the chronology

  Scenario: Required notifications are sent for work items and exceptions
    Given a case is assigned, reworked, approved, rejected, or has an exception
    When the notification rules are evaluated
    Then the configured recipient should receive a message including the case reference, stage, required action, and due date
    And notification delivery failures should be logged for retry or review
