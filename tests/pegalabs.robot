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

#TC002_Recorded_Profile_And_Submit
#    [Documentation]    Stable test converted from Playwright recording — uses data-testid/aria-label and label[@for] to avoid index-based locators.
#    [Tags]    TC-002    stable
#    ${BROWSER}    Set Variable    Chrome
#    ${BASE_URL}   Set Variable    https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/client-onboardings/C-41009
#
#    Open Browser    ${BASE_URL}    ${BROWSER}
#    Maximize Browser Window
#    Set Selenium Implicit Wait    5s
#
#    # Click the primary action "Go" — prefer aria-label, fallback to visible text
#    Run Keyword And Ignore Error    Wait Until Element Is Visible    css=button[aria-label="Go - Enter Profile Details"]    5s
#    ${clicked_go}    Run Keyword And Return Status    Click Element    css=button[aria-label="Go - Enter Profile Details"]
#    Run Keyword If    not ${clicked_go}    Wait Until Element Is Visible    xpath=//button[normalize-space()="Go"]    10s
#    Run Keyword If    not ${clicked_go}    Click Element    xpath=//button[normalize-space()="Go"]
#
#    # Select the field using its label 'for' attribute (stable)
#    Wait Until Element Is Visible    xpath=//label[@for='_adhgpszfu']    10s
#    Click Element    xpath=//label[@for='_adhgpszfu']
#
#    Sleep    0.5s
#
#    # Click Submit — prefer data-testid, fallback to button text
#    Run Keyword And Ignore Error    Wait Until Element Is Visible    css=button[data-testid=":assignment-action-buttons:submit"]    5s
#    ${clicked_submit}    Run Keyword And Return Status    Click Element    css=button[data-testid=":assignment-action-buttons:submit"]
#    Run Keyword If    not ${clicked_submit}    Wait Until Element Is Visible    xpath=//button[normalize-space()="Submit"]    10s
#    Run Keyword If    not ${clicked_submit}    Click Element    xpath=//button[normalize-space()="Submit"]
#
#    # Post-submit: wait for a stable confirmation element/message — replace with app-specific selector if available
#    Run Keyword And Ignore Error    Wait Until Page Contains Element    css=[data-testid="submission-success"]    5s
#
#    Capture Page Screenshot
#    Close Browser

TC003_Create_Client_Onboarding_Complete_Flow
    [Documentation]    End-to-end flow converted from Playwright recording — reuses existing keywords; only inline steps added where no keyword exists.
    [Tags]    TC-003    stable

    Login to Pega Work Portal
    Start Case Creation
    Start Client Onboarding Case
    Then Client Onboarding Popup Actions
    And Submit Selected Client Onboarding

    # Open the created assignment using the "Go" action (try aria-label first, then visible text)
    Run Keyword And Ignore Error    Wait Until Element Is Visible    css=button[aria-label="Go - Enter Profile Details"]    5s
    ${clicked_go}    Run Keyword And Return Status    Click Element    css=button[aria-label="Go - Enter Profile Details"]
    Run Keyword If    not ${clicked_go}    Wait Until Element Is Visible    xpath=//button[normalize-space()="Go"]    10s
    Run Keyword If    not ${clicked_go}    Click Element    xpath=//button[normalize-space()="Go"]

    # Interact with the field using the stable label[@for] reference
    Wait Until Element Is Visible    xpath=//label[@for='_rbw3keuw0']    10s
    Click Element    xpath=//label[@for='_rbw3keuw0']
    Sleep    0.5s

    # Submit the form (prefer data-testid fallback to text)
    Run Keyword And Ignore Error    Wait Until Element Is Visible    css=button[data-testid=":assignment-action-buttons:submit"]    5s
    ${clicked_submit2}    Run Keyword And Return Status    Click Element    css=button[data-testid=":assignment-action-buttons:submit"]
    Run Keyword If    not ${clicked_submit2}    Wait Until Element Is Visible    xpath=//button[normalize-space()="Submit"]    10s
    Run Keyword If    not ${clicked_submit2}    Click Element    xpath=//button[normalize-space()="Submit"]

    Capture Page Screenshot
    Close Browser

TC004_Client_Onboarding_19Step_Flow
    [Documentation]    Converted from Playwright 19-step recording; uses existing keywords where available; stable locators variables referenced.
    [Tags]    TC-004    stable

    Login to Pega Work Portal
    Start Case Creation
    Start Client Onboarding Case
    Then Client Onboarding Popup Actions
    And Submit Selected Client Onboarding

    # After case creation, open assignment and progress through steps
    Wait Until Element Is Visible    ${GO_BUTTON_ARIA}    10s
    ${go_clicked}    Run Keyword And Return Status    Click Element    ${GO_BUTTON_ARIA}
    Run Keyword If    not ${go_clicked}    Click Element    ${GO_BUTTON}

    # Click the field using stable label
    Wait Until Element Is Visible    ${RBW3KEUW0_FIELD_LABEL}    10s
    Click Element    ${RBW3KEUW0_FIELD_LABEL}

    Sleep    0.5s

    # Click Next then Submit using stable action button variables
    Scroll Element Into View    ${SUBMIT_ACTION_BUTTON}
#    Wait Until Element Is Visible    ${NEXT_ACTION_BUTTON}    10s
#    Click Button    ${NEXT_ACTION_BUTTON}
    Wait Until Element Is Visible    ${SUBMIT_ACTION_BUTTON}    10s
    Click Button    ${SUBMIT_ACTION_BUTTON}

    Capture Page Screenshot
    Close Browser

TC005_E2E_HappyPath
    [Documentation]    End-to-end happy path extracted from ClientOnboarding_TC001_HappyFlow.js using unique XPath locators from the recorded flow.
    [Tags]    TC-005    e2e    happy-path

    Login to Pega Work Portal
    Start Case Creation
    Start Client Onboarding Case
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
    Capture Page Screenshot
    Close Browser

