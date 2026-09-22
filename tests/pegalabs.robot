*** Settings ***
Library    SeleniumLibrary
Resource    ../test_data/credentials.resource
Resource    ../resources/locators_elements.resource
Resource    ../resources/keywords_screen.resource

*** Variables ***
#${URL}    https://accenture70.pegalabs.io/prweb/app/default/beEBp4uRVTogorRwSwWqbOtn9IL2fwdI*/!STANDARD
#${USERNAME}    abhinav.n.mishra@accenture.com
#${PASSWORD}    rules@234


*** Test Cases ***

TC001_Login to Pega Work Portal and Start Client Onboarding Case
    [Documentation]    This test case logs into the Pega Work Portal and starts a Client Onboarding case.
    [Tags]             TC-001
    When Login to Pega Work Portal
    Then Start Case Creation
    And Start Client Onboarding Case
    Then Client Onboarding Popup Actions
    And Submit Selected Client Onboarding

TC002_E2E_HappyPath_Digital Onboarding
    [Documentation]    End-to-end happy path extracted from ClientOnboarding_TC001_HappyFlow.js using unique XPath locators from the recorded flow.
    [Tags]             TC-002    e2e    happy-path

    When Login to Pega Work Portal
    Then Start Case Creation
    And Start Client Onboarding Case
    Then Client Onboarding Popup Actions
    And Submit Selected Client Onboarding

    # Enter Profile Details
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}

    # Capture Document Details
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}

    # Upload Documents
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}

    # Record Discrepancy
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}

    # Route Rework Request
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${DECISION_REASON_INPUT}    15s
    Input Text    ${DECISION_REASON_INPUT}    All Okay
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}

    # Final approval decision
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${FINAL_APPROVAL_DECISION}    15s
    Select From List By Value    ${FINAL_APPROVAL_DECISION}    Approved
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}

    # Get approval / approve
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${APPROVE_ACTION_BUTTON}    15s
    Click Button    ${APPROVE_ACTION_BUTTON}

    # Review screening alerts and submit
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${SCREENING_ALERT_CHECKBOX_LABEL}    15s
    Click Element    ${SCREENING_ALERT_CHECKBOX_LABEL}
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}

    # Final approval completion
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${APPROVE_ACTION_BUTTON}    15s
    Click Button    ${APPROVE_ACTION_BUTTON}

    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Sleep    2s
    Scroll Element Into View    ${SUBMIT_ACTION_BUTTON}
    Sleep    2s
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}

    # Get Final Approval assigment #1
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${APPROVE_ACTION_BUTTON}    15s
    Click Button    ${APPROVE_ACTION_BUTTON}

    # Get Final Approval assigment #2
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${APPROVE_ACTION_BUTTON}    15s
    Sleep    2s
    Scroll Element Into View    ${APPROVE_ACTION_BUTTON}
    Sleep    2s
    Click Button    ${APPROVE_ACTION_BUTTON}
    Sleep    4s
    Capture Page Screenshot
    Close Browser

TC003_E2E_RejectFlow_BranchAssisted
    [Documentation]    End-to-end reject flow extracted from ClientOnboarding_TC003_RejectFlow.js.
    [Tags]             TC-003    e2e    reject-flow

    Login to Pega Work Portal
    Start Case Creation
    Start Client Onboarding Case
    Client Onboarding Reject Popup Actions
    Submit Selected Client Onboarding

    # Enter Profile Details
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${NATIONAL_ID_GOVERNMENT_ISSUED_CHECKBOX}    15s
    Click Element    ${NATIONAL_ID_GOVERNMENT_ISSUED_CHECKBOX}
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}

    # Capture Document Details
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}

    # Upload Documents
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}

    # Record Discrepancy
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${NATIONAL_ID_GOVERNMENT_ISSUED_CHECKBOX}    15s
    Click Element    ${NATIONAL_ID_GOVERNMENT_ISSUED_CHECKBOX}
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}

    # Route Rework Request
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${DECISION_REASON_INPUT}    15s
    Input Text    ${DECISION_REASON_INPUT}    Insufficient data
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}

    # Submit Reworked Case as rejected
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${FINAL_APPROVAL_DECISION}    15s
    Select From List By Value    ${FINAL_APPROVAL_DECISION}    Rejected
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}

    # Reject approval assignments
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${REJECT_ACTION_BUTTON}    15s
    Click Button    ${REJECT_ACTION_BUTTON}

    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${REJECT_ACTION_BUTTON}    15s
    Click Button    ${REJECT_ACTION_BUTTON}

    # Complete the final approval decision
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${FINAL_APPROVAL_DECISION}    15s
    Select From List By Value    ${FINAL_APPROVAL_DECISION}    Rejected
    Wait Until Element Is Visible    ${REJECT_ACTION_BUTTON}    15s
    Click Button    ${REJECT_ACTION_BUTTON}

    Wait Until Element Is Visible    ${APPROVE_ACTION_BUTTON}    15s
    Click Button    ${APPROVE_ACTION_BUTTON}
    Capture Page Screenshot
    Close Browser

TC004_E2E_RejectFlow_Digital
    [Documentation]    End-to-end reject flow extracted from ClientOnboarding_TC004_RejectFlow_1.
    [Tags]             TC-004    e2e    reject-flow

    When Login to Pega Work Portal
    Then Start Case Creation
    And Start Client Onboarding Case
    Then Client Onboarding Popup Actions
    And Submit Selected Client Onboarding

    # Enter Profile Details
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${PASSPORT_PRIMARY_IDENTITY_CHECKBOX_FIELD}    15s
    Click Element    ${PASSPORT_PRIMARY_IDENTITY_CHECKBOX_FIELD}
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}
    Sleep    2s

    # Capture Document Details
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}
    Sleep    2s

    # Upload Documents
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}
    Sleep    2s

    # Record Discrepancy
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${ADDRESS_INCONSISTENCY_CHECKBOX_FIELD}    15s
    Click Element    ${ADDRESS_INCONSISTENCY_CHECKBOX_FIELD}
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}
    Sleep    2s

    # Route Rework Request
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${DECISION_REASON_INPUT}    15s
    Input Text    ${DECISION_REASON_INPUT}    Invalid Data
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}
    Sleep    2s

    # Submit Reworked Case as rejected
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${FINAL_APPROVAL_DECISION}    15s
    Select From List By Value    ${FINAL_APPROVAL_DECISION}    Rejected
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    15s
    Click Button    ${SUBMIT_ACTION_BUTTON}
    Sleep    2s

    # Reject approval and complete the flow
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${REJECT_ACTION_BUTTON}    15s
    Click Button    ${REJECT_ACTION_BUTTON}
    Sleep    2s
    Wait Until Element Is Visible    ${ASSIGNMENT_ACTION}    15s
    Click Element    ${ASSIGNMENT_ACTION}
    Wait Until Element Is Visible    ${APPROVE_ACTION_BUTTON}    15s
    Click Button    ${APPROVE_ACTION_BUTTON}
    Sleep    2s
    Capture Page Screenshot
    Close Browser
